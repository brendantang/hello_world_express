// CommonJS module syntax that says:
// "Look in `node_modules` for a package called 'express'
// and assign its top-level export (in this case a function
// called `express`) to the constant `express`."
const express = require('express')

// Call that `express` function and assign the result to the constant `app`
const app = express()

// Handler function that takes a request object and a response object
// and responds with "Hello world"
const indexHandler = function(request, response) {
  response.send("Hello, world!")
}

// Register indexHandler to path '/'
app.get('/', indexHandler)

// Listen for requests on port 3000 and respond with any handler functions matching the request path.
app.listen(3000, function() {
  console.log("Listening at http://localhost:3000")
})
