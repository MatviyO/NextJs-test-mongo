import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(`mongodb+srv://link:link3131@cluster0-lrxwx.mongodb.net/todos`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
