class ApiResponse {
  constructor(statausCode, data, message = "Success") {
    this.statausCode = statausCode;
    this.data = data;
    this.message = message;
    this.success = statausCode < 400;
  }
}
export { ApiResponse };
