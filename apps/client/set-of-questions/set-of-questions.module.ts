import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'apps/share/shared.module';
import { ClassModule } from '../class/class.module';
import { Classes } from '../class/entities/class.entity';
import { ClassService } from '../class/services/class.service';
import { MemberClasses } from '../memberClass/entities/memberClass.entity';
import { MemberClassService } from '../memberClass/services/memberClass.service';
import { QuestionModule } from '../question/question.module';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';
import { User, UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/service/user.service';
import { SetOfQuestionsController } from './controllers/setOfQuestions.controller';
import { SetOfQuestion } from './entities/setOfQuestions.entity';
import { SetOfQuestionsService } from './services/setOfQuestions.service';

@Module({
  imports: [
    SharedModule,
    QuestionModule,
    ClassModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: MemberClasses.name, schema: MemberClasses.model.schema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
      { name: SetOfQuestion.modelName, schema: SetOfQuestion.model.schema },
      { name: Classes.modelName, schema: Classes.model.schema },
    ]),
  ],
  controllers: [SetOfQuestionsController],
  providers: [
    SetOfQuestionsService,
    ClassService,
    UserService,
    MemberClassService,
    UpLoadFileService,
  ],
})
export class SetOfQuestionsModule {}
