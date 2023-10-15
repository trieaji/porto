import express from "express"
import { createEdu, updateEdu } from "../controllers/educationController.js";
import { createSample } from "../controllers/sampleController.js";
import { createWorkExp, updateDbWorkExp } from "../controllers/workExpController.js";

const apiRouter = new express.Router();

//education
apiRouter.post('/api/education', createEdu);
apiRouter.patch('/api/education/:id', updateEdu)

//sample
apiRouter.post('/api/sample', createSample);

//work experience
apiRouter.post('/api/work/experience', createWorkExp);
apiRouter.patch('/api/work/experience/:id', updateDbWorkExp)

export {
    apiRouter
}