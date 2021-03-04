import * as express from 'express'
import { Router } from 'express'
import { IUser } from '@monorepo/types';

const router = Router()

router.get('/healthcheck', (_: express.Request, res: express.Response) => {
    res.send({ "status" : "UP" })
})

router.get('/v1/user', (_: express.Request, res: express.Response) => {
    const user : IUser = {
        id: 1,
        userId: 'sampleId',
        name: 'sampleName'
    }
    res.json(user)
})

export default router