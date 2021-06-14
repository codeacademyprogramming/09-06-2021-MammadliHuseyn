import express from 'express';
import bodyParser from 'body-parser';
import { ROUTES } from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8080;
const uri =
    "mongodb+srv://huseynmle:testdb@cluster0.bzi9q.mongodb.net/PlayListManagementDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => { console.log(err) });
db.once('open', () => { console.log("connected to db") });

ROUTES.forEach(({ path, router }) => {
    app.use(path, router);
});

app.listen(port, () => { console.log(`server started on :${port}`) });