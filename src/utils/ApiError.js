class ApiError extends Error {
  constructor(
    statausCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.message = message;
    this.data = null;
    this.success = false;
    this.statausCode = statausCode;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
