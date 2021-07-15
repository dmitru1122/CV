import { Request, Response } from 'express';
import express from 'express';
import Crypto from 'crypto-js';
import Axios from '../../services/axios-instance';
import { readFile } from 'fs/promises';
import MongeVacancy from './mongoDb';

import mongoose from 'mongoose';
import { PollyCustomizations } from 'aws-sdk/lib/services/polly';

const app = express();

const WS_SITE_KEY = process.env.WS_SITE_KEY;
const WS_BACK_URL = process.env.WS_BACK_URL;

const createSecure = (resume: boolean, key: string): { method: string; gryzak: string; signature: string } => {
  const method = resume ? 'applyAddResume' : 'applyNoResume';
  const gryzak = `${new Date().getTime()}`;
  const solt = Crypto.HmacSHA1(`${gryzak}.${method}`, key);
  const signature = Crypto.enc.Base64.stringify(solt);

  return { method, gryzak, signature };
};

export class VacancyController {
  public async sendVacancy(req: Request, res: Response): Promise<void> {
    console.log('======================');
    console.log('Sending Vacancy to fake DataBase');
    console.log('======================');

    if (!WS_SITE_KEY || !WS_SITE_KEY.length) {
      res.status(404).json({ message: `SITE KEY isn't availble!` });
      return;
    }
    const {
      city_title,
      active,
      vacancies: [{ link_name, title, id }],
    } = req.body;
    const pushCityWithVacancies = async () => {
      try {
        const newCity = new MongeVacancy({
          city_title,
          active,
          vacancies: [{ link_name, title, id }],
        });

        await newCity.save();
        res.status(200).json(newCity);
      } catch (err) {
        console.log(err);
      }
    };

    try {
      await mongoose.connect('mongodb+srv://dima:success1122@cluster0.t5xsk.mongodb.net/vacancy', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      });
      app.use(express.urlencoded({ extended: true }));
      console.log('+++++++++ use mongoose++++++++++++++++++=');

      try {
        const response = await MongeVacancy.findOne({ city_title });
        console.log('in response');
        console.log(response);
        if (response) {
          console.log('pos 1');
          if (response.city_title === city_title) {
            console.log('pos 2');
            let counter = 0;
            response.vacancies.forEach((responseVacancy: { link_name: string; title: string; id: string }) => {
              if (responseVacancy.title === title) {
                counter++;
              }
            });
            console.log(counter);
            if (counter > 0) {
              console.log('pos 3');
              res.status(400).json({ message: 'This vacancy already exist' });
            } else {
              response.vacancies.push({ link_name, title, id });
              console.log('push vacancies');
              await response.save();
              res.send(response);
              res.status(200).json(response);
            }
          } else {
            console.log('it"s stupid logic');
            pushCityWithVacancies().then;
          }
        } else {
          console.log('pos 4');
          pushCityWithVacancies().then;
        }
      } catch (err) {
        console.log(err);
      }
    } catch (e) {
      console.log(e);
    }

    // try {
    //   const filePath = path.join(__dirname, './fakeDataBase.json');
    //   const data = await readFile(
    //     '/home/dimavab/dima/test/testVue/sc_craft_01.04/myProjectSC/html/sc-scr-website/webserver/src/api/controllers/vacancy/fakeDataBase.json'
    //   );
    //   const fileArray = JSON.parse(data.toString());

    //   // add check is iteam already exist in DataBase - only need if i use my fakeDataBase
    //   fileArray.push({
    //     city_title,
    //     active,
    //     vacancies: [
    //       {
    //         link_name,
    //         title,
    //         id,
    //       },
    //     ],
    //   });
    //   fs.writeFile(
    //     '/home/dimavab/dima/test/testVue/sc_craft_01.04/myProjectSC/html/sc-scr-website/webserver/src/api/controllers/vacancy/fakeDataBase.json',
    //     JSON.stringify(fileArray),
    //     err => console.log(err)
    //   );
    //   res.status(200).json({ fileArray });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  public async getVacancy(req: Request, res: Response): Promise<void> {
    if (!WS_SITE_KEY || !WS_SITE_KEY.length) {
      res.status(404).json({ message: `SITE KEY isn't availble!` });
      return;
    }

    try {
      await mongoose.connect('mongodb+srv://dima:success1122@cluster0.t5xsk.mongodb.net/vacancy', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      });
      console.log('+++++++++ use mongoose++++++++++++++++++=');
      try {
        const response = await MongeVacancy.find({});
        console.log(response);
        res.status(200).json(response);
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }

    console.log('======================');
    console.log('Get Vacancy> fake DataBase.');
    console.log('======================');

    // await Axios('https://jsonplaceholder.typicode.com/todos/1').then(() => console.log('response'));
    if (1 > 1000) {
      res.status(404).json({ message: `SITE KEY isn't availble!` });
      req.url;
      return;
    }
    // if (!WS_SITE_KEY || !WS_SITE_KEY.length) {
    //   res.status(404).json({ message: `SITE KEY isn't availble!` });
    //   return;
    // }

    // if (!WS_BACK_URL || !WS_BACK_URL.length) {
    //   res.status(404).json({ message: `Backend URL isn't availble!` });
    //   return;
    // }

    // try {
    //   // let data: unknown;
    //   // setTimeout(() => {
    //   //   // data = dataFake;
    //   //   res.status(200).json(data);
    //   // }, 2000);
    //   const data = await readFile(
    //     '/home/dimavab/dima/test/testVue/sc_craft_01.04/myProjectSC/html/sc-scr-website/webserver/src/api/controllers/vacancy/fakeDataBase.json'
    //   );
    //   res.status(200).json(JSON.parse(data.toString()));
    // } catch (error) {
    //   res.status(404).json({ message: error.message || JSON.stringify(error), error });
    // }
  }
}

export default new VacancyController();
