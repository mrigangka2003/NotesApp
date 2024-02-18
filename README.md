

---

# Notes App

This is a simple notes app where users can log in and create, read, update, and delete their notes. The app is built using Express.js, Node.js, MongoDB, and EJS.

## Features

- ✨ **User Authentication**: Users can sign up for an account or log in with existing credentials, including Google authentication.
- 📝 **CRUD Operations**: Users can create, read, update, and delete their notes.
- 🛡️ **Session Management**: User sessions are managed using session middleware.
- 🗄️ **Database Integration**: MongoDB is used as the database to store user information and notes.
- 🖥️ **Frontend Rendering**: EJS templates are used for server-side rendering of views.

## Technologies Used

- 🚀 **Express.js**: A minimalist web framework for Node.js used for handling HTTP requests, routing, and middleware.
- 📦 **Node.js**: A JavaScript runtime environment used for server-side development.
- 🏦 **MongoDB**: A NoSQL database used for storing user information and notes.
- 🌐 **EJS (Embedded JavaScript)**: A templating engine used for server-side rendering of views.
- 🔐 **bcrypt**: A library used for hashing user passwords for security.
- 🔑 **Express-session**: A session middleware for Express used for managing user sessions.
- 🍃 **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js used for schema-based modeling of application data.
- 🔑 **Google Authentication**: Integrated Google authentication for users' convenience and security.

## Getting Started

To run this application on your local machine, follow these steps:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/mrigangka2003/NotesApp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd NotesApp
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your MongoDB database:**

   - Create a MongoDB database and note down the connection URI.
   - Create a `.env` file in the project root and add the following environment variables:

     ```dotenv
     MONGODB_URI=<your_mongodb_connection_uri>
     SESSION_SECRET=<your_session_secret>
     GOOGLE_CLIENT_ID=<your_google_client_id>
     GOOGLE_CLIENT_SECRET=<your_google_client_secret>
     ```

5. **Start the server:**

   ```bash
   npm start
   ```

6. **Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.**

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix:**

   ```bash
   git checkout -b feature/my-feature
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to your branch:**

   ```bash
   git push origin feature/my-feature
   ```

5. **Create a pull request.**

## License

This project is licensed under the [MIT License](LICENSE).

---
