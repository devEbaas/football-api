"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const teams_json_1 = __importDefault(require("./teams.json"));
const teams = teams_json_1.default;
const getEntries = () => teams;
exports.getEntries = getEntries;
const addEntry = () => undefined;
exports.addEntry = addEntry;
