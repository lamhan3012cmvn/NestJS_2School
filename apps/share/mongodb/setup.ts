import { ConfigModule } from '../configService.module';
import { ConfigService } from '../services/config.service';

export function setupMongoDb(mongoUri: string) {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get(mongoUri),
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
  };
}
