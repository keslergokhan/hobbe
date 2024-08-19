import express,{Response,Request} from 'express';
import route from './moduls/routes'

const app = express();
const port = 3001;

app.use("/api",route);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});