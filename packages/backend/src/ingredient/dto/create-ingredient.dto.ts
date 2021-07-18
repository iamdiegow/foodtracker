import { IsNotEmpty } from 'class-validator';

export class CreateIndredientDto {
  @IsNotEmpty()
  name: string;
}
