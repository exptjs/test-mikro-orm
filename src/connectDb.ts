import {MikroORM} from '@mikro-orm/postgresql';
import configDb from './mikro-orm.config';

export async function connectDb(): Promise<any> {
  const orm = await MikroORM.init(configDb);

  return orm;
}
