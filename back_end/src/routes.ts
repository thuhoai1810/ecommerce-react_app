import {Express,Request,Response, NextFunction} from "express";
import getProductHandler from "./controllers/product.controller";
function  routes (app: Express){
    app.get(
        "/api/books/:bookId/:authorId",
        getProductHandler
    );
}

export  default  routes;