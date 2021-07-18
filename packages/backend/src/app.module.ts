import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientController } from './ingredient/ingredient.controller';
import { IngredientService } from './ingredient/ingredient.service';
import { Ingredient, IngredientSchema } from './schemas/ingredient.schema';

const MONGO_URI = `mongodb://localhost:27017/foodtracker`;

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
  controllers: [AppController, IngredientController],
  providers: [AppService, IngredientService],
})
export class AppModule {}
