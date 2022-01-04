const {app} = require('./config')

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}.`);
});