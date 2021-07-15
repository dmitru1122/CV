import { Request, Response } from 'express';

import EmailService from '../../services/email/email.service';

// const TARGET_EMAIL_ADDRESS = process.env.CONTACTUS_RECIPIENTS || '';

export class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    console.log('======================');
    console.log('Sending Email requested');
    console.log('======================');
    // const to = TARGET_EMAIL_ADDRESS;

    const { html, subject, to } = req.body;

    try {
      const email = await EmailService.sendEmail({ html, subject, to });

      res.status(200).json({ message: email });
    } catch (error) {
      console.log('EmailController sendEmail ERROR: ');
      console.log(error);
      res.status(404).json(error);
    }
  }
}

export default new EmailController();
