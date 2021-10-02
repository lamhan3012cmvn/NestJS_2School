import { ConfigModule } from '../configService.module';
import { ConfigService } from '../services/config.service';

export function setupJWT(jwtSecret: string) {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get(jwtSecret),
      signOptions: { expiresIn: '365d' },
    }),
  };
}
