import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import DaftarRoute from "./routes/DaftarRoute.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'));

app.use(DaftarRoute);
app.listen(8000, ()=> console.log('Server Up and Running... 8000'));

app.use(DaftarRoute);
app.listen(4000, ()=> console.log('Server Up and Running... 4000'));
