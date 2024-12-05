export class EditThreadCommentCommand {
  constructor(
    public threadCommentId: number,
    public content: string,
  ) {}
}
