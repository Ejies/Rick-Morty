import express,{urlencoded, json} from 'express';
import routes from './router/routers';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './doc/swagger.json';


//calling an instance of express
const app = express();
const PORT = process.env.PORT || 4000;

app.use(urlencoded( {extended : false}));
app.use(json());

//documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send({message: 'Server is working' }));

//handle routes
app.use('/api/v1', routes);

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;
