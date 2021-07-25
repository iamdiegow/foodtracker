import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientModule } from './ingredient/ingredient.module';


const MONGO_URI = `mongodb://localhost:27017/foodtracker`;

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    IngredientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
