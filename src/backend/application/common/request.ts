export interface Request<TRequest, TResponse> {
  handle(request: TRequest): Promise<TResponse>;
}
