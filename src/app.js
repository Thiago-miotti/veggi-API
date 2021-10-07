const express = require("express");
const app = express();

// Routes
const UserRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MIDDLEWARE
app.use('/api/v1/user', UserRoutes);


app.listen(4000, () => {
    console.log(`Server up ! Listening on : ${4000}`)
})