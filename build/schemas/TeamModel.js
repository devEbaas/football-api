"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TeamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    logo: { type: String, required: false },
    shortName: { type: String, required: true },
    city: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Team', TeamSchema);
