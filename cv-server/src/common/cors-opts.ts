import { Request, Response, NextFunction } from 'express';
import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: process.env.NODE_ENV !== 'production' ? '*' : process.env.HOST_NAME,
  // origin: 'http://localhost:3001',
  optionsSuccessStatus: 204,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  preflightContinue: true,
  allowedHeaders: '*',
  credentials: true,
  exposedHeaders: ['set-cookie'],
};

export default (req: Request, res: Response, next: NextFunction): void => {
  if (req.method === 'OPTIONS' || req.method === 'HEAD') {
    const origin = req.headers.origin;
    // const origin = 'http://localhost:3001';

    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Accept, Authorization, Content-Type, Content-Length, Origin, ' + 'X-Requested-With'
    );
    res.sendStatus(200);
    return;
  }

  next();
};
