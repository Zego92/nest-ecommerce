import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('admin')
@Unique(['email', 'phoneNumber'])
export class Admin extends BaseEntity {
  @Column({ type: 'varchar', length: 120, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  lastName: string;

  @Column({ type: 'varchar', length: 13, nullable: false })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string;
}
