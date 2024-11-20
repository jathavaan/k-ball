export interface Validator<TRequest> {
  validate(request: TRequest): void;
}
