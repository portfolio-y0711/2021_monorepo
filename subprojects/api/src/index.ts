import * as express from 'express'
import { IUser } from '@monorepo/types'

const app = express()

app.get('/healthcheck', (_: express.Request, res: express.Response) => {
    res.send({ "status" : "UP" })
})

app.get('/user', (_: express.Request, res: express.Response) => {
    const user : IUser = {
        id: 1,
        userId: 'sampleId',
        name: 'sampleName'
    }
    res.json(user)
})

app.listen(5000, () => {
    console.log('app is running at 5000')
})
