import { Controller, Route, Get, Tags, Example } from 'tsoa';

@Route('actuator')
@Tags('Actuator Controller')
export class HealthcheckController extends Controller {
    @Get("health")
    @Example<{ status: string }>({
        status: "UP"
    })
    healthcheck(): any {
        return { "status" : "UP" }
    } 
}
