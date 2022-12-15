import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { CoModule } from './user/co/co.module';
import { UserModule } from './user/user.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CoModule, UserModule, ProductModule, UsersModule],
  controllers: [AppController, ProductController],
  providers: [AppService, UserService],
})
export class AppModule {}
