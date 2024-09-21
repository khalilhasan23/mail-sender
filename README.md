# MERN Email Sending App

This is a web application built with the MERN stack (MongoDB, Express, React, and Node.js) that allows users to register, log in, and send emails using their Gmail account. Upon registration, users must provide their Gmail email address and Gmail App Password. Once logged in, users can send emails using their Gmail account.

## Features

- **User Registration & Login**: Users can register by providing a Gmail email, a Gmail App Password, and a password for the app. After registration, users can log in using their credentials.
- **Send Emails**: Once logged in, users can send emails using their Gmail account.
- **Token-based Authentication**: JSON Web Tokens (JWT) are used to securely authenticate users.
- **Validation**: AJV (Another JSON Schema Validator) is used for input validation, ensuring data integrity.
- **Docker Support**: The app is containerized using Docker for easy setup and deployment.
- **TypeScript Support**: The backend is built using TypeScript for better type safety and code maintainability.

## Screenshots

![Pages](https://github.com/khalilhasan23/mail-sender/blob/main/Screenshots/Screenshots.PNG)



## Tech Stack

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **AJV**: JSON Schema Validator used for validating user input.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **TypeScript**: Type-safe JavaScript superset for better developer experience.
- **Gmail SMTP**: Users authenticate using Gmail App Passwords, and the app sends emails via Gmail SMTP servers.

### Frontend:
- **Next.js**: React framework for building the user interface, including registration, login, and sending email.
- **React**: Library for building interactive user interfaces.
  
### Environment:
- **dotenv**: For managing environment variables securely.
- **Docker**: Containerization tool for running the application in isolated environments.

## Prerequisites

To run this application locally, ensure you have the following:

- **Node.js**: v20 or higher.
- **MongoDB**: Installed locally or a cloud-based MongoDB instance (e.g., MongoDB Atlas).
- **Docker**: Installed if you want to use the Docker setup.
- **Gmail App Password**: Each user needs to generate a Gmail App Password to send emails via their Gmail account.

## Environment Variables

Create a `.env` file in the backend of the project and add the following environment variables:

```bash
# General
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

```

## Getting Started

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/khalilhasan23/mail-sender.git

   ```

2. **Install dependencies**:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Run MongoDB**:
   Make sure MongoDB is running locally or provide a connection string to a MongoDB instance.


4. **Build and run the Docker containers**:
   ```bash
   docker-compose up --build
   ```

3. Visit `http://localhost:3000` to access the application.

## Usage

1. **Register**:
   - Go to the registration page.
   - Enter your Gmail email, Gmail App Password, and create a password for the app.
   
2. **Login**:
   - Go to the login page and enter your email and password.
   - A JWT token is generated upon successful login, which will be used for authentication in subsequent requests.

3. **Send Email**:
   - After logging in, use the form to send an email by providing the recipient’s email, subject, and body.

## Gmail App Password

In order to send emails using Gmail, users need to create a Gmail App Password.

Follow these steps to create an App Password:
1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Scroll down to "Signing in to Google" and make sure 2-Step Verification is enabled.
3. Once enabled, click on "App passwords".
4. Select the app (Mail) and device (your custom name), then click "Generate".
5. Use the generated App Password in the registration process.

## Validation

User inputs are validated using **AJV**. Invalid data will result in validation errors, ensuring the app operates with correct and secure data.

## JWT Authentication

- **Login**: After login, a JWT is created and stored in the frontend.
- **Protected Routes**: Users must have a valid token to access routes for sending emails.


### Stop the Containers

```bash
docker-compose down
```
