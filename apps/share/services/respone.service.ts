export class ResponseService {
  protected ResponseServiceSuccess(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }
}
