const express = require('express'); 
const filmsRouter = require('./routes/filmRouter');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');
const auth = require('./middleware/auth');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', auth, (req, res) => res.send(req.user));

app.use(express.json());
app.use('/films',filmsRouter);
app.use('/users',userRouter);
app.use('/orders', auth , orderRouter);



app.listen(PORT, () => console.log("Server is running in port: ", PORT));
