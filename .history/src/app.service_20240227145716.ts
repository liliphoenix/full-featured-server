import { Injectable } from '@nestjs/common';
import { STS } from 'ali-oss';
@Injectable()
export class AppService {
  getHello(res): string {
    // 🌸 配置oss

    const sts = new STS({
      accessKeyId: 'LTAI5tCnEve3dEbTiVWWQtph',
      accessKeySecret: '39dg5pVlLXbH6wAZjQmbYYvjMEz15i',
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
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
      });

    return 'ok';
  }
}
