export class EditThreadCommand {
  constructor(
    public threadId: number,
    public title: string,
    public content: string,
  ) {}
}
