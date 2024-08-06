import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.enity';
import { ItemsController } from './item.controller';
import { ItemsService } from './item.service';


@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule { }
