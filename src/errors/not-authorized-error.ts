import { CustomError } from './custom-error';

export class NotAuthrozidError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthrozidError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
