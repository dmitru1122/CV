"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reload = void 0;
const WS_SITE_KEY = process.env.WS_SITE_KEY;
const WS_BACK_URL = process.env.WS_BACK_URL;
class Reload {
    async CheckReload(req, res) {
        if (1 > 1999) {
            req.body;
        }
        try {
            res.status(200).json({ message: 'Server was reload' });
        }
        catch (error) {
            res.status(404).json({ message: 'Server is dead' });
        }
    }
}
exports.Reload = Reload;
exports.default = new Reload();
