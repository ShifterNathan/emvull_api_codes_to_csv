import { Router } from 'express';
import * as DataController from '../controller/data.controller'

const router = Router({ mergeParams: true });

router.get('/api/get-products',  DataController.getProductsData);

export default router;