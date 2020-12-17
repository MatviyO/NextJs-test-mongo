import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Redirect, Req,
    Res
} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {Response, Request} from "express";
import {ProductsService} from "./products.service";
import {Product} from "./schemas/product.schema";

@Controller('products')
export class ProductsController {

    constructor (private producstService: ProductsService) {
    }

    // @Get()
    // // @Redirect('https://google.com', 301)
    // getAll(@Req() req: Request, @Res() res: Response): string {
    //     res.status(201).end('Poke')
    //     return 'getAll'
    // }
    @Get()
    getAll(): Promise<Product[]> {
        return this.producstService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Product> {
        return this.producstService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.producstService.create(createProductDto)
    }

    @Put('id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.producstService.update(id, updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.producstService.remove(id)
    }
}
