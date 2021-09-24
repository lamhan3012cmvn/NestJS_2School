export class ApiBaseResponse {
  constructor(statusCode: number, message: string = null, success = false) {
    this.StatusCode = statusCode;
    this.Message = message ?? this.GetDefaultMessageForStatusCode(statusCode);
    this.Success = success;
  }

  public StatusCode: number;
  public Message: string;
  public Success: boolean;
  private GetDefaultMessageForStatusCode(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return 'A bad request, you have made';
      case 401:
        return 'Authorized, you are not';

      case 404:
        return 'Resource found, it was not';

      case 500:
        return 'Errors are the path to the dark side. Errors lead to anger. Anger leads to hate. Hate leads to career change';
      default:
        null;
    }
  }
}

export class Ok {
  constructor(message: string, data: any, statusCode = 200, success = true) {
    this.StatusCode = statusCode;
    this.Message = message;
    this.Success = success;
    this.Data = data;
  }

  public StatusCode: number;
  public Message: string;
  public Success: boolean;
  public Data: any;
}
