import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: badRequest(new MissingParamError('name')),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: badRequest(new MissingParamError('email')),
      }
    }
  }
}
