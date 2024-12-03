export class ThreadVm {
  constructor(
    public id: number,
    public userId: number,
    public email: string,
    public title: string,
    public content: string,
    public commentsCount: number,
    public timestamp: Date,
  ) {}
}

export class ThreadCommentVm {
  constructor(
    public id: number,
    public userId: number,
    public email: string,
    public content: string,
    public timestamp: Date,
  ) {}
}
