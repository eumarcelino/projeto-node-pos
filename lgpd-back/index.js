import { express } from "express";
import {pkg} from "body-parser";
import { router } from "./routes/router.js";

import Sequelize from "./utils/database.js";
import associations from "./models/Associations.js";

import cors from "cors";

const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());

(async () => {
    try {
        associations.associations();
        await Sequelize.sync();
        app.listen(3000, function () {
            console.log("Servidor iniciado na porta 3000");
        });

    } catch (error) {
        console.log(error);
    }
})();

app.listen (3000,function (){
    console.log("Servidor iniciado na porta 3000");
})

app.use("/", router);