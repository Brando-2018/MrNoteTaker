const express = require('express');
const app = express();
const api = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes");

const PORT= process.env.PORT || 3001;

app.use(express.json());
app.use('/api', api);
app.use('/', html);

app.use(express.static("public"));








app.listen(PORT, ()=>
console.log (`listening on ${PORT}`)
);