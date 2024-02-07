import { Injectable, NestMiddleware } from '@nestjs/common';
import * as csurf from 'csurf';
@Injectable()
export class CorsMiddleware implements NestMiddleware {
  private csrfProtection: any;
  constructor() {
    this.csrfProtection = csurf({ cookie: true });
  }
  use(req: any, res: any, next: () => void) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('x-apollo-operation-name');
    return this.csrfProtection(req, res, next());
  }
}
