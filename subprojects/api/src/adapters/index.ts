import { RegisterRoutes } from '../router/routes'
import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs';

const applyAdaptors = (app: express.Express) => {
    app.use('/swagger-ui', express.static(path.join(__dirname, '../../public')))
    app.use('/v1/swagger.json', (_: any, res: express.Response) => {
        const json = fs.readFileSync(path.join(__dirname, '../../swagger.json'), 'utf8')
        res.send(json)
    });
    app.use('/swagger', (_: any, res: express.Response) => {
        res.redirect('/swagger-ui?url=/v1/swagger.json')
    })
    RegisterRoutes(app)
}

export {
    applyAdaptors
}