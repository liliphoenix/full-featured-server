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
      .then((result) => {
        console.log(result);
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-METHOD', 'GET');
        res.json({
          AccessKeyId: result.credentials.AccessKeyId,
          AccessKeySecret: result.credentials.AccessKeySecret,
          SecurityToken: result.credentials.SecurityToken,
          Expiration: result.credentials.Expiration,
        });
      });

    return 'Hello World!';
  }
}
