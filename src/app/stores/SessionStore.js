import { EventEmitter } from "events";

class SessionStore extends EventEmitter {
  constructor() {
    super();

    this.username = undefined;
    this.userType = undefined;
  }

  getUsername() {
    return this.username;
  }

  getUserType() {
    return this.userType;
  }
}

export default new SessionStore();
