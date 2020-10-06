const express = require('express'); 
const filmsRouter = require('./routes/filmRouter');
const userRouter = require('./routes/userRouter');
const app = express();
const PORT = 3000;



app.use(express.json());
app.use('/films',filmsRouter);
app.use('/users',userRouter);

app.listen(PORT, () => console.log("Server is running..."));
