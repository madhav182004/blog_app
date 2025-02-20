# Blog App 📝

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application that enables users to manage their personal blogs. The app includes features like authentication, secure login, and a seamless user interface for creating, viewing, and managing blog posts.

## Features 🌟

- **User Authentication**: Secure login and registration using JWT.  
- **Blog Management**: Create, read, and manage blog posts.  
- **Responsive Design**: Optimized for all devices.  
- **Backend Integration**: Powered by Express.js and MongoDB for a robust and scalable backend.  
- **Error Handling**: Graceful error messages for a seamless experience.  

---

## Tech Stack 💻

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  

---

## Installation ⚙️

### Prerequisites:
- Node.js (v16.x or later)
- MongoDB (Ensure MongoDB is running locally or provide a connection string)

### Steps:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/madhav182004/blog_app.git
   cd blog_app
   ```

2. **Install dependencies**  
   Navigate to the root and client folders to install dependencies:  
   ```bash
   # In the root folder
   npm install

   # In the client folder
   cd client
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add the following variables:  
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the application**  
   ```bash
   # Run backend server
   npm run server

   # Run frontend development server
   cd client
   npm start
   ```

5. **Access the application**  
   Open your browser and navigate to `http://localhost:3000`.

---

## Future Enhancements 🚀

- Implement **rich text editor** for enhanced blog creation.  
- Enable **social sharing** features.  
- Add **dark mode** for better UX.  

---
