import { AbstractEntity } from '@app/common';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  displayStatus: boolean;
}
