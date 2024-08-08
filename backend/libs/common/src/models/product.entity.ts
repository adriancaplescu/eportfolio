import { AbstractEntity } from '@app/common';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  link: string;

  @Column('boolean')
  displayStatus: boolean;
}
