import express, { Request, Response, NextFunction } from "express";
import Router from './router/router';

const app: express.Application = express();

app.set('port', process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/', Router);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('404 Not Found');
})

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
})