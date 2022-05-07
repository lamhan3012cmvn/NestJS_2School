/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientModule = void 0;
const healcheck_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const shared_module_1 = __webpack_require__(18);
const terminus_1 = __webpack_require__(20);
const question_module_1 = __webpack_require__(21);
const roadMap_module_1 = __webpack_require__(34);
const device_module_1 = __webpack_require__(42);
const class_module_1 = __webpack_require__(47);
const auth_module_1 = __webpack_require__(67);
const mongoose_1 = __webpack_require__(4);
const setup_1 = __webpack_require__(81);
const user_module_1 = __webpack_require__(62);
const set_of_questions_module_1 = __webpack_require__(82);
const socket_module_1 = __webpack_require__(91);
const up_load_file_module_1 = __webpack_require__(111);
const roadMapContent_module_1 = __webpack_require__(121);
const memberClass_module_1 = __webpack_require__(146);
const notification_module_1 = __webpack_require__(148);
const quizClass_module_1 = __webpack_require__(150);
const quizClassScore_module_1 = __webpack_require__(152);
const message_module_1 = __webpack_require__(154);
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            terminus_1.TerminusModule,
            mongoose_1.MongooseModule.forRootAsync(setup_1.setupMongoDb('MONGODB_URI')),
            question_module_1.QuestionModule,
            set_of_questions_module_1.SetOfQuestionsModule,
            roadMap_module_1.RoadMapModule,
            roadMapContent_module_1.RoadMapContentModule,
            device_module_1.DeviceModule,
            class_module_1.ClassModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            socket_module_1.SocketModule,
            healcheck_module_1.HealcheckModule,
            up_load_file_module_1.UpLoadFileModule,
            memberClass_module_1.MemberClassModule,
            notification_module_1.NotificationModule,
            quizClass_module_1.QuizClassModule,
            quizClassScore_module_1.QuizClassScoreModule,
            message_module_1.MessageModule,
        ],
    })
], ClientModule);
exports.ClientModule = ClientModule;


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealcheckModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const userScoreQuizSocket_entity_1 = __webpack_require__(5);
const userScoreQuizSocket_service_1 = __webpack_require__(9);
const healcheck_controller_1 = __webpack_require__(17);
let HealcheckModule = class HealcheckModule {
};
HealcheckModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: userScoreQuizSocket_entity_1.UserScoreQuizSocket.modelName,
                    schema: userScoreQuizSocket_entity_1.UserScoreQuizSocket.model.schema,
                },
            ]),
        ],
        controllers: [healcheck_controller_1.HealcheckController],
        providers: [userScoreQuizSocket_service_1.UserScoreQuizSocketService],
    })
], HealcheckModule);
exports.HealcheckModule = HealcheckModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserScoreQuizSocket = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
class UserScoreQuizSocket extends baseModel_entity_1.BaseModel {
    static get model() {
        return new UserScoreQuizSocket().getModelForClass(UserScoreQuizSocket, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "idRoom", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "userId", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "socketId", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UserScoreQuizSocket.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ default: null }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "answer", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "question", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "idQuestion", void 0);
exports.UserScoreQuizSocket = UserScoreQuizSocket;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schemaOptions = exports.BaseModel = exports.BaseModelVm = void 0;
const typegoose_1 = __webpack_require__(7);
const class_transformer_1 = __webpack_require__(8);
class BaseModelVm {
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseModelVm.prototype, "createdAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseModelVm.prototype, "updatedAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BaseModelVm.prototype, "id", void 0);
exports.BaseModelVm = BaseModelVm;
class BaseModel extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], BaseModel.prototype, "updatedAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], BaseModel.prototype, "_id", void 0);
exports.BaseModel = BaseModel;
exports.schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        getters: true,
    },
};


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("typegoose");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserScoreQuizSocketService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const userScoreQuizSocket_entity_1 = __webpack_require__(5);
let UserScoreQuizSocketService = class UserScoreQuizSocketService extends baseService_service_1.BaseService {
    constructor(_userScoreQuizSocket, _loggerService) {
        super();
        this._userScoreQuizSocket = _userScoreQuizSocket;
        this._loggerService = _loggerService;
        this._model = _userScoreQuizSocket;
    }
    async createUserHostSocket(payload) {
        try {
            const obj = Object.assign({}, payload);
            const model = userScoreQuizSocket_entity_1.UserScoreQuizSocket.createModel(obj);
            const newUserScoreQuiz = await this.create(model);
            if (newUserScoreQuiz) {
                return this.cvtJSON(newUserScoreQuiz);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-UserHostSocketService');
            return null;
        }
    }
    async findScore(idRoom) {
        try {
            const score = await this._model.aggregate([
                { $match: { idRoom: idRoom } },
                {
                    $group: {
                        _id: { idUser: '$userId' },
                        score: { $sum: '$score' },
                    },
                },
            ]);
            console.log(`LHA:  ===> file: userScoreQuizSocket.service.ts ===> line 51 ===> score`, score);
            return this.cvtJSON(score);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'FIND-UserHostSocketService');
            return null;
        }
    }
    async removeUserHostSocket(id, idRoom) {
        try {
            const reuslt = await this._model.deleteMany({
                userId: id,
                idRoom: idRoom,
            });
            console.log(`LHA:  ===> file: userScoreQuizSocket.service.ts ===> line 65 ===> reuslt`, reuslt);
            return {
                success: true,
            };
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'REMOVE-UserHostSocketService');
            return null;
        }
    }
};
UserScoreQuizSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userScoreQuizSocket_entity_1.UserScoreQuizSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserScoreQuizSocketService);
exports.UserScoreQuizSocketService = UserScoreQuizSocketService;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseService = void 0;
const mongoose = __webpack_require__(11);
class BaseService {
    get modelName() {
        return this._model.modelName;
    }
    async findAll(filter = {}, query = { skip: '0', limit: '15' }, populate = []) {
        return this._model
            .find(filter)
            .populate(populate)
            .sort({ createdAt: -1 })
            .skip(+query.skip)
            .limit(+query.limit)
            .lean();
    }
    async findAllNoSkip(filter = {}, populate = []) {
        return this._model
            .find(filter)
            .populate(populate)
            .sort({ createdAt: -1 })
            .lean();
    }
    async findOne(filter = {}, populate = []) {
        return this._model.findOne(filter).populate(populate).lean();
    }
    async findById(id, populate = []) {
        return this._model.findById(this.toObjectId(id)).populate(populate).lean();
    }
    async create(item) {
        console.log('create', item);
        try {
            return this._model.create(item);
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async delete(id) {
        return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
    }
    async update(id, item) {
        try {
            return this._model
                .findByIdAndUpdate(this.toObjectId(id), item, {
                new: true,
            })
                .exec();
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async findOneAndUpdate(query, item, populate = []) {
        try {
            return this._model
                .findOneAndUpdate(query, item, {
                new: true,
            })
                .populate(populate)
                .exec();
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async clearCollection(filter = {}) {
        return this._model.deleteMany(filter).exec();
    }
    toObjectId(id) {
        return new mongoose.Types.ObjectId(id);
    }
    cvtJSON(data) {
        return JSON.parse(JSON.stringify(data));
    }
}
exports.BaseService = BaseService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoggerService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const common_1 = __webpack_require__(3);
const winston = __webpack_require__(13);
const config_service_1 = __webpack_require__(14);
let LoggerService = LoggerService_1 = class LoggerService extends common_1.ConsoleLogger {
    constructor(_configService) {
        super(LoggerService_1.name, { timestamp: true });
        this._configService = _configService;
        this._logger = winston.createLogger(_configService.winstonConfig);
        if (_configService.nodeEnv !== 'production') {
            this._logger.debug('Logging initialized at debug level');
        }
    }
    log(message) {
        this._logger.info(message);
    }
    info(message) {
        this._logger.info(message);
    }
    debug(message) {
        this._logger.debug(message);
    }
    error(message, trace, context) {
        this._logger.error(`${context || ''} ${message} -> (${trace || 'trace not provided !'})`);
    }
    warn(message) {
        this._logger.warn(message);
    }
};
LoggerService = LoggerService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object])
], LoggerService);
exports.LoggerService = LoggerService;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const dotenv = __webpack_require__(15);
const winston = __webpack_require__(13);
const DailyRotateFile = __webpack_require__(16);
class ConfigService {
    constructor() {
        dotenv.config({
            path: `.env`,
        });
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
        if (this.nodeEnv === 'development') {
            console.info(process.env);
        }
    }
    get(key) {
        return process.env[key];
    }
    getNumber(key) {
        return Number(this.get(key));
    }
    get nodeEnv() {
        return this.get('NODE_ENV') || 'development';
    }
    get swaggerConfig() {
        return {
            path: this.get('SWAGGER_PATH') || '/api/docs',
            title: this.get('SWAGGER_TITLE') || 'B2H Microservice API',
            description: this.get('SWAGGER_DESCRIPTION'),
            version: this.get('SWAGGER_VERSION') || '0.0.1',
            scheme: this.get('SWAGGER_SCHEME') === 'https' ? 'https' : 'http',
        };
    }
    get winstonConfig() {
        return {
            transports: [
                new DailyRotateFile({
                    level: 'debug',
                    filename: `./logs/${this.nodeEnv}/debug-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
                }),
                new DailyRotateFile({
                    level: 'error',
                    filename: `./logs/${this.nodeEnv}/error-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: false,
                    maxSize: '20m',
                    maxFiles: '30d',
                    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
                }),
                new winston.transports.Console({
                    level: 'debug',
                    handleExceptions: true,
                    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({
                        format: 'DD-MM-YYYY HH:mm:ss',
                    }), winston.format.simple()),
                }),
            ],
            exitOnError: false,
        };
    }
}
exports.ConfigService = ConfigService;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealcheckController = void 0;
const userScoreQuizSocket_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(3);
let HealcheckController = class HealcheckController {
    constructor(_usq) {
        this._usq = _usq;
    }
    healcheck() {
        return 'App run success v5';
    }
    async test() {
        return this._usq.findScore('N5K2GGNA');
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealcheckController.prototype, "healcheck", null);
__decorate([
    common_1.Get('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealcheckController.prototype, "test", null);
HealcheckController = __decorate([
    common_1.Controller('healcheck'),
    __metadata("design:paramtypes", [typeof (_a = typeof userScoreQuizSocket_service_1.UserScoreQuizSocketService !== "undefined" && userScoreQuizSocket_service_1.UserScoreQuizSocketService) === "function" ? _a : Object])
], HealcheckController);
exports.HealcheckController = HealcheckController;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(19);
const config_service_1 = __webpack_require__(14);
const logger_service_1 = __webpack_require__(12);
const providers = [
    config_service_1.ConfigService,
    logger_service_1.LoggerService,
];
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers,
        imports: [axios_1.HttpModule],
        exports: [...providers, axios_1.HttpModule],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var QuestionModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionModule = void 0;
const logger_service_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
const question_controller_1 = __webpack_require__(22);
const mongoose_1 = __webpack_require__(4);
const question_entity_1 = __webpack_require__(28);
const question_service_1 = __webpack_require__(27);
let QuestionModule = QuestionModule_1 = class QuestionModule {
};
QuestionModule = QuestionModule_1 = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: question_entity_1.Question.modelName, schema: question_entity_1.Question.model.schema },
            ]),
        ],
        controllers: [question_controller_1.QuestionController],
        providers: [logger_service_1.LoggerService, question_service_1.QuestionService],
        exports: [question_service_1.QuestionService, QuestionModule_1],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionController = void 0;
const user_decorator_1 = __webpack_require__(23);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const resource_exception_1 = __webpack_require__(26);
const question_service_1 = __webpack_require__(27);
const errors_exception_1 = __webpack_require__(30);
const baseController_1 = __webpack_require__(31);
const logger_service_1 = __webpack_require__(12);
const res_dto_1 = __webpack_require__(32);
let QuestionController = class QuestionController {
    constructor(questionService, loggerService) {
        this.questionService = questionService;
        this.loggerService = loggerService;
    }
    async createQuestion(user, payload) {
        try {
            const result = await this.questionService.createQuestion(user._id, payload);
            if (result) {
                return new baseController_1.Ok('Create Question success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'create-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateQuestion(user, query, payload) {
        try {
            const result = await this.questionService.findOneAndUpdate({ createBy: user._id, _id: query.id }, payload);
            if (result) {
                return new baseController_1.Ok('Create Class success', this.questionService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getQuestionBySetOf(user, query) {
        try {
            const result = await this.questionService.findAll({
                createBy: user._id,
                idSetOfQuestions: query.idSetOfQuestions,
            });
            const sortData = result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            if (sortData) {
                return new baseController_1.Ok('Create Question success', this.questionService.cvtJSON(sortData));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async deleteQuestion(user, query) {
        try {
            const result = await this.questionService.deleteQuestion(query.id, user._id);
            if (result) {
                return new baseController_1.Ok('Delete Question success', result);
            }
            throw new resource_exception_1.ResourceFoundException('Dont Find question change status');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Delete-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async changeStatusQuestion(user, query) {
        try {
            const result = await this.questionService.findOneAndUpdate({
                createBy: user._id,
                _id: query.id,
            }, { status: query.status });
            if (result) {
                return new baseController_1.Ok('Delete Question success', this.questionService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException('Dont Find question change status');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Delete-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof res_dto_1.CreateQuestionDto !== "undefined" && res_dto_1.CreateQuestionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
__decorate([
    common_1.Patch(),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "updateQuestion", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestionBySetOf", null);
__decorate([
    common_1.Delete(),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteQuestion", null);
__decorate([
    common_1.Delete('hidden'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "changeStatusQuestion", null);
QuestionController = __decorate([
    common_1.Controller('api/question'),
    __metadata("design:paramtypes", [typeof (_g = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _g : Object, typeof (_h = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _h : Object])
], QuestionController);
exports.QuestionController = QuestionController;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usr = void 0;
const common_1 = __webpack_require__(3);
exports.Usr = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('requ', request.user);
    return JSON.parse(JSON.stringify(request.user));
});


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(25);
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceFoundException = void 0;
const common_1 = __webpack_require__(3);
class ResourceFoundException extends common_1.BadRequestException {
    constructor(message, error) {
        if (message) {
            super(message, error);
        }
        else {
            super('ResourceFoundException');
        }
    }
}
exports.ResourceFoundException = ResourceFoundException;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionService = void 0;
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(4);
const common_1 = __webpack_require__(3);
const baseService_service_1 = __webpack_require__(10);
const question_entity_1 = __webpack_require__(28);
let QuestionService = class QuestionService extends baseService_service_1.BaseService {
    constructor(_setOfQuestionsModel, _loggerService) {
        super();
        this._setOfQuestionsModel = _setOfQuestionsModel;
        this._loggerService = _loggerService;
        this._model = _setOfQuestionsModel;
    }
    async createQuestion(createdBy, payload) {
        try {
            const obj = Object.assign({}, payload);
            obj.createBy = createdBy;
            const model = question_entity_1.Question.createModel(obj);
            const newQuestions = await this.create(model);
            if (newQuestions) {
                return this.cvtJSON(newQuestions);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-ClassesService');
            return null;
        }
    }
    async createMultiQuestion(payload) {
        try {
            const result = await this._model.insertMany(payload);
            if (result) {
                return this.cvtJSON(result);
            }
            return [];
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-MultiQuestion');
            return [];
        }
    }
    async deleteQuestion(id, userId) {
        try {
            const deletedQuestion = await this._model.findOneAndRemove({
                _id: id,
                createBy: userId,
            });
            if (deletedQuestion) {
                return this.cvtJSON(deletedQuestion);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'DELETE-ClassesService');
            return null;
        }
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(question_entity_1.Question.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], QuestionService);
exports.QuestionService = QuestionService;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Question = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
class Question extends baseModel_entity_1.BaseModel {
    static get model() {
        return new Question().getModelForClass(Question, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "question", void 0);
__decorate([
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], Question.prototype, "answers", void 0);
__decorate([
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], Question.prototype, "correct", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Question.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Question.prototype, "duration", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Question.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({}),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "idSetOfQuestions", void 0);
__decorate([
    typegoose_1.prop({}),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "createBy", void 0);
exports.Question = Question;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DFStatus = void 0;
var DFStatus;
(function (DFStatus) {
    DFStatus[DFStatus["inActive"] = 0] = "inActive";
    DFStatus[DFStatus["Active"] = 1] = "Active";
})(DFStatus = exports.DFStatus || (exports.DFStatus = {}));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Error2SchoolException = void 0;
const common_1 = __webpack_require__(3);
class Error2SchoolException extends common_1.InternalServerErrorException {
    constructor(message, error) {
        if (message) {
            super(message, error);
        }
        else {
            super('ErrorException');
        }
    }
}
exports.Error2SchoolException = Error2SchoolException;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = exports.Ok = exports.ApiBaseResponse = void 0;
class ApiBaseResponse {
    constructor(statusCode, message = null, success = false) {
        this.StatusCode = statusCode;
        this.Message = message !== null && message !== void 0 ? message : this.GetDefaultMessageForStatusCode(statusCode);
        this.Success = success;
    }
    GetDefaultMessageForStatusCode(statusCode) {
        switch (statusCode) {
            case 400:
                return 'A bad request, you have made';
            case 401:
                return 'Authorized, you are not';
            case 404:
                return 'Resource found, it was not';
            case 500:
                return 'Errors are the path to the dark side. Errors lead to anger. Anger leads to hate. Hate leads to career change';
            default:
                null;
        }
    }
}
exports.ApiBaseResponse = ApiBaseResponse;
class Ok {
    constructor(message, data, statusCode = 200, success = true) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        this.data = data;
    }
}
exports.Ok = Ok;
class BaseController {
    resApi(data, mess = '') {
        if (data) {
            return new Ok(mess, data);
        }
        return new ApiBaseResponse(404);
    }
}
exports.BaseController = BaseController;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateQuestionDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateQuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "question", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "score", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "idSetOfQuestions", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(6),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], CreateQuestionDto.prototype, "answers", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], CreateQuestionDto.prototype, "correct", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(10),
    class_validator_1.Max(120),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "duration", void 0);
exports.CreateQuestionDto = CreateQuestionDto;


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapModule = void 0;
const common_1 = __webpack_require__(3);
const roadMap_service_1 = __webpack_require__(35);
const mongoose_1 = __webpack_require__(4);
const road_map_entity_1 = __webpack_require__(36);
const roadMap_controller_1 = __webpack_require__(37);
let RoadMapModule = class RoadMapModule {
};
RoadMapModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: road_map_entity_1.RoadMap.modelName, schema: road_map_entity_1.RoadMap.model.schema },
            ]),
        ],
        controllers: [roadMap_controller_1.RoadMapController],
        providers: [roadMap_service_1.RoadMapService],
    })
], RoadMapModule);
exports.RoadMapModule = RoadMapModule;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapService = void 0;
const logger_service_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const typegoose_1 = __webpack_require__(7);
const road_map_entity_1 = __webpack_require__(36);
let RoadMapService = class RoadMapService extends baseService_service_1.BaseService {
    constructor(_roadMapModel, _loggerService) {
        super();
        this._roadMapModel = _roadMapModel;
        this._loggerService = _loggerService;
        this._model = _roadMapModel;
    }
    async createRoadMap(createdBy, idClass, createDto) {
        try {
            const obj = Object.assign({}, createDto);
            obj.createBy = createdBy;
            obj.classBy = idClass;
            const newRoadMap = road_map_entity_1.RoadMap.createModel(obj);
            const roadMapS = await this.create(newRoadMap);
            if (roadMapS) {
                return this.cvtJSON(roadMapS);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-ClassesService');
            return null;
        }
    }
};
RoadMapService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(road_map_entity_1.RoadMap.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RoadMapService);
exports.RoadMapService = RoadMapService;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMap = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const baseModel_entity_2 = __webpack_require__(6);
const status_enum_1 = __webpack_require__(29);
class RoadMap extends baseModel_entity_2.BaseModel {
    static get model() {
        return new RoadMap().getModelForClass(RoadMap, {
            schemaOptions: baseModel_entity_1.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    __metadata("design:type", Number)
], RoadMap.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RoadMap.prototype, "createBy", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RoadMap.prototype, "classBy", void 0);
exports.RoadMap = RoadMap;


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapController = void 0;
const status_enum_1 = __webpack_require__(29);
const query_dto_1 = __webpack_require__(38);
const user_decorator_1 = __webpack_require__(23);
const roadMap_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(39);
const res_dto_1 = __webpack_require__(40);
const resource_exception_1 = __webpack_require__(26);
const baseController_1 = __webpack_require__(31);
const logger_service_1 = __webpack_require__(12);
const res_dto_2 = __webpack_require__(41);
const errors_exception_1 = __webpack_require__(30);
let RoadMapController = class RoadMapController {
    constructor(roadMapService, loggerService) {
        this.roadMapService = roadMapService;
        this.loggerService = loggerService;
    }
    async createRoadMap(user, query, createRoadMap) {
        try {
            const result = await this.roadMapService.createRoadMap(user.createdBy, query.idClass, createRoadMap);
            if (result) {
                return new baseController_1.Ok('Create RoadMap success', this.roadMapService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateRoadMap(user, query, updateRoadMap) {
        try {
            const result = await this.roadMapService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, updateRoadMap);
            if (result) {
                return new baseController_1.Ok('Update RoadMap success', this.roadMapService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async changeRoadMap(user, query) {
        try {
            const result = await this.roadMapService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, { status: ~~query.status });
            if (result) {
                return new baseController_1.Ok('Delete RoadMap success', this.roadMapService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Delete-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getRoadMapByClass(user, query) {
        try {
            const result = await this.roadMapService.findAll({
                classBy: query.idClass,
                status: status_enum_1.DFStatus.Active,
            });
            const sortResult = result.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
            return new baseController_1.Ok('Get RoadMap success', this.roadMapService.cvtJSON(sortResult));
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Get- Road Map False');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, Object, typeof (_b = typeof res_dto_1.CreateRoadMapDto !== "undefined" && res_dto_1.CreateRoadMapDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RoadMapController.prototype, "createRoadMap", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object, typeof (_d = typeof res_dto_2.UpdateRoadMap !== "undefined" && res_dto_2.UpdateRoadMap) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], RoadMapController.prototype, "updateRoadMap", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object, typeof (_f = typeof query_dto_1.QueryDeleteRoadMap !== "undefined" && query_dto_1.QueryDeleteRoadMap) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], RoadMapController.prototype, "changeRoadMap", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapController.prototype, "getRoadMapByClass", null);
RoadMapController = __decorate([
    common_1.Controller('api/road-map'),
    __metadata("design:paramtypes", [typeof (_h = typeof roadMap_service_1.RoadMapService !== "undefined" && roadMap_service_1.RoadMapService) === "function" ? _h : Object, typeof (_j = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _j : Object])
], RoadMapController);
exports.RoadMapController = RoadMapController;


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryDeleteRoadMap = void 0;
const class_validator_1 = __webpack_require__(33);
var statusRoadMap;
(function (statusRoadMap) {
    statusRoadMap[statusRoadMap["Inactive"] = 0] = "Inactive";
    statusRoadMap[statusRoadMap["Active"] = 1] = "Active";
})(statusRoadMap || (statusRoadMap = {}));
class QueryDeleteRoadMap {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QueryDeleteRoadMap.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QueryDeleteRoadMap.prototype, "status", void 0);
exports.QueryDeleteRoadMap = QueryDeleteRoadMap;


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(4);
let User = class User {
};
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "intro", void 0);
__decorate([
    mongoose_1.Prop({ default: null, ref: 'UpLoadFile' }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "blurHash", void 0);
__decorate([
    mongoose_1.Prop({ default: '', RegExp: /^[0-9]{10}$/ }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ }),
    __metadata("design:type", String)
], User.prototype, "createdBy", void 0);
User = __decorate([
    mongoose_1.Schema({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoadMapDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateRoadMapDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRoadMapDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRoadMapDto.prototype, "description", void 0);
exports.CreateRoadMapDto = CreateRoadMapDto;


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRoadMap = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateRoadMap {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRoadMap.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRoadMap.prototype, "description", void 0);
exports.UpdateRoadMap = UpdateRoadMap;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModule = void 0;
const device_entity_1 = __webpack_require__(43);
const common_1 = __webpack_require__(3);
const device_service_1 = __webpack_require__(44);
const device_controller_1 = __webpack_require__(46);
const mongoose_1 = __webpack_require__(4);
let DeviceModule = class DeviceModule {
};
DeviceModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: device_entity_1.Device.modelName, schema: device_entity_1.Device.model.schema },
            ]),
        ],
        controllers: [device_controller_1.DeviceController],
        providers: [device_service_1.DeviceService],
        exports: [device_service_1.DeviceService],
    })
], DeviceModule);
exports.DeviceModule = DeviceModule;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Device = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const class_transformer_1 = __webpack_require__(8);
class Device extends baseModel_entity_2.BaseModel {
    static get model() {
        return new Device().getModelForClass(Device, { schemaOptions: baseModel_entity_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "appVersion", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "deviceModel", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "deviceUUid", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "fcmToken", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Device.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "createdBy", void 0);
exports.Device = Device;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const device_entity_1 = __webpack_require__(43);
const fire = __webpack_require__(45);
let DeviceService = class DeviceService extends baseService_service_1.BaseService {
    constructor(_deviceModel, _loggerService) {
        super();
        this._deviceModel = _deviceModel;
        this._loggerService = _loggerService;
        this._model = _deviceModel;
    }
    async createDevice(payload) {
        try {
            const device = await this.findOne({
                createdBy: payload.createdBy,
                deviceUUid: payload.deviceUUid,
            });
            if (device) {
                const result = await this.findOneAndUpdate({
                    createdBy: payload.createdBy,
                    deviceUUid: payload.deviceUUid,
                }, {
                    fcmToken: payload.fcmToken,
                });
                return JSON.parse(JSON.stringify(result));
            }
            else {
                const newDevice = device_entity_1.Device.createModel(payload);
                const result = await this.create(newDevice);
                return JSON.parse(JSON.stringify(result));
            }
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'createDevice-DeviceService');
        }
    }
    async updateDevice(id, payload) {
        try {
            const newDevice = device_entity_1.Device.createModel(payload);
            const result = await this.update(id, newDevice);
            return JSON.parse(JSON.stringify(result));
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'updateDevice-DeviceService');
        }
    }
    async findAllDevice(filter = {}) {
        try {
            const result = await this.findAll(filter);
            return JSON.parse(JSON.stringify(result));
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'findAllDevice-DeviceService');
        }
    }
    async pushDevice(id, payload) {
        try {
            const device = await this.findOne({
                createdBy: id,
            });
            if (!device) {
                this._loggerService.error('Dont find device', null, 'pushDevice-DeviceService');
                return;
            }
            const data = Promise.all([
                await fire.messaging().sendToDevice(device.fcmToken, payload),
            ]);
            console.log('Successfully sent message:', data);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
        }
    }
    async pushDevices(ids, payload) {
        try {
            let listDevice = [];
            for (const id of ids) {
                const device = (await this.findAll({
                    createdBy: id,
                }));
                if (device) {
                    listDevice = [...listDevice, ...device.map((e) => e.fcmToken)];
                }
            }
            console.log(`LHA:  ===> file: device.service.ts ===> line 72 ===> listDevice`, listDevice);
            const tokens = [
                'cK8t4Px6Qz6UZqd2D6x5Tp:APA91bHxAB4fu4lkssgRPW1CpRUIjreiyPWHNjWlCGY-nZDwYGKcbGQGmIgtnAbr3vmKRYFNdriBcbP-LU0U016JzjbCuf81uC_ZzXAh1K_Qd4ZXyE9udlam-3911brIvVgmm6RbafxL',
            ];
            const result = await fire.messaging().sendToDevice(listDevice, payload);
            console.log(`LHA:  ===> file: device.service.ts ===> line 120 ===> result`, result);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
        }
    }
};
DeviceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(device_entity_1.Device.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], DeviceService);
exports.DeviceService = DeviceService;


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceController = void 0;
const common_1 = __webpack_require__(3);
const device_service_1 = __webpack_require__(44);
let DeviceController = class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    create(createDeviceDto) {
        return this.deviceService.createDevice(createDeviceDto);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "create", null);
DeviceController = __decorate([
    common_1.Controller('api/device'),
    __metadata("design:paramtypes", [typeof (_a = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _a : Object])
], DeviceController);
exports.DeviceController = DeviceController;


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassModule = void 0;
const logger_service_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
const class_service_1 = __webpack_require__(48);
const class_controller_1 = __webpack_require__(57);
const mongoose_1 = __webpack_require__(4);
const class_entity_1 = __webpack_require__(49);
const user_service_1 = __webpack_require__(50);
const user_module_1 = __webpack_require__(62);
const user_entity_1 = __webpack_require__(39);
const memberClass_service_1 = __webpack_require__(55);
const memberClass_entity_1 = __webpack_require__(56);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
let ClassModule = class ClassModule {
};
ClassModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: memberClass_entity_1.MemberClasses.name, schema: memberClass_entity_1.MemberClasses.model.schema },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [class_controller_1.ClassController],
        providers: [
            class_service_1.ClassService,
            logger_service_1.LoggerService,
            memberClass_service_1.MemberClassService,
            user_service_1.UserService,
            up_load_file_service_1.UpLoadFileService,
        ],
        exports: [class_service_1.ClassService],
    })
], ClassModule);
exports.ClassModule = ClassModule;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassService = void 0;
const class_entity_1 = __webpack_require__(49);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
const user_service_1 = __webpack_require__(50);
const memberClass_service_1 = __webpack_require__(55);
const errors_exception_1 = __webpack_require__(30);
const mongoose = __webpack_require__(11);
const up_load_file_service_1 = __webpack_require__(52);
let ClassService = class ClassService extends baseService_service_1.BaseService {
    constructor(_classModel, _loggerService, _userService, _memberClassService, _uploadFileService, connection) {
        super();
        this._classModel = _classModel;
        this._loggerService = _loggerService;
        this._userService = _userService;
        this._memberClassService = _memberClassService;
        this._uploadFileService = _uploadFileService;
        this.connection = connection;
        this._model = _classModel;
    }
    async createClasses(createdBy, createClassDto) {
        try {
            const obj = Object.assign({}, createClassDto);
            obj.createdBy = createdBy;
            const newClass = class_entity_1.Classes.createModel(obj);
            const newClasses = await this.create(newClass);
            const joinMember = await this.joinMemberClass(createdBy, newClass._id, 2);
            if (newClasses) {
                return this.cvtJSON(newClasses);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-ClassesService');
            return null;
        }
    }
    async findAllMemberClass(idClass, status = 1) {
        try {
            const result = await this._memberClassService.getMemberByClass(idClass, status);
            return result;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'findAllMemberClass-ClassesService');
        }
    }
    async findAllClasses(user, query = { skip: '0', limit: '15' }, host) {
        try {
            const classMember = await this._memberClassService.getClassByUserJoined(user._id);
            console.log(`LHA:  ===> file: class.service.ts ===> line 84 ===> classMember`, classMember);
            const newClasses = await this.findAll({ $or: [{ createdBy: user.createdBy }, { _id: { $in: classMember } }] }, query, 'createdBy');
            console.log(`LHA:  ===> file: class.service.ts ===> line 89 ===> newClasses`, newClasses);
            const classes = this.cvtJSON(newClasses);
            const result = [];
            for (const c of classes) {
                const obj = Object.assign({}, c);
                if (!(c.image === '')) {
                    const image = await this._uploadFileService.findById(c.image);
                    if (image)
                        obj.image = image.path;
                }
                obj.member = await this._memberClassService.getMemberByClass(obj._id);
                result.push(obj);
            }
            return result;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'FIND_ALL_CLASSES-ClassesService');
            return null;
        }
    }
    async findOneClasses(filter = {}) {
        try {
            const newClasses = await this.findOne(filter);
            if (newClasses) {
                return this.cvtJSON(newClasses);
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'FIND_ONE_CLASSES-ClassesService');
            return null;
        }
    }
    async updateClasses(id, payload) {
        try {
            const updateClasses = await this.update(id, payload);
            if (updateClasses) {
                return this.cvtJSON(updateClasses);
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'Update-ClassesService');
            return null;
        }
    }
    async removeClasses(id) {
        try {
            const updateClasses = await this.update(id, {
                status: status_enum_1.DFStatus.inActive,
            });
            if (updateClasses) {
                return this.cvtJSON(updateClasses);
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'Remove-ClassesService');
            return null;
        }
    }
    async recommendClasses(idUser) {
        try {
            const memberClass = await this._memberClassService.findAll({
                user: idUser,
            });
            const arrClass = memberClass.map((e) => e.idClass);
            const classes = this.cvtJSON(await this.findAll({
                _id: { $nin: arrClass },
                status: status_enum_1.DFStatus.Active,
            }, { skip: '0', limit: '100' }, "createdBy"));
            const result = [];
            for (const c of classes) {
                const obj = Object.assign({}, c);
                if (!(c.image === '')) {
                    const image = await this._uploadFileService.findById(c.image);
                    if (image)
                        obj.image = image.path;
                }
                result.push(obj);
            }
            return this.cvtJSON(result);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'recommendClasses-ClassesService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async joinMemberClass(idUser, idClass, role = 0) {
        try {
            const newMemberClass = await this._memberClassService.joinClass(idUser, idClass, role);
            if (newMemberClass) {
                return true;
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'Remove-ClassesService');
            return null;
        }
    }
    async leaveMemberClass(idUser, idClass) {
        try {
            const newMemberClass = await this._memberClassService.leaveClass(idUser, idClass);
            if (newMemberClass) {
                return true;
            }
            return false;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'Remove-ClassesService');
            return null;
        }
    }
    async checkHostClass(idUser, idClass) {
        try {
            const newHostClass = await this.findOne({
                createdBy: idUser,
                _id: idClass,
            });
            if (newHostClass) {
                return newHostClass;
            }
            throw new common_1.NotFoundException('Not found class by User');
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'checkHostClass-ClassesService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateLastedMessage(idClass, idMessage) {
        try {
            const classes = await this.update(idClass, {
                latestMessage: this.toObjectId(idMessage),
            });
            if (classes) {
                return true;
            }
            return false;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'updateLastedMessage-ClassesService');
            return false;
        }
    }
};
ClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(class_entity_1.Classes.modelName)),
    __param(5, mongoose_1.InjectConnection()),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _d : Object, typeof (_e = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _e : Object, typeof (_f = typeof mongoose !== "undefined" && mongoose.Connection) === "function" ? _f : Object])
], ClassService);
exports.ClassService = ClassService;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Classes = void 0;
const status_enum_1 = __webpack_require__(29);
const class_transformer_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(7);
const baseModel_entity_1 = __webpack_require__(6);
class Classes extends baseModel_entity_1.BaseModel {
    static get model() {
        return new Classes().getModelForClass(Classes, { schemaOptions: baseModel_entity_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        const result = new this.model(payload);
        return result;
    }
}
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "intro", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "topic", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "image", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "blurHash", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Classes.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'User' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], Classes.prototype, "createdBy", void 0);
__decorate([
    typegoose_1.prop({ ref: 'Message' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], Classes.prototype, "latestMessage", void 0);
__decorate([
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], Classes.prototype, "setOfQuestionShare", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Classes.prototype, "price", void 0);
exports.Classes = Classes;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const logger_service_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const respone_service_1 = __webpack_require__(51);
const mongoose_2 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(39);
const up_load_file_service_1 = __webpack_require__(52);
let UserService = class UserService extends respone_service_1.ResponseService {
    constructor(userModel, loggerService, uploadService) {
        super();
        this.userModel = userModel;
        this.loggerService = loggerService;
        this.uploadService = uploadService;
    }
    async findAll(query) {
        try {
            const users = await this.userModel
                .find()
                .limit(+query.limit)
                .skip(+query.skip)
                .lean();
            return this.ResponseServiceSuccess(users);
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findAll-UserService');
            return null;
        }
    }
    async findById(id) {
        try {
            const user = await this.userModel.findById(id).lean();
            if (user)
                return this.ResponseServiceSuccess(user);
            return null;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findById-UserService');
            return null;
        }
    }
    async findByIdAndImage(id) {
        try {
            const user = await this.userModel.findOne({ createdBy: id }).lean();
            if (user) {
                if (!!user.image) {
                    const image = await this.uploadService.findById(user.image);
                    user.image = image.path;
                }
                return JSON.parse(JSON.stringify(user));
            }
            return null;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findById-UserService');
            return null;
        }
    }
    async findOne(payload) {
        try {
            const user = await this.userModel.findOne(payload).lean();
            if (user)
                return this.ResponseServiceSuccess(user);
            return null;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findOne-UserService');
            return null;
        }
    }
    async update(id, payload) {
        try {
            const obj = Object.assign({}, payload);
            obj.displayName = payload.firstName + ' ' + payload.lastName;
            const user = await this.userModel
                .findOneAndUpdate({ _id: id }, obj, { new: true })
                .lean();
            if (user) {
                const cloneUser = JSON.parse(JSON.stringify(user));
                if (cloneUser.image) {
                    const image = await this.uploadService.findById(cloneUser.image);
                    cloneUser.image = image.path || '';
                }
                return this.ResponseServiceSuccess(cloneUser);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'findOne-UserService');
            return null;
        }
    }
    async updateAvatar(id, payload) {
        try {
            const obj = Object.assign({}, payload);
            const user = await this.userModel
                .findOneAndUpdate({ _id: id }, obj, { new: true })
                .lean();
            if (user) {
                const cloneUser = JSON.parse(JSON.stringify(user));
                if (cloneUser.image) {
                    const image = await this.uploadService.findById(cloneUser.image);
                    cloneUser.image = image.path || '';
                }
                return this.ResponseServiceSuccess(cloneUser);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'findOne-UserService');
            return null;
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_entity_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _c : Object])
], UserService);
exports.UserService = UserService;


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseService = void 0;
class ResponseService {
    ResponseServiceSuccess(data) {
        return JSON.parse(JSON.stringify(data));
    }
}
exports.ResponseService = ResponseService;


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFileService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const errors_exception_1 = __webpack_require__(30);
const user_not_found_exception_1 = __webpack_require__(53);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const upLoadFile_entity_1 = __webpack_require__(54);
let UpLoadFileService = class UpLoadFileService extends baseService_service_1.BaseService {
    constructor(_upLoadFileModel, _loggerService) {
        super();
        this._upLoadFileModel = _upLoadFileModel;
        this._loggerService = _loggerService;
        this._model = _upLoadFileModel;
    }
    async createUploadFile(fileName, path) {
        try {
            const obj = {
                name: fileName,
                path: path,
            };
            const model = upLoadFile_entity_1.UpLoadFile.createModel(obj);
            const newUploadFile = await this.create(model);
            if (newUploadFile) {
                return { id: newUploadFile.id };
            }
            throw new user_not_found_exception_1.UserNotFoundException('Upload file false when save model');
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'upLoadFileService-createUploadFile');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
UpLoadFileService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(upLoadFile_entity_1.UpLoadFile.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UpLoadFileService);
exports.UpLoadFileService = UpLoadFileService;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserNotFoundException = void 0;
const common_1 = __webpack_require__(3);
class UserNotFoundException extends common_1.NotFoundException {
    constructor(error) {
        super('error.user_not_found', error);
    }
}
exports.UserNotFoundException = UserNotFoundException;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFile = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
class UpLoadFile extends baseModel_entity_1.BaseModel {
    static get model() {
        return new UpLoadFile().getModelForClass(UpLoadFile, {
            schemaOptions: baseModel_entity_1.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        const result = new this.model(payload);
        return result;
    }
}
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UpLoadFile.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UpLoadFile.prototype, "path", void 0);
exports.UpLoadFile = UpLoadFile;


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClassService = void 0;
const memberClass_entity_1 = __webpack_require__(56);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
const user_service_1 = __webpack_require__(50);
const errors_exception_1 = __webpack_require__(30);
const user_not_found_exception_1 = __webpack_require__(53);
const up_load_file_service_1 = __webpack_require__(52);
let MemberClassService = class MemberClassService extends baseService_service_1.BaseService {
    constructor(_memberClassModel, _loggerService, _userService, _uploadService) {
        super();
        this._memberClassModel = _memberClassModel;
        this._loggerService = _loggerService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.checkExitsUserInClass = async (idUser, idClass) => {
            try {
                const obj = {
                    user: idUser,
                    idClass: idClass,
                };
                const memberClass = await this._model.findOne(obj).lean();
                return this.cvtJSON(memberClass);
            }
            catch (e) {
                this._loggerService.error(e.message, null, 'leaveClass-MemberClassService');
                throw new errors_exception_1.Error2SchoolException(e.message);
            }
        };
        this._model = _memberClassModel;
    }
    async getClassByUserJoined(idUser) {
        try {
            const obj = {
                user: idUser,
                status: status_enum_1.DFStatus.Active,
            };
            const members = await this.findAll(obj);
            return members.map((e) => e.idClass);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'getClassByUserJoined-MemberClassService');
            return null;
        }
    }
    async joinClass(idUser, idClass, role = 0) {
        try {
            const obj = {
                user: idUser,
                idClass: idClass,
                role: role,
            };
            const exitsClass = await this.findOne(obj);
            if (!exitsClass) {
                const model = memberClass_entity_1.MemberClasses.createModel(obj);
                const newMember = await this.create(model);
                if (newMember) {
                    return this.cvtJSON(newMember);
                }
                return null;
            }
            throw new user_not_found_exception_1.UserNotFoundException('You have to join into layer');
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'joinClass-MemberClassService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async leaveClass(idUser, idClass) {
        try {
            const obj = {
                idUser: idUser,
                idClass: idClass,
            };
            const classes = await this._model.findOneAndRemove(obj);
            if (classes) {
                return true;
            }
            return false;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'leaveClass-MemberClassService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getMemberByClass(idClass, status = 1) {
        var _a;
        try {
            const obj = {
                idClass: idClass,
                status: status,
            };
            const memberClass = await this._model.find(obj).populate('user').lean();
            const result = [];
            for (const member of memberClass) {
                const obj = Object.assign({}, member);
                if (((_a = obj.user) === null || _a === void 0 ? void 0 : _a.image) !== '') {
                    const image = await this._uploadService.findById(obj.user.image);
                    if (image)
                        obj.user.image = image.path;
                }
                result.push(obj);
            }
            return this.cvtJSON(memberClass);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'leaveClass-MemberClassService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getMemberNotifyByClass(idClass, status = 1) {
        try {
            const obj = {
                idClass: idClass,
                status: status,
                role: 0,
            };
            const memberClass = await this._model.find(obj).select('idUser').lean();
            return this.cvtJSON(memberClass);
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'leaveClass-MemberClassService');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
MemberClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(memberClass_entity_1.MemberClasses.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _d : Object])
], MemberClassService);
exports.MemberClassService = MemberClassService;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClasses = void 0;
const status_enum_1 = __webpack_require__(29);
const class_transformer_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(7);
const baseModel_entity_1 = __webpack_require__(6);
class MemberClasses extends baseModel_entity_1.BaseModel {
    static get model() {
        return new MemberClasses().getModelForClass(MemberClasses, {
            schemaOptions: baseModel_entity_1.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        const result = new this.model(payload);
        return result;
    }
}
__decorate([
    typegoose_1.prop({ required: true, ref: 'User' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], MemberClasses.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'Classes' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], MemberClasses.prototype, "idClass", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], MemberClasses.prototype, "role", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], MemberClasses.prototype, "status", void 0);
exports.MemberClasses = MemberClasses;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassController = void 0;
const common_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const baseController_1 = __webpack_require__(31);
const host_decorator_1 = __webpack_require__(58);
const status_enum_1 = __webpack_require__(29);
const errors_exception_1 = __webpack_require__(30);
const resource_exception_1 = __webpack_require__(26);
const logger_service_1 = __webpack_require__(12);
const create_class_dto_1 = __webpack_require__(59);
const query_dto_1 = __webpack_require__(60);
const req_dto_1 = __webpack_require__(61);
const class_service_1 = __webpack_require__(48);
const mongoose = __webpack_require__(11);
let ClassController = class ClassController extends baseController_1.BaseController {
    constructor(loggerService, classService, uploadService) {
        super();
        this.loggerService = loggerService;
        this.classService = classService;
        this.uploadService = uploadService;
    }
    async create(user, createClassDto) {
        try {
            const result = await this.classService.createClasses(user._id, createClassDto);
            if (result) {
                return new baseController_1.Ok('Create Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async update(user, query, updateClassDto) {
        try {
            const obj = Object.assign({}, updateClassDto);
            if (obj['setOfQuestionShare']) {
                obj['setOfQuestionShare'] = obj['setOfQuestionShare'].map((item) => new mongoose.Types.ObjectId(item));
            }
            const result = await this.classService.findOneAndUpdate({ createdBy: user._id, _id: query.id }, obj);
            if (result) {
                const cloneClass = this.classService.cvtJSON(result);
                if (cloneClass.image) {
                    const image = await this.uploadService.findById(cloneClass.image);
                    cloneClass.image = image.path || '';
                }
                return new baseController_1.Ok('Update Class success', cloneClass);
            }
            throw new resource_exception_1.ResourceFoundException('Dont find Class Update');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Update-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateImage(user, query, updateClassDto) {
        try {
            console.log('run hre');
            const result = await this.classService.findOneAndUpdate({ createdBy: user._id, _id: query.id }, updateClassDto);
            if (result) {
                const cloneClass = this.classService.cvtJSON(result);
                if (cloneClass.image) {
                    const image = await this.uploadService.findById(cloneClass.image);
                    cloneClass.image = (image === null || image === void 0 ? void 0 : image.path) || '';
                }
                return new baseController_1.Ok('Update Class Image success', cloneClass);
            }
            throw new resource_exception_1.ResourceFoundException('Dont Find Class Update Image');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Update-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async findAll(host, user) {
        try {
            const result = await this.classService.findAllClasses(user, {
                limit: '15',
                skip: '0',
            }, host);
            if (result) {
                return new baseController_1.Ok('Get Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getMemberClass(query) {
        try {
            const result = await this.classService.findAllMemberClass(query.idClass);
            if (result) {
                return new baseController_1.Ok('Get Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async changeStatusClass(user, query) {
        try {
            const result = await this.classService.update(query.id, {
                status: status_enum_1.DFStatus[status_enum_1.DFStatus[(query === null || query === void 0 ? void 0 : query.status) || 0]],
            });
            if (result) {
                return new baseController_1.Ok('Get Class success', this.classService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException('Change Status False');
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'changeStatus-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async joinMemberClass(user, payload) {
        try {
            const result = await this.classService.joinMemberClass(user._id, payload.idClass);
            if (result) {
                return new baseController_1.Ok('Join Class success', this.classService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'joinMember-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async leaveClass(user, payload) {
        try {
            const result = await this.classService.leaveMemberClass(user.createdBy, payload.idClass);
            if (result) {
                return new baseController_1.Ok('Leave Class success', this.classService.cvtJSON(result));
            }
            else {
                return new baseController_1.Ok('Dont Find Member Leave success', this.classService.cvtJSON(result));
            }
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'Leave-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async recommendClasses(user) {
        try {
            const result = await this.classService.recommendClasses(user._id);
            if (result) {
                return new baseController_1.Ok('Join Class success', this.classService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'joinMember-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_class_dto_1.CreateClassDto !== "undefined" && create_class_dto_1.CreateClassDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "create", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "update", null);
__decorate([
    common_1.Patch('image'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_e = typeof req_dto_1.UpdateImageDto !== "undefined" && req_dto_1.UpdateImageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "updateImage", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, host_decorator_1.HostName()),
    __param(1, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findAll", null);
__decorate([
    common_1.Get('members'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getMemberClass", null);
__decorate([
    common_1.Get('changeStatus'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "changeStatusClass", null);
__decorate([
    common_1.Post('joinMember'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _h : Object, typeof (_j = typeof query_dto_1.JoinClassQuery !== "undefined" && query_dto_1.JoinClassQuery) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "joinMemberClass", null);
__decorate([
    common_1.Delete('leaveClass'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _k : Object, typeof (_l = typeof query_dto_1.JoinClassQuery !== "undefined" && query_dto_1.JoinClassQuery) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "leaveClass", null);
__decorate([
    common_1.Get('recommendClasses'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "recommendClasses", null);
ClassController = __decorate([
    common_1.Controller('api/classes'),
    __metadata("design:paramtypes", [typeof (_o = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _o : Object, typeof (_p = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _p : Object, typeof (_q = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _q : Object])
], ClassController);
exports.ClassController = ClassController;


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HostName = void 0;
const common_1 = __webpack_require__(3);
exports.HostName = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers.host;
});


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateClassDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateClassDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateClassDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateClassDto.prototype, "intro", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateClassDto.prototype, "topic", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateClassDto.prototype, "price", void 0);
exports.CreateClassDto = CreateClassDto;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JoinClassQuery = void 0;
const class_validator_1 = __webpack_require__(33);
class JoinClassQuery {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], JoinClassQuery.prototype, "idClass", void 0);
exports.JoinClassQuery = JoinClassQuery;


/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateImageDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateImageDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateImageDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateImageDto.prototype, "blurHash", void 0);
exports.UpdateImageDto = UpdateImageDto;


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const up_load_file_service_1 = __webpack_require__(52);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const user_controller_1 = __webpack_require__(63);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const logger_service_1 = __webpack_require__(12);
const upLoadFile_entity_1 = __webpack_require__(54);
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, up_load_file_service_1.UpLoadFileService, logger_service_1.LoggerService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const errors_exception_1 = __webpack_require__(30);
const resource_exception_1 = __webpack_require__(26);
const baseController_1 = __webpack_require__(31);
const query_interface_1 = __webpack_require__(64);
const logger_service_1 = __webpack_require__(12);
const res_dto_1 = __webpack_require__(65);
const res_dto_2 = __webpack_require__(66);
const user_service_1 = __webpack_require__(50);
let UserController = class UserController extends baseController_1.BaseController {
    constructor(userService, loggerService) {
        super();
        this.userService = userService;
        this.loggerService = loggerService;
    }
    async findAll(queries) {
        try {
            const result = await this.userService.findAll(queries);
            return this.resApi(result, 'Get Users Success');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findAll-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getUser(user) {
        try {
            return new baseController_1.Ok('Get User Success', user);
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findById-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async update(user, updateUserDto) {
        try {
            const result = await this.userService.update(user._id, updateUserDto);
            if (result) {
                return new baseController_1.Ok('Get User Success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateAvatar(user, payload) {
        try {
            const result = await this.userService.updateAvatar(user._id, payload);
            if (result) {
                return new baseController_1.Ok('Get User Success', result);
            }
            throw new resource_exception_1.ResourceFoundException('Update Avatar Fail');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof query_interface_1.IQueryFind !== "undefined" && query_interface_1.IQueryFind) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get('info'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof res_dto_2.UpdateUserDto !== "undefined" && res_dto_2.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Patch('avatar'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof res_dto_1.UpdateAvatarDto !== "undefined" && res_dto_1.UpdateAvatarDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAvatar", null);
UserController = __decorate([
    common_1.Controller('api/user'),
    __metadata("design:paramtypes", [typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _f : Object, typeof (_g = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _g : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateAvatarDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateAvatarDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateAvatarDto.prototype, "blurHash", void 0);
exports.UpdateAvatarDto = UpdateAvatarDto;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateUserDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "intro", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.IsPhoneNumber('VN'),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
exports.UpdateUserDto = UpdateUserDto;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const up_load_file_service_1 = __webpack_require__(52);
const auth_service_1 = __webpack_require__(68);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const local_strategy_1 = __webpack_require__(72);
const configService_module_1 = __webpack_require__(75);
const config_service_1 = __webpack_require__(14);
const setupJwt_1 = __webpack_require__(76);
const jwt_1 = __webpack_require__(70);
const jwt_strategy_1 = __webpack_require__(77);
const auth_entity_1 = __webpack_require__(71);
const auth_controller_1 = __webpack_require__(78);
const logger_service_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(39);
const upLoadFile_entity_1 = __webpack_require__(54);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: auth_entity_1.Auth.name, schema: auth_entity_1.AuthSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
            configService_module_1.ConfigModule,
            jwt_1.JwtModule.registerAsync(setupJwt_1.setupJWT('JWT_SECRET')),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            config_service_1.ConfigService,
            logger_service_1.LoggerService,
            up_load_file_service_1.UpLoadFileService,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(11);
const bcrypt = __webpack_require__(69);
const config_service_1 = __webpack_require__(14);
const logger_service_1 = __webpack_require__(12);
const respone_service_1 = __webpack_require__(51);
const jwt_1 = __webpack_require__(70);
const auth_entity_1 = __webpack_require__(71);
const user_entity_1 = __webpack_require__(39);
const up_load_file_service_1 = __webpack_require__(52);
let AuthService = class AuthService extends respone_service_1.ResponseService {
    constructor(accountModel, userModel, configService, loggerService, jwtService, upLoadFileService) {
        super();
        this.accountModel = accountModel;
        this.userModel = userModel;
        this.configService = configService;
        this.loggerService = loggerService;
        this.jwtService = jwtService;
        this.upLoadFileService = upLoadFileService;
    }
    jwtSecret() {
        return this.configService.get('JWT_SECRET');
    }
    async validateUser(payload) {
        const user = await this.userModel.findOne({ createdBy: payload.id }).lean();
        const newUser = Object.assign({}, user);
        if (newUser.image !== '') {
            const result = await this.upLoadFileService.findById(newUser.image);
            if (result) {
                newUser.image = result.path;
            }
        }
        return newUser;
    }
    async login(username, password) {
        try {
            const user = await this.accountModel.findOne({ username: username });
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    const token = this.jwtService.sign({
                        data: user._id,
                    });
                    return { token };
                }
                return null;
            }
            return null;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'LOGIN-Service');
            return null;
        }
    }
    async register(username, password, firstName, lastName) {
        try {
            const newPassword = await this.genPassword(password);
            const newAccount = new this.accountModel({
                username,
                password: newPassword,
            });
            await newAccount.save();
            const newUser = new this.userModel({
                firstName,
                lastName,
                displayName: `${firstName} ${lastName}`,
                createdBy: newAccount._id,
            });
            await newUser.save();
            const token = this.jwtService.sign({
                data: newAccount._id,
            });
            return { token };
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'REGISTER-Service');
            return null;
        }
    }
    async forgotPassword(username, password) {
        try {
            const _password = await this.genPassword(password);
            const dataUpdate = {
                password: _password,
                verify: true,
            };
            const updateAccount = await this.updateAccount(username, dataUpdate);
            if (updateAccount) {
                return this.ResponseServiceSuccess(updateAccount);
            }
            return null;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'FORGOT-PASSWORD-Service');
            return null;
        }
    }
    async genPassword(password) {
        const saltOrRounds = this.configService.get('SALT_OF_ROUNDS');
        const hash = await bcrypt.hash(password, ~~saltOrRounds);
        return hash;
    }
    async updateAccount(username, payload) {
        try {
            const _account = await this.accountModel.findOneAndUpdate({ username: username }, payload, { new: true });
            return _account;
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'UPDATE-ACCOUNT-Service');
            return null;
        }
    }
    async findAllUser() {
        const result = await this.accountModel.find().lean();
        return this.ResponseServiceSuccess(result);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(auth_entity_1.Auth.name)),
    __param(1, mongoose_1.InjectModel(user_entity_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object, typeof (_e = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _e : Object, typeof (_f = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _f : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 70 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthSchema = exports.Auth = void 0;
const mongoose_1 = __webpack_require__(4);
let Auth = class Auth {
};
__decorate([
    mongoose_1.Prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Auth.prototype, "username", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Auth.prototype, "verify", void 0);
Auth = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Auth);
exports.Auth = Auth;
exports.AuthSchema = mongoose_1.SchemaFactory.createForClass(Auth);


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_jwt_1 = __webpack_require__(73);
const passport_local_1 = __webpack_require__(74);
const passport_1 = __webpack_require__(25);
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(68);
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: authService.jwtSecret(),
        });
        this.authService = authService;
    }
    async validate(payload, done) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            return done(new common_1.UnauthorizedException(), false);
        }
        done(null, user);
    }
};
LocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(3);
const config_service_1 = __webpack_require__(14);
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [
            {
                provide: config_service_1.ConfigService,
                useValue: new config_service_1.ConfigService(),
            },
        ],
        exports: [config_service_1.ConfigService],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupJWT = void 0;
const configService_module_1 = __webpack_require__(75);
const config_service_1 = __webpack_require__(14);
function setupJWT(jwtSecret) {
    return {
        imports: [configService_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        useFactory: async (configService) => ({
            secret: configService.get(jwtSecret),
            signOptions: { expiresIn: '365d' },
        }),
    };
}
exports.setupJWT = setupJWT;


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(73);
const passport_1 = __webpack_require__(25);
const common_1 = __webpack_require__(3);
const config_service_1 = __webpack_require__(14);
const auth_service_1 = __webpack_require__(68);
const up_load_file_service_1 = __webpack_require__(52);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService, authService, uploadFileService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
            passReqToCallback: true,
        });
        this.configService = configService;
        this.authService = authService;
        this.uploadFileService = uploadFileService;
    }
    async validate(req, payload, done) {
        const user = await this.authService.validateUser({ id: payload.data });
        done(null, user);
        return done(new common_1.UnauthorizedException(), false);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _c : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const req_dto_1 = __webpack_require__(79);
const req_dto_2 = __webpack_require__(80);
const logger_service_1 = __webpack_require__(12);
const baseController_1 = __webpack_require__(31);
const jwt_auth_guard_1 = __webpack_require__(24);
const auth_service_1 = __webpack_require__(68);
const resource_exception_1 = __webpack_require__(26);
const errors_exception_1 = __webpack_require__(30);
let AuthController = class AuthController {
    constructor(authenticationService, loggerService) {
        this.authenticationService = authenticationService;
        this.loggerService = loggerService;
    }
    async login(payload) {
        try {
            const result = await this.authenticationService.login(payload.username, payload.password);
            if (result) {
                return new baseController_1.Ok('Login Success', result);
            }
            throw new common_1.UnauthorizedException('Login False');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'LOGIN-Controller');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async register(payload) {
        try {
            const result = await this.authenticationService.register(payload.username, payload.password, payload.firstName, payload.lastName);
            if (result) {
                return new baseController_1.Ok('Register Success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'REGISTER-Controller');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async forgotPassword(payload) {
        try {
            const result = await this.authenticationService.forgotPassword(payload.username, payload.password);
            if (result) {
                return new baseController_1.Ok('Register Success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'REGISTER-Controller');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async findAllUser() {
        try {
            const result = await this.authenticationService.findAllUser();
            if (result) {
                return new baseController_1.Ok('Register Success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'REGISTER-Controller');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post('/login'),
    common_1.HttpCode(200),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof req_dto_1.LoginAuthenticationDto !== "undefined" && req_dto_1.LoginAuthenticationDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('/register'),
    common_1.Header('Content-Type', 'application/json'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof req_dto_2.RegisterAuthenticationDto !== "undefined" && req_dto_2.RegisterAuthenticationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Post('/forgot-password'),
    common_1.HttpCode(200),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof req_dto_2.RegisterAuthenticationDto !== "undefined" && req_dto_2.RegisterAuthenticationDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    common_1.Get('/findAllUser'),
    common_1.HttpCode(200),
    common_1.Header('Content-Type', 'application/json'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findAllUser", null);
AuthController = __decorate([
    common_1.Controller('api/authentication'),
    __metadata("design:paramtypes", [typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object, typeof (_e = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginAuthenticationDto = void 0;
const class_validator_1 = __webpack_require__(33);
class LoginAuthenticationDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginAuthenticationDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginAuthenticationDto.prototype, "password", void 0);
exports.LoginAuthenticationDto = LoginAuthenticationDto;


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterAuthenticationDto = void 0;
const class_validator_1 = __webpack_require__(33);
class RegisterAuthenticationDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterAuthenticationDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterAuthenticationDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterAuthenticationDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RegisterAuthenticationDto.prototype, "firstName", void 0);
exports.RegisterAuthenticationDto = RegisterAuthenticationDto;


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupMongoDb = void 0;
const configService_module_1 = __webpack_require__(75);
const config_service_1 = __webpack_require__(14);
function setupMongoDb(mongoUri) {
    return {
        imports: [configService_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        useFactory: async (configService) => ({
            uri: configService.get(mongoUri),
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useCreateIndex: true,
        }),
    };
}
exports.setupMongoDb = setupMongoDb;


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfQuestionsModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const shared_module_1 = __webpack_require__(18);
const class_module_1 = __webpack_require__(47);
const class_entity_1 = __webpack_require__(49);
const class_service_1 = __webpack_require__(48);
const memberClass_entity_1 = __webpack_require__(56);
const memberClass_service_1 = __webpack_require__(55);
const question_module_1 = __webpack_require__(21);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const setOfQuestions_controller_1 = __webpack_require__(83);
const setOfQuestions_entity_1 = __webpack_require__(85);
const setOfQuestions_service_1 = __webpack_require__(84);
let SetOfQuestionsModule = class SetOfQuestionsModule {
};
SetOfQuestionsModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            question_module_1.QuestionModule,
            class_module_1.ClassModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: memberClass_entity_1.MemberClasses.name, schema: memberClass_entity_1.MemberClasses.model.schema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
                { name: setOfQuestions_entity_1.SetOfQuestion.modelName, schema: setOfQuestions_entity_1.SetOfQuestion.model.schema },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
            ]),
        ],
        controllers: [setOfQuestions_controller_1.SetOfQuestionsController],
        providers: [
            setOfQuestions_service_1.SetOfQuestionsService,
            class_service_1.ClassService,
            user_service_1.UserService,
            memberClass_service_1.MemberClassService,
            up_load_file_service_1.UpLoadFileService,
        ],
    })
], SetOfQuestionsModule);
exports.SetOfQuestionsModule = SetOfQuestionsModule;


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfQuestionsController = void 0;
const class_service_1 = __webpack_require__(48);
const user_decorator_1 = __webpack_require__(23);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const logger_service_1 = __webpack_require__(12);
const setOfQuestions_service_1 = __webpack_require__(84);
const baseController_1 = __webpack_require__(31);
const resource_exception_1 = __webpack_require__(26);
const errors_exception_1 = __webpack_require__(30);
const user_entity_1 = __webpack_require__(39);
const req_dto_1 = __webpack_require__(86);
const req_dto_2 = __webpack_require__(87);
const query_dto_1 = __webpack_require__(88);
const req_dto_3 = __webpack_require__(89);
const req_dto_4 = __webpack_require__(90);
let SetOfQuestionsController = class SetOfQuestionsController {
    constructor(_setOfQuestionsService, _classesService, loggerService) {
        this._setOfQuestionsService = _setOfQuestionsService;
        this._classesService = _classesService;
        this.loggerService = loggerService;
    }
    async createSetOfQuestions(user, payload) {
        try {
            const result = await this._setOfQuestionsService.createSetOfQuestions(user._id, payload);
            if (result) {
                return new baseController_1.Ok('Create SetOfQuestions success', this._setOfQuestionsService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async createSetOfQuestionsExcel(user, query, payload) {
        try {
            const result = await this._setOfQuestionsService.createSetOfQuestionExcel(user._id, query.idSetOfQuestion, payload);
            if (result) {
                return new baseController_1.Ok('Create SetOfQuestions success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async createSetOfQuestionsShare(user, payload) {
        try {
            const result = await this._setOfQuestionsService.createSetOfQuestions(user._id, Object.assign(Object.assign({}, payload), { type: 1 }));
            if (result) {
                return new baseController_1.Ok('Create SetOfQuestions success', this._setOfQuestionsService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async createSetOfQuestionsExcelShare(user, query, payload) {
        try {
            const result = await this._setOfQuestionsService.createSetOfQuestionExcel(user.createdBy, query.idSetOfQuestion, payload);
            if (result) {
                return new baseController_1.Ok('Create SetOfQuestions success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateSetOfQuestions(user, query, payload) {
        try {
            const result = await this._setOfQuestionsService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, payload);
            if (result) {
                return new baseController_1.Ok('Update SetOfQuestions success', this._setOfQuestionsService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'update-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async changeSetOfQuestions(user, query) {
        try {
            const result = await this._setOfQuestionsService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, { status: ~~query.status });
            if (result) {
                return new baseController_1.Ok('Delete SetOfQuestions success', this._setOfQuestionsService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException('Dont find Set Of Question');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Delete-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getSetOfQuestions(user, query) {
        try {
            const _class = await this._classesService.findOne({ _id: query.classId });
            let setOfQuestionShare = null;
            if (_class && _class.setOfQuestionShare) {
                setOfQuestionShare = await this._setOfQuestionsService.findAll({
                    _id: { $in: _class.setOfQuestionShare },
                });
            }
            const result = await this._setOfQuestionsService.findAll({
                createBy: user.createdBy,
                classBy: query.classId,
                status: query.status,
            });
            const res = setOfQuestionShare
                ? [
                    ...this._setOfQuestionsService.cvtJSON(result),
                    this._setOfQuestionsService.cvtJSON(setOfQuestionShare),
                ]
                : this._setOfQuestionsService.cvtJSON(result);
            if (res) {
                return new baseController_1.Ok('Get SetOfQuestions success', res);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Get-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getSetOfQuestionsShare(user) {
        try {
            const result = await this._setOfQuestionsService.findAll({
                createBy: user._id,
                type: 1,
            });
            if (result) {
                return new baseController_1.Ok('Get SetOfQuestions success', this._setOfQuestionsService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Get-SetOfQuestionsController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof req_dto_1.CreateSetOfQuestionDto !== "undefined" && req_dto_1.CreateSetOfQuestionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "createSetOfQuestions", null);
__decorate([
    common_1.Post('excels'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_d = typeof req_dto_3.CreateMultiQuestion !== "undefined" && req_dto_3.CreateMultiQuestion) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "createSetOfQuestionsExcel", null);
__decorate([
    common_1.Post('share'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof req_dto_4.CreateSetOfQuestionShareDto !== "undefined" && req_dto_4.CreateSetOfQuestionShareDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "createSetOfQuestionsShare", null);
__decorate([
    common_1.Post('share/excels'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object, Object, typeof (_h = typeof req_dto_3.CreateMultiQuestion !== "undefined" && req_dto_3.CreateMultiQuestion) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "createSetOfQuestionsExcelShare", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _j : Object, Object, typeof (_k = typeof req_dto_2.UpdateSetOfQuestionDto !== "undefined" && req_dto_2.UpdateSetOfQuestionDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "updateSetOfQuestions", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _l : Object, Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "changeSetOfQuestions", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _m : Object, typeof (_o = typeof query_dto_1.QueryGetSetOfQuestion !== "undefined" && query_dto_1.QueryGetSetOfQuestion) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "getSetOfQuestions", null);
__decorate([
    common_1.Get('share'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "getSetOfQuestionsShare", null);
SetOfQuestionsController = __decorate([
    common_1.Controller('api/set-of-questions'),
    __metadata("design:paramtypes", [typeof (_q = typeof setOfQuestions_service_1.SetOfQuestionsService !== "undefined" && setOfQuestions_service_1.SetOfQuestionsService) === "function" ? _q : Object, typeof (_r = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _r : Object, typeof (_s = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _s : Object])
], SetOfQuestionsController);
exports.SetOfQuestionsController = SetOfQuestionsController;


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfQuestionsService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const question_service_1 = __webpack_require__(27);
const errors_exception_1 = __webpack_require__(30);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const setOfQuestions_entity_1 = __webpack_require__(85);
let SetOfQuestionsService = class SetOfQuestionsService extends baseService_service_1.BaseService {
    constructor(_setOfQuestionsModel, _questionsService, _loggerService) {
        super();
        this._setOfQuestionsModel = _setOfQuestionsModel;
        this._questionsService = _questionsService;
        this._loggerService = _loggerService;
        this._model = _setOfQuestionsModel;
    }
    async createSetOfQuestions(createdBy, payload) {
        try {
            const obj = Object.assign({}, payload);
            obj.createBy = createdBy;
            const model = setOfQuestions_entity_1.SetOfQuestion.createModel(obj);
            const newSetOfQuestion = await this.create(model);
            if (newSetOfQuestion) {
                return this.cvtJSON(newSetOfQuestion);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-SetOfQuestionsService');
            return null;
        }
    }
    async createSetOfQuestionExcel(createBy, idSetOfQuestion, payload) {
        try {
            const listQuestion = payload.questions.map((item) => {
                return Object.assign(Object.assign({}, item), { idSetOfQuestions: idSetOfQuestion, createBy: createBy });
            });
            const questions = await this._questionsService.createMultiQuestion(listQuestion);
            if (!questions) {
                throw new errors_exception_1.Error2SchoolException('create questions fail');
            }
            return this.cvtJSON(questions);
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-SetOfQuestionsService');
            return null;
        }
    }
};
SetOfQuestionsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(setOfQuestions_entity_1.SetOfQuestion.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _b : Object, typeof (_c = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _c : Object])
], SetOfQuestionsService);
exports.SetOfQuestionsService = SetOfQuestionsService;


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfQuestion = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
class SetOfQuestion extends baseModel_entity_2.BaseModel {
    static get model() {
        return new SetOfQuestion().getModelForClass(SetOfQuestion, {
            schemaOptions: baseModel_entity_1.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], SetOfQuestion.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], SetOfQuestion.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], SetOfQuestion.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], SetOfQuestion.prototype, "usedTimes", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], SetOfQuestion.prototype, "classBy", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], SetOfQuestion.prototype, "createBy", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], SetOfQuestion.prototype, "type", void 0);
exports.SetOfQuestion = SetOfQuestion;


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSetOfQuestionDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateSetOfQuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateSetOfQuestionDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateSetOfQuestionDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateSetOfQuestionDto.prototype, "classBy", void 0);
exports.CreateSetOfQuestionDto = CreateSetOfQuestionDto;


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSetOfQuestionDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateSetOfQuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateSetOfQuestionDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateSetOfQuestionDto.prototype, "description", void 0);
exports.UpdateSetOfQuestionDto = UpdateSetOfQuestionDto;


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryGetSetOfQuestion = void 0;
const class_validator_1 = __webpack_require__(33);
class QueryGetSetOfQuestion {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QueryGetSetOfQuestion.prototype, "classId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QueryGetSetOfQuestion.prototype, "status", void 0);
exports.QueryGetSetOfQuestion = QueryGetSetOfQuestion;


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMultiQuestion = void 0;
const class_transformer_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(33);
class SetOfQuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SetOfQuestionDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SetOfQuestionDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SetOfQuestionDto.prototype, "classBy", void 0);
class QuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], QuestionDto.prototype, "question", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(6),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Array)
], QuestionDto.prototype, "answers", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ArrayMaxSize(6),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Array)
], QuestionDto.prototype, "correct", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], QuestionDto.prototype, "score", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], QuestionDto.prototype, "duration", void 0);
class CreateMultiQuestion {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => QuestionDto),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], CreateMultiQuestion.prototype, "questions", void 0);
exports.CreateMultiQuestion = CreateMultiQuestion;


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSetOfQuestionShareDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateSetOfQuestionShareDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateSetOfQuestionShareDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateSetOfQuestionShareDto.prototype, "description", void 0);
exports.CreateSetOfQuestionShareDto = CreateSetOfQuestionShareDto;


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketModule = void 0;
const auth_service_1 = __webpack_require__(68);
const user_entity_1 = __webpack_require__(39);
const setOfQuestions_entity_1 = __webpack_require__(85);
const setOfQuestions_service_1 = __webpack_require__(84);
const common_1 = __webpack_require__(3);
const socket_gateway_1 = __webpack_require__(92);
const mongoose_1 = __webpack_require__(4);
const question_entity_1 = __webpack_require__(28);
const question_service_1 = __webpack_require__(27);
const userSocket_service_1 = __webpack_require__(98);
const userSocket_entity_1 = __webpack_require__(99);
const userScoreQuizSocket_entity_1 = __webpack_require__(5);
const userScoreQuizSocket_service_1 = __webpack_require__(9);
const userHostSocket_service_1 = __webpack_require__(96);
const userHostSocket_entity_1 = __webpack_require__(97);
const user_service_1 = __webpack_require__(50);
const user_entity_2 = __webpack_require__(39);
const upLoadFile_entity_1 = __webpack_require__(54);
const logger_service_1 = __webpack_require__(12);
const up_load_file_service_1 = __webpack_require__(52);
const socket_wsJwtGuard_1 = __webpack_require__(101);
const auth_entity_1 = __webpack_require__(71);
const configService_module_1 = __webpack_require__(75);
const jwt_1 = __webpack_require__(70);
const setupJwt_1 = __webpack_require__(76);
const device_service_1 = __webpack_require__(44);
const device_entity_1 = __webpack_require__(43);
const memberClass_service_1 = __webpack_require__(55);
const notification_service_1 = __webpack_require__(102);
const memberClass_entity_1 = __webpack_require__(56);
const notification_entity_1 = __webpack_require__(103);
const quizClass_entity_1 = __webpack_require__(105);
const quizClassScore_entity_1 = __webpack_require__(107);
const quizClassScore_service_1 = __webpack_require__(106);
const quizClass_service_1 = __webpack_require__(104);
const class_service_1 = __webpack_require__(48);
const class_entity_1 = __webpack_require__(49);
const message_socket_1 = __webpack_require__(108);
const message_service_1 = __webpack_require__(110);
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: setOfQuestions_entity_1.SetOfQuestion.modelName, schema: setOfQuestions_entity_1.SetOfQuestion.model.schema },
                { name: question_entity_1.Question.modelName, schema: question_entity_1.Question.model.schema },
                {
                    name: userSocket_entity_1.UserMemberSocket.modelName,
                    schema: userSocket_entity_1.UserMemberSocket.model.schema,
                },
                {
                    name: userScoreQuizSocket_entity_1.UserScoreQuizSocket.modelName,
                    schema: userScoreQuizSocket_entity_1.UserScoreQuizSocket.model.schema,
                },
                {
                    name: userHostSocket_entity_1.UserHostSocket.modelName,
                    schema: userHostSocket_entity_1.UserHostSocket.model.schema,
                },
                { name: auth_entity_1.Auth.name, schema: auth_entity_1.AuthSchema },
                { name: user_entity_1.User.name, schema: user_entity_2.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
                { name: device_entity_1.Device.modelName, schema: device_entity_1.Device.model.schema },
                { name: memberClass_entity_1.MemberClasses.modelName, schema: memberClass_entity_1.MemberClasses.model.schema },
                { name: notification_entity_1.Notification.modelName, schema: notification_entity_1.Notification.model.schema },
                {
                    name: quizClass_entity_1.QuizClass.modelName,
                    schema: quizClass_entity_1.QuizClass.model.schema,
                },
                {
                    name: quizClassScore_entity_1.QuizClassScore.modelName,
                    schema: quizClassScore_entity_1.QuizClassScore.model.schema,
                },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
            ]),
            configService_module_1.ConfigModule,
            jwt_1.JwtModule.registerAsync(setupJwt_1.setupJWT('JWT_SECRET')),
        ],
        controllers: [],
        providers: [
            socket_gateway_1.AppGateway,
            setOfQuestions_service_1.SetOfQuestionsService,
            question_service_1.QuestionService,
            userSocket_service_1.UserMemberSocketService,
            userScoreQuizSocket_service_1.UserScoreQuizSocketService,
            userHostSocket_service_1.UserHostSocketService,
            user_service_1.UserService,
            auth_service_1.AuthService,
            up_load_file_service_1.UpLoadFileService,
            logger_service_1.LoggerService,
            socket_wsJwtGuard_1.WsJwtGuard,
            device_service_1.DeviceService,
            class_service_1.ClassService,
            memberClass_service_1.MemberClassService,
            notification_service_1.NotificationService,
            quizClass_service_1.QuizClassService,
            quizClassScore_service_1.QuizClassScoreService,
            message_service_1.MessageService,
            message_socket_1.MessageSocket,
        ],
    })
], SocketModule);
exports.SocketModule = SocketModule;


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGateway = void 0;
const class_service_1 = __webpack_require__(48);
const socket_events_1 = __webpack_require__(93);
const websockets_1 = __webpack_require__(94);
const common_1 = __webpack_require__(3);
const socket_io_1 = __webpack_require__(95);
const setOfQuestions_service_1 = __webpack_require__(84);
const question_service_1 = __webpack_require__(27);
const userHostSocket_service_1 = __webpack_require__(96);
const userScoreQuizSocket_service_1 = __webpack_require__(9);
const userSocket_service_1 = __webpack_require__(98);
const random_1 = __webpack_require__(100);
const socket_wsJwtGuard_1 = __webpack_require__(101);
const device_service_1 = __webpack_require__(44);
const memberClass_service_1 = __webpack_require__(55);
const notification_service_1 = __webpack_require__(102);
const quizClass_service_1 = __webpack_require__(104);
const quizClassScore_service_1 = __webpack_require__(106);
let AppGateway = class AppGateway {
    constructor(_classService, _questionService, _quizClassService, _quizClassScoreService, _userHostSocketService, _userScoreQuizSocketService, _userMemberSocketService, _setOfQuestionsService, _deviceService, _memberClassService, _notificationService) {
        this._classService = _classService;
        this._questionService = _questionService;
        this._quizClassService = _quizClassService;
        this._quizClassScoreService = _quizClassScoreService;
        this._userHostSocketService = _userHostSocketService;
        this._userScoreQuizSocketService = _userScoreQuizSocketService;
        this._userMemberSocketService = _userMemberSocketService;
        this._setOfQuestionsService = _setOfQuestionsService;
        this._deviceService = _deviceService;
        this._memberClassService = _memberClassService;
        this._notificationService = _notificationService;
        this.logger = new common_1.Logger('AppGateway');
        this.count = 0;
    }
    async handleCreateRoom(client, payload) {
        console.log('client.user', client.user);
        console.log('Count', this.count);
        console.log('arrayQuestion', payload === null || payload === void 0 ? void 0 : payload.arrayQuestion);
        let questions = [];
        if ((payload === null || payload === void 0 ? void 0 : payload.arrayQuestion) && payload.arrayQuestion.length > 0) {
            questions = await this._questionService.findAll({
                _id: { $in: payload.arrayQuestion },
                idSetOfQuestions: payload.idSetOfQuestions,
                createBy: client.user._id,
            });
        }
        else {
            questions = await this._questionService.findAll({
                idSetOfQuestions: payload.idSetOfQuestions,
                createBy: client.user._id,
            });
        }
        if (questions.length <= 0) {
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_SSC, {
                msg: 'Dont find questions or not the owner of the room',
                idRoom: null,
                success: false,
            });
            return;
        }
        const mapIdQuestions = questions
            .map((e) => e._id)
            .sort(() => Math.random() - 0.5);
        const score = questions.reduce((t, v) => {
            return t + v.score;
        }, 0);
        const idRoom = random_1.RandomFunc();
        client.join(idRoom);
        const userHostSocket = await this._userHostSocketService.createUserHostSocket({
            idRoom: idRoom,
            host: client.id,
            idClass: payload.idClass,
            createBy: client.user.createdBy,
            questions: mapIdQuestions,
            title: payload.title,
            idSetOfQuestions: payload.idSetOfQuestions,
            score: score,
        });
        if (userHostSocket) {
            const listMember = await this._memberClassService.getMemberNotifyByClass(payload.idClass);
            const currentClass = await this._classService.findById(payload.idClass);
            const listNotify = listMember.map((e) => {
                return {
                    idUser: e.idUser,
                    title: payload.title,
                    description: payload.description,
                    typeNotify: 'quiz',
                    data: idRoom,
                    image: currentClass.image,
                };
            });
            this._notificationService.createNotification(listNotify, idRoom);
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_SSC, {
                msg: 'Create Room Quiz Success',
                idRoom: idRoom,
                success: true,
            });
            return;
        }
        else {
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_SSC, {
                msg: 'Create Room Quiz Fail',
                idRoom: null,
                success: false,
            });
            return;
        }
    }
    async handleJoinRoom(client, payload) {
        console.log('Member', client.id);
        const host = await this._userHostSocketService.findOne({
            idRoom: payload.idRoom,
        });
        if (host) {
            const newMember = await this._userMemberSocketService.createMemberSocket({
                idRoom: payload.idRoom,
                userId: client.user.createdBy,
                user: client.user,
                isHost: host.createBy === client.user.createdBy,
            });
            if (newMember) {
                console.log('Join room nek', this.count);
                this.count++;
                const listMember = await this._userMemberSocketService.findAll({
                    idRoom: payload.idRoom,
                });
                console.log(`LHA:  ===> file: socket.gateway.ts ===> line 155 ===> listMember`, listMember.length);
                console.log('Send list member to client');
                this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_NEW_SSC, {
                    msg: 'Join Room Quiz Success User',
                    users: listMember.map((e) => e.user),
                    success: true,
                });
                console.log('Send room member to client');
                client.to(host.idRoom).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
                    msg: 'Join Room Quiz Success Users',
                    user: client.user,
                    success: true,
                });
                client.join(payload.idRoom);
                console.log('Count', this.count);
                return;
            }
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
                msg: 'Join Room Quiz False',
                err: false,
                success: false,
            });
            return;
        }
        this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
            msg: 'Join Room Quiz  (Dont find room)',
            err: false,
            success: false,
        });
        return;
    }
    async handleStartQuiz(client, payload) {
        const host = await this._userHostSocketService.findOne({
            idRoom: payload.idRoom,
            host: client.id,
        });
        if (host) {
            if (host.play) {
                this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.START_QUIZ_SSC, {
                    msg: 'Start Game Fail, Game Stated',
                    data: host,
                    success: false,
                });
                return;
            }
            const startGame = await this._userHostSocketService.findOneAndUpdate({ _id: host._id }, { play: true, currentQuestion: 0 });
            if (startGame) {
                console.log('run start');
                this.server.in(host.idRoom).emit(socket_events_1.SOCKET_EVENT.START_QUIZ_SSC, {
                    msg: 'Start Game Success',
                    data: startGame,
                    success: true,
                });
                this.handleTakeTheQuestion(startGame);
                return;
            }
            this.server
                .in(host.idRoom)
                .emit(socket_events_1.SOCKET_EVENT.START_QUIZ_SSC, socket_events_1.SOCKET_EVENT.START_QUIZ_SSC, {
                msg: 'Fail Game Success',
                data: startGame,
                success: false,
            });
            return;
        }
        this.server.emit(socket_events_1.SOCKET_EVENT.START_QUIZ_SSC, {
            msg: 'Dont find host start game',
            data: null,
            success: false,
        });
    }
    async handleLeaveRoom(client, payload) {
        const member = await this._userMemberSocketService.findOne({
            userId: client.user.createdBy,
            idRoom: payload.idRoom,
        });
        console.log(`LHA:  ===> file: socket.gateway.ts ===> line 255 ===> member`, member);
        if (member) {
            client.leave(member.idRoom);
            const removeUserMember = await this._userMemberSocketService.findOneAndRemove({
                userId: client.user.createdBy,
                idRoom: payload.idRoom,
            });
            if (removeUserMember) {
                console.log(`LHA:  ===> file: socket.gateway.ts ===> line 268 ===> removeUserMember`, removeUserMember);
                this.server.in(payload.idRoom).emit(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_SSC, {
                    msg: 'Leave Room Success',
                    data: { idUser: client.user },
                    success: true,
                });
                return;
            }
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_SSC, {
                msg: 'Leave Room False (Dont find Room and remove)',
                data: { idUser: null },
                success: false,
            });
            return;
        }
        else {
            this.server.to(client.id).emit(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_SSC, {
                msg: 'Leave Room False (Dont find User)',
                data: { idUser: null },
                success: false,
            });
            return;
        }
    }
    async handleNotifyEndQuiz(host) {
        console.log('Run end Notify End Quiz');
        const classScore = await this._quizClassService.createQuizClass({
            classId: host.idClass,
            setOfQuestionId: host.idSetOfQuestions,
            title: host.title,
            createBy: host.createBy,
            score: host.score,
        });
        if (classScore) {
            const listMember = await this._userScoreQuizSocketService.findScore(host.idRoom);
            const listQuizClassScore = [];
            for (const user of listMember) {
                const resultSaveQuizClass = await this._quizClassScoreService.createQuizClassScore({
                    memberId: user._id.idUser,
                    score: user.score,
                    quizClassId: classScore._id,
                });
                if (resultSaveQuizClass) {
                    listQuizClassScore.push(resultSaveQuizClass);
                }
            }
            console.log(`LHA:  ===> file: socket.gateway.ts ===> line 292 ===> listQuizClassScore`, listQuizClassScore);
            this.server
                .in(host.idRoom)
                .emit(socket_events_1.SOCKET_EVENT.STATISTICAL_ROOM_FINAL_SSC, {
                msg: 'STATISTICAL_ROOM_FINAL_SSC',
                success: true,
                data: {
                    member: listQuizClassScore,
                    class: classScore,
                },
            });
            for (const user of listMember) {
                this._userScoreQuizSocketService.removeUserHostSocket(user._id.idUser, host.idRoom);
            }
            this._userHostSocketService.removeUserHostSocket(host.createBy, host.idRoom);
            this._userMemberSocketService.removeUserByRoom(host.idRoom);
        }
    }
    async handleStatistQuizFinal(idRoom) {
        const listScoreStatist = await this._userScoreQuizSocketService.findAll({
            idRoom,
        });
        this.server.to(idRoom).emit(socket_events_1.SOCKET_EVENT.STATISTICAL_ROOM_FINAL_SSC, null);
    }
    async handleStatistQuiz(idRoom, idQuestion) {
        const listScoreStatist = await this._userScoreQuizSocketService.findAll({
            idRoom,
            idQuestion,
        });
        const question = await this._questionService.findById(idQuestion);
        const objResult = question.answers.reduce((t, v) => {
            return Object.assign(Object.assign({}, t), { [v]: 0 });
        }, { null: 0 });
        const result = listScoreStatist.reduce((t, v) => {
            if (t[v.answer]) {
                t[v.answer] = t[v.answer] + 1;
            }
            else {
                t[v.answer] = 1;
            }
            return t;
        }, objResult);
        this.server.to(idRoom).emit(socket_events_1.SOCKET_EVENT.STATISTICAL_ROOM_SSC, {
            data: result,
            msg: 'STATISTICAL_ROOM_SSC',
            success: true,
        });
    }
    async handleSaveDevice(client, payload) {
        const obj = Object.assign({}, payload, {
            createdBy: client.user.createdBy,
        });
        await this._deviceService.createDevice(obj);
    }
    async handleAnswerTheQuestion(client, payload) {
        console.log('ANSWER_THE_QUESTION_CSS', payload);
        const host = await this._userHostSocketService.findOne({
            idRoom: payload.idRoom,
            host: client.id,
        });
        console.log(`LHA:  ===> file: socket.gateway.ts ===> line 389 ===> host`, host);
        if (host)
            return;
        const question = await this._questionService.findById(payload.idQuestion);
        console.log(`LHA:  ===> file: socket.gateway.ts ===> line 392 ===> question`, question);
        if (question) {
            const user = await this._userMemberSocketService.findOne({
                idRoom: payload.idRoom,
                userId: client.user.createdBy,
            });
            console.log(`LHA:  ===> file: socket.gateway.ts ===> line 404 ===> user`, user);
            if (!user) {
                return;
            }
            let score = 0;
            if (payload.answer && question.answers.includes(payload.answer)) {
                const iz = question.answers.findIndex((e) => e === payload.answer);
                if (iz !== -1) {
                    const correct = question.correct.findIndex((e) => e === iz);
                    if (correct !== -1) {
                        score = question.score;
                    }
                }
            }
            const newUserScore = await this._userScoreQuizSocketService.createUserHostSocket(Object.assign(Object.assign({}, payload), { score, question: question.question, userId: client.user.createdBy, socketId: client.id }));
            console.log(`LHA:  ===> file: socket.gateway.ts ===> line 419 ===> newUserScore`, newUserScore);
        }
    }
    async handleTakeTheQuestion(host) {
        const currentQuestion = await this._questionService.findById(host.questions[host.currentQuestion]);
        if (currentQuestion) {
            const payload = {
                _id: currentQuestion._id,
                question: currentQuestion.question,
                answers: currentQuestion.answers,
                duration: currentQuestion.duration,
                idRoom: host.idRoom,
                indexQuestion: `${host.currentQuestion + 1}/${host.questions.length}`,
            };
            const nextGame = await this._userHostSocketService.findOneAndUpdate({ _id: host._id }, { currentQuestion: host.currentQuestion + 1 });
            console.log('host.currentQuestion', host.currentQuestion);
            if (nextGame) {
                this.server.in(host.idRoom).emit(socket_events_1.SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
                    msg: 'Take Question Success',
                    data: payload,
                    success: true,
                });
                setTimeout(async () => {
                    const userAnswer = await this._userScoreQuizSocketService.findAll({
                        idRoom: host.idRoom,
                        idQuestion: currentQuestion._id,
                    });
                    console.log(`LHA:  ===> file: socket.gateway.ts ===> line 453 ===> userAnswer`, userAnswer);
                    const userDontAnswer = await this._userMemberSocketService.findAll({
                        userId: { $nin: userAnswer.map((e) => e.userId) },
                        idRoom: host.idRoom,
                        isHost: false,
                    });
                    console.log(`LHA:  ===> file: socket.gateway.ts ===> line 461 ===> userDontAnswer`, userDontAnswer);
                    for (const uda of userDontAnswer) {
                        await this._userScoreQuizSocketService.createUserHostSocket({
                            idRoom: host.idRoom,
                            answer: null,
                            idQuestion: currentQuestion._id,
                            score: 0,
                            question: currentQuestion.question,
                            userId: uda.userId,
                            socketId: '',
                        });
                    }
                    this.handleStatistQuiz(host.idRoom, host.questions[host.currentQuestion]);
                    setTimeout(() => {
                        this.handleTakeTheQuestion(nextGame);
                    }, 3500);
                }, currentQuestion.duration * 1000);
                return;
            }
            return;
        }
        if (host.questions[host.currentQuestion] === undefined) {
            this.handleNotifyEndQuiz(host);
            return;
        }
        this.server.in(host.idRoom).emit(socket_events_1.SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
            msg: 'Dont find Question Fail Server',
            data: null,
            success: false,
        });
        return;
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    async handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], AppGateway.prototype, "server", void 0);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AppGateway.prototype, "handleCreateRoom", null);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.JOIN_ROOM_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppGateway.prototype, "handleJoinRoom", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.START_QUIZ_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AppGateway.prototype, "handleStartQuiz", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_CSS),
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AppGateway.prototype, "handleLeaveRoom", null);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.SEND_FCM_TOKEN_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AppGateway.prototype, "handleSaveDevice", null);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.ANSWER_THE_QUESTION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AppGateway.prototype, "handleAnswerTheQuestion", null);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleDisconnect", null);
__decorate([
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _j : Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleConnection", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway({ cors: true }),
    __metadata("design:paramtypes", [typeof (_k = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _k : Object, typeof (_l = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _l : Object, typeof (_m = typeof quizClass_service_1.QuizClassService !== "undefined" && quizClass_service_1.QuizClassService) === "function" ? _m : Object, typeof (_o = typeof quizClassScore_service_1.QuizClassScoreService !== "undefined" && quizClassScore_service_1.QuizClassScoreService) === "function" ? _o : Object, typeof (_p = typeof userHostSocket_service_1.UserHostSocketService !== "undefined" && userHostSocket_service_1.UserHostSocketService) === "function" ? _p : Object, typeof (_q = typeof userScoreQuizSocket_service_1.UserScoreQuizSocketService !== "undefined" && userScoreQuizSocket_service_1.UserScoreQuizSocketService) === "function" ? _q : Object, typeof (_r = typeof userSocket_service_1.UserMemberSocketService !== "undefined" && userSocket_service_1.UserMemberSocketService) === "function" ? _r : Object, typeof (_s = typeof setOfQuestions_service_1.SetOfQuestionsService !== "undefined" && setOfQuestions_service_1.SetOfQuestionsService) === "function" ? _s : Object, typeof (_t = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _t : Object, typeof (_u = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _u : Object, typeof (_v = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _v : Object])
], AppGateway);
exports.AppGateway = AppGateway;


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOCKET_EVENT = void 0;
var SOCKET_EVENT;
(function (SOCKET_EVENT) {
    SOCKET_EVENT["CREATE_QUIZ_CSS"] = "CREATE_QUIZ_CSS";
    SOCKET_EVENT["CREATE_QUIZ_SSC"] = "CREATE_QUIZ_SSC";
    SOCKET_EVENT["JOIN_ROOM_CSS"] = "JOIN_ROOM_CSS";
    SOCKET_EVENT["JOIN_ROOM_SSC"] = "JOIN_ROOM_SSC";
    SOCKET_EVENT["JOIN_ROOM_NEW_SSC"] = "JOIN_ROOM_NEW_SSC";
    SOCKET_EVENT["LEAVE_ROOM_CSS"] = "LEAVE_ROOM_CSS";
    SOCKET_EVENT["LEAVE_ROOM_SSC"] = "LEAVE_ROOM_SSC";
    SOCKET_EVENT["STATISTICAL_ROOM_SSC"] = "STATISTICAL_ROOM_SSC";
    SOCKET_EVENT["STATISTICAL_ROOM_FINAL_SSC"] = "STATISTICAL_ROOM_FINAL_SSC";
    SOCKET_EVENT["START_QUIZ_CSS"] = "START_QUIZ_CSS";
    SOCKET_EVENT["START_QUIZ_SSC"] = "START_QUIZ_SSC";
    SOCKET_EVENT["ANSWER_THE_QUESTION_CSS"] = "ANSWER_THE_QUESTION_CSS";
    SOCKET_EVENT["TAKE_THE_QUESTION_SSC"] = "TAKE_THE_QUESTION_SSC";
    SOCKET_EVENT["SEND_FCM_TOKEN_CSS"] = "SEND_FCM_TOKEN_CSS";
    SOCKET_EVENT["END_QUIZ_SSC"] = "END_QUIZ_SSC";
})(SOCKET_EVENT = exports.SOCKET_EVENT || (exports.SOCKET_EVENT = {}));


/***/ }),
/* 94 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 95 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserHostSocketService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const userHostSocket_entity_1 = __webpack_require__(97);
let UserHostSocketService = class UserHostSocketService extends baseService_service_1.BaseService {
    constructor(_userHostSocket, _loggerService) {
        super();
        this._userHostSocket = _userHostSocket;
        this._loggerService = _loggerService;
        this._model = _userHostSocket;
    }
    async createUserHostSocket(payload) {
        try {
            const obj = Object.assign({}, payload);
            console.log(`LHA:  ===> file: userHostSocket.service.ts ===> line 22 ===> obj`, obj);
            const model = userHostSocket_entity_1.UserHostSocket.createModel(obj);
            const newUserHost = await this.create(model);
            if (newUserHost) {
                return this.cvtJSON(newUserHost);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-UserHostSocketService');
            return null;
        }
    }
    async removeUserHostSocket(idUser, idRoom) {
        try {
            await this._model.deleteOne({
                createBy: idUser,
                play: true,
                idRoom: idRoom,
            });
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'REMOVE-UserHostSocketService');
            return null;
        }
    }
};
UserHostSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userHostSocket_entity_1.UserHostSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserHostSocketService);
exports.UserHostSocketService = UserHostSocketService;


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserHostSocket_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserHostSocket = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
let UserHostSocket = UserHostSocket_1 = class UserHostSocket extends baseModel_entity_1.BaseModel {
    static get model() {
        return new UserHostSocket_1().getModelForClass(UserHostSocket_1, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
};
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "idRoom", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "host", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "createBy", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "idSetOfQuestions", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "idClass", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UserHostSocket.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserHostSocket.prototype, "title", void 0);
__decorate([
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], UserHostSocket.prototype, "questions", void 0);
__decorate([
    typegoose_1.prop({ default: -1 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UserHostSocket.prototype, "currentQuestion", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], UserHostSocket.prototype, "play", void 0);
UserHostSocket = UserHostSocket_1 = __decorate([
    typegoose_1.index({ idRoom: 1, host: 1 }, { unique: true })
], UserHostSocket);
exports.UserHostSocket = UserHostSocket;


/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMemberSocketService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const userSocket_entity_1 = __webpack_require__(99);
let UserMemberSocketService = class UserMemberSocketService extends baseService_service_1.BaseService {
    constructor(_userMemberSocket, _loggerService) {
        super();
        this._userMemberSocket = _userMemberSocket;
        this._loggerService = _loggerService;
        this._model = _userMemberSocket;
    }
    async createMemberSocket(payload) {
        try {
            const obj = Object.assign({}, payload);
            const model = userSocket_entity_1.UserMemberSocket.createModel(obj);
            const newUserHost = await this.create(model);
            if (newUserHost) {
                return this.cvtJSON(newUserHost);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-UserHostSocketService');
            return null;
        }
    }
    async findOneAndRemove(payload) {
        try {
            const obj = Object.assign({}, payload);
            const rmMember = await this._userMemberSocket.findOneAndRemove(obj);
            if (rmMember) {
                return true;
            }
            return false;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-UserHostSocketService');
            return false;
        }
    }
    async removeUserByRoom(idRoom) {
        try {
            const rmMember = await this._userMemberSocket.deleteMany({
                idRoom: idRoom,
            });
            if (rmMember) {
                return true;
            }
            return false;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-UserHostSocketService');
            return false;
        }
    }
};
UserMemberSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userSocket_entity_1.UserMemberSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserMemberSocketService);
exports.UserMemberSocketService = UserMemberSocketService;


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserMemberSocket_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMemberSocket = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
const user_entity_1 = __webpack_require__(39);
let UserMemberSocket = UserMemberSocket_1 = class UserMemberSocket extends baseModel_entity_1.BaseModel {
    static get model() {
        return new UserMemberSocket_1().getModelForClass(UserMemberSocket_1, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
};
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserMemberSocket.prototype, "idRoom", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserMemberSocket.prototype, "userId", void 0);
__decorate([
    typegoose_1.prop({ default: null }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], UserMemberSocket.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], UserMemberSocket.prototype, "isHost", void 0);
UserMemberSocket = UserMemberSocket_1 = __decorate([
    typegoose_1.index({ idRoom: 1, userId: 1 }, { unique: true })
], UserMemberSocket);
exports.UserMemberSocket = UserMemberSocket;


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RandomFunc = void 0;
const RandomFunc = () => (Math.random() + 1).toString(36).substring(4).toUpperCase();
exports.RandomFunc = RandomFunc;


/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WsJwtGuard = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(70);
const websockets_1 = __webpack_require__(94);
const auth_service_1 = __webpack_require__(68);
let WsJwtGuard = class WsJwtGuard {
    constructor(authService, jwt) {
        this.authService = authService;
        this.jwt = jwt;
    }
    async canActivate(context) {
        var _a, _b;
        try {
            const client = context.switchToWs().getClient();
            const authToken = (_b = (_a = client.handshake) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.authorization;
            const encodeJWT = await this.jwt.verifyAsync(authToken);
            const user = await this.authService.validateUser({
                id: encodeJWT.data,
            });
            context.switchToHttp().getRequest().user = user;
            return Boolean(user);
        }
        catch (err) {
            throw new websockets_1.WsException(err.message);
        }
    }
};
WsJwtGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], WsJwtGuard);
exports.WsJwtGuard = WsJwtGuard;


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const device_service_1 = __webpack_require__(44);
const up_load_file_service_1 = __webpack_require__(52);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const notification_entity_1 = __webpack_require__(103);
let NotificationService = class NotificationService extends baseService_service_1.BaseService {
    constructor(_notificationModel, _loggerService, _deviceService, _uploadFileService) {
        super();
        this._notificationModel = _notificationModel;
        this._loggerService = _loggerService;
        this._deviceService = _deviceService;
        this._uploadFileService = _uploadFileService;
        this._model = _notificationModel;
    }
    async getNotification(id) {
        const notifications = await this._model
            .find({
            idUser: id,
            isSeen: false,
        })
            .sort({ createdAt: -1 })
            .lean();
        const results = [];
        for (const notification of notifications) {
            const obj = Object.assign({}, this.cvtJSON(notification));
            if (!(notification.image === '')) {
                const image = await this._uploadFileService.findById(notification.image);
                obj.image = (image === null || image === void 0 ? void 0 : image.path) || '';
            }
            results.push(obj);
        }
        return results;
    }
    async getNotificationCount(id) {
        const notifications = await this._model.find({
            idUser: id,
            isSeen: false,
        });
        return notifications.length;
    }
    async createNotification(notification, roomId) {
        const modelNotis = notification.map(async (item) => {
            const model = notification_entity_1.Notification.createModel(item);
            return await this.create(model);
        });
        const reuslt = await Promise.all(modelNotis);
        console.log(`LHA:  ===> file: notification.service.ts ===> line 57 ===> reuslt`, reuslt);
        const bodyNoti = {
            notification: {
                title: 'Bài kiểm tra mới',
                body: 'Bạn có bài kiểm tra mới',
            },
            data: {
                idRoom: roomId,
            },
        };
        this._deviceService.pushDevices(reuslt.map((e) => e.idUser), bodyNoti);
    }
};
NotificationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(notification_entity_1.Notification.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _c : Object, typeof (_d = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _d : Object])
], NotificationService);
exports.NotificationService = NotificationService;


/***/ }),
/* 103 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notification = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const typegoose_1 = __webpack_require__(7);
class Notification extends baseModel_entity_1.BaseModel {
    static get model() {
        return new Notification().getModelForClass(Notification, {
            schemaOptions: baseModel_entity_1.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        const result = new this.model(payload);
        return result;
    }
}
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "idUser", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], Notification.prototype, "isSeen", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "description", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "image", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "typeNotify", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Notification.prototype, "data", void 0);
exports.Notification = Notification;


/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const quizClass_entity_1 = __webpack_require__(105);
let QuizClassService = class QuizClassService extends baseService_service_1.BaseService {
    constructor(_quizClassModel, _loggerService) {
        super();
        this._quizClassModel = _quizClassModel;
        this._loggerService = _loggerService;
        this._model = _quizClassModel;
    }
    async createQuizClass(payload) {
        try {
            const obj = Object.assign({}, payload);
            const model = quizClass_entity_1.QuizClass.createModel(obj);
            const quizClass = await this.create(model);
            if (quizClass) {
                return this.cvtJSON(quizClass);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE_quizClass');
            return null;
        }
    }
    async getHistory(idClass) {
        try {
            const quizClass = await this._model
                .find({ classId: idClass })
                .sort({ createdAt: -1 })
                .select('_id title score isShow createdAt updatedAt')
                .exec();
            return this.cvtJSON(quizClass);
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'GET_quizClass');
            return null;
        }
    }
};
QuizClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(quizClass_entity_1.QuizClass.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], QuizClassService);
exports.QuizClassService = QuizClassService;


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClass = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
class QuizClass extends baseModel_entity_1.BaseModel {
    static get model() {
        return new QuizClass().getModelForClass(QuizClass, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], QuizClass.prototype, "classId", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], QuizClass.prototype, "setOfQuestionId", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], QuizClass.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], QuizClass.prototype, "title", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], QuizClass.prototype, "createBy", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], QuizClass.prototype, "isShow", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    __metadata("design:type", Number)
], QuizClass.prototype, "status", void 0);
exports.QuizClass = QuizClass;


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassScoreService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(50);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const quizClassScore_entity_1 = __webpack_require__(107);
let QuizClassScoreService = class QuizClassScoreService extends baseService_service_1.BaseService {
    constructor(_quizClassScoreModel, _userService, _loggerService) {
        super();
        this._quizClassScoreModel = _quizClassScoreModel;
        this._userService = _userService;
        this._loggerService = _loggerService;
        this._model = _quizClassScoreModel;
    }
    async createQuizClassScore(payload) {
        try {
            const obj = Object.assign({}, payload);
            const model = quizClassScore_entity_1.QuizClassScore.createModel(obj);
            const quizClassScore = await this.create(model);
            if (quizClassScore) {
                return Object.assign(Object.assign({}, this.cvtJSON(quizClassScore)), { user: await this._userService.findByIdAndImage(quizClassScore.memberId) });
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE_quizClassScore');
            return null;
        }
    }
    async getQuizClassScore(idQuizClass) {
        try {
            const quizClassScores = await this._model
                .find({
                quizClassId: idQuizClass,
            })
                .lean();
            const results = [];
            for (const quizClassScore of quizClassScores) {
                results.push(Object.assign(Object.assign({}, this.cvtJSON(quizClassScore)), { user: await this._userService.findByIdAndImage(quizClassScore.memberId) }));
            }
            console.log(`LHA:  ===> file: quizClassScore.service.ts ===> line 54 ===> results`, results);
            return results;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'GET_quizClassScore');
            return [];
        }
    }
};
QuizClassScoreService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(quizClassScore_entity_1.QuizClassScore.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _c : Object])
], QuizClassScoreService);
exports.QuizClassScoreService = QuizClassScoreService;


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassScore = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
class QuizClassScore extends baseModel_entity_1.BaseModel {
    static get model() {
        return new QuizClassScore().getModelForClass(QuizClassScore, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], QuizClassScore.prototype, "memberId", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], QuizClassScore.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], QuizClassScore.prototype, "quizClassId", void 0);
exports.QuizClassScore = QuizClassScore;


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageSocket = void 0;
const common_1 = __webpack_require__(3);
const websockets_1 = __webpack_require__(94);
const socket_io_1 = __webpack_require__(95);
const message_event_1 = __webpack_require__(109);
const message_service_1 = __webpack_require__(110);
let MessageSocket = class MessageSocket {
    constructor(_messageService) {
        this._messageService = _messageService;
        this.logger = new common_1.Logger('MessageGateway');
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    async handleOnMessage(client, payload) {
        console.log('SEEN_MESSAGE_CSS', payload);
        const result = await this._messageService.getMessageDetail(payload.idMessage);
        if (!!result) {
            result.subscribe((res) => {
                this.server
                    .to(payload.idConversation)
                    .emit(message_event_1.MESSAGE_EVENT.SEEN_MESSAGE_CONVERSATION_SSC, res.data);
            });
            return;
        }
        this.server
            .to(client.id)
            .emit(message_event_1.MESSAGE_EVENT.SEEN_MESSAGE_CONVERSATION_SSC, {
            message: 'get message fail',
            data: null,
        });
    }
    async handleOnJoinRoomConversation(client, payload) {
        console.log('JOIN_CONVERSATION_SSC', payload);
        client.join(payload.idConversation);
        console.log('client.id', client.id);
        this.server.to(client.id).emit(message_event_1.MESSAGE_EVENT.JOIN_CONVERSATION_SSC, {
            message: 'join room success',
            data: null,
        });
        console.log('client.rooms', client.rooms);
    }
    async handleOnLeaveRoom(client, payload) {
        console.log('LEAVE_CONVERSATION_SSC', payload);
        client.leave(payload.idConversation);
        client.to(client.id).emit(message_event_1.MESSAGE_EVENT.LEAVE_CONVERSATION_SSC, {
            message: 'leave room success',
            data: null,
        });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], MessageSocket.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage(message_event_1.MESSAGE_EVENT.SEEN_MESSAGE_CONVERSATION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MessageSocket.prototype, "handleOnMessage", null);
__decorate([
    websockets_1.SubscribeMessage(message_event_1.MESSAGE_EVENT.JOIN_CONVERSATION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MessageSocket.prototype, "handleOnJoinRoomConversation", null);
__decorate([
    websockets_1.SubscribeMessage(message_event_1.MESSAGE_EVENT.LEAVE_CONVERSATION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MessageSocket.prototype, "handleOnLeaveRoom", null);
MessageSocket = __decorate([
    websockets_1.WebSocketGateway({ cors: true }),
    __metadata("design:paramtypes", [typeof (_e = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _e : Object])
], MessageSocket);
exports.MessageSocket = MessageSocket;


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MESSAGE_EVENT = void 0;
var MESSAGE_EVENT;
(function (MESSAGE_EVENT) {
    MESSAGE_EVENT["SEEN_MESSAGE_CONVERSATION_SSC"] = "SEND_MESSAGE_CONVERSATION_SSC";
    MESSAGE_EVENT["SEEN_MESSAGE_CONVERSATION_CSS"] = "SEND_MESSAGE_CONVERSATION_CSS";
    MESSAGE_EVENT["JOIN_CONVERSATION_SSC"] = "JOIN_CONVERSATION_SSC";
    MESSAGE_EVENT["JOIN_CONVERSATION_CSS"] = "JOIN_CONVERSATION_CSS";
    MESSAGE_EVENT["LEAVE_CONVERSATION_SSC"] = "LEAVE_CONVERSATION_SSC";
    MESSAGE_EVENT["LEAVE_CONVERSATION_CSS"] = "LEAVE_CONVERSATION_CSS";
})(MESSAGE_EVENT = exports.MESSAGE_EVENT || (exports.MESSAGE_EVENT = {}));


/***/ }),
/* 110 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
const axios_1 = __webpack_require__(19);
const common_1 = __webpack_require__(3);
let MessageService = class MessageService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getMessageDetail(idMessage) {
        try {
            const result = await this.httpService.get('http://localhost:3000/api/message/' + idMessage);
            return result;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], MessageService);
exports.MessageService = MessageService;


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFileModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(12);
const shared_module_1 = __webpack_require__(18);
const up_load_file_controller_1 = __webpack_require__(112);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
let UpLoadFileModule = class UpLoadFileModule {
};
UpLoadFileModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            mongoose_1.MongooseModule.forFeature([
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [up_load_file_controller_1.UpLoadFileController],
        providers: [up_load_file_service_1.UpLoadFileService, logger_service_1.LoggerService],
        exports: [up_load_file_service_1.UpLoadFileService],
    })
], UpLoadFileModule);
exports.UpLoadFileModule = UpLoadFileModule;


/***/ }),
/* 112 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFileController = void 0;
const baseController_1 = __webpack_require__(31);
const platform_express_1 = __webpack_require__(113);
const common_1 = __webpack_require__(3);
const multer_1 = __webpack_require__(114);
const path_1 = __webpack_require__(115);
const fs = __webpack_require__(116);
const FileType = __webpack_require__(117);
const logger_service_1 = __webpack_require__(12);
const up_load_file_service_1 = __webpack_require__(52);
const errors_exception_1 = __webpack_require__(30);
const jwt_auth_guard_1 = __webpack_require__(24);
const blurHash_1 = __webpack_require__(118);
let UpLoadFileController = class UpLoadFileController {
    constructor(_upLoadFileService, loggerService) {
        this._upLoadFileService = _upLoadFileService;
        this.loggerService = loggerService;
    }
    async uploadFile(file) {
        try {
            const parseFile = path_1.parse(file.originalname);
            const result = await this._upLoadFileService.createUploadFile(parseFile.name, file.path);
            const blurHash = await blurHash_1.encodeImageToBlurhash(file.path);
            return new baseController_1.Ok('Upload file Success', {
                image: result.id,
                blurHash: blurHash,
            });
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-uploadFile');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async uploadFiles(files) {
        try {
            const result = [];
            for (const file of files) {
                const parseFile = path_1.parse(file.originalname);
                const res = await this._upLoadFileService.createUploadFile(parseFile.name, file.path);
                result.push(res);
            }
            return new baseController_1.Ok('Upload file Success', result);
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-uploadFile');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getFile(query, res) {
        try {
            const buffer = fs.readFileSync(`./${query.id}`);
            console.log("buffer", buffer);
            const typeFile = await FileType.fromBuffer(buffer);
            res.writeHead(200, { 'Content-Type': typeFile.mime });
            res.end(buffer, 'binary');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-uploadFile');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post('upload'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                if (!fs.existsSync('./uploads')) {
                    fs.mkdirSync('./uploads');
                }
                const path = `./uploads/${randomName}`;
                const parseFile = path_1.parse(file.originalname);
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }
                cb(null, `${randomName}/${parseFile.name}${parseFile.ext}`);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UpLoadFileController.prototype, "uploadFile", null);
__decorate([
    common_1.Post('uploads'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files', 10, {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                console.log(file);
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                const path = `./uploads/${randomName}`;
                const parseFile = path_1.parse(file.originalname);
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }
                cb(null, `${randomName}/${parseFile.name}${parseFile.ext}`);
            },
        }),
    })),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UpLoadFileController.prototype, "uploadFiles", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UpLoadFileController.prototype, "getFile", null);
UpLoadFileController = __decorate([
    common_1.Controller('api/up-load-file'),
    __metadata("design:paramtypes", [typeof (_d = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _d : Object, typeof (_e = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _e : Object])
], UpLoadFileController);
exports.UpLoadFileController = UpLoadFileController;


/***/ }),
/* 113 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 114 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 115 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("file-type");

/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeImageToBlurhash = void 0;
const sharp = __webpack_require__(119);
const blurhash_1 = __webpack_require__(120);
const encodeImageToBlurhash = (path) => {
    return new Promise((resolve, reject) => {
        sharp(path)
            .resize(400, 300)
            .raw()
            .ensureAlpha()
            .toBuffer((err, buffer, { width, height }) => {
            if (err)
                return reject(err);
            resolve(blurhash_1.encode(new Uint8ClampedArray(buffer), width, height, 4, 3));
        });
    });
};
exports.encodeImageToBlurhash = encodeImageToBlurhash;


/***/ }),
/* 119 */
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),
/* 120 */
/***/ ((module) => {

module.exports = require("blurhash");

/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapContentModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const class_module_1 = __webpack_require__(47);
const class_entity_1 = __webpack_require__(49);
const memberClass_entity_1 = __webpack_require__(56);
const memberClass_service_1 = __webpack_require__(55);
const post_entity_1 = __webpack_require__(122);
const post_module_1 = __webpack_require__(123);
const post_service_1 = __webpack_require__(124);
const road_map_entity_1 = __webpack_require__(36);
const roadMap_service_1 = __webpack_require__(35);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const logger_service_1 = __webpack_require__(12);
const roadMapContent_controller_1 = __webpack_require__(126);
const rmc_assignments_1 = __webpack_require__(131);
const rmc_assignmentsUser_1 = __webpack_require__(133);
const rmc_attendances_1 = __webpack_require__(135);
const rmc_attendancesUser_1 = __webpack_require__(137);
const rmc_files_1 = __webpack_require__(139);
const roadMapContent_entity_1 = __webpack_require__(129);
const rmc_assignments_service_1 = __webpack_require__(130);
const rmc_assignmentsUserservice_1 = __webpack_require__(132);
const rmc_attendances_service_1 = __webpack_require__(134);
const rmc_attendancesUser_service_1 = __webpack_require__(136);
const rmc_files_service_1 = __webpack_require__(138);
const roadMapContent_service_1 = __webpack_require__(128);
let RoadMapContentModule = class RoadMapContentModule {
};
RoadMapContentModule = __decorate([
    common_1.Module({
        imports: [
            class_module_1.ClassModule,
            post_module_1.PostModule,
            mongoose_1.MongooseModule.forFeature([
                { name: post_entity_1.Post.modelName, schema: post_entity_1.Post.model.schema },
                { name: roadMapContent_entity_1.RoadMapContent.modelName, schema: roadMapContent_entity_1.RoadMapContent.model.schema },
                { name: rmc_assignments_1.RMCAssignment.modelName, schema: rmc_assignments_1.RMCAssignment.model.schema },
                { name: rmc_attendances_1.RMCAttendances.modelName, schema: rmc_attendances_1.RMCAttendances.model.schema },
                {
                    name: rmc_assignmentsUser_1.RMCAssignmentUser.modelName,
                    schema: rmc_assignmentsUser_1.RMCAssignmentUser.model.schema,
                },
                {
                    name: rmc_attendancesUser_1.RMCAttendancesUser.modelName,
                    schema: rmc_attendancesUser_1.RMCAttendancesUser.model.schema,
                },
                {
                    name: rmc_files_1.RMCFile.modelName,
                    schema: rmc_files_1.RMCFile.model.schema,
                },
                {
                    name: road_map_entity_1.RoadMap.modelName,
                    schema: road_map_entity_1.RoadMap.model.schema,
                },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
                {
                    name: memberClass_entity_1.MemberClasses.modelName,
                    schema: memberClass_entity_1.MemberClasses.model.schema,
                },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [roadMapContent_controller_1.RoadMapContentController],
        providers: [
            post_service_1.PostService,
            logger_service_1.LoggerService,
            roadMapContent_service_1.RoadMapContentService,
            rmc_assignments_service_1.RMCAssignmentService,
            rmc_assignmentsUserservice_1.RMCAssignmentUserService,
            rmc_attendances_service_1.RMCAttendanceService,
            rmc_attendancesUser_service_1.RMCAttendancesUserService,
            rmc_files_service_1.RMCFilesService,
            memberClass_service_1.MemberClassService,
            user_service_1.UserService,
            up_load_file_service_1.UpLoadFileService,
            roadMap_service_1.RoadMapService,
        ],
    })
], RoadMapContentModule);
exports.RoadMapContentModule = RoadMapContentModule;


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const class_transformer_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(11);
class Post extends baseModel_entity_2.BaseModel {
    static get model() {
        return new Post().getModelForClass(Post, { schemaOptions: baseModel_entity_1.schemaOptions });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true, ref: 'Classes' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], Post.prototype, "class", void 0);
__decorate([
    typegoose_1.prop({ ref: 'RoadMapContent', default: null }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], Post.prototype, "roadMapContent", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'like', default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], Post.prototype, "like", void 0);
__decorate([
    typegoose_1.prop({ default: 1 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Post.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'User' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_d = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _d : Object)
], Post.prototype, "createdBy", void 0);
exports.Post = Post;


/***/ }),
/* 123 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostModule = void 0;
const post_entity_1 = __webpack_require__(122);
const common_1 = __webpack_require__(3);
const post_service_1 = __webpack_require__(124);
const post_controller_1 = __webpack_require__(125);
const mongoose_1 = __webpack_require__(4);
const memberClass_service_1 = __webpack_require__(55);
const user_service_1 = __webpack_require__(50);
const memberClass_entity_1 = __webpack_require__(56);
const user_entity_1 = __webpack_require__(39);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
let PostModule = class PostModule {
};
PostModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: memberClass_entity_1.MemberClasses.modelName, schema: memberClass_entity_1.MemberClasses.model.schema },
                ,
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: post_entity_1.Post.modelName, schema: post_entity_1.Post.model.schema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [post_controller_1.PostController],
        providers: [
            post_service_1.PostService,
            memberClass_service_1.MemberClassService,
            user_service_1.UserService,
            up_load_file_service_1.UpLoadFileService,
        ],
        exports: [post_service_1.PostService],
    })
], PostModule);
exports.PostModule = PostModule;


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const post_entity_1 = __webpack_require__(122);
let PostService = class PostService extends baseService_service_1.BaseService {
    constructor(_postModel, _loggerService) {
        super();
        this._postModel = _postModel;
        this._loggerService = _loggerService;
        this._model = _postModel;
    }
    async createPostWithRmc(post) {
        try {
            const obj = Object.assign({}, post);
            const newPostModel = post_entity_1.Post.createModel(obj);
            const newPost = await this.create(newPostModel);
            if (newPost) {
                return this.cvtJSON(newPost);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-PostService');
            return null;
        }
    }
    async createPost(post) {
        try {
            const obj = Object.assign({}, post);
            const newPostModel = post_entity_1.Post.createModel(obj);
            const newPost = await this.create(newPostModel);
            if (newPost) {
                return this.cvtJSON(newPost);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-PostService');
            return null;
        }
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(post_entity_1.Post.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], PostService);
exports.PostService = PostService;


/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const common_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const up_load_file_service_1 = __webpack_require__(52);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const resource_exception_1 = __webpack_require__(26);
const query_interface_1 = __webpack_require__(64);
const post_service_1 = __webpack_require__(124);
const logger_service_1 = __webpack_require__(12);
const memberClass_service_1 = __webpack_require__(55);
const mongoose = __webpack_require__(11);
let PostController = class PostController {
    constructor(_postService, _memberClass, _loggerService, _uploadService) {
        this._postService = _postService;
        this._memberClass = _memberClass;
        this._loggerService = _loggerService;
        this._uploadService = _uploadService;
    }
    async create(user, payload) {
        var _a, _b;
        try {
            const result = await this._postService.createPost(Object.assign(Object.assign({}, payload), { class: new mongoose.Types.ObjectId(payload.classId), createdBy: new mongoose.Types.ObjectId(user._id) }));
            const resultSearch = await this._postService.findById(result._id, [
                {
                    path: 'class',
                    populate: 'createdBy',
                },
                {
                    path: 'roadMapContent',
                    populate: 'rmcFile rmcAssignment rmcAttendance',
                },
                'createdBy',
            ]);
            if (resultSearch) {
                const clonePost = Object.assign({}, this._postService.cvtJSON(resultSearch));
                if (((_a = clonePost === null || clonePost === void 0 ? void 0 : clonePost.class) === null || _a === void 0 ? void 0 : _a.image) && ((_b = clonePost === null || clonePost === void 0 ? void 0 : clonePost.class) === null || _b === void 0 ? void 0 : _b.image) !== '') {
                    const image = await this._uploadService.findById(clonePost.class.image);
                    clonePost.class.image = image.path || '';
                }
                const memmberInClass = await this._memberClass.findAllNoSkip({
                    role: 0,
                    idClass: clonePost.class._id,
                });
                clonePost.class.memmberInClass =
                    this._memberClass.cvtJSON(memmberInClass);
                if (clonePost) {
                    return new baseController_1.Ok('Get Message success', clonePost);
                }
                throw new resource_exception_1.ResourceFoundException();
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getPostHomePage(user, query) {
        var _a, _b;
        try {
            const memberClass = await this._memberClass.findAllNoSkip({
                user: user._id,
            });
            const idClass = memberClass.map((e) => e.idClass);
            const result = await this._postService.findAll({
                class: { $in: idClass },
            }, query, [
                {
                    path: 'class',
                    populate: 'createdBy',
                },
                {
                    path: 'roadMapContent',
                    populate: 'rmcFile rmcAssignment rmcAttendance',
                },
                'createdBy',
            ]);
            const addImagePath = [];
            for (const current of JSON.parse(JSON.stringify(result))) {
                const clonePost = Object.assign({}, current);
                if (((_a = current === null || current === void 0 ? void 0 : current.class) === null || _a === void 0 ? void 0 : _a.image) && ((_b = current === null || current === void 0 ? void 0 : current.class) === null || _b === void 0 ? void 0 : _b.image) !== '') {
                    const image = await this._uploadService.findById(current.class.image);
                    clonePost.class.image = image.path || '';
                }
                const memmberInClass = await this._memberClass.findAllNoSkip({
                    role: 0,
                    idClass: clonePost.class._id,
                });
                clonePost.class.memmberInClass =
                    this._memberClass.cvtJSON(memmberInClass);
                addImagePath.push(clonePost);
            }
            if (addImagePath) {
                return new baseController_1.Ok('Get Message success', addImagePath);
            }
            throw new resource_exception_1.ResourceFoundException({
                message: 'Get Message fail',
            });
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'get-PostController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getPostInClass(user, idClass, query) {
        var _a, _b;
        try {
            const result = await this._postService.findAll({
                class: idClass,
            }, query, [
                {
                    path: 'class',
                    populate: 'createdBy',
                },
                {
                    path: 'roadMapContent',
                    populate: 'rmcFile rmcAssignment rmcAttendance',
                },
                'createdBy',
            ]);
            const addImagePath = [];
            for (const current of JSON.parse(JSON.stringify(result))) {
                const clonePost = Object.assign({}, current);
                if (((_a = current === null || current === void 0 ? void 0 : current.class) === null || _a === void 0 ? void 0 : _a.image) && ((_b = current === null || current === void 0 ? void 0 : current.class) === null || _b === void 0 ? void 0 : _b.image) !== '') {
                    const image = await this._uploadService.findById(current.class.image);
                    clonePost.class.image = image.path || '';
                }
                const memmberInClass = await this._memberClass.findAllNoSkip({
                    role: 0,
                    idClass: clonePost.class._id,
                });
                clonePost.class.memmberInClass =
                    this._memberClass.cvtJSON(memmberInClass);
                addImagePath.push(clonePost);
            }
            if (addImagePath) {
                return new baseController_1.Ok('Get Message success', addImagePath);
            }
            throw new resource_exception_1.ResourceFoundException({
                message: 'Get Message fail',
            });
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'get-PostController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    common_1.Get('/home'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof query_interface_1.IQueryFind !== "undefined" && query_interface_1.IQueryFind) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostHomePage", null);
__decorate([
    common_1.Get('/class/:idClass'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Param('idClass')),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof query_interface_1.IQueryFind !== "undefined" && query_interface_1.IQueryFind) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostInClass", null);
PostController = __decorate([
    common_1.Controller('api/post'),
    __metadata("design:paramtypes", [typeof (_f = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _f : Object, typeof (_g = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _g : Object, typeof (_h = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _h : Object, typeof (_j = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _j : Object])
], PostController);
exports.PostController = PostController;


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapContentController = void 0;
const req_dto_1 = __webpack_require__(127);
const user_decorator_1 = __webpack_require__(23);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const logger_service_1 = __webpack_require__(12);
const roadMapContent_service_1 = __webpack_require__(128);
const user_entity_1 = __webpack_require__(39);
const resource_exception_1 = __webpack_require__(26);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const req_dto_2 = __webpack_require__(140);
const req_dto_3 = __webpack_require__(141);
const req_dto_4 = __webpack_require__(142);
const enum_1 = __webpack_require__(143);
const class_service_1 = __webpack_require__(48);
const req_dto_5 = __webpack_require__(144);
const req_dto_6 = __webpack_require__(145);
const rmc_assignments_service_1 = __webpack_require__(130);
const rmc_assignmentsUserservice_1 = __webpack_require__(132);
const rmc_attendances_service_1 = __webpack_require__(134);
const rmc_attendancesUser_service_1 = __webpack_require__(136);
const rmc_files_service_1 = __webpack_require__(138);
const memberClass_service_1 = __webpack_require__(55);
const roadMap_service_1 = __webpack_require__(35);
let RoadMapContentController = class RoadMapContentController {
    constructor(roadMapContentService, _rmcAssignmentService, _rmcAssignmentUserService, _rmcAttendanceService, _rmcAttendanceUserService, _rmcFilesService, loggerService, classService, memberClassService, roadMapService) {
        this.roadMapContentService = roadMapContentService;
        this._rmcAssignmentService = _rmcAssignmentService;
        this._rmcAssignmentUserService = _rmcAssignmentUserService;
        this._rmcAttendanceService = _rmcAttendanceService;
        this._rmcAttendanceUserService = _rmcAttendanceUserService;
        this._rmcFilesService = _rmcFilesService;
        this.loggerService = loggerService;
        this.classService = classService;
        this.memberClassService = memberClassService;
        this.roadMapService = roadMapService;
    }
    async createRMCAssignment(user, query, payload) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const payloadRMC = Object.assign(Object.assign({}, payload), { idRoadMap: query.idRoadMap, createdBy: user._id, idClass: query.idClass, type: enum_1.RCMTypes.ASSIGNMENT });
            const result = await this.roadMapContentService.createRMCAssignment(payloadRMC);
            if (result) {
                return new baseController_1.Ok('Create RMC Assignment', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-RMCAssignmentController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async createRMCAttendance(user, query, payload) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const payloadRMC = Object.assign(Object.assign({}, payload), { idRoadMap: query.idRoadMap, idClass: query.idClass, createdBy: user._id, type: enum_1.RCMTypes.ATTENDANCE });
            const result = await this.roadMapContentService.createRMCAttendance(payloadRMC);
            if (result) {
                return new baseController_1.Ok('Create RMC Attendance', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-RMCAttendanceController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async userRMCAttendance(user, payload) {
        try {
            const existClass = await this.memberClassService.checkExitsUserInClass(user._id, payload.idClass);
            if (!existClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const result = await this._rmcAttendanceUserService.createClassAttendanceUser(user._id, payload.rmc);
            if (result) {
                return new baseController_1.Ok('Create RMC USER Attendance', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log('e', e);
            this.loggerService.error(e.message, null, 'create-RMCAttendanceController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async createRMCFile(user, query, payload) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const payloadRMC = Object.assign(Object.assign({}, payload), { idRoadMap: query.idRoadMap, createdBy: user._id, idClass: query.idClass, type: enum_1.RCMTypes.ATTENDANCE });
            const result = await this.roadMapContentService.createRMCFile(payloadRMC);
            if (result) {
                return new baseController_1.Ok('Create RMC File', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-RMCFileController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateRMCAssignment(user, query, payload) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const payloadRMC = Object.assign({}, payload);
            const result = await this.roadMapContentService.updateRMCAssignment(query.idRMC, payloadRMC);
            if (result) {
                return new baseController_1.Ok('Update RMC Assignment', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-RMCAssignmentController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateRMCAttendance(user, query, payload) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const payloadRMC = Object.assign({}, payload);
            const result = await this.roadMapContentService.updateRMCAttendance(query.idRMC, payloadRMC);
            if (result) {
                return new baseController_1.Ok('Update RMC Attendance', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-RMCAttendanceController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async updateRoadMap(user, query, updateRoadMap) {
        try {
            const result = await this.roadMapContentService.findOneAndUpdate({ createBy: user._id, _id: query.id }, updateRoadMap);
            if (result) {
                return new baseController_1.Ok('Update RoadMap success', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'update-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async deleteRMCAssignment(user, query) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const result = await this.roadMapContentService.deleteRMCAssignment(query.idRMC);
            if (result) {
                return new baseController_1.Ok('Delete RMC Assignment success', { success: true });
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'delete-RMCAssignmentController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async deleteRMCAttendance(user, query) {
        try {
            const hostClass = await this.classService.checkHostClass(user._id, query.idClass);
            if (!hostClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const result = await this.roadMapContentService.deleteRMCAttendance(query.idRMC);
            if (result) {
                return new baseController_1.Ok('Delete RMC Attendance success', { success: true });
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'delete-RMCAttendanceController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async changeRoadMap(user, query) {
        try {
            const result = await this.roadMapContentService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, { status: ~~query.status });
            if (result) {
                return new baseController_1.Ok('Delete RoadMap success', this.roadMapContentService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Delete-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getRoadMapContent(user, query) {
        try {
            const existClass = await this.memberClassService.checkExitsUserInClass(user._id, query.idClass);
            if (!existClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const result = await this.roadMapContentService.findAll({
                idRoadMap: query.idRoadMap,
            });
            const sortResult = result.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
            let resultRmc = null;
            const newResult = [];
            for (const rmc of sortResult) {
                switch (rmc.type) {
                    case enum_1.RCMTypes.ASSIGNMENT:
                        resultRmc = await this._rmcAssignmentService.findById(`${rmc.rmc}`);
                        break;
                    case enum_1.RCMTypes.ATTENDANCE:
                        const isSubmit = await this._rmcAttendanceUserService.findOne({
                            user: user._id,
                            rmc: rmc.rmc,
                        }, 'user');
                        resultRmc = await this._rmcAttendanceService.findById(`${rmc.rmc}`);
                        resultRmc = Object.assign(Object.assign({}, resultRmc), { isSubmit: existClass.role === 1 ? true : Boolean(isSubmit), submit: isSubmit ? Object.assign({}, isSubmit) : null });
                        break;
                    case enum_1.RCMTypes.FILE:
                        resultRmc = await this._rmcFilesService.findById(`${rmc.rmc}`);
                        break;
                    default:
                        break;
                }
                if (resultRmc) {
                    const obj = this.classService.cvtJSON(rmc);
                    obj.rmc = resultRmc;
                    newResult.push(this.classService.cvtJSON(obj));
                }
            }
            return new baseController_1.Ok('Get RoadMap Content success', newResult);
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Get-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getSchedule(user, query) {
        try {
            const startTime = new Date(`${query.year}-${query.month}-01`);
            const endTime = new Date(`${query.year}-${query.month}-30`);
            const existClass = await this.memberClassService.findAllNoSkip({
                user: user._id,
            });
            if (!existClass) {
                throw new resource_exception_1.ResourceFoundException('The class you are trying to access does not exist');
            }
            const classId = existClass.map((item) => item.idClass);
            const roadmaps = await this.roadMapService.findAllNoSkip({
                classBy: { $in: classId },
            });
            const roadmapId = roadmaps.map((item) => item._id);
            const rmcContent = await this.roadMapContentService.findAllNoSkip({
                idRoadMap: { $in: roadmapId },
            }, [
                {
                    path: 'rmcAttendance',
                    match: {
                        startTime: { $gte: startTime, $lte: endTime },
                    },
                },
                {
                    path: 'rmcAssignment',
                    match: {
                        startTime: { $gte: startTime, $lte: endTime },
                    },
                },
            ]);
            const filterRMC = rmcContent.filter((item) => item.rmcAssignment || item.rmcAttendance);
            return new baseController_1.Ok('Get RoadMap Content success', this.roadMapContentService.cvtJSON(filterRMC));
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Get-RoadMapController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post('assignment'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_b = typeof req_dto_2.CreateRMCAssignmentDto !== "undefined" && req_dto_2.CreateRMCAssignmentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "createRMCAssignment", null);
__decorate([
    common_1.Post('attendance'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_d = typeof req_dto_3.CreateRMCAttendanceDto !== "undefined" && req_dto_3.CreateRMCAttendanceDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "createRMCAttendance", null);
__decorate([
    common_1.Post('attendance-user'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof req_dto_1.IUserRMCAttendance !== "undefined" && req_dto_1.IUserRMCAttendance) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "userRMCAttendance", null);
__decorate([
    common_1.Post('file'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_h = typeof req_dto_4.CreateRMCFileDto !== "undefined" && req_dto_4.CreateRMCFileDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "createRMCFile", null);
__decorate([
    common_1.Patch('assignment'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_k = typeof req_dto_5.UpdateRMCAssignmentDto !== "undefined" && req_dto_5.UpdateRMCAssignmentDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "updateRMCAssignment", null);
__decorate([
    common_1.Patch('attendance'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_m = typeof req_dto_6.UpdateRMCAttendanceDto !== "undefined" && req_dto_6.UpdateRMCAttendanceDto) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "updateRMCAttendance", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "updateRoadMap", null);
__decorate([
    common_1.Delete('assignment'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "deleteRMCAssignment", null);
__decorate([
    common_1.Delete('attendance'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "deleteRMCAttendance", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _r : Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "changeRoadMap", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "getRoadMapContent", null);
__decorate([
    common_1.Get('schedule'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoadMapContentController.prototype, "getSchedule", null);
RoadMapContentController = __decorate([
    common_1.Controller('api/road-map-content'),
    __metadata("design:paramtypes", [typeof (_u = typeof roadMapContent_service_1.RoadMapContentService !== "undefined" && roadMapContent_service_1.RoadMapContentService) === "function" ? _u : Object, typeof (_v = typeof rmc_assignments_service_1.RMCAssignmentService !== "undefined" && rmc_assignments_service_1.RMCAssignmentService) === "function" ? _v : Object, typeof (_w = typeof rmc_assignmentsUserservice_1.RMCAssignmentUserService !== "undefined" && rmc_assignmentsUserservice_1.RMCAssignmentUserService) === "function" ? _w : Object, typeof (_x = typeof rmc_attendances_service_1.RMCAttendanceService !== "undefined" && rmc_attendances_service_1.RMCAttendanceService) === "function" ? _x : Object, typeof (_y = typeof rmc_attendancesUser_service_1.RMCAttendancesUserService !== "undefined" && rmc_attendancesUser_service_1.RMCAttendancesUserService) === "function" ? _y : Object, typeof (_z = typeof rmc_files_service_1.RMCFilesService !== "undefined" && rmc_files_service_1.RMCFilesService) === "function" ? _z : Object, typeof (_0 = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _0 : Object, typeof (_1 = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _1 : Object, typeof (_2 = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _2 : Object, typeof (_3 = typeof roadMap_service_1.RoadMapService !== "undefined" && roadMap_service_1.RoadMapService) === "function" ? _3 : Object])
], RoadMapContentController);
exports.RoadMapContentController = RoadMapContentController;


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRMCAttendanceDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UserRMCAttendanceDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserRMCAttendanceDto.prototype, "rmc", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserRMCAttendanceDto.prototype, "idClass", void 0);
exports.UserRMCAttendanceDto = UserRMCAttendanceDto;


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapContentService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const errors_exception_1 = __webpack_require__(30);
const baseService_service_1 = __webpack_require__(10);
const mongoose = __webpack_require__(11);
const typegoose_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(12);
const post_service_1 = __webpack_require__(124);
const roadMapContent_entity_1 = __webpack_require__(129);
const rmc_assignments_service_1 = __webpack_require__(130);
const rmc_assignmentsUserservice_1 = __webpack_require__(132);
const rmc_attendances_service_1 = __webpack_require__(134);
const rmc_attendancesUser_service_1 = __webpack_require__(136);
const rmc_files_service_1 = __webpack_require__(138);
let RoadMapContentService = class RoadMapContentService extends baseService_service_1.BaseService {
    constructor(_setOfQuestionsModel, _loggerService, _rmcAssignmentService, _rmcAssignmentUserService, _rmcAttendanceService, _rmcAttendanceUserService, _rmcFilesService, _postService) {
        super();
        this._setOfQuestionsModel = _setOfQuestionsModel;
        this._loggerService = _loggerService;
        this._rmcAssignmentService = _rmcAssignmentService;
        this._rmcAssignmentUserService = _rmcAssignmentUserService;
        this._rmcAttendanceService = _rmcAttendanceService;
        this._rmcAttendanceUserService = _rmcAttendanceUserService;
        this._rmcFilesService = _rmcFilesService;
        this._postService = _postService;
        this._model = _setOfQuestionsModel;
    }
    async createRoadMapContent(createdBy, type, idRoadMap, idClass, payload) {
        try {
            const obj = Object.assign({}, payload);
            obj.createBy = createdBy;
            obj.type = type;
            obj.idRoadMap = idRoadMap;
            const newRoadMap = roadMapContent_entity_1.RoadMapContent.createModel(obj);
            const roadMapS = await this.create(newRoadMap);
            if (roadMapS) {
                const postDto = {
                    class: new mongoose.Types.ObjectId(idClass),
                    roadMapContent: new mongoose.Types.ObjectId(roadMapS._id),
                    createdBy: new mongoose.Types.ObjectId(obj.createBy),
                };
                const singlePost = await this._postService.createPostWithRmc(postDto);
                return this.cvtJSON(roadMapS);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-RoadMapContentService');
            return null;
        }
    }
    async createRMCAssignment(payload) {
        try {
            const resultRMC = await this._rmcAssignmentService.createClassAssignment(payload);
            if (resultRMC) {
                const result = await this.createRoadMapContent(payload.createdBy, payload.type, payload.idRoadMap, payload.idClass, {
                    rmc: new mongoose.Types.ObjectId(resultRMC._id),
                    rmcAssignment: new mongoose.Types.ObjectId(resultRMC._id),
                });
                if (result) {
                    const cloneRMCAssignment = this.cvtJSON(result);
                    cloneRMCAssignment.rmc = this.cvtJSON(resultRMC);
                    return cloneRMCAssignment;
                }
                throw new common_1.NotFoundException('Create RMC False');
            }
            throw new common_1.NotFoundException('Create RMC createRMCAssignment');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC createRMCAssignment ERR');
        }
    }
    async createRMCAttendance(payload) {
        try {
            const resultRMC = await this._rmcAttendanceService.createClassAttendance(payload);
            if (resultRMC) {
                const result = await this.createRoadMapContent(payload.createdBy, payload.type, payload.idRoadMap, payload.idClass, {
                    rmc: new mongoose.Types.ObjectId(resultRMC._id),
                    rmcAttendance: new mongoose.Types.ObjectId(resultRMC._id),
                });
                if (result) {
                    const cloneRMCAssignment = this.cvtJSON(result);
                    cloneRMCAssignment.rmc = this.cvtJSON(resultRMC);
                    return cloneRMCAssignment;
                }
                throw new common_1.NotFoundException('Create RMC False');
            }
            throw new common_1.NotFoundException('Create RMC createRMCAttendance');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC createRMCAssignment ERR');
        }
    }
    async createRMCFile(payload) {
        try {
            const resultRMC = await this._rmcFilesService.createClassFile(payload);
            if (resultRMC) {
                const result = await this.createRoadMapContent(payload.createdBy, payload.type, payload.idRoadMap, payload.idClass, {
                    rmc: new mongoose.Types.ObjectId(resultRMC._id),
                    rmcFile: new mongoose.Types.ObjectId(resultRMC._id),
                });
                if (result) {
                    return result;
                }
                throw new common_1.NotFoundException('Create RMC False');
            }
            throw new common_1.NotFoundException('Create RMC createRMCFile');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC createRMCFile ERR');
        }
    }
    async updateRMCAssignment(idRMC, payload) {
        try {
            const rmc = await this.findById(idRMC);
            if (rmc) {
                const result = await this._rmcAssignmentService.findOneAndUpdate({ _id: rmc.rmc }, payload);
                if (result) {
                    return result;
                }
            }
            throw new common_1.NotFoundException('Update RMC False');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'UPDATE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC updateRMCAssignment ERR');
        }
    }
    async updateRMCAttendance(idRMC, payload) {
        try {
            const rmc = await this.findById(idRMC);
            if (rmc) {
                const result = await this._rmcAttendanceService.findOneAndUpdate({ _id: rmc.rmc }, payload);
                if (result) {
                    const obj = Object.assign({}, this.cvtJSON(rmc));
                    obj.rmc = this.cvtJSON(result);
                    return obj;
                }
            }
            throw new common_1.NotFoundException('Update RMC False');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'UPDATE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC updateRMCAttendance ERR');
        }
    }
    async deleteRMCAssignment(idRMC) {
        try {
            const rmc = await this.findById(idRMC);
            console.log(`LHA:  ===> file: roadMapContent.service.ts ===> line 212 ===> rmc`, rmc);
            if (rmc) {
                const resultRMC = await this._rmcAssignmentService.deleteClassAssignment(`${rmc.rmc}`);
                if (resultRMC) {
                    const result = await this.delete(idRMC);
                    if (result) {
                        return result;
                    }
                }
            }
            throw new common_1.NotFoundException('Delete RMC False');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'DELETE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC deleteRMCAssignment ERR');
        }
    }
    async deleteRMCAttendance(idRMC) {
        try {
            const rmc = await this.findById(idRMC);
            console.log(`LHA:  ===> file: roadMapContent.service.ts ===> line 243 ===> rmc`, rmc);
            if (rmc) {
                const resultRMC = await this._rmcAttendanceService.deleteClassAttendance(`${rmc.rmc}`);
                if (resultRMC) {
                    const result = await this.delete(idRMC);
                    if (result) {
                        return result;
                    }
                }
            }
            throw new common_1.NotFoundException('Delete RMC False');
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'DELETE-RoadMapContentService');
            throw new errors_exception_1.Error2SchoolException('RMC deleteRMCAttendance ERR');
        }
    }
};
RoadMapContentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(roadMapContent_entity_1.RoadMapContent.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof rmc_assignments_service_1.RMCAssignmentService !== "undefined" && rmc_assignments_service_1.RMCAssignmentService) === "function" ? _c : Object, typeof (_d = typeof rmc_assignmentsUserservice_1.RMCAssignmentUserService !== "undefined" && rmc_assignmentsUserservice_1.RMCAssignmentUserService) === "function" ? _d : Object, typeof (_e = typeof rmc_attendances_service_1.RMCAttendanceService !== "undefined" && rmc_attendances_service_1.RMCAttendanceService) === "function" ? _e : Object, typeof (_f = typeof rmc_attendancesUser_service_1.RMCAttendancesUserService !== "undefined" && rmc_attendancesUser_service_1.RMCAttendancesUserService) === "function" ? _f : Object, typeof (_g = typeof rmc_files_service_1.RMCFilesService !== "undefined" && rmc_files_service_1.RMCFilesService) === "function" ? _g : Object, typeof (_h = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _h : Object])
], RoadMapContentService);
exports.RoadMapContentService = RoadMapContentService;


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapContent = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const status_enum_1 = __webpack_require__(29);
const mongoose_1 = __webpack_require__(11);
class RoadMapContent extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RoadMapContent().getModelForClass(RoadMapContent, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], RoadMapContent.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], RoadMapContent.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    __metadata("design:type", Number)
], RoadMapContent.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    __metadata("design:type", Number)
], RoadMapContent.prototype, "type", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], RoadMapContent.prototype, "rmc", void 0);
__decorate([
    typegoose_1.prop({ default: null, ref: 'RMCFile' }),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], RoadMapContent.prototype, "rmcFile", void 0);
__decorate([
    typegoose_1.prop({ default: null, ref: 'RMCAssignment' }),
    __metadata("design:type", typeof (_c = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _c : Object)
], RoadMapContent.prototype, "rmcAssignment", void 0);
__decorate([
    typegoose_1.prop({ default: null, ref: 'RMCAttendances' }),
    __metadata("design:type", typeof (_d = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _d : Object)
], RoadMapContent.prototype, "rmcAttendance", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RoadMapContent.prototype, "idRoadMap", void 0);
exports.RoadMapContent = RoadMapContent;


/***/ }),
/* 130 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAssignmentService = void 0;
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(7);
const rmc_assignments_1 = __webpack_require__(131);
let RMCAssignmentService = class RMCAssignmentService extends baseService_service_1.BaseService {
    constructor(_RMCAssignmentModel, _loggerService) {
        super();
        this._RMCAssignmentModel = _RMCAssignmentModel;
        this._loggerService = _loggerService;
        this._model = _RMCAssignmentModel;
    }
    async createClassAssignment(payload) {
        try {
            const obj = Object.assign({}, payload);
            const newClassAssignment = rmc_assignments_1.RMCAssignment.createModel(obj);
            const result = await this.create(newClassAssignment);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'createClassAssignment-RMCAssignmentsService');
            return null;
        }
    }
    async deleteClassAssignment(id) {
        try {
            const result = await this.delete(id);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'deleteClassAssignment-RMCAssignmentsService');
            return null;
        }
    }
};
RMCAssignmentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rmc_assignments_1.RMCAssignment.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RMCAssignmentService);
exports.RMCAssignmentService = RMCAssignmentService;


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAssignment = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
class RMCAssignment extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RMCAssignment().getModelForClass(RMCAssignment, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAssignment.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAssignment.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RMCAssignment.prototype, "startTime", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RMCAssignment.prototype, "endTime", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], RMCAssignment.prototype, "fileExtensions", void 0);
exports.RMCAssignment = RMCAssignment;


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAssignmentUserService = void 0;
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(7);
const rmc_assignmentsUser_1 = __webpack_require__(133);
let RMCAssignmentUserService = class RMCAssignmentUserService extends baseService_service_1.BaseService {
    constructor(_RMCAssignmentUserModel, _loggerService) {
        super();
        this._RMCAssignmentUserModel = _RMCAssignmentUserModel;
        this._loggerService = _loggerService;
        this._model = _RMCAssignmentUserModel;
    }
    async createRMCAssignmentUser(userId, assignmentId) {
        try {
            const obj = {
                userId,
                assignmentId,
            };
            const newClassAssignment = rmc_assignmentsUser_1.RMCAssignmentUser.createModel(obj);
            const result = await this.create(newClassAssignment);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'createClassAssignment-RMCAssignmentUsersService');
            return null;
        }
    }
};
RMCAssignmentUserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rmc_assignmentsUser_1.RMCAssignmentUser.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RMCAssignmentUserService);
exports.RMCAssignmentUserService = RMCAssignmentUserService;


/***/ }),
/* 133 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAssignmentUser = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
class RMCAssignmentUser extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RMCAssignmentUser().getModelForClass(RMCAssignmentUser, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAssignmentUser.prototype, "userId", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAssignmentUser.prototype, "assignmentId", void 0);
__decorate([
    typegoose_1.prop({ default: null }),
    __metadata("design:type", Number)
], RMCAssignmentUser.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ default: [] }),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], RMCAssignmentUser.prototype, "commentTeacher", void 0);
exports.RMCAssignmentUser = RMCAssignmentUser;


/***/ }),
/* 134 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAttendanceService = void 0;
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(7);
const rmc_attendances_1 = __webpack_require__(135);
let RMCAttendanceService = class RMCAttendanceService extends baseService_service_1.BaseService {
    constructor(_RMCAttendancesModel, _loggerService) {
        super();
        this._RMCAttendancesModel = _RMCAttendancesModel;
        this._loggerService = _loggerService;
        this._model = _RMCAttendancesModel;
    }
    async createClassAttendance(payload) {
        try {
            const obj = Object.assign({}, payload);
            const newClassAttendance = rmc_attendances_1.RMCAttendances.createModel(obj);
            const result = await this.create(newClassAttendance);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'createClassAttendance-RMCAttendancesService');
            return null;
        }
    }
    async deleteClassAttendance(id) {
        try {
            const result = await this.delete(id);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            this._loggerService.error(e.message, null, 'deleteClassAttendance-RMCAttendancesService');
            return null;
        }
    }
};
RMCAttendanceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rmc_attendances_1.RMCAttendances.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RMCAttendanceService);
exports.RMCAttendanceService = RMCAttendanceService;


/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAttendances = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
class RMCAttendances extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RMCAttendances().getModelForClass(RMCAttendances, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAttendances.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCAttendances.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RMCAttendances.prototype, "startTime", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RMCAttendances.prototype, "endTime", void 0);
exports.RMCAttendances = RMCAttendances;


/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAttendancesUserService = void 0;
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(7);
const rmc_attendancesUser_1 = __webpack_require__(137);
const mongoose = __webpack_require__(11);
let RMCAttendancesUserService = class RMCAttendancesUserService extends baseService_service_1.BaseService {
    constructor(_RMCAttendancesUserModel, _loggerService) {
        super();
        this._RMCAttendancesUserModel = _RMCAttendancesUserModel;
        this._loggerService = _loggerService;
        this._model = _RMCAttendancesUserModel;
    }
    async createClassAttendanceUser(userId, rmcId) {
        try {
            const obj = {
                user: new mongoose.Types.ObjectId(userId),
                rmc: new mongoose.Types.ObjectId(rmcId),
            };
            const newClassAttendanceUser = rmc_attendancesUser_1.RMCAttendancesUser.createModel(obj);
            const result = await this.create(newClassAttendanceUser);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'createClassAttendanceUser-RMCAttendancesUserService');
            return null;
        }
    }
};
RMCAttendancesUserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rmc_attendancesUser_1.RMCAttendancesUser.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RMCAttendancesUserService);
exports.RMCAttendancesUserService = RMCAttendancesUserService;


/***/ }),
/* 137 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RMCAttendancesUser_1, _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCAttendancesUser = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(11);
let RMCAttendancesUser = RMCAttendancesUser_1 = class RMCAttendancesUser extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RMCAttendancesUser_1().getModelForClass(RMCAttendancesUser_1, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
};
__decorate([
    typegoose_1.prop({ required: true, ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], RMCAttendancesUser.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'RoadMapContent' }),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], RMCAttendancesUser.prototype, "rmc", void 0);
__decorate([
    typegoose_1.prop({ default: 1 }),
    __metadata("design:type", Number)
], RMCAttendancesUser.prototype, "status", void 0);
RMCAttendancesUser = RMCAttendancesUser_1 = __decorate([
    typegoose_1.index({ user: 1, rmc: 1 }, { unique: true })
], RMCAttendancesUser);
exports.RMCAttendancesUser = RMCAttendancesUser;


/***/ }),
/* 138 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCFilesService = void 0;
const logger_service_1 = __webpack_require__(12);
const baseService_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(7);
const rmc_files_1 = __webpack_require__(139);
let RMCFilesService = class RMCFilesService extends baseService_service_1.BaseService {
    constructor(_rmcFileModel, _loggerService) {
        super();
        this._rmcFileModel = _rmcFileModel;
        this._loggerService = _loggerService;
        this._model = _rmcFileModel;
    }
    async createClassFile(payload) {
        try {
            const obj = Object.assign({}, payload);
            const newClassFile = rmc_files_1.RMCFile.createModel(obj);
            const result = await this.create(newClassFile);
            if (result) {
                return this.cvtJSON(result);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'createClassFile-RMCFilesService');
            return null;
        }
    }
};
RMCFilesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rmc_files_1.RMCFile.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], RMCFilesService);
exports.RMCFilesService = RMCFilesService;


/***/ }),
/* 139 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RMCFile = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const baseModel_entity_2 = __webpack_require__(6);
const typegoose_1 = __webpack_require__(7);
class RMCFile extends baseModel_entity_1.BaseModel {
    static get model() {
        return new RMCFile().getModelForClass(RMCFile, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCFile.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], RMCFile.prototype, "fileType", void 0);
exports.RMCFile = RMCFile;


/***/ }),
/* 140 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRMCAssignmentDto = void 0;
const class_transformer_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(33);
class CreateRMCAssignmentDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAssignmentDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAssignmentDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAssignmentDto.prototype, "startTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAssignmentDto.prototype, "endTime", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(6),
    class_transformer_1.Type(() => String),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], CreateRMCAssignmentDto.prototype, "fileExtensions", void 0);
exports.CreateRMCAssignmentDto = CreateRMCAssignmentDto;


/***/ }),
/* 141 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRMCAttendanceDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateRMCAttendanceDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAttendanceDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAttendanceDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAttendanceDto.prototype, "startTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCAttendanceDto.prototype, "endTime", void 0);
exports.CreateRMCAttendanceDto = CreateRMCAttendanceDto;


/***/ }),
/* 142 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRMCFileDto = void 0;
const class_validator_1 = __webpack_require__(33);
class CreateRMCFileDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCFileDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRMCFileDto.prototype, "fileType", void 0);
exports.CreateRMCFileDto = CreateRMCFileDto;


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RCMTypes = void 0;
var RCMTypes;
(function (RCMTypes) {
    RCMTypes[RCMTypes["ATTENDANCE"] = 0] = "ATTENDANCE";
    RCMTypes[RCMTypes["ASSIGNMENT"] = 1] = "ASSIGNMENT";
    RCMTypes[RCMTypes["FILE"] = 2] = "FILE";
})(RCMTypes = exports.RCMTypes || (exports.RCMTypes = {}));


/***/ }),
/* 144 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRMCAssignmentDto = void 0;
const class_transformer_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(33);
class UpdateRMCAssignmentDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAssignmentDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAssignmentDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAssignmentDto.prototype, "startTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAssignmentDto.prototype, "endTime", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(2),
    class_validator_1.ArrayMaxSize(6),
    class_transformer_1.Type(() => String),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], UpdateRMCAssignmentDto.prototype, "fileExtensions", void 0);
exports.UpdateRMCAssignmentDto = UpdateRMCAssignmentDto;


/***/ }),
/* 145 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRMCAttendanceDto = void 0;
const class_validator_1 = __webpack_require__(33);
class UpdateRMCAttendanceDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAttendanceDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAttendanceDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAttendanceDto.prototype, "startTime", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateRMCAttendanceDto.prototype, "endTime", void 0);
exports.UpdateRMCAttendanceDto = UpdateRMCAttendanceDto;


/***/ }),
/* 146 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MemberClassModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClassModule = void 0;
const device_service_1 = __webpack_require__(44);
const notification_service_1 = __webpack_require__(102);
const notification_entity_1 = __webpack_require__(103);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const logger_service_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const memberClass_entity_1 = __webpack_require__(56);
const memberClass_service_1 = __webpack_require__(55);
const memberClass_controller_1 = __webpack_require__(147);
const user_module_1 = __webpack_require__(62);
const user_entity_2 = __webpack_require__(39);
const upLoadFile_entity_1 = __webpack_require__(54);
const device_module_1 = __webpack_require__(42);
const device_entity_1 = __webpack_require__(43);
let MemberClassModule = MemberClassModule_1 = class MemberClassModule {
};
MemberClassModule = MemberClassModule_1 = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: memberClass_entity_1.MemberClasses.modelName, schema: memberClass_entity_1.MemberClasses.model.schema },
                ,
                { name: user_entity_2.User.name, schema: user_entity_1.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
                { name: notification_entity_1.Notification.name, schema: notification_entity_1.Notification.model.modelName },
                { name: device_entity_1.Device.modelName, schema: device_entity_1.Device.model.schema },
                ,
            ]),
            user_module_1.UserModule,
            MemberClassModule_1,
            device_module_1.DeviceModule,
        ],
        controllers: [memberClass_controller_1.MemberClassController],
        providers: [
            logger_service_1.LoggerService,
            memberClass_service_1.MemberClassService,
            up_load_file_service_1.UpLoadFileService,
            user_service_1.UserService,
            notification_service_1.NotificationService,
            device_service_1.DeviceService,
        ],
        exports: [memberClass_service_1.MemberClassService],
    })
], MemberClassModule);
exports.MemberClassModule = MemberClassModule;


/***/ }),
/* 147 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClassController = void 0;
const up_load_file_service_1 = __webpack_require__(52);
const common_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const notification_service_1 = __webpack_require__(102);
const user_entity_1 = __webpack_require__(39);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const resource_exception_1 = __webpack_require__(26);
const query_interface_1 = __webpack_require__(64);
const logger_service_1 = __webpack_require__(12);
const memberClass_service_1 = __webpack_require__(55);
let MemberClassController = class MemberClassController {
    constructor(loggerService, _memberClassService, _notificationService, _uploadService) {
        this.loggerService = loggerService;
        this._memberClassService = _memberClassService;
        this._notificationService = _notificationService;
        this._uploadService = _uploadService;
    }
    async getMemberClass(user, query) {
        try {
            const result = await this._memberClassService.getMemberByClass(query.idClass);
            if (result) {
                return new baseController_1.Ok('Get List Member Success', result);
            }
            throw new resource_exception_1.ResourceFoundException('Get List Member Fail');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'get-MemberClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getConversation(user, query) {
        var _a, _b;
        try {
            const result = await this._memberClassService.findAll({
                user: user._id,
            }, query, [
                {
                    path: 'idClass',
                    populate: {
                        path: 'latestMessage',
                    },
                },
            ]);
            const addImagePath = [];
            for (const current of JSON.parse(JSON.stringify(result))) {
                const clonePost = Object.assign({}, current);
                if (((_a = current === null || current === void 0 ? void 0 : current.idClass) === null || _a === void 0 ? void 0 : _a.image) && ((_b = current === null || current === void 0 ? void 0 : current.idClass) === null || _b === void 0 ? void 0 : _b.image) !== '') {
                    const image = await this._uploadService.findById(current.idClass.image);
                    clonePost.idClass.image = image.path || '';
                }
                addImagePath.push(clonePost);
            }
            if (addImagePath) {
                return new baseController_1.Ok('Get List Member Success', addImagePath);
            }
            throw new resource_exception_1.ResourceFoundException('Get List Member Fail');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'get-MemberClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getMemberClass_asbd(query) {
        try {
            const result = await this._memberClassService.getMemberNotifyByClass(query.idClass);
            for (const member of result) {
                const noti = {
                    idUser: member.idUser,
                    title: 'Kiem Tra Quizz',
                    description: 'Bạn đã được phân công làm bài kiểm tra',
                    typeNotify: 'quiz',
                    data: '123',
                };
            }
            if (result) {
                return new baseController_1.Ok('Get List Member Success', result);
            }
            throw new resource_exception_1.ResourceFoundException('Get List Member Fail');
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'get-MemberClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], MemberClassController.prototype, "getMemberClass", null);
__decorate([
    common_1.Get('/conversation'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof query_interface_1.IQueryFind !== "undefined" && query_interface_1.IQueryFind) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], MemberClassController.prototype, "getConversation", null);
__decorate([
    common_1.Get('/abc'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberClassController.prototype, "getMemberClass_asbd", null);
MemberClassController = __decorate([
    common_1.Controller('api/memberClass'),
    __metadata("design:paramtypes", [typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object, typeof (_e = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _e : Object, typeof (_f = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _f : Object, typeof (_g = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _g : Object])
], MemberClassController);
exports.MemberClassController = MemberClassController;


/***/ }),
/* 148 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const up_load_file_service_1 = __webpack_require__(52);
const device_module_1 = __webpack_require__(42);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(12);
const device_service_1 = __webpack_require__(44);
const notification_controller_1 = __webpack_require__(149);
const notification_entity_1 = __webpack_require__(103);
const notification_service_1 = __webpack_require__(102);
const device_entity_1 = __webpack_require__(43);
const upLoadFile_entity_1 = __webpack_require__(54);
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    common_1.Module({
        imports: [
            device_module_1.DeviceModule,
            mongoose_1.MongooseModule.forFeature([
                { name: notification_entity_1.Notification.modelName, schema: notification_entity_1.Notification.model.schema },
                { name: device_entity_1.Device.modelName, schema: device_entity_1.Device.model.schema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [notification_controller_1.NotificationController],
        providers: [
            logger_service_1.LoggerService,
            notification_service_1.NotificationService,
            device_service_1.DeviceService,
            up_load_file_service_1.UpLoadFileService,
        ],
        exports: [notification_service_1.NotificationService],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;


/***/ }),
/* 149 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = void 0;
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const common_1 = __webpack_require__(3);
const user_entity_1 = __webpack_require__(39);
const logger_service_1 = __webpack_require__(12);
const errors_exception_1 = __webpack_require__(30);
const notification_service_1 = __webpack_require__(102);
const baseController_1 = __webpack_require__(31);
let NotificationController = class NotificationController {
    constructor(loggerService, _notificationService) {
        this.loggerService = loggerService;
        this._notificationService = _notificationService;
    }
    async getNotification(user) {
        try {
            const result = await this._notificationService.getNotification(user.createdBy);
            return new baseController_1.Ok('Get list notification', result);
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'get-NotificationController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getNotificationQuantity(user) {
        try {
            const result = await this._notificationService.getNotificationCount(user.createdBy);
            return new baseController_1.Ok('Get list quantity', {
                quantity: result,
            });
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'get-NotificationController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async seenNotification(user, query) {
        try {
            const result = await this._notificationService.findOneAndUpdate({
                idUser: user.createdBy,
                _id: query.id,
                isSeen: false,
            }, {
                isSeen: true,
            });
            if (result) {
                return new baseController_1.Ok('Change seen notification', this._notificationService.cvtJSON(result));
            }
            return new baseController_1.Ok('Notification not found or Notification is Seen', {
                data: undefined,
            });
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'change-NotificationController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotification", null);
__decorate([
    common_1.Get('quantity'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationQuantity", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "seenNotification", null);
NotificationController = __decorate([
    common_1.Controller('api/notification'),
    __metadata("design:paramtypes", [typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object, typeof (_e = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _e : Object])
], NotificationController);
exports.NotificationController = NotificationController;


/***/ }),
/* 150 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassModule = void 0;
const quizClass_controller_1 = __webpack_require__(151);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const quizClass_entity_1 = __webpack_require__(105);
const quizClass_service_1 = __webpack_require__(104);
let QuizClassModule = class QuizClassModule {
};
QuizClassModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: quizClass_entity_1.QuizClass.modelName,
                    schema: quizClass_entity_1.QuizClass.model.schema,
                },
            ]),
        ],
        controllers: [quizClass_controller_1.QuizClassController],
        providers: [quizClass_service_1.QuizClassService],
        exports: [quizClass_service_1.QuizClassService],
    })
], QuizClassModule);
exports.QuizClassModule = QuizClassModule;


/***/ }),
/* 151 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassController = void 0;
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(39);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const logger_service_1 = __webpack_require__(12);
const user_decorator_1 = __webpack_require__(23);
const quizClass_service_1 = __webpack_require__(104);
let QuizClassController = class QuizClassController {
    constructor(_quizClassService, loggerService) {
        this._quizClassService = _quizClassService;
        this.loggerService = loggerService;
    }
    async getHistory(user, query) {
        try {
            const result = await this._quizClassService.getHistory(query.idClass);
            return new baseController_1.Ok('Create Question success', result);
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'create-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Get('history'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], QuizClassController.prototype, "getHistory", null);
QuizClassController = __decorate([
    common_1.Controller('api/quiz-class'),
    __metadata("design:paramtypes", [typeof (_b = typeof quizClass_service_1.QuizClassService !== "undefined" && quizClass_service_1.QuizClassService) === "function" ? _b : Object, typeof (_c = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _c : Object])
], QuizClassController);
exports.QuizClassController = QuizClassController;


/***/ }),
/* 152 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassScoreModule = void 0;
const quizClassScore_controller_1 = __webpack_require__(153);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const quizClassScore_entity_1 = __webpack_require__(107);
const quizClassScore_service_1 = __webpack_require__(106);
let QuizClassScoreModule = class QuizClassScoreModule {
};
QuizClassScoreModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: quizClassScore_entity_1.QuizClassScore.modelName,
                    schema: quizClassScore_entity_1.QuizClassScore.model.schema,
                },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
            ]),
        ],
        controllers: [quizClassScore_controller_1.QuizClassScoreController],
        providers: [quizClassScore_service_1.QuizClassScoreService, user_service_1.UserService, up_load_file_service_1.UpLoadFileService],
    })
], QuizClassScoreModule);
exports.QuizClassScoreModule = QuizClassScoreModule;


/***/ }),
/* 153 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizClassScoreController = void 0;
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(39);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const logger_service_1 = __webpack_require__(12);
const user_decorator_1 = __webpack_require__(23);
const quizClassScore_service_1 = __webpack_require__(106);
let QuizClassScoreController = class QuizClassScoreController {
    constructor(_quizClassScoreService, loggerService) {
        this._quizClassScoreService = _quizClassScoreService;
        this.loggerService = loggerService;
    }
    async getHistory(user, query) {
        try {
            const result = await this._quizClassScoreService.getQuizClassScore(query.idQuizClass);
            return new baseController_1.Ok('Create Question success', result);
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'create-QuestionController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Get('history-detail'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], QuizClassScoreController.prototype, "getHistory", null);
QuizClassScoreController = __decorate([
    common_1.Controller('api/quiz-class'),
    __metadata("design:paramtypes", [typeof (_b = typeof quizClassScore_service_1.QuizClassScoreService !== "undefined" && quizClassScore_service_1.QuizClassScoreService) === "function" ? _b : Object, typeof (_c = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _c : Object])
], QuizClassScoreController);
exports.QuizClassScoreController = QuizClassScoreController;


/***/ }),
/* 154 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(12);
const shared_module_1 = __webpack_require__(18);
const class_module_1 = __webpack_require__(47);
const class_entity_1 = __webpack_require__(49);
const class_service_1 = __webpack_require__(48);
const memberClass_entity_1 = __webpack_require__(56);
const memberClass_service_1 = __webpack_require__(55);
const upLoadFile_entity_1 = __webpack_require__(54);
const up_load_file_service_1 = __webpack_require__(52);
const user_entity_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(50);
const user_module_1 = __webpack_require__(62);
const message_controller_1 = __webpack_require__(155);
const message_entity_1 = __webpack_require__(157);
const message_service_1 = __webpack_require__(156);
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            class_module_1.ClassModule,
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: memberClass_entity_1.MemberClasses.name, schema: memberClass_entity_1.MemberClasses.model.schema },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
                { name: upLoadFile_entity_1.UpLoadFile.modelName, schema: upLoadFile_entity_1.UpLoadFile.model.schema },
                { name: message_entity_1.Message.modelName, schema: message_entity_1.Message.model.schema },
            ]),
        ],
        controllers: [message_controller_1.MessageController],
        providers: [
            message_service_1.MessageService,
            class_service_1.ClassService,
            logger_service_1.LoggerService,
            memberClass_service_1.MemberClassService,
            user_service_1.UserService,
            up_load_file_service_1.UpLoadFileService,
        ],
    })
], MessageModule);
exports.MessageModule = MessageModule;


/***/ }),
/* 155 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageController = void 0;
const common_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(23);
const jwt_auth_guard_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(39);
const baseController_1 = __webpack_require__(31);
const errors_exception_1 = __webpack_require__(30);
const resource_exception_1 = __webpack_require__(26);
const query_interface_1 = __webpack_require__(64);
const logger_service_1 = __webpack_require__(12);
const message_service_1 = __webpack_require__(156);
let MessageController = class MessageController {
    constructor(_messageService, loggerService) {
        this._messageService = _messageService;
        this.loggerService = loggerService;
    }
    async create(user, createMessage) {
        try {
            console.log(user);
            const result = await this._messageService.createMessage(Object.assign(Object.assign({}, createMessage), { sender: user._id }));
            if (result) {
                return new baseController_1.Ok('Create Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getConversationByClass(user, idClass, query) {
        try {
            const result = await this._messageService.findAll({ idClass: idClass }, query, 'sender');
            if (result) {
                return new baseController_1.Ok('Get Message success', JSON.parse(JSON.stringify(result)));
            }
            throw new resource_exception_1.ResourceFoundException({
                message: 'Get Message fail',
            });
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async getMessageDetail(idMess) {
        try {
            console.log(`LHA:  ===> file: message.controller.ts ===> line 84 ===> idMess`, idMess);
            const result = await this._messageService.findById(idMess, 'sender');
            console.log(`LHA:  ===> file: message.controller.ts ===> line 86 ===> result`, result);
            if (result) {
                return new baseController_1.Ok('Get Message success', JSON.parse(JSON.stringify(result)));
            }
            throw new resource_exception_1.ResourceFoundException({
                message: 'Get Message fail',
            });
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
        return;
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "create", null);
__decorate([
    common_1.Get('/conversation/:idClass'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Param('idClass')),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object, String, typeof (_c = typeof query_interface_1.IQueryFind !== "undefined" && query_interface_1.IQueryFind) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getConversationByClass", null);
__decorate([
    common_1.Get(':idMess'),
    __param(0, common_1.Param('idMess')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getMessageDetail", null);
MessageController = __decorate([
    common_1.Controller('api/message'),
    __metadata("design:paramtypes", [typeof (_d = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _d : Object, typeof (_e = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _e : Object])
], MessageController);
exports.MessageController = MessageController;


/***/ }),
/* 156 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const class_service_1 = __webpack_require__(48);
const baseService_service_1 = __webpack_require__(10);
const logger_service_1 = __webpack_require__(12);
const typegoose_1 = __webpack_require__(7);
const message_entity_1 = __webpack_require__(157);
let MessageService = class MessageService extends baseService_service_1.BaseService {
    constructor(_messageModel, _loggerService, _classService) {
        super();
        this._messageModel = _messageModel;
        this._loggerService = _loggerService;
        this._classService = _classService;
        this._model = _messageModel;
    }
    async getBaseModel() {
        return this._messageModel.find({}).populate('sender idClass').lean();
    }
    async createMessage(messageDto) {
        try {
            const obj = Object.assign({}, messageDto);
            const newMessageModel = message_entity_1.Message.createModel(obj);
            const newMessage = await this.create(newMessageModel);
            if (newMessage) {
                await this._classService.updateLastedMessage(`${newMessage.idClass}`, newMessage._id);
                return this.cvtJSON(newMessage);
            }
            return null;
        }
        catch (e) {
            console.log(e);
            this._loggerService.error(e.message, null, 'CREATE-ClassesService');
            return null;
        }
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(message_entity_1.Message.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _c : Object])
], MessageService);
exports.MessageService = MessageService;


/***/ }),
/* 157 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.DFTypeMessage = exports.DFStatusMessage = void 0;
const baseModel_entity_1 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(7);
const baseModel_entity_2 = __webpack_require__(6);
var DFStatusMessage;
(function (DFStatusMessage) {
    DFStatusMessage[DFStatusMessage["Active"] = 1] = "Active";
    DFStatusMessage[DFStatusMessage["DeActive"] = 0] = "DeActive";
    DFStatusMessage[DFStatusMessage["Delete"] = -1] = "Delete";
})(DFStatusMessage = exports.DFStatusMessage || (exports.DFStatusMessage = {}));
var DFTypeMessage;
(function (DFTypeMessage) {
    DFTypeMessage[DFTypeMessage["Text"] = 1] = "Text";
    DFTypeMessage[DFTypeMessage["Image"] = 2] = "Image";
    DFTypeMessage[DFTypeMessage["Video"] = 3] = "Video";
    DFTypeMessage[DFTypeMessage["File"] = 4] = "File";
})(DFTypeMessage = exports.DFTypeMessage || (exports.DFTypeMessage = {}));
class Message extends baseModel_entity_1.BaseModel {
    static get model() {
        return new Message().getModelForClass(Message, {
            schemaOptions: baseModel_entity_2.schemaOptions,
        });
    }
    static get modelName() {
        return this.model.modelName;
    }
    static createModel(payload) {
        return new this.model(payload);
    }
}
__decorate([
    typegoose_1.prop({ required: true, ref: 'Classes' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], Message.prototype, "idClass", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'User' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_b = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _b : Object)
], Message.prototype, "sender", void 0);
__decorate([
    typegoose_1.prop({ default: DFStatusMessage.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Message.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
__decorate([
    typegoose_1.prop({ default: DFTypeMessage.Text }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Message.prototype, "typeMessage", void 0);
__decorate([
    typegoose_1.prop({ default: [], ref: 'User' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], Message.prototype, "isSeen", void 0);
exports.Message = Message;


/***/ }),
/* 158 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(3);
const logger_service_1 = __webpack_require__(12);
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(_logger) {
        this._logger = _logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (request) {
            const status = exception.getStatus
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const errorResponse = {
                code: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: request.method,
                error: status !== common_1.HttpStatus.INTERNAL_SERVER_ERROR
                    ? exception.message || null
                    : 'Internal server error',
                message: typeof exception.getResponse() === 'object'
                    ? exception.getResponse().message
                    : exception.getResponse(),
            };
            if (status === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
                this._logger.error(`${request.method} ${request.url}`, exception.stack, 'ExceptionFilter');
            }
            else {
                this._logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'ExceptionFilter');
            }
            return response.status(status).json(errorResponse);
        }
        else {
            return exception;
        }
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _a : Object])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),
/* 159 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 160 */
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),
/* 161 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupSwagger = void 0;
const swagger_1 = __webpack_require__(163);
function setupSwagger(app, config) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle(config.title || 'DocumentApi')
        .setDescription(config.description || '')
        .setVersion(config.version || '1.0.1')
        .addBearerAuth()
        .addServer(`${config.scheme}://`)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(config.path, app, document);
}
exports.setupSwagger = setupSwagger;


/***/ }),
/* 163 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisIoAdapter = void 0;
const platform_socket_io_1 = __webpack_require__(165);
const redis_1 = __webpack_require__(166);
const socket_io_redis_1 = __webpack_require__(167);
const pubClient = new redis_1.RedisClient({ host: 'localhost', port: 6379 });
const subClient = pubClient.duplicate();
const redisAdapter = socket_io_redis_1.createAdapter({ pubClient, subClient });
class RedisIoAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        return server;
    }
}
exports.RedisIoAdapter = RedisIoAdapter;


/***/ }),
/* 165 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ }),
/* 166 */
/***/ ((module) => {

module.exports = require("redis");

/***/ }),
/* 167 */
/***/ ((module) => {

module.exports = require("socket.io-redis");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const client_module_1 = __webpack_require__(1);
const http_exception_filter_1 = __webpack_require__(158);
const config_service_1 = __webpack_require__(14);
const logger_service_1 = __webpack_require__(12);
const shared_module_1 = __webpack_require__(18);
const core_1 = __webpack_require__(159);
const platform_express_1 = __webpack_require__(113);
const rateLimit = __webpack_require__(160);
const helmet = __webpack_require__(161);
const common_1 = __webpack_require__(3);
const setup_1 = __webpack_require__(162);
const RedisIoAdapter_1 = __webpack_require__(164);
const fire = __webpack_require__(45);
const fs = __webpack_require__(116);
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(client_module_1.ClientModule, new platform_express_1.ExpressAdapter(), {
            cors: true,
        });
        const loggerService = app.select(shared_module_1.SharedModule).get(logger_service_1.LoggerService);
        app.useLogger(loggerService);
        app.use(helmet());
        app.use(rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
        }));
        const reflector = app.get(core_1.Reflector);
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(loggerService));
        app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            validationError: {
                target: false,
            },
        }));
        app.useWebSocketAdapter(new RedisIoAdapter_1.RedisIoAdapter(app));
        const configService = app.select(shared_module_1.SharedModule).get(config_service_1.ConfigService);
        const adminConfig = fs.readFileSync('./serviceAccountKey.json', 'utf8');
        fire.initializeApp({
            credential: fire.credential.cert(JSON.parse(adminConfig)),
        });
        if (['development', 'staging'].includes(configService.nodeEnv)) {
            setup_1.setupSwagger(app, configService.swaggerConfig);
        }
        const port = configService.getNumber('PORT') || 3000;
        const host = configService.get('HOST') || '127.0.0.1';
        await app.listen(port, host);
        loggerService.warn(`server running on port ${host}:${port}`);
    }
    catch (err) {
        console.error(err);
    }
}
bootstrap();

})();

/******/ })()
;