import { Post } from './entities/post.entity';
import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberClassService } from '../memberClass/services/memberClass.service';
import { UserService } from '../user/service/user.service';
import { MemberClasses } from '../memberClass/entities/memberClass.entity';
import { User, UserSchema } from '../user/entities/user.entity';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MemberClasses.modelName, schema: MemberClasses.model.schema },
      ,
      { name: User.name, schema: UserSchema },
      { name: Post.modelName, schema: Post.model.schema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
      // { name: Notification.name, schema: Notification.model.modelName },
      // { name: Device.modelName, schema: Device.model.schema },
    ]),
  ],
  controllers: [PostController],
  providers: [
    PostService,
    MemberClassService,
    UserService,
    UpLoadFileService,
    // NotificationService,
  ],
  exports: [PostService],
})
export class PostModule {}
