import 'reflect-metadata';
import express from 'express';
import {connectDb} from './connectDb';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initConnectDb();
  }

  private async initConnectDb(): Promise<any> {
    await connectDb();
  }

  public listen(): void {
    this.app.listen(1337, (): void => {
      console.log(`App server launched on the http://localhost:${1337}`);
    });
  }

}
