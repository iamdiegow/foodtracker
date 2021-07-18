import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIndredientDto } from './dto/create-ingredient.dto';

interface Ingredient {
  name: string;
}

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel('Ingredient') private ingredientModel: Model<Ingredient>,
  ) {}

  async createIngredient(createIngredientDto: CreateIndredientDto) {
    return await this.ingredientModel.create(createIngredientDto);
  }
}
