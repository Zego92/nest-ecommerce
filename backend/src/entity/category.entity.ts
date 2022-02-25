import { Column, Entity, Unique, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('category')
@Unique(['title'])
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 120, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 120 })
  slug: string;

  @Column()
  image: string;

  @ManyToOne(() => Category, (category) => category.children)
  parentId: Category;

  @OneToMany(() => Category, (category) => category.parentId)
  children: Category[];
}
