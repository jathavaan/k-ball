export class CreateThreadCommand {
  constructor(
    public userId: number,
    public playerId: number,
    public title: string,
    public content: string,
  ) {}
}
