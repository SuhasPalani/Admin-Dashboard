# MERN Stack Admin Dashboard

This project is a full-stack admin dashboard application built using the MERN (MongoDB, Express, React, Node.js) stack. It features a comprehensive set of tools for data visualization, user management, and business analytics.

## Features

- **Dashboard**: Displays various statistics, line charts, transaction tables, and pie charts.
- **Products Page**: Lists products with details like rating, description, name, and category.
- **Customers Page**: Utilizes Material-UI Data Grid for efficient customer data management.
- **Transactions Page**: Implements server-side pagination for handling large datasets.
- **Geography Page**: Visualizes user locations using Nivo geography charts.
- **Sales Analytics**: Includes daily, monthly, and breakdown charts for sales and revenue analysis.
- **Admin Management**: Dedicated sections for admin and performance metrics.
- **Responsive Design**: Fully responsive layout with collapsible sidebar.
- **Dark/Light Mode**: Supports both dark and light themes.

## Tech Stack

- **Frontend**: React, Material-UI, Nivo Charts, Redux Toolkit
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **State Management**: Redux Toolkit, RTK Query
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. Clone the repository
2. Install dependencies for both client and server:
   ```
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables 
4. Start the server:
   ```
   cd server && npm run dev
   ```
5. Start the client:
   ```
   cd client && npm start
   ```

## Acknowledgements

This project was created following the tutorial by EdRoh. You can find the original video [here](https://www.youtube.com/watch?v=0cPCMIuDk2I).

