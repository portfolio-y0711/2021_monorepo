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
import { applyAdaptors } from './adapters'
import router from './router'

const app = express()

applyAdaptors(app)

app.use('/', router)

export default app
