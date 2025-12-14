# Full‑Stack Stock Trading Application

## Description

A full‑stack stock trading web application that allows users to register, authenticate, track stocks, place simulated buy/sell orders, and manage their portfolio through an interactive dashboard. The system is built using the MERN stack with a scalable backend and responsive frontend.

## Key Features

* User authentication (Login / Signup)
* Secure JWT‑based authorization
* Stock watchlist management
* Buy & Sell stock simulation
* Portfolio & holdings tracking
* Order history (Buy / Sell)
* Interactive dashboard
* Real‑time UI updates

## Tech Stack

**Frontend**

* React.js
* JavaScript
* HTML5, CSS3
* Bootstrap 

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Authentication**

* JSON Web Token (JWT)





## Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Project Structure

```text
project-root/
│
├── backend/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── model/
│   ├── Routes/
│   ├── schemas/
│   ├── util/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
└── README.md

## Usage

* Register or login as a user
* Browse available stocks
* Place buy or sell orders
* Track portfolio performance



## Future Enhancements

* Real‑time stock price integration (API)
* Advanced charts & analytics
* Admin panel
* Payment gateway integration
* Mobile responsiveness improvements

## Author

* Jeet Meghawale

