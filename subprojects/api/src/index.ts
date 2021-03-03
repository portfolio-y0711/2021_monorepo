/**
 * @packageDocumentation
 *
 *  🐙 모노리포 프로젝트의 UI 개발에 사용할 REST api 서버 코드를 포함하는 패키지입니다.  
 *
 * @remarks
 * UI 개발에 필요한 데이터를 제공하는 것이 주 목적이므로 인증, 에러처리 등과 같은 기능은 포함하지 않습니다. 
 *
 * @packageDocumentation
 */

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
