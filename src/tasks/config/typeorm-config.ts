import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 31058,
  username: 'postgresadmin',
  password: 'admin123',
  database: 'taskmanager',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
