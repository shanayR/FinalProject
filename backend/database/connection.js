import mongoose from 'mongoose';

//Connection with mongo with Mongoose.
const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })   
      .then(() => console.log("Database connected!"))
      .catch(err => console.log(err));
  }


  export { dbConnection };