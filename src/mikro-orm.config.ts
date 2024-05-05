import {Options, PostgreSqlDriver} from '@mikro-orm/postgresql';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

const configDb: Options = {
  host: 'localhost',
  port: 5432,
  driver: PostgreSqlDriver,
  schema: 'public',
  dbName: 'test_mikro',
  user: 'user',
  password: 'password',
  entities: ['./dist/entities/*.js'],
  entitiesTs: ['./src/entities/*.ts'],
  migrations: {
    tableName: 'list_migrations',
    path: './dist/migrations',
    pathTs: './src/migrations',
    glob: '!(*.d).{js,ts}'
  },
  ignoreUndefinedInQuery: true,
  extensions: [EntityGenerator, Migrator, SeedManager],
  discovery: {
    warnWhenNoEntities: false,
    requireEntitiesArray: false,
    disableDynamicFileAccess: false,
    tsConfigPath: '../tsconfig.json'
  },
  debug: true
};

export default configDb;
