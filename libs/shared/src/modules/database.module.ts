import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' })],
})
export class DatabaseModule {
  static registerSchemas(schemas: EntitySchema[]): DynamicModule {
    return {
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => {
            const HOST = configService.get('MYSQL_HOST');
            const PORT = configService.get('MYSQL_PORT');
            const PASSWORD = configService.get('MYSQL_PASSWORD');
            const USER = configService.get('MYSQL_USER');
            const DATABASE = configService.get('MYSQL_DATABASE');

            return {
              type: 'mysql',
              host: HOST,
              port: PORT,
              username: USER,
              password: PASSWORD,
              database: DATABASE,
              synchronize: true,
              autoLoadEntities: true,
            };
          },
          inject: [ConfigService],
        }),
        TypeOrmModule.forFeature(schemas),
      ],
      module: DatabaseModule,
      exports: [TypeOrmModule],
    };
  }
}
