"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MatchModel_1 = __importDefault(require("../schemas/MatchModel"));
const router = express_1.default.Router();
router.get('/', (_, res) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    MatchModel_1.default.find({}).exec().then(matches => {
        res.json(matches);
    }).catch(err => {
        console.log(err);
    });
});
router.get('/:id', (req, res) => {
    res.send(`Match with id ${req.params.id}`);
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMatch = yield new MatchModel_1.default(req.body).save();
    res.json(newMatch);
}));
exports.default = router;
