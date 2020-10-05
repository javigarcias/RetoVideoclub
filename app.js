const express = require('express'); 
const filmsRouter = require('./routes/filmRouter');
const app = express();
const PORT = 3000;


app.listen(PORT, () => console.log("Server is running..."));

app.use(express.json());
app.use('/films',filmsRouter);

