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
const common_1 = __webpack_require__(2);
const shared_module_1 = __webpack_require__(3);
const terminus_1 = __webpack_require__(10);
const question_module_1 = __webpack_require__(11);
const roadMap_module_1 = __webpack_require__(27);
const device_module_1 = __webpack_require__(34);
const class_module_1 = __webpack_require__(38);
const auth_module_1 = __webpack_require__(51);
const mongoose_1 = __webpack_require__(17);
const setup_1 = __webpack_require__(65);
const user_module_1 = __webpack_require__(47);
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            terminus_1.TerminusModule,
            mongoose_1.MongooseModule.forRootAsync(setup_1.setupMongoDb('MONGODB_URI')),
            question_module_1.QuestionModule,
            roadMap_module_1.RoadMapModule,
            device_module_1.DeviceModule,
            class_module_1.ClassModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
        ],
        controllers: [],
    })
], ClientModule);
exports.ClientModule = ClientModule;


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(2);
const axios_1 = __webpack_require__(4);
const config_service_1 = __webpack_require__(5);
const logger_service_1 = __webpack_require__(9);
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
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const dotenv = __webpack_require__(6);
const winston = __webpack_require__(7);
const DailyRotateFile = __webpack_require__(8);
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
/* 6 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

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
var LoggerService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const common_1 = __webpack_require__(2);
const winston = __webpack_require__(7);
const config_service_1 = __webpack_require__(5);
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
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionModule = void 0;
const logger_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const question_controller_1 = __webpack_require__(12);
const mongoose_1 = __webpack_require__(17);
const question_entity_1 = __webpack_require__(23);
const question_service_1 = __webpack_require__(19);
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: question_entity_1.Question.modelName, schema: question_entity_1.Question.model.schema },
            ]),
        ],
        controllers: [question_controller_1.QuestionController],
        providers: [logger_service_1.LoggerService, question_service_1.QuestionService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionController = void 0;
const user_decorator_1 = __webpack_require__(13);
const common_1 = __webpack_require__(2);
const jwt_auth_guard_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(16);
const resource_exception_1 = __webpack_require__(18);
const question_service_1 = __webpack_require__(19);
const errors_exception_1 = __webpack_require__(26);
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async login(user, payload) {
        try {
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
};
__decorate([
    common_1.Post('/'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "login", null);
QuestionController = __decorate([
    common_1.Controller('question'),
    __metadata("design:paramtypes", [typeof (_b = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _b : Object])
], QuestionController);
exports.QuestionController = QuestionController;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usr = void 0;
const common_1 = __webpack_require__(2);
exports.Usr = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return JSON.parse(JSON.stringify(request.user));
});


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(15);
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 16 */
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
const mongoose_1 = __webpack_require__(17);
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
    mongoose_1.Prop({ default: '' }),
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
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceFoundException = void 0;
const common_1 = __webpack_require__(2);
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
/* 19 */
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
const logger_service_1 = __webpack_require__(9);
const typegoose_1 = __webpack_require__(20);
const mongoose_1 = __webpack_require__(17);
const common_1 = __webpack_require__(2);
const baseService_service_1 = __webpack_require__(21);
const question_entity_1 = __webpack_require__(23);
let QuestionService = class QuestionService extends baseService_service_1.BaseService {
    constructor(_setOfQuestionsModel, _loggerService) {
        super();
        this._setOfQuestionsModel = _setOfQuestionsModel;
        this._loggerService = _loggerService;
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(question_entity_1.Question.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], QuestionService);
exports.QuestionService = QuestionService;


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("typegoose");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseService = void 0;
const mongoose_1 = __webpack_require__(22);
class BaseService {
    get modelName() {
        return this._model.modelName;
    }
    async findAll(filter = {}, query = { skip: '0', limit: '15' }) {
        return this._model
            .find(filter)
            .sort({ createdAt: -1 })
            .skip(+query.skip)
            .limit(+query.limit)
            .exec();
    }
    async findOne(filter = {}) {
        return this._model.findOne(filter).exec();
    }
    async findById(id) {
        return this._model.findById(this.toObjectId(id)).exec();
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
    async findOneAndUpdate(query, item) {
        try {
            return this._model
                .findOneAndUpdate(query, item, {
                new: true,
            })
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
        return mongoose_1.Types.ObjectId(id);
    }
    cvtJSON(data) {
        return JSON.parse(JSON.stringify(data));
    }
}
exports.BaseService = BaseService;


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 23 */
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
exports.Question = void 0;
const baseModel_entity_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(17);
const baseModel_entity_2 = __webpack_require__(24);
const class_transformer_1 = __webpack_require__(25);
class Question extends baseModel_entity_2.BaseModel {
    static get model() {
        return new Question().getModelForClass(Question, {
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
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "usedTimes", void 0);
__decorate([
    mongoose_1.Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Question.prototype, "createdBy", void 0);
exports.Question = Question;


/***/ }),
/* 24 */
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
const typegoose_1 = __webpack_require__(20);
const class_transformer_1 = __webpack_require__(25);
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
/* 25 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Error2SchoolException = void 0;
const common_1 = __webpack_require__(2);
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
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapModule = void 0;
const common_1 = __webpack_require__(2);
const roadMap_service_1 = __webpack_require__(28);
const mongoose_1 = __webpack_require__(17);
const road_map_entity_1 = __webpack_require__(29);
const roadMap_controller_1 = __webpack_require__(30);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapService = void 0;
const logger_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const baseService_service_1 = __webpack_require__(21);
const typegoose_1 = __webpack_require__(20);
const road_map_entity_1 = __webpack_require__(29);
let RoadMapService = class RoadMapService extends baseService_service_1.BaseService {
    constructor(_roadMapModel, _loggerService) {
        super();
        this._roadMapModel = _roadMapModel;
        this._loggerService = _loggerService;
        this._model = _roadMapModel;
    }
    async createRoadMap(createdBy, createDto) {
        try {
            const obj = Object.assign({}, createDto);
            obj.createdBy = createdBy;
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
/* 29 */
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
var RoadMap_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMap = void 0;
const baseModel_entity_1 = __webpack_require__(24);
const baseModel_entity_2 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(17);
let RoadMap = RoadMap_1 = class RoadMap extends baseModel_entity_2.BaseModel {
    static get model() {
        return new RoadMap_1().getModelForClass(RoadMap_1, {
            schemaOptions: baseModel_entity_1.schemaOptions,
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
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "createBy", void 0);
RoadMap = RoadMap_1 = __decorate([
    mongoose_1.Schema({ timestamps: true })
], RoadMap);
exports.RoadMap = RoadMap;


/***/ }),
/* 30 */
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
exports.RoadMapController = void 0;
const user_decorator_1 = __webpack_require__(13);
const roadMap_service_1 = __webpack_require__(28);
const common_1 = __webpack_require__(2);
const jwt_auth_guard_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(16);
const res_dto_1 = __webpack_require__(31);
const resource_exception_1 = __webpack_require__(18);
const baseController_1 = __webpack_require__(33);
const logger_service_1 = __webpack_require__(9);
let RoadMapController = class RoadMapController {
    constructor(roadMapService, loggerService) {
        this.roadMapService = roadMapService;
        this.loggerService = loggerService;
    }
    async create(user, createRoadMap) {
        try {
            const result = await this.roadMapService.createRoadMap(user.createdBy, createRoadMap);
            if (result) {
                return new baseController_1.Ok('Create RoadMap success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            return new baseController_1.ApiBaseResponse(500);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof res_dto_1.CreateRoadMapDto !== "undefined" && res_dto_1.CreateRoadMapDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RoadMapController.prototype, "create", null);
RoadMapController = __decorate([
    common_1.Controller('road-map'),
    __metadata("design:paramtypes", [typeof (_c = typeof roadMap_service_1.RoadMapService !== "undefined" && roadMap_service_1.RoadMapService) === "function" ? _c : Object, typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object])
], RoadMapController);
exports.RoadMapController = RoadMapController;


/***/ }),
/* 31 */
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
const class_validator_1 = __webpack_require__(32);
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
/* 32 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModule = void 0;
const device_entity_1 = __webpack_require__(35);
const common_1 = __webpack_require__(2);
const device_service_1 = __webpack_require__(36);
const device_controller_1 = __webpack_require__(37);
const mongoose_1 = __webpack_require__(17);
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
    })
], DeviceModule);
exports.DeviceModule = DeviceModule;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Device = void 0;
const baseModel_entity_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(17);
const baseModel_entity_2 = __webpack_require__(24);
const class_transformer_1 = __webpack_require__(25);
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
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "appVersion", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "deviceModel", void 0);
__decorate([
    mongoose_1.Prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "deviceUUid", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "fcmToken", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Device.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Device.prototype, "createdBy", void 0);
exports.Device = Device;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceService = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const baseService_service_1 = __webpack_require__(21);
const logger_service_1 = __webpack_require__(9);
const typegoose_1 = __webpack_require__(20);
const device_entity_1 = __webpack_require__(35);
let DeviceService = class DeviceService extends baseService_service_1.BaseService {
    constructor(_deviceModel, _loggerService) {
        super();
        this._deviceModel = _deviceModel;
        this._loggerService = _loggerService;
        this._model = _deviceModel;
    }
    async createDevice(payload) {
        try {
            const newDevice = device_entity_1.Device.createModel(payload);
            const result = await this.create(newDevice);
            return JSON.parse(JSON.stringify(result));
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
};
DeviceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(device_entity_1.Device.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], DeviceService);
exports.DeviceService = DeviceService;


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceController = void 0;
const common_1 = __webpack_require__(2);
const device_service_1 = __webpack_require__(36);
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
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassModule = void 0;
const logger_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const class_service_1 = __webpack_require__(39);
const class_controller_1 = __webpack_require__(44);
const mongoose_1 = __webpack_require__(17);
const class_entity_1 = __webpack_require__(40);
const user_service_1 = __webpack_require__(42);
const user_module_1 = __webpack_require__(47);
const user_entity_1 = __webpack_require__(16);
let ClassModule = class ClassModule {
};
ClassModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: class_entity_1.Classes.modelName, schema: class_entity_1.Classes.model.schema },
            ]),
        ],
        controllers: [class_controller_1.ClassController],
        providers: [class_service_1.ClassService, logger_service_1.LoggerService, user_service_1.UserService],
    })
], ClassModule);
exports.ClassModule = ClassModule;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassService = void 0;
const class_entity_1 = __webpack_require__(40);
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const logger_service_1 = __webpack_require__(9);
const baseService_service_1 = __webpack_require__(21);
const typegoose_1 = __webpack_require__(20);
const status_enum_1 = __webpack_require__(41);
const user_service_1 = __webpack_require__(42);
let ClassService = class ClassService extends baseService_service_1.BaseService {
    constructor(_classModel, _loggerService, _userService) {
        super();
        this._classModel = _classModel;
        this._loggerService = _loggerService;
        this._userService = _userService;
        this._model = _classModel;
    }
    async createClasses(createdBy, createClassDto) {
        try {
            const obj = Object.assign({}, createClassDto);
            obj.createdBy = createdBy;
            const newClass = class_entity_1.Classes.createModel(obj);
            const newClasses = await this.create(newClass);
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
    async findAllClasses(user, query = { skip: '0', limit: '15' }) {
        try {
            const newClasses = await this.findAll({ $or: [{ createdBy: user.createdBy }, { member: user.createdBy }] }, query);
            const classes = this.cvtJSON(newClasses);
            const result = [];
            for (const c of classes) {
                const u = await this._userService.findOne({ createdBy: c.createdBy });
                const obj = Object.assign({}, c);
                if (u)
                    obj.createdBy = this.cvtJSON(u);
                result.push(obj);
            }
            if (newClasses) {
                return result;
            }
            return null;
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
};
ClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(class_entity_1.Classes.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object])
], ClassService);
exports.ClassService = ClassService;


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Classes = void 0;
const baseModel_entity_1 = __webpack_require__(24);
const class_transformer_1 = __webpack_require__(25);
const typegoose_1 = __webpack_require__(20);
const status_enum_1 = __webpack_require__(41);
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
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], Classes.prototype, "member", void 0);
__decorate([
    typegoose_1.prop({ default: status_enum_1.DFStatus.Active }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Classes.prototype, "status", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "createdBy", void 0);
exports.Classes = Classes;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DFStatus = void 0;
var DFStatus;
(function (DFStatus) {
    DFStatus[DFStatus["inActive"] = 0] = "inActive";
    DFStatus[DFStatus["Active"] = 1] = "Active";
})(DFStatus = exports.DFStatus || (exports.DFStatus = {}));


/***/ }),
/* 42 */
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
exports.UserService = void 0;
const logger_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const respone_service_1 = __webpack_require__(43);
const mongoose_2 = __webpack_require__(22);
const user_entity_1 = __webpack_require__(16);
let UserService = class UserService extends respone_service_1.ResponseService {
    constructor(userModel, loggerService) {
        super();
        this.userModel = userModel;
        this.loggerService = loggerService;
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
                .findByIdAndUpdate(id, obj, { new: true })
                .lean();
            if (user)
                return this.ResponseServiceSuccess(user);
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
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;


/***/ }),
/* 43 */
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassController = void 0;
const common_1 = __webpack_require__(2);
const class_service_1 = __webpack_require__(39);
const create_class_dto_1 = __webpack_require__(45);
const update_class_dto_1 = __webpack_require__(46);
const baseController_1 = __webpack_require__(33);
const logger_service_1 = __webpack_require__(9);
const jwt_auth_guard_1 = __webpack_require__(14);
const user_decorator_1 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(16);
const resource_exception_1 = __webpack_require__(18);
const status_enum_1 = __webpack_require__(41);
let ClassController = class ClassController extends baseController_1.BaseController {
    constructor(loggerService, classService) {
        super();
        this.loggerService = loggerService;
        this.classService = classService;
    }
    async create(user, createClassDto) {
        try {
            const result = await this.classService.createClasses(user.createdBy, createClassDto);
            if (result) {
                return new baseController_1.Ok('Create Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            return new baseController_1.ApiBaseResponse(500);
        }
    }
    async update(user, query, updateClassDto) {
        try {
            const result = await this.classService.findOneAndUpdate({ createdBy: user.createdBy, _id: query.id }, updateClassDto);
            if (result) {
                return new baseController_1.Ok('Update Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Update-ClassController');
            return new baseController_1.ApiBaseResponse(500);
        }
    }
    async findAll(user) {
        try {
            const result = await this.classService.findAllClasses(user, {
                limit: '15',
                skip: '0',
            });
            if (result) {
                return new baseController_1.Ok('Get Class success', result);
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-ClassController');
            return new baseController_1.ApiBaseResponse(500);
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
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'changeStatus-ClassController');
            return new baseController_1.ApiBaseResponse(500);
        }
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof create_class_dto_1.CreateClassDto !== "undefined" && create_class_dto_1.CreateClassDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "create", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object, typeof (_d = typeof update_class_dto_1.UpdateClassDto !== "undefined" && update_class_dto_1.UpdateClassDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "update", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findAll", null);
__decorate([
    common_1.Get('changeStatus'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "changeStatusClass", null);
ClassController = __decorate([
    common_1.Controller('api/classes'),
    __metadata("design:paramtypes", [typeof (_g = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _g : Object, typeof (_h = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _h : Object])
], ClassController);
exports.ClassController = ClassController;


/***/ }),
/* 45 */
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
const class_validator_1 = __webpack_require__(32);
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
exports.CreateClassDto = CreateClassDto;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateClassDto = void 0;
class UpdateClassDto {
}
exports.UpdateClassDto = UpdateClassDto;


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
exports.UserModule = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const user_controller_1 = __webpack_require__(48);
const user_entity_1 = __webpack_require__(16);
const user_service_1 = __webpack_require__(42);
const logger_service_1 = __webpack_require__(9);
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, logger_service_1.LoggerService],
    })
], UserModule);
exports.UserModule = UserModule;


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const user_decorator_1 = __webpack_require__(13);
const baseController_1 = __webpack_require__(33);
const common_1 = __webpack_require__(2);
const query_interface_1 = __webpack_require__(49);
const user_service_1 = __webpack_require__(42);
const logger_service_1 = __webpack_require__(9);
const res_dto_1 = __webpack_require__(50);
const errors_exception_1 = __webpack_require__(26);
const jwt_auth_guard_1 = __webpack_require__(14);
const resource_exception_1 = __webpack_require__(18);
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
            return new baseController_1.ApiBaseResponse(500);
        }
    }
    async getUser(user) {
        try {
            return new baseController_1.Ok('Get User Success', JSON.parse(JSON.stringify(user)));
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findById-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async update(id, updateUserDto) {
        try {
            const result = await this.userService.update(id, updateUserDto);
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
    __param(0, common_1.Query('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof res_dto_1.UpdateUserDto !== "undefined" && res_dto_1.UpdateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
UserController = __decorate([
    common_1.Controller('api/user'),
    __metadata("design:paramtypes", [typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_validator_1 = __webpack_require__(32);
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
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const auth_service_1 = __webpack_require__(52);
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const local_strategy_1 = __webpack_require__(56);
const configService_module_1 = __webpack_require__(59);
const config_service_1 = __webpack_require__(5);
const setupJwt_1 = __webpack_require__(60);
const jwt_1 = __webpack_require__(54);
const jwt_strategy_1 = __webpack_require__(61);
const auth_entity_1 = __webpack_require__(55);
const auth_controller_1 = __webpack_require__(62);
const logger_service_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(16);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: auth_entity_1.Auth.name, schema: auth_entity_1.AuthSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
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
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(17);
const mongoose_2 = __webpack_require__(22);
const bcrypt = __webpack_require__(53);
const config_service_1 = __webpack_require__(5);
const logger_service_1 = __webpack_require__(9);
const respone_service_1 = __webpack_require__(43);
const jwt_1 = __webpack_require__(54);
const auth_entity_1 = __webpack_require__(55);
const user_entity_1 = __webpack_require__(16);
let AuthService = class AuthService extends respone_service_1.ResponseService {
    constructor(accountModel, userModel, configService, loggerService, jwtService) {
        super();
        this.accountModel = accountModel;
        this.userModel = userModel;
        this.configService = configService;
        this.loggerService = loggerService;
        this.jwtService = jwtService;
    }
    jwtSecret() {
        return this.configService.get('JWT_SECRET');
    }
    async validateUser(payload) {
        const user = await this.userModel.findOne({ createdBy: payload.id }).lean();
        return user;
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
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _d : Object, typeof (_e = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _e : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthSchema = exports.Auth = void 0;
const mongoose_1 = __webpack_require__(17);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_jwt_1 = __webpack_require__(57);
const passport_local_1 = __webpack_require__(58);
const passport_1 = __webpack_require__(15);
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(52);
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: authService.jwtSecret(),
        });
        this.authService = authService;
    }
    async validate(payload, done) {
        console.log(`LHA:  ===> file: local.strategy.ts ===> line 43 ===> payload`, payload);
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
/* 57 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(2);
const config_service_1 = __webpack_require__(5);
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
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupJWT = void 0;
const configService_module_1 = __webpack_require__(59);
const config_service_1 = __webpack_require__(5);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(57);
const passport_1 = __webpack_require__(15);
const common_1 = __webpack_require__(2);
const config_service_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(52);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
        this.authService = authService;
    }
    async validate(payload, done) {
        console.log('JWT Strategy', payload);
        const user = await this.authService.validateUser({ id: payload.data });
        console.log(`LHA:  ===> file: jwt.strategy.ts ===> line 24 ===> user`, user);
        if (user) {
            done(null, user);
        }
        return done(new common_1.UnauthorizedException(), false);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 62 */
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
const common_1 = __webpack_require__(2);
const req_dto_1 = __webpack_require__(63);
const req_dto_2 = __webpack_require__(64);
const logger_service_1 = __webpack_require__(9);
const baseController_1 = __webpack_require__(33);
const jwt_auth_guard_1 = __webpack_require__(14);
const auth_service_1 = __webpack_require__(52);
const resource_exception_1 = __webpack_require__(18);
const errors_exception_1 = __webpack_require__(26);
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
            throw new resource_exception_1.ResourceFoundException();
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginAuthenticationDto = void 0;
const class_validator_1 = __webpack_require__(32);
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
/* 64 */
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
const class_validator_1 = __webpack_require__(32);
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
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupMongoDb = void 0;
const configService_module_1 = __webpack_require__(59);
const config_service_1 = __webpack_require__(5);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(2);
const logger_service_1 = __webpack_require__(9);
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
/* 67 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 68 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),
/* 70 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupSwagger = void 0;
const swagger_1 = __webpack_require__(72);
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
/* 72 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

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
const http_exception_filter_1 = __webpack_require__(66);
const config_service_1 = __webpack_require__(5);
const logger_service_1 = __webpack_require__(9);
const shared_module_1 = __webpack_require__(3);
const core_1 = __webpack_require__(67);
const platform_express_1 = __webpack_require__(68);
const rateLimit = __webpack_require__(69);
const helmet = __webpack_require__(70);
const common_1 = __webpack_require__(2);
const setup_1 = __webpack_require__(71);
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
        const configService = app.select(shared_module_1.SharedModule).get(config_service_1.ConfigService);
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