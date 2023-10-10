import supertest from "supertest";
import { app } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";

describe('POST /api/work/experience', () => {
    it('should can create sample', async () => {
        const result = await supertest(app)
        .post('/api/work/experience')
        .send({
            position: "zikriimoet",
            skill: "golang",
            workplace: "pt laboon",
            type_of_work: "Full Time",
            date_experience: "10-03-2023"
        })
        logger.info(result.body)

        expect(result.status).toBe(200)
    })
})