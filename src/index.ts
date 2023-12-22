import express, { Express } from 'express';
import cors from "cors"
import helmet from "helmet"
import dotenv from 'dotenv';
import router from './router/router'

dotenv.config({path:__dirname+'/.env'});

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(helmet());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
    
    
});

export default app;