# GroceryApp

GroceryApp is a modern web application designed to streamline your grocery shopping experience. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this app provides features like shopping list management, recipe discovery, and deal tracking.

## Features

- **Shopping Lists**: Create and manage multiple shopping lists.
- **Expense Tracking**: Track your grocery expenses and stay within budget.
- **Recipe Discovery**: Find new recipes and add ingredients to your shopping list.
- **User Authentication**: Secure login and registration with JWT.
- **Responsive Design**: Accessible on all devices, thanks to TailwindCSS.

  ## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Tailwind CSS
- JWT (JSON Web Tokens)


## Screenshots

### Home Page
![Home Page](https://github.com/swaraj29/Grocery_Delivery_Service/raw/main/screenshot/Screenshot%202024-05-22%20200311.png)

### Shopping List
![Shopping List](https://github.com/swaraj29/Grocery_Delivery_Service/raw/main/screenshot/Screenshot%202024-05-22%20200514.png)

### Product List
![Product List](https://github.com/swaraj29/Grocery_Delivery_Service/raw/main/screenshot/Screenshot%202024-05-22%20200335.png)

### Related Product List
![Related Product List](https://github.com/swaraj29/Grocery_Delivery_Service/raw/main/screenshot/Screenshot%202024-05-22%20200411.png)

### Authentication
![Authentication](https://github.com/swaraj29/Grocery_Delivery_Service/raw/main/screenshot/Screenshot%202024-05-22%20200635.png)

## Installation

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/groceryapp.git
    cd groceryapp
    ```

2. **Install Dependencies**
    ```sh
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Setup .env File**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    CLIENT_URL=http://localhost:3000
    ```

4. **Run the App**

    **Backend**:
    ```sh
    npm run start
    ```

    **Frontend**:
    ```sh
    cd client
    npm run start
    ```

## Usage

1. **Product Management**
    - Developed a comprehensive product catalog management system for easy item addition, modification, and removal.
    - Utilized MongoDB for efficient database management.
    - Implemented backend APIs using Express.js to handle CRUD operations for products.
    - Designed frontend interfaces with React.js for seamless user interaction.
    - Enabled server-side scripting with Node.js to manage product data.

2. **Shopping Cart and Checkout Process**
    - Optimized the shopping cart and checkout process to ensure a seamless user experience.
    - Implemented features such as adding/removing items from the cart, updating quantities, and calculating totals.
    - Integrated secure payment gateways for smooth transactions.

3. **Responsive Design**
    - Ensured website responsiveness across all devices, including desktops, laptops, tablets, and smartphones.
    - Utilized responsive design techniques with CSS and media queries.
    - Tested the website on various screen sizes and resolutions to guarantee compatibility.

4. **User Authentication and Authorization**
    - Implemented user authentication and authorization functionalities using JWT (JSON Web Tokens).
    - Secured routes and endpoints to restrict access based on user roles.
    - Provided features like user registration, login, and logout.

5. **Search and Filtering**
    - Implemented search and filtering functionalities to help users find products easily.
    - Integrated search bars and filters based on categories, brands, prices, etc.
    - Utilized MongoDB queries and indexing for efficient search operations.

## Contact

For support or inquiries, please contact [028swarajkumar@gmail.com](mailto:028swarajkumar@gmail.com).
