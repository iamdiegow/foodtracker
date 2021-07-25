import { Post, Get, Body, BadRequestException, Param, Put, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) { }

  @Post()
  async createIngredient(
    @Body() createIngredientDto: CreateIngredientDto,
  ): Promise<any> {
    return await this.ingredientService.createIngredient(createIngredientDto);
  }

  @Get()
  async findAllIngredients(): Promise<any> {
    return await this.ingredientService.findAllIngredients()
  }

  @Get(":id")
  async findOneIngredient(@Param("id") id: string): Promise<any> {
    return await this.ingredientService.findOneIngredient(id)
  }

  @Put(":id")
  async updateIngredient(@Param("id") id : string, @Body() updatedIngredient: CreateIngredientDto){
    return await this.ingredientService.findAndUpdateIngredient(id,updatedIngredient)
  }

  @Delete(":id")
  async deleteIngredient(@Param("id") id: string){
    return await this.ingredientService.deleteIngredient(id)
  }
}
