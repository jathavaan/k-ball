export class CreateThreadCommentCommand {
  constructor(
    public threadId: number,
    public userId: number,
    public content: string,
  ) {}
}
