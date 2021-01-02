export class DatabaseConnectionError extends Error {
  reason = 'Error conecting to database';

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
