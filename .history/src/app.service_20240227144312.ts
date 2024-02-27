import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
@Injectable()
export class AppService {
  getHello(res): string {
    // 🌸 配置oss

    const sts = new STS({
      accessKeyId: 'LTAI5tHjoXCVGiWnqnz7HgF8',
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
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-METHOD', 'GET');
        res.json({
          AccessKeyId: result.credentials.AccessKeyId,
          AccessKeySecret: result.credentials.AccessKeySecret,
          SecurityToken: result.credentials.SecurityToken,
          Expiration: result.credentials.Expiration,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
      });
    return res;
  }
}
