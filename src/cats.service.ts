import { Injectable } from '@nestjs/common';
import { WithUuid } from './with-uuid.mixin';

@Injectable()
class CatsServiceBase {
  getHello(): string {
    return 'meow';
  }
}

export const CatsService = WithUuid(CatsServiceBase);
