import { IsNotEmpty,IsString, IsNumberString } from "class-validator";


export class createProductsDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumberString()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsNumberString()
    categoryId: number;

}
