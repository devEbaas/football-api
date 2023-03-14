"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlayerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    position: { type: String, required: false },
    age: { type: Number, required: false },
    currentTeam: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Player', PlayerSchema);
