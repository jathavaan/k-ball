export class ThreadVm {
  constructor(
    public id: number,
    public user: string,
    public title: string,
    public content: string,
    public timestamp: Date,
    public comments: ThreadCommentVm[],
  ) {}
}

export class ThreadCommentVm {
  constructor(
    public id: number,
    public user: string,
    public content: string,
    public timestamp: Date,
  ) {}
}
