import { Injectable } from '@nestjs/common';
import { CatsService } from './cats.service';

@Injectable()
export class AppService {
  constructor(readonly catsService: CatsService) { }

  getHello(): string {
    return this.catsService.getHello();
  }
}

// > nest start

// src/app.service.ts:6:37 - error TS2749: 'CatsService' refers to a value, but is being used as a type here. Did you mean 'typeof CatsService'?

// 6   constructor(readonly catsService: CatsService) { }
//                                       ~~~~~~~~~~~
// src/app.service.ts:6:37 - error TS4063: Parameter 'catsService' of constructor from exported class has or is using private name 'CatsService'.

// 6   constructor(readonly catsService: CatsService) { }
//                                       ~~~~~~~~~~~
// src/app.service.ts:6:37 - error TS4063: Parameter 'catsService' of constructor from exported class has or is using private name 'CatsService'.

// 6   constructor(readonly catsService: CatsService) { }
//                                       ~~~~~~~~~~~

// Found 3 error(s).
