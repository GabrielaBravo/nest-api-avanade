import { Controller,Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import {createProductsDTO } from './dto/createProducts.dto';
import {UpdateProductsDTO } from './dto/updateProducts.dto';

@Controller('products')
export class ProductsController {
    constructor (private readonly productsService: ProductsService) {}

//criar
@Post()
async createProducts(@Body() req: createProductsDTO): Promise<string> {
    return this.productsService.createProducts(req);
}

//listar todos
@Get()
async findAll() {
    return this.productsService.findAll();
}

//listar um
@Get('id')
async findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
}

//atualizar
@Patch('id')
async update(@Param('id') id: number, @Body() req: UpdateProductsDTO){
    return this.productsService.update(id, req);
}

}





