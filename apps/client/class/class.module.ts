import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: Authentication.name, schema: AuthenticationSchema },
    ]),
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
