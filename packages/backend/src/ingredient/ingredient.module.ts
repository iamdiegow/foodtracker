import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Ingredient, IngredientSchema } from "src/schemas/ingredient.schema";
import { IngredientController } from "./ingredient.controller";
import { IngredientService } from "./ingredient.service";




@Module({
  imports:[    MongooseModule.forFeature([
    { name: Ingredient.name, schema: IngredientSchema },
  ]),],
  controllers:[IngredientController],
  providers:[IngredientService]
})

export class IngredientModule {}