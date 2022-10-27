import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { LogistiscModule } from './logistisc/logistisc.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, UsersModule, OrdersModule, LogistiscModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
