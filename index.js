var app = require('./lib/app');
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
