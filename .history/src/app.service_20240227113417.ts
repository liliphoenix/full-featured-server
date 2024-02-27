import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
