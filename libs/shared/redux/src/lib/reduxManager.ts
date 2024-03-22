export class ReduxManager {
  static instance: ReduxManager;
  counter = 0;
  constructor() {
    if (typeof ReduxManager.instance === 'object') {
      return ReduxManager.instance;
    }
    // this.counter = 0;
    ReduxManager.instance = this;
    return this;
  }

  getCounter() {
    return this.counter;
  }
  incrementCounter() {
    this.counter++;
  }
  decrementCounter() {
    this.counter--;
  }
}
