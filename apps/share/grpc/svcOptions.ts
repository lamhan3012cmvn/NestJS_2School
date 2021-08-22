import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigModule } from '../configService.module';
import { ConfigService } from '../services/config.service';

export function setupSvcOption(
  packageName: string,
  protoPath: string,
  portName: string,
  hostName: string,
) {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (_configService: ConfigService) => ({
      transport: Transport.GRPC,
      options: {
        url: `${_configService.get(hostName)}:${_configService.getNumber(
          portName,
        )}`,
        package: `${packageName}`,
        protoPath: join(__dirname, protoPath),
        loader: {
          enums: String,
          objects: true,
          arrays: true,
        },
      },
    }),
  };
}
