import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
@Injectable()
export class AppService {
  getHello(): string {
    let sts = new STS({
      AccessKeyId: 'LTAI5tHjoXCVGiWnqnz7HgF8',
    });
    return 'Hello World!';
  }
}
