import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
@Injectable()
export class AppService {
  getHello(res): string {
    // 🌸 配置oss
    const sts = new STS({
      AccessKeyId: 'LTAI5tHjoXCVGiWnqnz7HgF8',
      accessKeySecret: 'bT9DIAgsuLwY7DhiEiibb4VkcAWZF8',
    });
    sts
      .assumeRole(
        ':ram::1057778667542355:role/full-featured-test',
        ``,
        '3000',
        'sessiontest',
      )
      .then();

    return 'Hello World!';
  }
}
