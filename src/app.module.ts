import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/item.enity';
import { ItemsModule } from './items/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //host: 'defaultHost',
      //port: 3306,
      host: '',
      port: 3306,
      username: '',
      password: '',
      // database: 'healthcare',
      database: '', // r
      entities: [Item], // Include initial entities for default database
      synchronize: true,
    }),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
