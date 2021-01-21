import io from "socket.io-client";

const host = "http://127.0.0.1";
const port = "4242";
const url = `${host}:${port}`;

export default class socketAPI {
  constructor() {
      this.socket = undefined;
      this.connect().then(res => console.log('I m connected!!!!'))
      .catch(err => {
        console.log('connect error');
        console.log(err);
      })
  }

  connect() {
    this.socket = io.connect(url);
    return new Promise((resolve, reject) => {
      this.socket.on("connect", () => resolve());
      this.socket.on("connect_error", (err) => reject(err));
    });
  }

  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnect(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  emit(event, data) {
    console.log('miaouuuuuu');
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");

      return this.socket.emit(event, data, (response) => {
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }
        return resolve();
      });
    });
  }

  on(event, fun) {
    // No promise is needed here, but we're expecting one in the middleware.
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");

      this.socket.on(event, fun);
      resolve();
    });
  }
}
