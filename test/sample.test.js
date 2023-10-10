import supertest from "supertest";
import { app } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";

describe('POST /api/sample', () => {
    it('should can create sample', async () => {
        const result = await supertest(app)
        .post('/api/sample')
        .send({
            username: "zikriimoet",
            city: "Yogyakarta"
        })
        logger.info(result.body)

        expect(result.status).toBe(200)
    })
})