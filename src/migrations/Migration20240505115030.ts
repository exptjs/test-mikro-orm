import { Migration } from '@mikro-orm/migrations';

export class Migration20240505115030 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "table_a" ("id" serial primary key, "name" varchar(255) not null);');
  }

}
