import express from 'express';
import controller from './controller';

export default express.Router().get('/vacancy', controller.getVacancy).post('/vacancy', controller.sendVacancy);
