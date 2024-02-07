import { Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.setHeader('Content-Type', 'application/json');
    next();
  }
}
