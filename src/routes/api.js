import express from "express"
import { createEdu } from "../controllers/educationController.js";
import { createSample } from "../controllers/sampleController.js";
import { createWorkExp } from "../controllers/workExpController.js";

const apiRouter = new express.Router();

apiRouter.post('/api/education', createEdu);

//sample
apiRouter.post('/api/sample', createSample);

//work experience
apiRouter.post('/api/work/experience', createWorkExp);

export {
    apiRouter
}