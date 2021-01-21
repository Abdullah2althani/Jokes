const express = require('express');
const app = express()
const port = 8000
const cors = require('cors');

require("./config/mongoose.config");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// immediately invoked function execution
require("./routes/jokes.routes")(app)

app.listen(port,() => console.log(`connection on port ${port} for REquest to REsponse to.`))