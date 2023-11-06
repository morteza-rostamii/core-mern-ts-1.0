import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import routes
import userRoutes from './modules/users/user.route.js'

// .env
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// cors
app.use(cors({
  origin: true,
}));

// parse json
app.use(express.json());

// register routes
app.use('/users', userRoutes);

// catch all route
app.use('*', (req, res) => {
  return res.status(200).json({
    msg: "404!"
  });
});

app.listen(PORT, () => {
  console.log(`node running on port${PORT}`);
});

console.log('-------------------------hellow')