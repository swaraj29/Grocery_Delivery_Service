# GroceryApp

GroceryApp is a modern web application designed to streamline your grocery shopping experience. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this app provides features like shopping list management, recipe discovery, and deal tracking.

## Features

- **Shopping Lists**: Create and manage multiple shopping lists.
- **Expense Tracking**: Track your grocery expenses and stay within budget.
- **Recipe Discovery**: Find new recipes and add ingredients to your shopping list.
- **User Authentication**: Secure login and registration with JWT.
- **Responsive Design**: Accessible on all devices, thanks to TailwindCSS.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Screenshots


### Home Page
![Home Page](https://github.com/swaraj29/Grocery_Delivery_Service/blob/7bb3b061a33fcbe8eadacf59585fa5de302039af/screenshot/Screenshot%202024-05-22%20200311.png)


### Shopping List
![Shopping List](screenshots/shopping_list.png)

### Product List
![Product List](screenshots/expense_tracker.png)

### Releated Product List
![Releated Product List](screenshots/expense_tracker.png)

### Authentication
![Recipe Discovery](screenshots/recipe_discovery.png)

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
    npm start
    ```

    **Frontend**:
    ```sh
    cd client
    npm start
    ```

## Usage

1. **Create a Shopping List**
    - Navigate to the "Shopping Lists" section.
    - Click "New List" to create a new shopping list.
    - Add items to your list using the form or barcode scanner.

2. **Track Expenses**
    - Go to the "Expense Tracker" section.
    - Add your expenses to keep track of your grocery spending.
    - View expense reports to manage your budget.

3. **Discover Recipes**
    - Visit the "Recipes" section.
    - Browse or search for recipes.
    - Add recipe ingredients directly to your shopping list.

4. **Find Deals**
    - Check the "Deals" section for the latest discounts and offers.
    - Filter deals by store or category.

## Contributing

We welcome contributions from the community! Here’s how you can help:

1. **Report Bugs**: If you find a bug, please open an issue on our GitHub repository.
2. **Suggest Features**: Have an idea for a new feature? Let us know by opening an issue.
3. **Submit Pull Requests**: Fork the repository and submit pull requests with your enhancements.

## License

GroceryApp is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For support or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using GroceryApp! We hope it makes your grocery shopping easier and more enjoyable. Happy shopping!
