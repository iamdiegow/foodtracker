import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

interface Ingredient {
  name: string;
}

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel('Ingredient') private ingredientModel: Model<Ingredient>,
  ) {}

  async createIngredient(createIngredientDto: CreateIngredientDto) {
    return await this.ingredientModel.create(createIngredientDto);
  }

  async findAllIngredients():Promise<Ingredient[]>{
    return await this.ingredientModel.find();
  }

  async findOneIngredient(id: string):Promise<Ingredient>{
    return await this.ingredientModel.findById(id);
  }
//TODO ¿Tipado de retorno?
  async findAndUpdateIngredient(id:string,updatedIngredient:CreateIngredientDto):Promise<any>{
    const query = {"_id":id}
    return await this.ingredientModel.findOneAndUpdate(query,updatedIngredient)
  }
//TODO ¿Tipado de retorno?
  async deleteIngredient(id:string):Promise<any>{
    const query = {"_id":id}
    return await this.ingredientModel.remove(query)
  }
}
