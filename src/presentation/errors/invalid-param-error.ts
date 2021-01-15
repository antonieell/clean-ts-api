export class InvalidParamError extends Error {
  constructor(invalidParm: string) {
    super(`Invalid param ${invalidParm}`)
    this.name = 'InvalidParamError'
  }
}
