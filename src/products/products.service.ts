import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async createProducts(req): Promise<string> {
        return 'Produto criado com sucesso!';
    }
    async findAll(){
        return "Lista de Produtos";
    }
    async findOne(id: number) {
        return `Produto ${id}`;
    }
    async update(id: number, req) {
        return `Produto ${id} atualizado com sucesso!`; 
    }
}
