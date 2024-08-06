import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateItemDto } from 'src/dto/item.dto';
import { ItemsService } from './item.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post()
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto);
    }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateItemDto: any) {
        return this.itemsService.update(+id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(+id);
    }
}
