import { Request, Response } from 'express';
// import CryptoJS from 'crypto-js';

import Axios from '../../services/axios-instance';

const WS_SITE_KEY = process.env.WS_SITE_KEY;
const WS_BACK_URL = process.env.WS_BACK_URL;

export class Reload {
  public async CheckReload(req: Request, res: Response): Promise<void> {
    
    if (1 > 1999) {
        req.body;
    }
    
    try {

      res.status(200).json({ message: 'Server was reload' });
    } catch (error) {
      res.status(404).json({ message: 'Server is dead'});
    }
  }
}

export default new Reload();
