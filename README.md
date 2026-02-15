# Mini Message Board

A simple message board built with Node.js, Express, and EJS.
Users can submit a message with their name, and all messages are displayed on the main page. The purpose is to sharpen skills of making express js app and working with db.

![preview](/public/image.png)

## Features

* Submit messages via a form
* Display all submitted messages
* Server-side rendering with EJS
* Static file serving for styles

## Tech Stack

* Node.js
* Express
* EJS (templating engine)
* PostgreSQL (pg library)

## Project Structure

```
Mini-Message-Board
├── package.json
├── package-lock.json
├── public
│   ├── image.png
│   └── styles.css
├── README.md
└── src
    ├── app.js
    ├── routes
    │   └── indexRoute.js
    └── views
        ├── form.ejs
        ├── index.ejs
        └── message.ejs
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/wrzdx/Mini-Message-Board.git
   cd Mini-Message-Board
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file (optional):

   ```
   PORT=8000
   ```

4. Start the server:

   ```
   node app.js
   ```

5. Open your browser:

   ```
   http://localhost:8000
   ```


---

This project is intended for learning purposes and demonstrates basic server-side rendering and form handling with Express.
