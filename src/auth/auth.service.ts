import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validaLogin(login: string, password: string) {
    
        console.log('login', login);
        console.log('senha', password);
        return {login, password, msg:'Dados cadastrados com sucesso!'};
      }
}
