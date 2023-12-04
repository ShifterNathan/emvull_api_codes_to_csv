import express, { Express } from 'express';

const app: Express = express();

app.listen(process.env.PORT, () => {
    console.log('app running on port', process.env.PORT);
});