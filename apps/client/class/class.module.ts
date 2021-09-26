import { Module } from '@nestjs/common';
import { ClassService } from './services/class.service';
import { ClassController } from './controllers/class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classes, ClassesSchema } from './entities/class.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Classes.name, schema: ClassesSchema }]),
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
