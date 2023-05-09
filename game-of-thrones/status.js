export class Status {
  status;
  constructor(status) {
    this.status = status;
    status.alive = true;
    status.dead = false;
  }
}
