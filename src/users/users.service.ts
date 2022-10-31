import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUserById(id: string){
      const user = await this.prisma.users.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!user) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }
      return user;
    }

    async verifyUserExists(email: string): Promise<boolean> {
        const user = await this.prisma.users.findUnique({
          where: {
            email,
          },
        });
        
        return user ? true : false;
      }
    
    async createUser(data): Promise<users> {
        const { name, email, password } = data;
        const checkUser = await this.verifyUserExists(email);
        if(!checkUser) {
            const user = await this.prisma.users.create({
                data: {
                    name,
                    email,
                    password,
                },
            });
    
            if (!user) {
                throw new Error('Erro ao criar usuário.Usuário já existe!');
            }
            return user;
        }else {
          throw new HttpException ('Usuário já existe.', HttpStatus.BAD_REQUEST);
        }
    }
        
    async findAll(){
        return this.prisma.users.findMany();
    }
    async findOne(id: string) {
        return this.prisma.users.findUnique({
          where:{
            id:Number(id),
          }
        });
    }
    async update(id: string, req) {
      //carregue os dados do usuário cujo id foi informado
      const user = await this.getUserById(id);
      //extraindo as novas informações para alterar o usuário.
      const {name, email, password} = req;

      const updateUser = await this.prisma.users.update({
        where: {
          id: Number(id),
        },
        data: {
          name: name? name: user.name,
          email: email ? email : user.email,
          password: password ? password : user.name,
        },
      });

      if(!updateUser) {
        throw new HttpException(
          'Erro ao atualizar usuário',
          HttpStatus.BAD_REQUEST,
        );
      }

        return `Usuário ${updateUser.name} atualizado com sucesso!`; 
    }
     async remove(id: string): Promise<object> {
      const user = await this.getUserById(id);

      const deleteUser = await this.prisma.users.delete({
        where: {
          id: Number(id),
        },
      });
      if (!deleteUser) {
        throw new HttpException(
          'Erro ao deletar usuário',
          HttpStatus.BAD_REQUEST,
        );
      }
      return {msg: `Usuário ${user.name} Excluido com sucesso!`};
     }
}
