import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { STS } from 'ali-oss';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() res: Response) {
    // 🌸 配置oss
    console.log(123);

    const sts = new STS({
      accessKeyId: 'LTAI5tQhkXNs3KuTXqwEvTv2',
      accessKeySecret: 'KOo5IAL8XucPFBQBfWa4JwJ9opmnG3',
    });
    const result = await sts.assumeRole(
      ':ram::1057778667542355:role/full-featured-test',
      ``,
      '3000',
      'sessiontest',
    );
    res.json(result);
    return result;
  }
}
