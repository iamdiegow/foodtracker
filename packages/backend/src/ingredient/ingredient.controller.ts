import { Post, Get, Body, BadRequestException } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateIndredientDto } from './dto/create-ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Post()
  async createIngredient(
    @Body() createIngredientDto: CreateIndredientDto,
  ): Promise<any> {
    return await this.ingredientService.createIngredient(createIngredientDto);
  }
}
