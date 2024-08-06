import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }

    create(createItemDto: CreateItemDto): Promise<Item> {
        const item = this.itemsRepository.create(createItemDto);
        return this.itemsRepository.save(item);
    }

    findAll(): Promise<Item[]> {
        return this.itemsRepository.find();
    }

    findOne(id: number): Promise<Item> {
        return this.itemsRepository.findOneBy({ id });
    }

    async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
        await this.itemsRepository.update(id, updateItemDto);
        return this.itemsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.itemsRepository.delete(id);
    }
}
