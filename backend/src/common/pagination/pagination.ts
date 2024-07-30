import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const page = (parseInt(req.query.page as string, 10) || 1).toString();
    const limit = (parseInt(req.query.limit as string, 10) || 10).toString();
    req.query.page = page;
    req.query.limit = limit;
    next();
  }
}
