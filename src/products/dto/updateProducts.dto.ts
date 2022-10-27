import { PartialType } from "@nestjs/mapped-types";
import { createProductsDTO } from "./createProducts.dto";

export class UpdateProductsDTO extends PartialType (createProductsDTO) {}