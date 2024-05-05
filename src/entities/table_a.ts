import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Table_a {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

}
