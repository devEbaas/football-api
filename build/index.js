"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./config/db");
const teamsRouter_1 = __importDefault(require("./routes/teamsRouter"));
const playersRouter_1 = __importDefault(require("./routes/playersRouter"));
const matchesRouter_1 = __importDefault(require("./routes/matchesRouter"));
// configuration
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware for parsing re.body to application/json
app.use((0, cors_1.default)()); // middleware for cors
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Routes
app.get('/ping', (_, res) => {
    console.log('ping');
    res.send('Hello World! ' + new Date().toISOString());
});
app.use('/api/teams', teamsRouter_1.default);
app.use('/api/players', playersRouter_1.default);
app.use('/api/matches', matchesRouter_1.default);
