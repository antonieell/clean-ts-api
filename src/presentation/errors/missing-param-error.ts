export class MissingParamError extends Error {
  constructor (MissingParam: string) {
    super(`Missing param ${MissingParam}`)
    this.name = 'MissingParamError'
  }
}
