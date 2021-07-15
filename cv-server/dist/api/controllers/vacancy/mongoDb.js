"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    city_title: { type: String, requared: true },
    active: { type: Boolean, requared: true },
    vacancies: [
        {
            link_name: { type: String, required: true },
            title: { type: String, required: true },
            id: { type: String, requarid: true },
        },
    ],
});
exports.default = mongoose_1.model('MongeVacancy', schema);
