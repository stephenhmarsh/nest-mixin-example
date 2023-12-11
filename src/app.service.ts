import { Injectable } from '@nestjs/common';
import { CatsService } from './cats.service';

@Injectable()
export class AppService {
  constructor(readonly catsService: CatsService)

  getHello(): string {
    return this.catsService.getHello();
  }
}
