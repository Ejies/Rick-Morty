import express,{urlencoded, json} from 'express';
import routes from './router/routers';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './doc/swagger.json'



//calling an instance of express
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/keys').mongoURI;

app.use(urlencoded( {extended : false}));
app.use(json());

//documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to mongoDB
 mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send({ message: 'Server is working' }));

//handle routes
app.use('/api/v1', routes);


app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;