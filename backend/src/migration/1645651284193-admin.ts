import { MigrationInterface, QueryRunner } from 'typeorm';

export class admin1645651284193 implements MigrationInterface {
  name = 'admin1645651284193';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "admin" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "firstName" character varying(120) NOT NULL, "lastName" character varying(120) NOT NULL, "phoneNumber" character varying(13) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(20) NOT NULL, CONSTRAINT "UQ_49aa0163216d95c24c54edcf557" UNIQUE ("email", "phoneNumber"), CONSTRAINT "PK_796caa98a152a45271fc7cfc9b7" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "entityadmin"`);
  }

}
