import express from 'express';
const app = express();
import bodyParser from 'body-parser';
app.use(bodyParser.json())

require('./app/routes/parcel.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// Create a Server
const server = app.listen(8081, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port)

})