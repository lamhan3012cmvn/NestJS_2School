import { QuizClassScoreController } from './controllers/quizClassScore.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';
import { User, UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/service/user.service';
import { QuizClassScore } from './entities/quizClassScore.entity';
import { QuizClassScoreService } from './services/quizClassScore.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QuizClassScore.modelName,
        schema: QuizClassScore.model.schema,
      },
      { name: User.name, schema: UserSchema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
  ],
  controllers: [QuizClassScoreController],
  providers: [QuizClassScoreService, UserService, UpLoadFileService],
})
export class QuizClassScoreModule {}
