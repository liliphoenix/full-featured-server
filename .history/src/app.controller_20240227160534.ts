import { Controller, Get, Res } from '@nestjs/common';
import { Response, json } from 'express';
import { AppService } from './app.service';
import { STS } from 'ali-oss';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): Response {
    // 🌸 配置oss

    const sts = new STS({
      accessKeyId: 'LTAI5tCnEve3dEbTiVWWQtph',
      accessKeySecret: '39dg5pVlLXbH6wAZjQmbYYvjMEz15i',
    });

    sts.assumeRole(
      ':ram::1057778667542355:role/full-featured-test',
      ``,
      '3000',
      'sessiontest',
    );
    return res;
  }
}
