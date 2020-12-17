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

@Controller('products')
export class ProductsController {

    // @Get()
    // // @Redirect('https://google.com', 301)
    // getAll(@Req() req: Request, @Res() res: Response): string {
    //     res.status(201).end('Poke')
    //     return 'getAll'
    // }
    @Get()
    getAll(): string {
        return 'GetAll'
    }

    @Get(':id')
    getById(@Param('id') id: string): string {
        return 'getById' + id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto): string {
        console.log(createProductDto)
        return `Title: ${createProductDto.title}, Price: ${createProductDto.price}`
    }

    @Put('id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update' + id
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Remove' + id
    }
}
