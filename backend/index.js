const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const port = process.env.PORT || 8080;

// MongoDB connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Define user schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// Create user model
const userModel = mongoose.model("user", userSchema);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, image } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      res.status(400).send({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        image: image,
      });
      await newUser.save();
      res.status(201).send({ message: "Successfully signed up",alert : true });
    }
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send({ message: "Error signing up" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    console.log(user)
    if (user) {
      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Error logging in", alert: false });
  }
});


const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product",schemaProduct)



// API endpoint to upload a product
app.post('/uploadProduct', async (req, res) => {
  try {
    console.log(req.body)
    const { name, category, image, price, description } = req.body;
    const product = new productModel({
      name,
      category,
      image,
      price,
      description,
    });
    const savedProduct = await product.save();
    res.send({ message: ' uploaded successfully', data: savedProduct });
  } catch (error) {
    console.error('Error while uploading product:', error);
    res.status(500).send({ message: 'Failed to upload product' });
  }
});

// getting the product from database

app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
