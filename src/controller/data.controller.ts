import { NextFunction, Request, Response } from "express";
import DataService from '../services/data.service';
import { getConstDataSet } from '../core/constants/data-set.coonstant';
// import { json2csv } from 'json2csv'

async function getProductsData(req: Request, res: Response, next: NextFunction) {
    try {

        const apiResponse = await DataService.fetchData(getConstDataSet);
        
        return apiResponse
        

        // const json = json2csv(jsonResponse);

        // console.log(json);
        
        

    } catch (error) {
        return next(error)
    }
}


export {
    getProductsData
}