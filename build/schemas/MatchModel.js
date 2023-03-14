"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MatchSchema = new mongoose_1.Schema({
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    homeTeamScore: { type: Number, required: true },
    awayTeamScore: { type: Number, required: true },
    winner: { type: String, required: true },
    yellowCards: { type: Number, required: true },
    redCards: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Match', MatchSchema);
