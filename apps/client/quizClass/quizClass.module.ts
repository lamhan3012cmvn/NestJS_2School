import { QuizClassController } from './controllers/quizClass.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizClass } from './entities/quizClass.entity';
import { QuizClassService } from './services/quizClass.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QuizClass.modelName,
        schema: QuizClass.model.schema,
      },
    ]),
  ],
  controllers: [QuizClassController],
  providers: [QuizClassService],
  exports: [QuizClassService],
})
export class QuizClassModule {}
