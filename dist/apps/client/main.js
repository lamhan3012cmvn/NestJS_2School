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
const shared_module_1 = __webpack_require__(5);
const terminus_1 = __webpack_require__(12);
const question_module_1 = __webpack_require__(13);
const roadMap_module_1 = __webpack_require__(32);
const device_module_1 = __webpack_require__(40);
const class_module_1 = __webpack_require__(44);
const auth_module_1 = __webpack_require__(58);
const mongoose_1 = __webpack_require__(19);
const setup_1 = __webpack_require__(72);
const user_module_1 = __webpack_require__(54);
const set_of_questions_module_1 = __webpack_require__(73);
const socket_module_1 = __webpack_require__(80);
const up_load_file_module_1 = __webpack_require__(84);
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
            device_module_1.DeviceModule,
            class_module_1.ClassModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            socket_module_1.SocketModule,
            healcheck_module_1.HealcheckModule,
            up_load_file_module_1.UpLoadFileModule,
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
const healcheck_controller_1 = __webpack_require__(4);
let HealcheckModule = class HealcheckModule {
};
HealcheckModule = __decorate([
    common_1.Module({
        controllers: [healcheck_controller_1.HealcheckController],
    })
], HealcheckModule);
exports.HealcheckModule = HealcheckModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
exports.HealcheckController = void 0;
const common_1 = __webpack_require__(3);
let HealcheckController = class HealcheckController {
    healcheck() {
        return 'App run success';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealcheckController.prototype, "healcheck", null);
HealcheckController = __decorate([
    common_1.Controller('healcheck')
], HealcheckController);
exports.HealcheckController = HealcheckController;


/***/ }),
/* 5 */
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
const axios_1 = __webpack_require__(6);
const config_service_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(11);
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
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const dotenv = __webpack_require__(8);
const winston = __webpack_require__(9);
const DailyRotateFile = __webpack_require__(10);
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
/* 8 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 11 */
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
const winston = __webpack_require__(9);
const config_service_1 = __webpack_require__(7);
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
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionModule = void 0;
const logger_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const question_controller_1 = __webpack_require__(14);
const mongoose_1 = __webpack_require__(19);
const question_entity_1 = __webpack_require__(25);
const question_service_1 = __webpack_require__(21);
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
/* 14 */
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
exports.QuestionController = void 0;
const user_decorator_1 = __webpack_require__(15);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(16);
const user_entity_1 = __webpack_require__(18);
const resource_exception_1 = __webpack_require__(20);
const question_service_1 = __webpack_require__(21);
const errors_exception_1 = __webpack_require__(28);
const baseController_1 = __webpack_require__(29);
const logger_service_1 = __webpack_require__(11);
const res_dto_1 = __webpack_require__(30);
let QuestionController = class QuestionController {
    constructor(questionService, loggerService) {
        this.questionService = questionService;
        this.loggerService = loggerService;
    }
    async createQuestion(user, payload) {
        try {
            const result = await this.questionService.createQuestion(user.createdBy, payload);
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
            const result = await this.questionService.findOneAndUpdate({ createBy: user.createdBy, _id: query.id }, payload);
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
    async getQuestionBySetOf(user, query) {
        try {
            const result = await this.questionService.findAll({
                createBy: user.createdBy,
                idSetOfQuestions: query.idSetOfQuestions,
            });
            if (result) {
                return new baseController_1.Ok('Create Question success', this.questionService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'create-QuestionController');
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
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof res_dto_1.CreateQuestionDto !== "undefined" && res_dto_1.CreateQuestionDto) === "function" ? _b : Object]),
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
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object, Object]),
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
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestionBySetOf", null);
QuestionController = __decorate([
    common_1.Controller('api/question'),
    __metadata("design:paramtypes", [typeof (_e = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _e : Object, typeof (_f = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _f : Object])
], QuestionController);
exports.QuestionController = QuestionController;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usr = void 0;
const common_1 = __webpack_require__(3);
exports.Usr = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return JSON.parse(JSON.stringify(request.user));
});


/***/ }),
/* 16 */
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
const passport_1 = __webpack_require__(17);
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 18 */
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
const mongoose_1 = __webpack_require__(19);
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
/* 19 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 20 */
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
/* 21 */
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
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const mongoose_1 = __webpack_require__(19);
const common_1 = __webpack_require__(3);
const baseService_service_1 = __webpack_require__(23);
const question_entity_1 = __webpack_require__(25);
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
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(question_entity_1.Question.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], QuestionService);
exports.QuestionService = QuestionService;


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("typegoose");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseService = void 0;
const mongoose_1 = __webpack_require__(24);
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
/* 24 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 25 */
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
const baseModel_entity_1 = __webpack_require__(26);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
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
    typegoose_1.prop({ required: true }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], Question.prototype, "duration", void 0);
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
/* 26 */
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
const typegoose_1 = __webpack_require__(22);
const class_transformer_1 = __webpack_require__(27);
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
/* 27 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 28 */
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
/* 29 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateQuestionDto = void 0;
const class_validator_1 = __webpack_require__(31);
class CreateQuestionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "question", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "idSetOfQuestions", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(4),
    class_validator_1.ArrayMaxSize(6),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], CreateQuestionDto.prototype, "answers", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ArrayMaxSize(6),
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
/* 31 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 32 */
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
const roadMap_service_1 = __webpack_require__(33);
const mongoose_1 = __webpack_require__(19);
const road_map_entity_1 = __webpack_require__(34);
const roadMap_controller_1 = __webpack_require__(36);
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
/* 33 */
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
const logger_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const typegoose_1 = __webpack_require__(22);
const road_map_entity_1 = __webpack_require__(34);
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
            obj.createBy = createdBy;
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
/* 34 */
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
const baseModel_entity_1 = __webpack_require__(26);
const typegoose_1 = __webpack_require__(22);
const baseModel_entity_2 = __webpack_require__(26);
const status_enum_1 = __webpack_require__(35);
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
    typegoose_1.prop({ default: '' }),
    __metadata("design:type", String)
], RoadMap.prototype, "createBy", void 0);
exports.RoadMap = RoadMap;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DFStatus = void 0;
var DFStatus;
(function (DFStatus) {
    DFStatus[DFStatus["inActive"] = 0] = "inActive";
    DFStatus[DFStatus["Active"] = 1] = "Active";
})(DFStatus = exports.DFStatus || (exports.DFStatus = {}));


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoadMapController = void 0;
const query_dto_1 = __webpack_require__(37);
const user_decorator_1 = __webpack_require__(15);
const roadMap_service_1 = __webpack_require__(33);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(16);
const user_entity_1 = __webpack_require__(18);
const res_dto_1 = __webpack_require__(38);
const resource_exception_1 = __webpack_require__(20);
const baseController_1 = __webpack_require__(29);
const logger_service_1 = __webpack_require__(11);
const res_dto_2 = __webpack_require__(39);
const errors_exception_1 = __webpack_require__(28);
let RoadMapController = class RoadMapController {
    constructor(roadMapService, loggerService) {
        this.roadMapService = roadMapService;
        this.loggerService = loggerService;
    }
    async createRoadMap(user, createRoadMap) {
        try {
            const result = await this.roadMapService.createRoadMap(user.createdBy, createRoadMap);
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
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof res_dto_1.CreateRoadMapDto !== "undefined" && res_dto_1.CreateRoadMapDto) === "function" ? _b : Object]),
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
RoadMapController = __decorate([
    common_1.Controller('api/road-map'),
    __metadata("design:paramtypes", [typeof (_g = typeof roadMap_service_1.RoadMapService !== "undefined" && roadMap_service_1.RoadMapService) === "function" ? _g : Object, typeof (_h = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _h : Object])
], RoadMapController);
exports.RoadMapController = RoadMapController;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryDeleteRoadMap = void 0;
const class_validator_1 = __webpack_require__(31);
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
exports.CreateRoadMapDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
exports.UpdateRoadMap = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModule = void 0;
const device_entity_1 = __webpack_require__(41);
const common_1 = __webpack_require__(3);
const device_service_1 = __webpack_require__(42);
const device_controller_1 = __webpack_require__(43);
const mongoose_1 = __webpack_require__(19);
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
exports.Device = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const mongoose_1 = __webpack_require__(19);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
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
exports.DeviceService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const device_entity_1 = __webpack_require__(41);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceController = void 0;
const common_1 = __webpack_require__(3);
const device_service_1 = __webpack_require__(42);
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
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassModule = void 0;
const logger_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const class_service_1 = __webpack_require__(45);
const class_controller_1 = __webpack_require__(51);
const mongoose_1 = __webpack_require__(19);
const class_entity_1 = __webpack_require__(46);
const user_service_1 = __webpack_require__(47);
const user_module_1 = __webpack_require__(54);
const user_entity_1 = __webpack_require__(18);
const memberClass_service_1 = __webpack_require__(49);
const memberClass_entity_1 = __webpack_require__(50);
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
            ]),
        ],
        controllers: [class_controller_1.ClassController],
        providers: [class_service_1.ClassService, logger_service_1.LoggerService, memberClass_service_1.MemberClassService, user_service_1.UserService],
    })
], ClassModule);
exports.ClassModule = ClassModule;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassService = void 0;
const class_entity_1 = __webpack_require__(46);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const logger_service_1 = __webpack_require__(11);
const baseService_service_1 = __webpack_require__(23);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
const user_service_1 = __webpack_require__(47);
const memberClass_service_1 = __webpack_require__(49);
const errors_exception_1 = __webpack_require__(28);
const mongoose = __webpack_require__(24);
let ClassService = class ClassService extends baseService_service_1.BaseService {
    constructor(_classModel, _loggerService, _userService, _memberClassService, connection) {
        super();
        this._classModel = _classModel;
        this._loggerService = _loggerService;
        this._userService = _userService;
        this._memberClassService = _memberClassService;
        this.connection = connection;
        this._model = _classModel;
    }
    async createClasses(createdBy, createClassDto) {
        try {
            const obj = Object.assign({}, createClassDto);
            obj.createdBy = createdBy;
            const newClass = class_entity_1.Classes.createModel(obj);
            const newClasses = await this.create(newClass);
            console.log(`LHA:  ===> file: class.service.ts ===> line 41 ===> newClasses`, newClasses);
            const joinMember = await this.joinMemberClass(createdBy, newClass._id, 2);
            console.log(`LHA:  ===> file: class.service.ts ===> line 43 ===> joinMember`, joinMember);
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
            const classMember = await this._memberClassService.getClassByUserJoined(user.createdBy);
            const newClasses = await this.findAll({ $or: [{ createdBy: user.createdBy }, { _id: { $in: classMember } }] }, query);
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
    async recommendClasses(idUser) {
        try {
            const memberClass = await this._memberClassService.findAll({
                idUser: idUser,
            });
            const arrClass = memberClass.map((e) => e.idClass);
            const classes = this.cvtJSON(await this.findAll({
                _id: { $nin: arrClass },
                status: status_enum_1.DFStatus.Active,
            }));
            const result = [];
            for (const c of classes) {
                const u = await this._userService.findOne({ createdBy: c.createdBy });
                const obj = Object.assign({}, c);
                if (u)
                    obj.createdBy = this.cvtJSON(u);
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
            console.log(`LHA:  ===> file: class.service.ts ===> line 165 ===> newMemberClass`, newMemberClass);
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
};
ClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(class_entity_1.Classes.modelName)),
    __param(4, mongoose_1.InjectConnection()),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _d : Object, typeof (_e = typeof mongoose !== "undefined" && mongoose.Connection) === "function" ? _e : Object])
], ClassService);
exports.ClassService = ClassService;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Classes = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
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
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], Classes.prototype, "createdBy", void 0);
exports.Classes = Classes;


/***/ }),
/* 47 */
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
const logger_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const respone_service_1 = __webpack_require__(48);
const mongoose_2 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(18);
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
                .findOneAndUpdate({ createdBy: id }, obj, { new: true })
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
/* 48 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClassService = void 0;
const memberClass_entity_1 = __webpack_require__(50);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const logger_service_1 = __webpack_require__(11);
const baseService_service_1 = __webpack_require__(23);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
const errors_exception_1 = __webpack_require__(28);
let MemberClassService = class MemberClassService extends baseService_service_1.BaseService {
    constructor(_memberClassModel, _loggerService) {
        super();
        this._memberClassModel = _memberClassModel;
        this._loggerService = _loggerService;
        this._model = _memberClassModel;
    }
    async getClassByUserJoined(idUser) {
        try {
            const obj = {
                idUser: idUser,
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
                idUser: idUser,
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
};
MemberClassService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(memberClass_entity_1.MemberClasses.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], MemberClassService);
exports.MemberClassService = MemberClassService;


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
exports.MemberClasses = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
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
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MemberClasses.prototype, "idUser", void 0);
__decorate([
    typegoose_1.prop(),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
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
/* 51 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassController = void 0;
const common_1 = __webpack_require__(3);
const class_service_1 = __webpack_require__(45);
const create_class_dto_1 = __webpack_require__(52);
const baseController_1 = __webpack_require__(29);
const logger_service_1 = __webpack_require__(11);
const jwt_auth_guard_1 = __webpack_require__(16);
const user_decorator_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(18);
const resource_exception_1 = __webpack_require__(20);
const status_enum_1 = __webpack_require__(35);
const errors_exception_1 = __webpack_require__(28);
const query_dto_1 = __webpack_require__(53);
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
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async update(user, query, updateClassDto) {
        try {
            console.log(`LHA:  ===> file: class.controller.ts ===> line 66 ===> updateClassDto`, updateClassDto);
            const result = await this.classService.findOneAndUpdate({ createdBy: user.createdBy, _id: query.id }, updateClassDto);
            if (result) {
                return new baseController_1.Ok('Update Class success', this.classService.cvtJSON(result));
            }
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'Update-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
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
            throw new resource_exception_1.ResourceFoundException();
        }
        catch (e) {
            console.log(e);
            this.loggerService.error(e.message, null, 'changeStatus-ClassController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async joinMemberClass(user, payload) {
        try {
            const result = await this.classService.joinMemberClass(user.createdBy, payload.idClass);
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
            const result = await this.classService.recommendClasses(user.createdBy);
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
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof create_class_dto_1.CreateClassDto !== "undefined" && create_class_dto_1.CreateClassDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "create", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "update", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findAll", null);
__decorate([
    common_1.Get('changeStatus'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "changeStatusClass", null);
__decorate([
    common_1.Post('joinMember'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _f : Object, typeof (_g = typeof query_dto_1.JoinClassQuery !== "undefined" && query_dto_1.JoinClassQuery) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "joinMemberClass", null);
__decorate([
    common_1.Delete('leaveClass'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _h : Object, typeof (_j = typeof query_dto_1.JoinClassQuery !== "undefined" && query_dto_1.JoinClassQuery) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "leaveClass", null);
__decorate([
    common_1.Get('recommendClasses'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof user_entity_1.ISchemaUser !== "undefined" && user_entity_1.ISchemaUser) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "recommendClasses", null);
ClassController = __decorate([
    common_1.Controller('api/classes'),
    __metadata("design:paramtypes", [typeof (_l = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _l : Object, typeof (_m = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _m : Object])
], ClassController);
exports.ClassController = ClassController;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateClassDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 53 */
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
const class_validator_1 = __webpack_require__(31);
class JoinClassQuery {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], JoinClassQuery.prototype, "idClass", void 0);
exports.JoinClassQuery = JoinClassQuery;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const user_controller_1 = __webpack_require__(55);
const user_entity_1 = __webpack_require__(18);
const user_service_1 = __webpack_require__(47);
const logger_service_1 = __webpack_require__(11);
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const user_decorator_1 = __webpack_require__(15);
const baseController_1 = __webpack_require__(29);
const common_1 = __webpack_require__(3);
const query_interface_1 = __webpack_require__(56);
const user_service_1 = __webpack_require__(47);
const logger_service_1 = __webpack_require__(11);
const res_dto_1 = __webpack_require__(57);
const errors_exception_1 = __webpack_require__(28);
const jwt_auth_guard_1 = __webpack_require__(16);
const resource_exception_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(18);
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
            return new baseController_1.Ok('Get User Success', JSON.parse(JSON.stringify(user)));
        }
        catch (e) {
            this.loggerService.error(e.message, null, 'findById-UserController');
            throw new errors_exception_1.Error2SchoolException(e.message);
        }
    }
    async update(user, updateUserDto) {
        try {
            const result = await this.userService.update(user.createdBy, updateUserDto);
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
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object, typeof (_c = typeof res_dto_1.UpdateUserDto !== "undefined" && res_dto_1.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
UserController = __decorate([
    common_1.Controller('api/user'),
    __metadata("design:paramtypes", [typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _d : Object, typeof (_e = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _e : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const auth_service_1 = __webpack_require__(59);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const local_strategy_1 = __webpack_require__(63);
const configService_module_1 = __webpack_require__(66);
const config_service_1 = __webpack_require__(7);
const setupJwt_1 = __webpack_require__(67);
const jwt_1 = __webpack_require__(61);
const jwt_strategy_1 = __webpack_require__(68);
const auth_entity_1 = __webpack_require__(62);
const auth_controller_1 = __webpack_require__(69);
const logger_service_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(18);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const mongoose_2 = __webpack_require__(24);
const bcrypt = __webpack_require__(60);
const config_service_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(11);
const respone_service_1 = __webpack_require__(48);
const jwt_1 = __webpack_require__(61);
const auth_entity_1 = __webpack_require__(62);
const user_entity_1 = __webpack_require__(18);
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
/* 60 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthSchema = exports.Auth = void 0;
const mongoose_1 = __webpack_require__(19);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_jwt_1 = __webpack_require__(64);
const passport_local_1 = __webpack_require__(65);
const passport_1 = __webpack_require__(17);
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(59);
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
/* 64 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 66 */
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
const config_service_1 = __webpack_require__(7);
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
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupJWT = void 0;
const configService_module_1 = __webpack_require__(66);
const config_service_1 = __webpack_require__(7);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(64);
const passport_1 = __webpack_require__(17);
const common_1 = __webpack_require__(3);
const config_service_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(59);
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
/* 69 */
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
const req_dto_1 = __webpack_require__(70);
const req_dto_2 = __webpack_require__(71);
const logger_service_1 = __webpack_require__(11);
const baseController_1 = __webpack_require__(29);
const jwt_auth_guard_1 = __webpack_require__(16);
const auth_service_1 = __webpack_require__(59);
const resource_exception_1 = __webpack_require__(20);
const errors_exception_1 = __webpack_require__(28);
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
/* 70 */
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
const class_validator_1 = __webpack_require__(31);
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
exports.RegisterAuthenticationDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupMongoDb = void 0;
const configService_module_1 = __webpack_require__(66);
const config_service_1 = __webpack_require__(7);
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
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfQuestionsModule = void 0;
const mongoose_1 = __webpack_require__(19);
const common_1 = __webpack_require__(3);
const setOfQuestions_controller_1 = __webpack_require__(74);
const setOfQuestions_service_1 = __webpack_require__(75);
const setOfQuestions_entity_1 = __webpack_require__(76);
const shared_module_1 = __webpack_require__(5);
let SetOfQuestionsModule = class SetOfQuestionsModule {
};
SetOfQuestionsModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            mongoose_1.MongooseModule.forFeature([
                { name: setOfQuestions_entity_1.SetOfQuestion.modelName, schema: setOfQuestions_entity_1.SetOfQuestion.model.schema },
            ]),
        ],
        controllers: [setOfQuestions_controller_1.SetOfQuestionsController],
        providers: [setOfQuestions_service_1.SetOfQuestionsService],
    })
], SetOfQuestionsModule);
exports.SetOfQuestionsModule = SetOfQuestionsModule;


/***/ }),
/* 74 */
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
exports.SetOfQuestionsController = void 0;
const user_decorator_1 = __webpack_require__(15);
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(16);
const logger_service_1 = __webpack_require__(11);
const setOfQuestions_service_1 = __webpack_require__(75);
const baseController_1 = __webpack_require__(29);
const resource_exception_1 = __webpack_require__(20);
const errors_exception_1 = __webpack_require__(28);
const user_entity_1 = __webpack_require__(18);
const req_dto_1 = __webpack_require__(77);
const req_dto_2 = __webpack_require__(78);
const query_dto_1 = __webpack_require__(79);
let SetOfQuestionsController = class SetOfQuestionsController {
    constructor(_setOfQuestionsService, loggerService) {
        this._setOfQuestionsService = _setOfQuestionsService;
        this.loggerService = loggerService;
    }
    async createSetOfQuestions(user, payload) {
        try {
            const result = await this._setOfQuestionsService.createSetOfQuestions(user.createdBy, payload);
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
            console.log(`LHA:  ===> file: setOfQuestions.controller.ts ===> line 101 ===> result`, result);
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
            const result = await this._setOfQuestionsService.findAll({
                createBy: user.createdBy,
                classBy: query.classId,
                status: query.status,
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
    __metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object, typeof (_b = typeof req_dto_1.CreateSetOfQuestionDto !== "undefined" && req_dto_1.CreateSetOfQuestionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "createSetOfQuestions", null);
__decorate([
    common_1.Patch(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object, typeof (_d = typeof req_dto_2.UpdateSetOfQuestionDto !== "undefined" && req_dto_2.UpdateSetOfQuestionDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "updateSetOfQuestions", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "changeSetOfQuestions", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _f : Object, typeof (_g = typeof query_dto_1.QueryGetSetOfQuestion !== "undefined" && query_dto_1.QueryGetSetOfQuestion) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], SetOfQuestionsController.prototype, "getSetOfQuestions", null);
SetOfQuestionsController = __decorate([
    common_1.Controller('api/set-of-questions'),
    __metadata("design:paramtypes", [typeof (_h = typeof setOfQuestions_service_1.SetOfQuestionsService !== "undefined" && setOfQuestions_service_1.SetOfQuestionsService) === "function" ? _h : Object, typeof (_j = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _j : Object])
], SetOfQuestionsController);
exports.SetOfQuestionsController = SetOfQuestionsController;


/***/ }),
/* 75 */
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
exports.SetOfQuestionsService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const setOfQuestions_entity_1 = __webpack_require__(76);
let SetOfQuestionsService = class SetOfQuestionsService extends baseService_service_1.BaseService {
    constructor(_setOfQuestionsModel, _loggerService) {
        super();
        this._setOfQuestionsModel = _setOfQuestionsModel;
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
};
SetOfQuestionsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(setOfQuestions_entity_1.SetOfQuestion.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], SetOfQuestionsService);
exports.SetOfQuestionsService = SetOfQuestionsService;


/***/ }),
/* 76 */
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
const baseModel_entity_1 = __webpack_require__(26);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
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
exports.SetOfQuestion = SetOfQuestion;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSetOfQuestionDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSetOfQuestionDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
exports.QueryGetSetOfQuestion = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketModule = void 0;
const common_1 = __webpack_require__(3);
const socket_gateway_1 = __webpack_require__(81);
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [],
        providers: [socket_gateway_1.AppGateway],
    })
], SocketModule);
exports.SocketModule = SocketModule;


/***/ }),
/* 81 */
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
exports.AppGateway = void 0;
const websockets_1 = __webpack_require__(82);
const common_1 = __webpack_require__(3);
const socket_io_1 = __webpack_require__(83);
let AppGateway = class AppGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
    }
    handleMessage(client, payload) {
        this.server.emit('msgToClient', payload);
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleDisconnect(client) {
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
    websockets_1.SubscribeMessage('msgToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessage", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway()
], AppGateway);
exports.AppGateway = AppGateway;


/***/ }),
/* 82 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 83 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 84 */
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
const mongoose_1 = __webpack_require__(19);
const logger_service_1 = __webpack_require__(11);
const shared_module_1 = __webpack_require__(5);
const up_load_file_controller_1 = __webpack_require__(85);
const upLoadFile_entity_1 = __webpack_require__(92);
const up_load_file_service_1 = __webpack_require__(90);
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
    })
], UpLoadFileModule);
exports.UpLoadFileModule = UpLoadFileModule;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFileController = void 0;
const baseController_1 = __webpack_require__(29);
const platform_express_1 = __webpack_require__(86);
const common_1 = __webpack_require__(3);
const multer_1 = __webpack_require__(87);
const path_1 = __webpack_require__(88);
const fs = __webpack_require__(89);
const FileType = __webpack_require__(99);
const logger_service_1 = __webpack_require__(11);
const up_load_file_service_1 = __webpack_require__(90);
const errors_exception_1 = __webpack_require__(28);
const jwt_auth_guard_1 = __webpack_require__(16);
let UpLoadFileController = class UpLoadFileController {
    constructor(_upLoadFileService, loggerService) {
        this._upLoadFileService = _upLoadFileService;
        this.loggerService = loggerService;
    }
    async uploadFile(file) {
        try {
            const parseFile = path_1.parse(file.originalname);
            const result = await this._upLoadFileService.createUploadFile(parseFile.name, file.path);
            return new baseController_1.Ok('Upload file Success', result);
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
                console.log(`LHA:  ===> file: up-load-file.controller.ts ===> line 29 ===> file`, file);
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
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
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
/* 86 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 87 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("fs");

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFileService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const errors_exception_1 = __webpack_require__(28);
const user_not_found_exception_1 = __webpack_require__(91);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const upLoadFile_entity_1 = __webpack_require__(92);
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
/* 91 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpLoadFile = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
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
/* 93 */
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
const logger_service_1 = __webpack_require__(11);
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
/* 94 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 95 */
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),
/* 96 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupSwagger = void 0;
const swagger_1 = __webpack_require__(98);
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
/* 98 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 99 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const strtok3 = __webpack_require__(100);
const core = __webpack_require__(109);

async function fromFile(path) {
	const tokenizer = await strtok3.fromFile(path);
	try {
		return await core.fromTokenizer(tokenizer);
	} finally {
		await tokenizer.close();
	}
}

const fileType = {
	fromFile
};

Object.assign(fileType, core);

Object.defineProperty(fileType, 'extensions', {
	get() {
		return core.extensions;
	}
});

Object.defineProperty(fileType, 'mimeTypes', {
	get() {
		return core.mimeTypes;
	}
});

module.exports = fileType;


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromStream = exports.fromBuffer = exports.EndOfStreamError = exports.fromFile = void 0;
const fs = __webpack_require__(101);
const core = __webpack_require__(102);
var FileTokenizer_1 = __webpack_require__(108);
Object.defineProperty(exports, "fromFile", ({ enumerable: true, get: function () { return FileTokenizer_1.fromFile; } }));
var core_1 = __webpack_require__(102);
Object.defineProperty(exports, "EndOfStreamError", ({ enumerable: true, get: function () { return core_1.EndOfStreamError; } }));
Object.defineProperty(exports, "fromBuffer", ({ enumerable: true, get: function () { return core_1.fromBuffer; } }));
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property.
 * @param stream - Node.js Stream.Readable
 * @param fileInfo - Pass additional file information to the tokenizer
 * @returns Tokenizer
 */
async function fromStream(stream, fileInfo) {
    fileInfo = fileInfo ? fileInfo : {};
    if (stream.path) {
        const stat = await fs.stat(stream.path);
        fileInfo.path = stream.path;
        fileInfo.size = stat.size;
    }
    return core.fromStream(stream, fileInfo);
}
exports.fromStream = fromStream;


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Module convert fs functions to promise based functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readFile = exports.writeFileSync = exports.writeFile = exports.read = exports.open = exports.close = exports.stat = exports.createReadStream = exports.pathExists = void 0;
const fs = __webpack_require__(89);
exports.pathExists = fs.existsSync;
exports.createReadStream = fs.createReadStream;
async function stat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err)
                reject(err);
            else
                resolve(stats);
        });
    });
}
exports.stat = stat;
async function close(fd) {
    return new Promise((resolve, reject) => {
        fs.close(fd, err => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
exports.close = close;
async function open(path, mode) {
    return new Promise((resolve, reject) => {
        fs.open(path, mode, (err, fd) => {
            if (err)
                reject(err);
            else
                resolve(fd);
        });
    });
}
exports.open = open;
async function read(fd, buffer, offset, length, position) {
    return new Promise((resolve, reject) => {
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, _buffer) => {
            if (err)
                reject(err);
            else
                resolve({ bytesRead, buffer: _buffer });
        });
    });
}
exports.read = read;
async function writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, err => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
exports.writeFile = writeFile;
function writeFileSync(path, data) {
    fs.writeFileSync(path, data);
}
exports.writeFileSync = writeFileSync;
async function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer) => {
            if (err)
                reject(err);
            else
                resolve(buffer);
        });
    });
}
exports.readFile = readFile;


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromBuffer = exports.fromStream = exports.EndOfStreamError = void 0;
const ReadStreamTokenizer_1 = __webpack_require__(103);
const BufferTokenizer_1 = __webpack_require__(107);
var peek_readable_1 = __webpack_require__(105);
Object.defineProperty(exports, "EndOfStreamError", ({ enumerable: true, get: function () { return peek_readable_1.EndOfStreamError; } }));
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property/
 * @param stream - Read from Node.js Stream.Readable
 * @param fileInfo - Pass the file information, like size and MIME-type of the correspnding stream.
 * @returns ReadStreamTokenizer
 */
function fromStream(stream, fileInfo) {
    fileInfo = fileInfo ? fileInfo : {};
    return new ReadStreamTokenizer_1.ReadStreamTokenizer(stream, fileInfo);
}
exports.fromStream = fromStream;
/**
 * Construct ReadStreamTokenizer from given Buffer.
 * @param uint8Array - Uint8Array to tokenize
 * @param fileInfo - Pass additional file information to the tokenizer
 * @returns BufferTokenizer
 */
function fromBuffer(uint8Array, fileInfo) {
    return new BufferTokenizer_1.BufferTokenizer(uint8Array, fileInfo);
}
exports.fromBuffer = fromBuffer;


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadStreamTokenizer = void 0;
const AbstractTokenizer_1 = __webpack_require__(104);
const peek_readable_1 = __webpack_require__(105);
const maxBufferSize = 256000;
class ReadStreamTokenizer extends AbstractTokenizer_1.AbstractTokenizer {
    constructor(stream, fileInfo) {
        super(fileInfo);
        this.streamReader = new peek_readable_1.StreamReader(stream);
    }
    /**
     * Get file information, an HTTP-client may implement this doing a HEAD request
     * @return Promise with file information
     */
    async getFileInfo() {
        return this.fileInfo;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */
    async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
            await this.ignore(skipBytes);
            return this.readBuffer(uint8Array, options);
        }
        else if (skipBytes < 0) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (normOptions.length === 0) {
            return 0;
        }
        const bytesRead = await this.streamReader.read(uint8Array, normOptions.offset, normOptions.length);
        this.position += bytesRead;
        if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */
    async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        let bytesRead = 0;
        if (normOptions.position) {
            const skipBytes = normOptions.position - this.position;
            if (skipBytes > 0) {
                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
                bytesRead = await this.peekBuffer(skipBuffer, { mayBeLess: normOptions.mayBeLess });
                uint8Array.set(skipBuffer.subarray(skipBytes), normOptions.offset);
                return bytesRead - skipBytes;
            }
            else if (skipBytes < 0) {
                throw new Error('Cannot peek from a negative offset in a stream');
            }
        }
        if (normOptions.length > 0) {
            try {
                bytesRead = await this.streamReader.peek(uint8Array, normOptions.offset, normOptions.length);
            }
            catch (err) {
                if (options && options.mayBeLess && err instanceof peek_readable_1.EndOfStreamError) {
                    return 0;
                }
                throw err;
            }
            if ((!normOptions.mayBeLess) && bytesRead < normOptions.length) {
                throw new peek_readable_1.EndOfStreamError();
            }
        }
        return bytesRead;
    }
    async ignore(length) {
        // debug(`ignore ${this.position}...${this.position + length - 1}`);
        const bufSize = Math.min(maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while (totBytesRead < length) {
            const remaining = length - totBytesRead;
            const bytesRead = await this.readBuffer(buf, { length: Math.min(bufSize, remaining) });
            if (bytesRead < 0) {
                return bytesRead;
            }
            totBytesRead += bytesRead;
        }
        return totBytesRead;
    }
}
exports.ReadStreamTokenizer = ReadStreamTokenizer;


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractTokenizer = void 0;
const peek_readable_1 = __webpack_require__(105);
/**
 * Core tokenizer
 */
class AbstractTokenizer {
    constructor(fileInfo) {
        /**
         * Tokenizer-stream position
         */
        this.position = 0;
        this.numBuffer = new Uint8Array(8);
        this.fileInfo = fileInfo ? fileInfo : {};
    }
    /**
     * Read a token from the tokenizer-stream
     * @param token - The token to read
     * @param position - If provided, the desired position in the tokenizer-stream
     * @returns Promise with token data
     */
    async readToken(token, position = this.position) {
        const uint8Array = Buffer.alloc(token.len);
        const len = await this.readBuffer(uint8Array, { position });
        if (len < token.len)
            throw new peek_readable_1.EndOfStreamError();
        return token.get(uint8Array, 0);
    }
    /**
     * Peek a token from the tokenizer-stream.
     * @param token - Token to peek from the tokenizer-stream.
     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
     * @returns Promise with token data
     */
    async peekToken(token, position = this.position) {
        const uint8Array = Buffer.alloc(token.len);
        const len = await this.peekBuffer(uint8Array, { position });
        if (len < token.len)
            throw new peek_readable_1.EndOfStreamError();
        return token.get(uint8Array, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */
    async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, { length: token.len });
        if (len < token.len)
            throw new peek_readable_1.EndOfStreamError();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */
    async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, { length: token.len });
        if (len < token.len)
            throw new peek_readable_1.EndOfStreamError();
        return token.get(this.numBuffer, 0);
    }
    /**
     *  Ignore number of bytes, advances the pointer in under tokenizer-stream.
     * @param length - Number of bytes to ignore
     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
     */
    async ignore(length) {
        if (this.fileInfo.size !== undefined) {
            const bytesLeft = this.fileInfo.size - this.position;
            if (length > bytesLeft) {
                this.position += bytesLeft;
                return bytesLeft;
            }
        }
        this.position += length;
        return length;
    }
    async close() {
        // empty
    }
    normalizeOptions(uint8Array, options) {
        if (options && options.position !== undefined && options.position < this.position) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (options) {
            return {
                mayBeLess: options.mayBeLess === true,
                offset: options.offset ? options.offset : 0,
                length: options.length ? options.length : (uint8Array.length - (options.offset ? options.offset : 0)),
                position: options.position ? options.position : this.position
            };
        }
        return {
            mayBeLess: false,
            offset: 0,
            length: uint8Array.length,
            position: this.position
        };
    }
}
exports.AbstractTokenizer = AbstractTokenizer;


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamReader = exports.EndOfStreamError = void 0;
const EndOfFileStream_1 = __webpack_require__(106);
var EndOfFileStream_2 = __webpack_require__(106);
Object.defineProperty(exports, "EndOfStreamError", ({ enumerable: true, get: function () { return EndOfFileStream_2.EndOfStreamError; } }));
class Deferred {
    constructor() {
        this.resolve = () => null;
        this.reject = () => null;
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
const maxStreamReadSize = 1 * 1024 * 1024; // Maximum request length on read-stream operation
class StreamReader {
    constructor(s) {
        this.s = s;
        /**
         * Deferred read request
         */
        this.request = null;
        this.endOfStream = false;
        /**
         * Store peeked data
         * @type {Array}
         */
        this.peekQueue = [];
        if (!s.read || !s.once) {
            throw new Error('Expected an instance of stream.Readable');
        }
        this.s.once('end', () => this.reject(new EndOfFileStream_1.EndOfStreamError()));
        this.s.once('error', err => this.reject(err));
        this.s.once('close', () => this.reject(new Error('Stream closed')));
    }
    /**
     * Read ahead (peek) from stream. Subsequent read or peeks will return the same data
     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes peeked
     */
    async peek(uint8Array, offset, length) {
        const bytesRead = await this.read(uint8Array, offset, length);
        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer
        return bytesRead;
    }
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes read
     */
    async read(buffer, offset, length) {
        if (length === 0) {
            return 0;
        }
        if (this.peekQueue.length === 0 && this.endOfStream) {
            throw new EndOfFileStream_1.EndOfStreamError();
        }
        let remaining = length;
        let bytesRead = 0;
        // consume peeked data first
        while (this.peekQueue.length > 0 && remaining > 0) {
            const peekData = this.peekQueue.pop(); // Front of queue
            if (!peekData)
                throw new Error('peekData should be defined');
            const lenCopy = Math.min(peekData.length, remaining);
            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);
            bytesRead += lenCopy;
            remaining -= lenCopy;
            if (lenCopy < peekData.length) {
                // remainder back to queue
                this.peekQueue.push(peekData.subarray(lenCopy));
            }
        }
        // continue reading from stream if required
        while (remaining > 0 && !this.endOfStream) {
            const reqLen = Math.min(remaining, maxStreamReadSize);
            const chunkLen = await this._read(buffer, offset + bytesRead, reqLen);
            bytesRead += chunkLen;
            if (chunkLen < reqLen)
                break;
            remaining -= chunkLen;
        }
        return bytesRead;
    }
    /**
     * Read chunk from stream
     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset Offset target
     * @param length Number of bytes to read
     * @returns Number of bytes read
     */
    async _read(buffer, offset, length) {
        if (this.request)
            throw new Error('Concurrent read operation?');
        const readBuffer = this.s.read(length);
        if (readBuffer) {
            buffer.set(readBuffer, offset);
            return readBuffer.length;
        }
        else {
            this.request = {
                buffer,
                offset,
                length,
                deferred: new Deferred()
            };
            this.s.once('readable', () => {
                this.tryRead();
            });
            return this.request.deferred.promise;
        }
    }
    tryRead() {
        if (!this.request)
            throw new Error('this.request should be defined');
        const readBuffer = this.s.read(this.request.length);
        if (readBuffer) {
            this.request.buffer.set(readBuffer, this.request.offset);
            this.request.deferred.resolve(readBuffer.length);
            this.request = null;
        }
        else {
            this.s.once('readable', () => {
                this.tryRead();
            });
        }
    }
    reject(err) {
        this.endOfStream = true;
        if (this.request) {
            this.request.deferred.reject(err);
            this.request = null;
        }
    }
}
exports.StreamReader = StreamReader;


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndOfStreamError = exports.defaultMessages = void 0;
exports.defaultMessages = 'End-Of-Stream';
/**
 * Thrown on read operation of the end of file or stream has been reached
 */
class EndOfStreamError extends Error {
    constructor() {
        super(exports.defaultMessages);
    }
}
exports.EndOfStreamError = EndOfStreamError;


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferTokenizer = void 0;
const peek_readable_1 = __webpack_require__(105);
const AbstractTokenizer_1 = __webpack_require__(104);
class BufferTokenizer extends AbstractTokenizer_1.AbstractTokenizer {
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param fileInfo - Pass additional file information to the tokenizer
     */
    constructor(uint8Array, fileInfo) {
        super(fileInfo);
        this.uint8Array = uint8Array;
        this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : uint8Array.length;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    async readBuffer(uint8Array, options) {
        if (options && options.position) {
            if (options.position < this.position) {
                throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
            }
            this.position = options.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options);
        this.position += bytesRead;
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
        if ((!normOptions.mayBeLess) && bytes2read < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        }
        else {
            uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read), normOptions.offset);
            return bytes2read;
        }
    }
    async close() {
        // empty
    }
}
exports.BufferTokenizer = BufferTokenizer;


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromFile = exports.FileTokenizer = void 0;
const AbstractTokenizer_1 = __webpack_require__(104);
const peek_readable_1 = __webpack_require__(105);
const fs = __webpack_require__(101);
class FileTokenizer extends AbstractTokenizer_1.AbstractTokenizer {
    constructor(fd, fileInfo) {
        super(fileInfo);
        this.fd = fd;
    }
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        this.position = normOptions.position;
        const res = await fs.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        this.position += res.bytesRead;
        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return res.bytesRead;
    }
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const res = await fs.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        if ((!normOptions.mayBeLess) && res.bytesRead < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return res.bytesRead;
    }
    async close() {
        return fs.close(this.fd);
    }
}
exports.FileTokenizer = FileTokenizer;
async function fromFile(sourceFilePath) {
    const stat = await fs.stat(sourceFilePath);
    if (!stat.isFile) {
        throw new Error(`File not a file: ${sourceFilePath}`);
    }
    const fd = await fs.open(sourceFilePath, 'r');
    return new FileTokenizer(fd, { path: sourceFilePath, size: stat.size });
}
exports.fromFile = fromFile;


/***/ }),
/* 109 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Token = __webpack_require__(110);
const strtok3 = __webpack_require__(102);
const {
	stringToBytes,
	tarHeaderChecksumMatches,
	uint32SyncSafeToken
} = __webpack_require__(112);
const supported = __webpack_require__(113);

const minimumBytes = 4100; // A fair amount of file-types are detectable within this range

async function fromStream(stream) {
	const tokenizer = await strtok3.fromStream(stream);
	try {
		return await fromTokenizer(tokenizer);
	} finally {
		await tokenizer.close();
	}
}

async function fromBuffer(input) {
	if (!(input instanceof Uint8Array || input instanceof ArrayBuffer || Buffer.isBuffer(input))) {
		throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof input}\``);
	}

	const buffer = input instanceof Buffer ? input : Buffer.from(input);

	if (!(buffer && buffer.length > 1)) {
		return;
	}

	const tokenizer = strtok3.fromBuffer(buffer);
	return fromTokenizer(tokenizer);
}

function _check(buffer, headers, options) {
	options = {
		offset: 0,
		...options
	};

	for (const [index, header] of headers.entries()) {
		// If a bitmask is set
		if (options.mask) {
			// If header doesn't equal `buf` with bits masked off
			if (header !== (options.mask[index] & buffer[index + options.offset])) {
				return false;
			}
		} else if (header !== buffer[index + options.offset]) {
			return false;
		}
	}

	return true;
}

async function fromTokenizer(tokenizer) {
	try {
		return _fromTokenizer(tokenizer);
	} catch (error) {
		if (!(error instanceof strtok3.EndOfStreamError)) {
			throw error;
		}
	}
}

async function _fromTokenizer(tokenizer) {
	let buffer = Buffer.alloc(minimumBytes);
	const bytesRead = 12;
	const check = (header, options) => _check(buffer, header, options);
	const checkString = (header, options) => check(stringToBytes(header), options);

	// Keep reading until EOF if the file size is unknown.
	if (!tokenizer.fileInfo.size) {
		tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
	}

	await tokenizer.peekBuffer(buffer, {length: bytesRead, mayBeLess: true});

	// -- 2-byte signatures --

	if (check([0x42, 0x4D])) {
		return {
			ext: 'bmp',
			mime: 'image/bmp'
		};
	}

	if (check([0x0B, 0x77])) {
		return {
			ext: 'ac3',
			mime: 'audio/vnd.dolby.dd-raw'
		};
	}

	if (check([0x78, 0x01])) {
		return {
			ext: 'dmg',
			mime: 'application/x-apple-diskimage'
		};
	}

	if (check([0x4D, 0x5A])) {
		return {
			ext: 'exe',
			mime: 'application/x-msdownload'
		};
	}

	if (check([0x25, 0x21])) {
		await tokenizer.peekBuffer(buffer, {length: 24, mayBeLess: true});

		if (checkString('PS-Adobe-', {offset: 2}) &&
			checkString(' EPSF-', {offset: 14})) {
			return {
				ext: 'eps',
				mime: 'application/eps'
			};
		}

		return {
			ext: 'ps',
			mime: 'application/postscript'
		};
	}

	if (
		check([0x1F, 0xA0]) ||
		check([0x1F, 0x9D])
	) {
		return {
			ext: 'Z',
			mime: 'application/x-compress'
		};
	}

	// -- 3-byte signatures --

	if (check([0xFF, 0xD8, 0xFF])) {
		return {
			ext: 'jpg',
			mime: 'image/jpeg'
		};
	}

	if (check([0x49, 0x49, 0xBC])) {
		return {
			ext: 'jxr',
			mime: 'image/vnd.ms-photo'
		};
	}

	if (check([0x1F, 0x8B, 0x8])) {
		return {
			ext: 'gz',
			mime: 'application/gzip'
		};
	}

	if (check([0x42, 0x5A, 0x68])) {
		return {
			ext: 'bz2',
			mime: 'application/x-bzip2'
		};
	}

	if (checkString('ID3')) {
		await tokenizer.ignore(6); // Skip ID3 header until the header size
		const id3HeaderLen = await tokenizer.readToken(uint32SyncSafeToken);
		if (tokenizer.position + id3HeaderLen > tokenizer.fileInfo.size) {
			// Guess file type based on ID3 header for backward compatibility
			return {
				ext: 'mp3',
				mime: 'audio/mpeg'
			};
		}

		await tokenizer.ignore(id3HeaderLen);
		return fromTokenizer(tokenizer); // Skip ID3 header, recursion
	}

	// Musepack, SV7
	if (checkString('MP+')) {
		return {
			ext: 'mpc',
			mime: 'audio/x-musepack'
		};
	}

	if (
		(buffer[0] === 0x43 || buffer[0] === 0x46) &&
		check([0x57, 0x53], {offset: 1})
	) {
		return {
			ext: 'swf',
			mime: 'application/x-shockwave-flash'
		};
	}

	// -- 4-byte signatures --

	if (check([0x47, 0x49, 0x46])) {
		return {
			ext: 'gif',
			mime: 'image/gif'
		};
	}

	if (checkString('FLIF')) {
		return {
			ext: 'flif',
			mime: 'image/flif'
		};
	}

	if (checkString('8BPS')) {
		return {
			ext: 'psd',
			mime: 'image/vnd.adobe.photoshop'
		};
	}

	if (checkString('WEBP', {offset: 8})) {
		return {
			ext: 'webp',
			mime: 'image/webp'
		};
	}

	// Musepack, SV8
	if (checkString('MPCK')) {
		return {
			ext: 'mpc',
			mime: 'audio/x-musepack'
		};
	}

	if (checkString('FORM')) {
		return {
			ext: 'aif',
			mime: 'audio/aiff'
		};
	}

	if (checkString('icns', {offset: 0})) {
		return {
			ext: 'icns',
			mime: 'image/icns'
		};
	}

	// Zip-based file formats
	// Need to be before the `zip` check
	if (check([0x50, 0x4B, 0x3, 0x4])) { // Local file header signature
		try {
			while (tokenizer.position + 30 < tokenizer.fileInfo.size) {
				await tokenizer.readBuffer(buffer, {length: 30});

				// https://en.wikipedia.org/wiki/Zip_(file_format)#File_headers
				const zipHeader = {
					compressedSize: buffer.readUInt32LE(18),
					uncompressedSize: buffer.readUInt32LE(22),
					filenameLength: buffer.readUInt16LE(26),
					extraFieldLength: buffer.readUInt16LE(28)
				};

				zipHeader.filename = await tokenizer.readToken(new Token.StringType(zipHeader.filenameLength, 'utf-8'));
				await tokenizer.ignore(zipHeader.extraFieldLength);

				// Assumes signed `.xpi` from addons.mozilla.org
				if (zipHeader.filename === 'META-INF/mozilla.rsa') {
					return {
						ext: 'xpi',
						mime: 'application/x-xpinstall'
					};
				}

				if (zipHeader.filename.endsWith('.rels') || zipHeader.filename.endsWith('.xml')) {
					const type = zipHeader.filename.split('/')[0];
					switch (type) {
						case '_rels':
							break;
						case 'word':
							return {
								ext: 'docx',
								mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
							};
						case 'ppt':
							return {
								ext: 'pptx',
								mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
							};
						case 'xl':
							return {
								ext: 'xlsx',
								mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
							};
						default:
							break;
					}
				}

				if (zipHeader.filename.startsWith('xl/')) {
					return {
						ext: 'xlsx',
						mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
					};
				}

				if (zipHeader.filename.startsWith('3D/') && zipHeader.filename.endsWith('.model')) {
					return {
						ext: '3mf',
						mime: 'model/3mf'
					};
				}

				// The docx, xlsx and pptx file types extend the Office Open XML file format:
				// https://en.wikipedia.org/wiki/Office_Open_XML_file_formats
				// We look for:
				// - one entry named '[Content_Types].xml' or '_rels/.rels',
				// - one entry indicating specific type of file.
				// MS Office, OpenOffice and LibreOffice may put the parts in different order, so the check should not rely on it.
				if (zipHeader.filename === 'mimetype' && zipHeader.compressedSize === zipHeader.uncompressedSize) {
					const mimeType = await tokenizer.readToken(new Token.StringType(zipHeader.compressedSize, 'utf-8'));

					switch (mimeType) {
						case 'application/epub+zip':
							return {
								ext: 'epub',
								mime: 'application/epub+zip'
							};
						case 'application/vnd.oasis.opendocument.text':
							return {
								ext: 'odt',
								mime: 'application/vnd.oasis.opendocument.text'
							};
						case 'application/vnd.oasis.opendocument.spreadsheet':
							return {
								ext: 'ods',
								mime: 'application/vnd.oasis.opendocument.spreadsheet'
							};
						case 'application/vnd.oasis.opendocument.presentation':
							return {
								ext: 'odp',
								mime: 'application/vnd.oasis.opendocument.presentation'
							};
						default:
					}
				}

				// Try to find next header manually when current one is corrupted
				if (zipHeader.compressedSize === 0) {
					let nextHeaderIndex = -1;

					while (nextHeaderIndex < 0 && (tokenizer.position < tokenizer.fileInfo.size)) {
						await tokenizer.peekBuffer(buffer, {mayBeLess: true});

						nextHeaderIndex = buffer.indexOf('504B0304', 0, 'hex');
						// Move position to the next header if found, skip the whole buffer otherwise
						await tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : buffer.length);
					}
				} else {
					await tokenizer.ignore(zipHeader.compressedSize);
				}
			}
		} catch (error) {
			if (!(error instanceof strtok3.EndOfStreamError)) {
				throw error;
			}
		}

		return {
			ext: 'zip',
			mime: 'application/zip'
		};
	}

	if (checkString('OggS')) {
		// This is an OGG container
		await tokenizer.ignore(28);
		const type = Buffer.alloc(8);
		await tokenizer.readBuffer(type);

		// Needs to be before `ogg` check
		if (_check(type, [0x4F, 0x70, 0x75, 0x73, 0x48, 0x65, 0x61, 0x64])) {
			return {
				ext: 'opus',
				mime: 'audio/opus'
			};
		}

		// If ' theora' in header.
		if (_check(type, [0x80, 0x74, 0x68, 0x65, 0x6F, 0x72, 0x61])) {
			return {
				ext: 'ogv',
				mime: 'video/ogg'
			};
		}

		// If '\x01video' in header.
		if (_check(type, [0x01, 0x76, 0x69, 0x64, 0x65, 0x6F, 0x00])) {
			return {
				ext: 'ogm',
				mime: 'video/ogg'
			};
		}

		// If ' FLAC' in header  https://xiph.org/flac/faq.html
		if (_check(type, [0x7F, 0x46, 0x4C, 0x41, 0x43])) {
			return {
				ext: 'oga',
				mime: 'audio/ogg'
			};
		}

		// 'Speex  ' in header https://en.wikipedia.org/wiki/Speex
		if (_check(type, [0x53, 0x70, 0x65, 0x65, 0x78, 0x20, 0x20])) {
			return {
				ext: 'spx',
				mime: 'audio/ogg'
			};
		}

		// If '\x01vorbis' in header
		if (_check(type, [0x01, 0x76, 0x6F, 0x72, 0x62, 0x69, 0x73])) {
			return {
				ext: 'ogg',
				mime: 'audio/ogg'
			};
		}

		// Default OGG container https://www.iana.org/assignments/media-types/application/ogg
		return {
			ext: 'ogx',
			mime: 'application/ogg'
		};
	}

	if (
		check([0x50, 0x4B]) &&
		(buffer[2] === 0x3 || buffer[2] === 0x5 || buffer[2] === 0x7) &&
		(buffer[3] === 0x4 || buffer[3] === 0x6 || buffer[3] === 0x8)
	) {
		return {
			ext: 'zip',
			mime: 'application/zip'
		};
	}

	//

	// File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
	// It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.
	// `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.
	// Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).
	if (
		checkString('ftyp', {offset: 4}) &&
		(buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?
	) {
		// They all can have MIME `video/mp4` except `application/mp4` special-case which is hard to detect.
		// For some cases, we're specific, everything else falls to `video/mp4` with `mp4` extension.
		const brandMajor = buffer.toString('binary', 8, 12).replace('\0', ' ').trim();
		switch (brandMajor) {
			case 'avif':
				return {ext: 'avif', mime: 'image/avif'};
			case 'mif1':
				return {ext: 'heic', mime: 'image/heif'};
			case 'msf1':
				return {ext: 'heic', mime: 'image/heif-sequence'};
			case 'heic':
			case 'heix':
				return {ext: 'heic', mime: 'image/heic'};
			case 'hevc':
			case 'hevx':
				return {ext: 'heic', mime: 'image/heic-sequence'};
			case 'qt':
				return {ext: 'mov', mime: 'video/quicktime'};
			case 'M4V':
			case 'M4VH':
			case 'M4VP':
				return {ext: 'm4v', mime: 'video/x-m4v'};
			case 'M4P':
				return {ext: 'm4p', mime: 'video/mp4'};
			case 'M4B':
				return {ext: 'm4b', mime: 'audio/mp4'};
			case 'M4A':
				return {ext: 'm4a', mime: 'audio/x-m4a'};
			case 'F4V':
				return {ext: 'f4v', mime: 'video/mp4'};
			case 'F4P':
				return {ext: 'f4p', mime: 'video/mp4'};
			case 'F4A':
				return {ext: 'f4a', mime: 'audio/mp4'};
			case 'F4B':
				return {ext: 'f4b', mime: 'audio/mp4'};
			case 'crx':
				return {ext: 'cr3', mime: 'image/x-canon-cr3'};
			default:
				if (brandMajor.startsWith('3g')) {
					if (brandMajor.startsWith('3g2')) {
						return {ext: '3g2', mime: 'video/3gpp2'};
					}

					return {ext: '3gp', mime: 'video/3gpp'};
				}

				return {ext: 'mp4', mime: 'video/mp4'};
		}
	}

	if (checkString('MThd')) {
		return {
			ext: 'mid',
			mime: 'audio/midi'
		};
	}

	if (
		checkString('wOFF') &&
		(
			check([0x00, 0x01, 0x00, 0x00], {offset: 4}) ||
			checkString('OTTO', {offset: 4})
		)
	) {
		return {
			ext: 'woff',
			mime: 'font/woff'
		};
	}

	if (
		checkString('wOF2') &&
		(
			check([0x00, 0x01, 0x00, 0x00], {offset: 4}) ||
			checkString('OTTO', {offset: 4})
		)
	) {
		return {
			ext: 'woff2',
			mime: 'font/woff2'
		};
	}

	if (check([0xD4, 0xC3, 0xB2, 0xA1]) || check([0xA1, 0xB2, 0xC3, 0xD4])) {
		return {
			ext: 'pcap',
			mime: 'application/vnd.tcpdump.pcap'
		};
	}

	// Sony DSD Stream File (DSF)
	if (checkString('DSD ')) {
		return {
			ext: 'dsf',
			mime: 'audio/x-dsf' // Non-standard
		};
	}

	if (checkString('LZIP')) {
		return {
			ext: 'lz',
			mime: 'application/x-lzip'
		};
	}

	if (checkString('fLaC')) {
		return {
			ext: 'flac',
			mime: 'audio/x-flac'
		};
	}

	if (check([0x42, 0x50, 0x47, 0xFB])) {
		return {
			ext: 'bpg',
			mime: 'image/bpg'
		};
	}

	if (checkString('wvpk')) {
		return {
			ext: 'wv',
			mime: 'audio/wavpack'
		};
	}

	if (checkString('%PDF')) {
		await tokenizer.ignore(1350);
		const maxBufferSize = 10 * 1024 * 1024;
		const buffer = Buffer.alloc(Math.min(maxBufferSize, tokenizer.fileInfo.size));
		await tokenizer.readBuffer(buffer, {mayBeLess: true});

		// Check if this is an Adobe Illustrator file
		if (buffer.includes(Buffer.from('AIPrivateData'))) {
			return {
				ext: 'ai',
				mime: 'application/postscript'
			};
		}

		// Assume this is just a normal PDF
		return {
			ext: 'pdf',
			mime: 'application/pdf'
		};
	}

	if (check([0x00, 0x61, 0x73, 0x6D])) {
		return {
			ext: 'wasm',
			mime: 'application/wasm'
		};
	}

	// TIFF, little-endian type
	if (check([0x49, 0x49, 0x2A, 0x0])) {
		if (checkString('CR', {offset: 8})) {
			return {
				ext: 'cr2',
				mime: 'image/x-canon-cr2'
			};
		}

		if (check([0x1C, 0x00, 0xFE, 0x00], {offset: 8}) || check([0x1F, 0x00, 0x0B, 0x00], {offset: 8})) {
			return {
				ext: 'nef',
				mime: 'image/x-nikon-nef'
			};
		}

		if (
			check([0x08, 0x00, 0x00, 0x00], {offset: 4}) &&
			(check([0x2D, 0x00, 0xFE, 0x00], {offset: 8}) ||
				check([0x27, 0x00, 0xFE, 0x00], {offset: 8}))
		) {
			return {
				ext: 'dng',
				mime: 'image/x-adobe-dng'
			};
		}

		buffer = Buffer.alloc(24);
		await tokenizer.peekBuffer(buffer);
		if (
			(check([0x10, 0xFB, 0x86, 0x01], {offset: 4}) || check([0x08, 0x00, 0x00, 0x00], {offset: 4})) &&
			// This pattern differentiates ARW from other TIFF-ish file types:
			check([0x00, 0xFE, 0x00, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x03, 0x01], {offset: 9})
		) {
			return {
				ext: 'arw',
				mime: 'image/x-sony-arw'
			};
		}

		return {
			ext: 'tif',
			mime: 'image/tiff'
		};
	}

	// TIFF, big-endian type
	if (check([0x4D, 0x4D, 0x0, 0x2A])) {
		return {
			ext: 'tif',
			mime: 'image/tiff'
		};
	}

	if (checkString('MAC ')) {
		return {
			ext: 'ape',
			mime: 'audio/ape'
		};
	}

	// https://github.com/threatstack/libmagic/blob/master/magic/Magdir/matroska
	if (check([0x1A, 0x45, 0xDF, 0xA3])) { // Root element: EBML
		async function readField() {
			const msb = await tokenizer.peekNumber(Token.UINT8);
			let mask = 0x80;
			let ic = 0; // 0 = A, 1 = B, 2 = C, 3 = D

			while ((msb & mask) === 0) {
				++ic;
				mask >>= 1;
			}

			const id = Buffer.alloc(ic + 1);
			await tokenizer.readBuffer(id);
			return id;
		}

		async function readElement() {
			const id = await readField();
			const lenField = await readField();
			lenField[0] ^= 0x80 >> (lenField.length - 1);
			const nrLen = Math.min(6, lenField.length); // JavaScript can max read 6 bytes integer
			return {
				id: id.readUIntBE(0, id.length),
				len: lenField.readUIntBE(lenField.length - nrLen, nrLen)
			};
		}

		async function readChildren(level, children) {
			while (children > 0) {
				const e = await readElement();
				if (e.id === 0x4282) {
					return tokenizer.readToken(new Token.StringType(e.len, 'utf-8')); // Return DocType
				}

				await tokenizer.ignore(e.len); // ignore payload
				--children;
			}
		}

		const re = await readElement();
		const docType = await readChildren(1, re.len);

		switch (docType) {
			case 'webm':
				return {
					ext: 'webm',
					mime: 'video/webm'
				};

			case 'matroska':
				return {
					ext: 'mkv',
					mime: 'video/x-matroska'
				};

			default:
				return;
		}
	}

	// RIFF file format which might be AVI, WAV, QCP, etc
	if (check([0x52, 0x49, 0x46, 0x46])) {
		if (check([0x41, 0x56, 0x49], {offset: 8})) {
			return {
				ext: 'avi',
				mime: 'video/vnd.avi'
			};
		}

		if (check([0x57, 0x41, 0x56, 0x45], {offset: 8})) {
			return {
				ext: 'wav',
				mime: 'audio/vnd.wave'
			};
		}

		// QLCM, QCP file
		if (check([0x51, 0x4C, 0x43, 0x4D], {offset: 8})) {
			return {
				ext: 'qcp',
				mime: 'audio/qcelp'
			};
		}
	}

	if (checkString('SQLi')) {
		return {
			ext: 'sqlite',
			mime: 'application/x-sqlite3'
		};
	}

	if (check([0x4E, 0x45, 0x53, 0x1A])) {
		return {
			ext: 'nes',
			mime: 'application/x-nintendo-nes-rom'
		};
	}

	if (checkString('Cr24')) {
		return {
			ext: 'crx',
			mime: 'application/x-google-chrome-extension'
		};
	}

	if (
		checkString('MSCF') ||
		checkString('ISc(')
	) {
		return {
			ext: 'cab',
			mime: 'application/vnd.ms-cab-compressed'
		};
	}

	if (check([0xED, 0xAB, 0xEE, 0xDB])) {
		return {
			ext: 'rpm',
			mime: 'application/x-rpm'
		};
	}

	if (check([0xC5, 0xD0, 0xD3, 0xC6])) {
		return {
			ext: 'eps',
			mime: 'application/eps'
		};
	}

	if (check([0x28, 0xB5, 0x2F, 0xFD])) {
		return {
			ext: 'zst',
			mime: 'application/zstd'
		};
	}

	// -- 5-byte signatures --

	if (check([0x4F, 0x54, 0x54, 0x4F, 0x00])) {
		return {
			ext: 'otf',
			mime: 'font/otf'
		};
	}

	if (checkString('#!AMR')) {
		return {
			ext: 'amr',
			mime: 'audio/amr'
		};
	}

	if (checkString('{\\rtf')) {
		return {
			ext: 'rtf',
			mime: 'application/rtf'
		};
	}

	if (check([0x46, 0x4C, 0x56, 0x01])) {
		return {
			ext: 'flv',
			mime: 'video/x-flv'
		};
	}

	if (checkString('IMPM')) {
		return {
			ext: 'it',
			mime: 'audio/x-it'
		};
	}

	if (
		checkString('-lh0-', {offset: 2}) ||
		checkString('-lh1-', {offset: 2}) ||
		checkString('-lh2-', {offset: 2}) ||
		checkString('-lh3-', {offset: 2}) ||
		checkString('-lh4-', {offset: 2}) ||
		checkString('-lh5-', {offset: 2}) ||
		checkString('-lh6-', {offset: 2}) ||
		checkString('-lh7-', {offset: 2}) ||
		checkString('-lzs-', {offset: 2}) ||
		checkString('-lz4-', {offset: 2}) ||
		checkString('-lz5-', {offset: 2}) ||
		checkString('-lhd-', {offset: 2})
	) {
		return {
			ext: 'lzh',
			mime: 'application/x-lzh-compressed'
		};
	}

	// MPEG program stream (PS or MPEG-PS)
	if (check([0x00, 0x00, 0x01, 0xBA])) {
		//  MPEG-PS, MPEG-1 Part 1
		if (check([0x21], {offset: 4, mask: [0xF1]})) {
			return {
				ext: 'mpg', // May also be .ps, .mpeg
				mime: 'video/MP1S'
			};
		}

		// MPEG-PS, MPEG-2 Part 1
		if (check([0x44], {offset: 4, mask: [0xC4]})) {
			return {
				ext: 'mpg', // May also be .mpg, .m2p, .vob or .sub
				mime: 'video/MP2P'
			};
		}
	}

	if (checkString('ITSF')) {
		return {
			ext: 'chm',
			mime: 'application/vnd.ms-htmlhelp'
		};
	}

	// -- 6-byte signatures --

	if (check([0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00])) {
		return {
			ext: 'xz',
			mime: 'application/x-xz'
		};
	}

	if (checkString('<?xml ')) {
		return {
			ext: 'xml',
			mime: 'application/xml'
		};
	}

	if (check([0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C])) {
		return {
			ext: '7z',
			mime: 'application/x-7z-compressed'
		};
	}

	if (
		check([0x52, 0x61, 0x72, 0x21, 0x1A, 0x7]) &&
		(buffer[6] === 0x0 || buffer[6] === 0x1)
	) {
		return {
			ext: 'rar',
			mime: 'application/x-rar-compressed'
		};
	}

	if (checkString('solid ')) {
		return {
			ext: 'stl',
			mime: 'model/stl'
		};
	}

	// -- 7-byte signatures --

	if (checkString('BLENDER')) {
		return {
			ext: 'blend',
			mime: 'application/x-blender'
		};
	}

	if (checkString('!<arch>')) {
		await tokenizer.ignore(8);
		const str = await tokenizer.readToken(new Token.StringType(13, 'ascii'));
		if (str === 'debian-binary') {
			return {
				ext: 'deb',
				mime: 'application/x-deb'
			};
		}

		return {
			ext: 'ar',
			mime: 'application/x-unix-archive'
		};
	}

	// -- 8-byte signatures --

	if (check([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) {
		// APNG format (https://wiki.mozilla.org/APNG_Specification)
		// 1. Find the first IDAT (image data) chunk (49 44 41 54)
		// 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)

		// Offset calculated as follows:
		// - 8 bytes: PNG signature
		// - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk

		await tokenizer.ignore(8); // ignore PNG signature

		async function readChunkHeader() {
			return {
				length: await tokenizer.readToken(Token.INT32_BE),
				type: await tokenizer.readToken(new Token.StringType(4, 'binary'))
			};
		}

		do {
			const chunk = await readChunkHeader();
			if (chunk.length < 0) {
				return; // Invalid chunk length
			}

			switch (chunk.type) {
				case 'IDAT':
					return {
						ext: 'png',
						mime: 'image/png'
					};
				case 'acTL':
					return {
						ext: 'apng',
						mime: 'image/apng'
					};
				default:
					await tokenizer.ignore(chunk.length + 4); // Ignore chunk-data + CRC
			}
		} while (tokenizer.position + 8 < tokenizer.fileInfo.size);

		return {
			ext: 'png',
			mime: 'image/png'
		};
	}

	if (check([0x41, 0x52, 0x52, 0x4F, 0x57, 0x31, 0x00, 0x00])) {
		return {
			ext: 'arrow',
			mime: 'application/x-apache-arrow'
		};
	}

	if (check([0x67, 0x6C, 0x54, 0x46, 0x02, 0x00, 0x00, 0x00])) {
		return {
			ext: 'glb',
			mime: 'model/gltf-binary'
		};
	}

	// `mov` format variants
	if (
		check([0x66, 0x72, 0x65, 0x65], {offset: 4}) || // `free`
		check([0x6D, 0x64, 0x61, 0x74], {offset: 4}) || // `mdat` MJPEG
		check([0x6D, 0x6F, 0x6F, 0x76], {offset: 4}) || // `moov`
		check([0x77, 0x69, 0x64, 0x65], {offset: 4}) // `wide`
	) {
		return {
			ext: 'mov',
			mime: 'video/quicktime'
		};
	}

	// -- 9-byte signatures --

	if (check([0x49, 0x49, 0x52, 0x4F, 0x08, 0x00, 0x00, 0x00, 0x18])) {
		return {
			ext: 'orf',
			mime: 'image/x-olympus-orf'
		};
	}

	if (checkString('gimp xcf ')) {
		return {
			ext: 'xcf',
			mime: 'image/x-xcf'
		};
	}

	// -- 12-byte signatures --

	if (check([0x49, 0x49, 0x55, 0x00, 0x18, 0x00, 0x00, 0x00, 0x88, 0xE7, 0x74, 0xD8])) {
		return {
			ext: 'rw2',
			mime: 'image/x-panasonic-rw2'
		};
	}

	// ASF_Header_Object first 80 bytes
	if (check([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9])) {
		async function readHeader() {
			const guid = Buffer.alloc(16);
			await tokenizer.readBuffer(guid);
			return {
				id: guid,
				size: Number(await tokenizer.readToken(Token.UINT64_LE))
			};
		}

		await tokenizer.ignore(30);
		// Search for header should be in first 1KB of file.
		while (tokenizer.position + 24 < tokenizer.fileInfo.size) {
			const header = await readHeader();
			let payload = header.size - 24;
			if (_check(header.id, [0x91, 0x07, 0xDC, 0xB7, 0xB7, 0xA9, 0xCF, 0x11, 0x8E, 0xE6, 0x00, 0xC0, 0x0C, 0x20, 0x53, 0x65])) {
				// Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)
				const typeId = Buffer.alloc(16);
				payload -= await tokenizer.readBuffer(typeId);

				if (_check(typeId, [0x40, 0x9E, 0x69, 0xF8, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {
					// Found audio:
					return {
						ext: 'asf',
						mime: 'audio/x-ms-asf'
					};
				}

				if (_check(typeId, [0xC0, 0xEF, 0x19, 0xBC, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {
					// Found video:
					return {
						ext: 'asf',
						mime: 'video/x-ms-asf'
					};
				}

				break;
			}

			await tokenizer.ignore(payload);
		}

		// Default to ASF generic extension
		return {
			ext: 'asf',
			mime: 'application/vnd.ms-asf'
		};
	}

	if (check([0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A])) {
		return {
			ext: 'ktx',
			mime: 'image/ktx'
		};
	}

	if ((check([0x7E, 0x10, 0x04]) || check([0x7E, 0x18, 0x04])) && check([0x30, 0x4D, 0x49, 0x45], {offset: 4})) {
		return {
			ext: 'mie',
			mime: 'application/x-mie'
		};
	}

	if (check([0x27, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], {offset: 2})) {
		return {
			ext: 'shp',
			mime: 'application/x-esri-shape'
		};
	}

	if (check([0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A])) {
		// JPEG-2000 family

		await tokenizer.ignore(20);
		const type = await tokenizer.readToken(new Token.StringType(4, 'ascii'));
		switch (type) {
			case 'jp2 ':
				return {
					ext: 'jp2',
					mime: 'image/jp2'
				};
			case 'jpx ':
				return {
					ext: 'jpx',
					mime: 'image/jpx'
				};
			case 'jpm ':
				return {
					ext: 'jpm',
					mime: 'image/jpm'
				};
			case 'mjp2':
				return {
					ext: 'mj2',
					mime: 'image/mj2'
				};
			default:
				return;
		}
	}

	if (
		check([0xFF, 0x0A]) ||
		check([0x00, 0x00, 0x00, 0x0C, 0x4A, 0x58, 0x4C, 0x20, 0x0D, 0x0A, 0x87, 0x0A])
	) {
		return {
			ext: 'jxl',
			mime: 'image/jxl'
		};
	}

	// -- Unsafe signatures --

	if (
		check([0x0, 0x0, 0x1, 0xBA]) ||
		check([0x0, 0x0, 0x1, 0xB3])
	) {
		return {
			ext: 'mpg',
			mime: 'video/mpeg'
		};
	}

	if (check([0x00, 0x01, 0x00, 0x00, 0x00])) {
		return {
			ext: 'ttf',
			mime: 'font/ttf'
		};
	}

	if (check([0x00, 0x00, 0x01, 0x00])) {
		return {
			ext: 'ico',
			mime: 'image/x-icon'
		};
	}

	if (check([0x00, 0x00, 0x02, 0x00])) {
		return {
			ext: 'cur',
			mime: 'image/x-icon'
		};
	}

	if (check([0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1])) {
		// Detected Microsoft Compound File Binary File (MS-CFB) Format.
		return {
			ext: 'cfb',
			mime: 'application/x-cfb'
		};
	}

	// Increase sample size from 12 to 256.
	await tokenizer.peekBuffer(buffer, {length: Math.min(256, tokenizer.fileInfo.size), mayBeLess: true});

	// -- 15-byte signatures --

	if (checkString('BEGIN:')) {
		if (checkString('VCARD', {offset: 6})) {
			return {
				ext: 'vcf',
				mime: 'text/vcard'
			};
		}

		if (checkString('VCALENDAR', {offset: 6})) {
			return {
				ext: 'ics',
				mime: 'text/calendar'
			};
		}
	}

	// `raf` is here just to keep all the raw image detectors together.
	if (checkString('FUJIFILMCCD-RAW')) {
		return {
			ext: 'raf',
			mime: 'image/x-fujifilm-raf'
		};
	}

	if (checkString('Extended Module:')) {
		return {
			ext: 'xm',
			mime: 'audio/x-xm'
		};
	}

	if (checkString('Creative Voice File')) {
		return {
			ext: 'voc',
			mime: 'audio/x-voc'
		};
	}

	if (check([0x04, 0x00, 0x00, 0x00]) && buffer.length >= 16) { // Rough & quick check Pickle/ASAR
		const jsonSize = buffer.readUInt32LE(12);
		if (jsonSize > 12 && buffer.length >= jsonSize + 16) {
			try {
				const header = buffer.slice(16, jsonSize + 16).toString();
				const json = JSON.parse(header);
				// Check if Pickle is ASAR
				if (json.files) { // Final check, assuring Pickle/ASAR format
					return {
						ext: 'asar',
						mime: 'application/x-asar'
					};
				}
			} catch (_) {
			}
		}
	}

	if (check([0x06, 0x0E, 0x2B, 0x34, 0x02, 0x05, 0x01, 0x01, 0x0D, 0x01, 0x02, 0x01, 0x01, 0x02])) {
		return {
			ext: 'mxf',
			mime: 'application/mxf'
		};
	}

	if (checkString('SCRM', {offset: 44})) {
		return {
			ext: 's3m',
			mime: 'audio/x-s3m'
		};
	}

	if (check([0x47], {offset: 4}) && (check([0x47], {offset: 192}) || check([0x47], {offset: 196}))) {
		return {
			ext: 'mts',
			mime: 'video/mp2t'
		};
	}

	if (check([0x42, 0x4F, 0x4F, 0x4B, 0x4D, 0x4F, 0x42, 0x49], {offset: 60})) {
		return {
			ext: 'mobi',
			mime: 'application/x-mobipocket-ebook'
		};
	}

	if (check([0x44, 0x49, 0x43, 0x4D], {offset: 128})) {
		return {
			ext: 'dcm',
			mime: 'application/dicom'
		};
	}

	if (check([0x4C, 0x00, 0x00, 0x00, 0x01, 0x14, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x46])) {
		return {
			ext: 'lnk',
			mime: 'application/x.ms.shortcut' // Invented by us
		};
	}

	if (check([0x62, 0x6F, 0x6F, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x61, 0x72, 0x6B, 0x00, 0x00, 0x00, 0x00])) {
		return {
			ext: 'alias',
			mime: 'application/x.apple.alias' // Invented by us
		};
	}

	if (
		check([0x4C, 0x50], {offset: 34}) &&
		(
			check([0x00, 0x00, 0x01], {offset: 8}) ||
			check([0x01, 0x00, 0x02], {offset: 8}) ||
			check([0x02, 0x00, 0x02], {offset: 8})
		)
	) {
		return {
			ext: 'eot',
			mime: 'application/vnd.ms-fontobject'
		};
	}

	if (check([0x06, 0x06, 0xED, 0xF5, 0xD8, 0x1D, 0x46, 0xE5, 0xBD, 0x31, 0xEF, 0xE7, 0xFE, 0x74, 0xB7, 0x1D])) {
		return {
			ext: 'indd',
			mime: 'application/x-indesign'
		};
	}

	// Increase sample size from 256 to 512
	await tokenizer.peekBuffer(buffer, {length: Math.min(512, tokenizer.fileInfo.size), mayBeLess: true});

	// Requires a buffer size of 512 bytes
	if (tarHeaderChecksumMatches(buffer)) {
		return {
			ext: 'tar',
			mime: 'application/x-tar'
		};
	}

	if (check([0xFF, 0xFE, 0xFF, 0x0E, 0x53, 0x00, 0x6B, 0x00, 0x65, 0x00, 0x74, 0x00, 0x63, 0x00, 0x68, 0x00, 0x55, 0x00, 0x70, 0x00, 0x20, 0x00, 0x4D, 0x00, 0x6F, 0x00, 0x64, 0x00, 0x65, 0x00, 0x6C, 0x00])) {
		return {
			ext: 'skp',
			mime: 'application/vnd.sketchup.skp'
		};
	}

	if (checkString('-----BEGIN PGP MESSAGE-----')) {
		return {
			ext: 'pgp',
			mime: 'application/pgp-encrypted'
		};
	}

	// Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)
	if (buffer.length >= 2 && check([0xFF, 0xE0], {offset: 0, mask: [0xFF, 0xE0]})) {
		if (check([0x10], {offset: 1, mask: [0x16]})) {
			// Check for (ADTS) MPEG-2
			if (check([0x08], {offset: 1, mask: [0x08]})) {
				return {
					ext: 'aac',
					mime: 'audio/aac'
				};
			}

			// Must be (ADTS) MPEG-4
			return {
				ext: 'aac',
				mime: 'audio/aac'
			};
		}

		// MPEG 1 or 2 Layer 3 header
		// Check for MPEG layer 3
		if (check([0x02], {offset: 1, mask: [0x06]})) {
			return {
				ext: 'mp3',
				mime: 'audio/mpeg'
			};
		}

		// Check for MPEG layer 2
		if (check([0x04], {offset: 1, mask: [0x06]})) {
			return {
				ext: 'mp2',
				mime: 'audio/mpeg'
			};
		}

		// Check for MPEG layer 1
		if (check([0x06], {offset: 1, mask: [0x06]})) {
			return {
				ext: 'mp1',
				mime: 'audio/mpeg'
			};
		}
	}
}

const stream = readableStream => new Promise((resolve, reject) => {
	// Using `eval` to work around issues when bundling with Webpack
	const stream = eval('require')('stream'); // eslint-disable-line no-eval

	readableStream.on('error', reject);
	readableStream.once('readable', async () => {
		// Set up output stream
		const pass = new stream.PassThrough();
		let outputStream;
		if (stream.pipeline) {
			outputStream = stream.pipeline(readableStream, pass, () => {
			});
		} else {
			outputStream = readableStream.pipe(pass);
		}

		// Read the input stream and detect the filetype
		const chunk = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
		try {
			const fileType = await fromBuffer(chunk);
			pass.fileType = fileType;
		} catch (error) {
			reject(error);
		}

		resolve(outputStream);
	});
});

const fileType = {
	fromStream,
	fromTokenizer,
	fromBuffer,
	stream
};

Object.defineProperty(fileType, 'extensions', {
	get() {
		return new Set(supported.extensions);
	}
});

Object.defineProperty(fileType, 'mimeTypes', {
	get() {
		return new Set(supported.mimeTypes);
	}
});

module.exports = fileType;


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnsiStringType = exports.StringType = exports.BufferType = exports.Uint8ArrayType = exports.IgnoreType = exports.Float80_LE = exports.Float80_BE = exports.Float64_LE = exports.Float64_BE = exports.Float32_LE = exports.Float32_BE = exports.Float16_LE = exports.Float16_BE = exports.INT64_BE = exports.UINT64_BE = exports.INT64_LE = exports.UINT64_LE = exports.INT32_LE = exports.INT32_BE = exports.INT24_BE = exports.INT24_LE = exports.INT16_LE = exports.INT16_BE = exports.INT8 = exports.UINT32_BE = exports.UINT32_LE = exports.UINT24_BE = exports.UINT24_LE = exports.UINT16_BE = exports.UINT16_LE = exports.UINT8 = void 0;
const ieee754 = __webpack_require__(111);
// Primitive types
function dv(array) {
    return new DataView(array.buffer, array.byteOffset);
}
/**
 * 8-bit unsigned integer
 */
exports.UINT8 = {
    len: 1,
    get(array, offset) {
        return dv(array).getUint8(offset);
    },
    put(array, offset, value) {
        dv(array).setUint8(offset, value);
        return offset + 1;
    }
};
/**
 * 16-bit unsigned integer, Little Endian byte order
 */
exports.UINT16_LE = {
    len: 2,
    get(array, offset) {
        return dv(array).getUint16(offset, true);
    },
    put(array, offset, value) {
        dv(array).setUint16(offset, value, true);
        return offset + 2;
    }
};
/**
 * 16-bit unsigned integer, Big Endian byte order
 */
exports.UINT16_BE = {
    len: 2,
    get(array, offset) {
        return dv(array).getUint16(offset);
    },
    put(array, offset, value) {
        dv(array).setUint16(offset, value);
        return offset + 2;
    }
};
/**
 * 24-bit unsigned integer, Little Endian byte order
 */
exports.UINT24_LE = {
    len: 3,
    get(array, offset) {
        const dataView = dv(array);
        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);
    },
    put(array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
/**
 * 24-bit unsigned integer, Big Endian byte order
 */
exports.UINT24_BE = {
    len: 3,
    get(array, offset) {
        const dataView = dv(array);
        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
    },
    put(array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
/**
 * 32-bit unsigned integer, Little Endian byte order
 */
exports.UINT32_LE = {
    len: 4,
    get(array, offset) {
        return dv(array).getUint32(offset, true);
    },
    put(array, offset, value) {
        dv(array).setUint32(offset, value, true);
        return offset + 4;
    }
};
/**
 * 32-bit unsigned integer, Big Endian byte order
 */
exports.UINT32_BE = {
    len: 4,
    get(array, offset) {
        return dv(array).getUint32(offset);
    },
    put(array, offset, value) {
        dv(array).setUint32(offset, value);
        return offset + 4;
    }
};
/**
 * 8-bit signed integer
 */
exports.INT8 = {
    len: 1,
    get(array, offset) {
        return dv(array).getInt8(offset);
    },
    put(array, offset, value) {
        dv(array).setInt8(offset, value);
        return offset + 2;
    }
};
/**
 * 16-bit signed integer, Big Endian byte order
 */
exports.INT16_BE = {
    len: 2,
    get(array, offset) {
        return dv(array).getInt16(offset);
    },
    put(array, offset, value) {
        dv(array).setInt16(offset, value);
        return offset + 2;
    }
};
/**
 * 16-bit signed integer, Little Endian byte order
 */
exports.INT16_LE = {
    len: 2,
    get(array, offset) {
        return dv(array).getInt16(offset, true);
    },
    put(array, offset, value) {
        dv(array).setInt16(offset, value, true);
        return offset + 2;
    }
};
/**
 * 24-bit signed integer, Little Endian byte order
 */
exports.INT24_LE = {
    len: 3,
    get(array, offset) {
        const unsigned = exports.UINT24_LE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put(array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
/**
 * 24-bit signed integer, Big Endian byte order
 */
exports.INT24_BE = {
    len: 3,
    get(array, offset) {
        const unsigned = exports.UINT24_BE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put(array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
/**
 * 32-bit signed integer, Big Endian byte order
 */
exports.INT32_BE = {
    len: 4,
    get(array, offset) {
        return dv(array).getInt32(offset);
    },
    put(array, offset, value) {
        dv(array).setInt32(offset, value);
        return offset + 4;
    }
};
/**
 * 32-bit signed integer, Big Endian byte order
 */
exports.INT32_LE = {
    len: 4,
    get(array, offset) {
        return dv(array).getInt32(offset, true);
    },
    put(array, offset, value) {
        dv(array).setInt32(offset, value, true);
        return offset + 4;
    }
};
/**
 * 64-bit unsigned integer, Little Endian byte order
 */
exports.UINT64_LE = {
    len: 8,
    get(array, offset) {
        return dv(array).getBigUint64(offset, true);
    },
    put(array, offset, value) {
        dv(array).setBigUint64(offset, value, true);
        return offset + 8;
    }
};
/**
 * 64-bit signed integer, Little Endian byte order
 */
exports.INT64_LE = {
    len: 8,
    get(array, offset) {
        return dv(array).getBigInt64(offset, true);
    },
    put(array, offset, value) {
        dv(array).setBigInt64(offset, value, true);
        return offset + 8;
    }
};
/**
 * 64-bit unsigned integer, Big Endian byte order
 */
exports.UINT64_BE = {
    len: 8,
    get(array, offset) {
        return dv(array).getBigUint64(offset);
    },
    put(array, offset, value) {
        dv(array).setBigUint64(offset, value);
        return offset + 8;
    }
};
/**
 * 64-bit signed integer, Big Endian byte order
 */
exports.INT64_BE = {
    len: 8,
    get(array, offset) {
        return dv(array).getBigInt64(offset);
    },
    put(array, offset, value) {
        dv(array).setBigInt64(offset, value);
        return offset + 8;
    }
};
/**
 * IEEE 754 16-bit (half precision) float, big endian
 */
exports.Float16_BE = {
    len: 2,
    get(dataView, offset) {
        return ieee754.read(dataView, offset, false, 10, this.len);
    },
    put(dataView, offset, value) {
        ieee754.write(dataView, value, offset, false, 10, this.len);
        return offset + this.len;
    }
};
/**
 * IEEE 754 16-bit (half precision) float, little endian
 */
exports.Float16_LE = {
    len: 2,
    get(array, offset) {
        return ieee754.read(array, offset, true, 10, this.len);
    },
    put(array, offset, value) {
        ieee754.write(array, value, offset, true, 10, this.len);
        return offset + this.len;
    }
};
/**
 * IEEE 754 32-bit (single precision) float, big endian
 */
exports.Float32_BE = {
    len: 4,
    get(array, offset) {
        return dv(array).getFloat32(offset);
    },
    put(array, offset, value) {
        dv(array).setFloat32(offset, value);
        return offset + 4;
    }
};
/**
 * IEEE 754 32-bit (single precision) float, little endian
 */
exports.Float32_LE = {
    len: 4,
    get(array, offset) {
        return dv(array).getFloat32(offset, true);
    },
    put(array, offset, value) {
        dv(array).setFloat32(offset, value, true);
        return offset + 4;
    }
};
/**
 * IEEE 754 64-bit (double precision) float, big endian
 */
exports.Float64_BE = {
    len: 8,
    get(array, offset) {
        return dv(array).getFloat64(offset);
    },
    put(array, offset, value) {
        dv(array).setFloat64(offset, value);
        return offset + 8;
    }
};
/**
 * IEEE 754 64-bit (double precision) float, little endian
 */
exports.Float64_LE = {
    len: 8,
    get(array, offset) {
        return dv(array).getFloat64(offset, true);
    },
    put(array, offset, value) {
        dv(array).setFloat64(offset, value, true);
        return offset + 8;
    }
};
/**
 * IEEE 754 80-bit (extended precision) float, big endian
 */
exports.Float80_BE = {
    len: 10,
    get(array, offset) {
        return ieee754.read(array, offset, false, 63, this.len);
    },
    put(array, offset, value) {
        ieee754.write(array, value, offset, false, 63, this.len);
        return offset + this.len;
    }
};
/**
 * IEEE 754 80-bit (extended precision) float, little endian
 */
exports.Float80_LE = {
    len: 10,
    get(array, offset) {
        return ieee754.read(array, offset, true, 63, this.len);
    },
    put(array, offset, value) {
        ieee754.write(array, value, offset, true, 63, this.len);
        return offset + this.len;
    }
};
/**
 * Ignore a given number of bytes
 */
class IgnoreType {
    /**
     * @param len number of bytes to ignore
     */
    constructor(len) {
        this.len = len;
    }
    // ToDo: don't read, but skip data
    get(array, off) {
    }
}
exports.IgnoreType = IgnoreType;
class Uint8ArrayType {
    constructor(len) {
        this.len = len;
    }
    get(array, offset) {
        return array.subarray(offset, offset + this.len);
    }
}
exports.Uint8ArrayType = Uint8ArrayType;
class BufferType {
    constructor(len) {
        this.len = len;
    }
    get(buffer, off) {
        return buffer.slice(off, off + this.len);
    }
}
exports.BufferType = BufferType;
/**
 * Consume a fixed number of bytes from the stream and return a string with a specified encoding.
 */
class StringType {
    constructor(len, encoding) {
        this.len = len;
        this.encoding = encoding;
    }
    get(uint8Array, offset) {
        return Buffer.from(uint8Array).toString(this.encoding, offset, offset + this.len);
    }
}
exports.StringType = StringType;
/**
 * ANSI Latin 1 String
 * Using windows-1252 / ISO 8859-1 decoding
 */
class AnsiStringType {
    constructor(len) {
        this.len = len;
    }
    static decode(buffer, offset, until) {
        let str = '';
        for (let i = offset; i < until; ++i) {
            str += AnsiStringType.codePointToString(AnsiStringType.singleByteDecoder(buffer[i]));
        }
        return str;
    }
    static inRange(a, min, max) {
        return min <= a && a <= max;
    }
    static codePointToString(cp) {
        if (cp <= 0xFFFF) {
            return String.fromCharCode(cp);
        }
        else {
            cp -= 0x10000;
            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    }
    static singleByteDecoder(bite) {
        if (AnsiStringType.inRange(bite, 0x00, 0x7F)) {
            return bite;
        }
        const codePoint = AnsiStringType.windows1252[bite - 0x80];
        if (codePoint === null) {
            throw Error('invaliding encoding');
        }
        return codePoint;
    }
    get(buffer, offset = 0) {
        return AnsiStringType.decode(buffer, offset, offset + this.len);
    }
}
exports.AnsiStringType = AnsiStringType;
AnsiStringType.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
    8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,
    8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,
    169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
    185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
    217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
    248, 249, 250, 251, 252, 253, 254, 255];


/***/ }),
/* 111 */
/***/ ((module) => {

module.exports = require("ieee754");

/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports) => {



exports.stringToBytes = string => [...string].map(character => character.charCodeAt(0));

/**
Checks whether the TAR checksum is valid.

@param {Buffer} buffer - The TAR header `[offset ... offset + 512]`.
@param {number} offset - TAR header offset.
@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.
*/
exports.tarHeaderChecksumMatches = (buffer, offset = 0) => {
	const readSum = parseInt(buffer.toString('utf8', 148, 154).replace(/\0.*$/, '').trim(), 8); // Read sum in header
	if (isNaN(readSum)) {
		return false;
	}

	let sum = 8 * 0x20; // Initialize signed bit sum

	for (let i = offset; i < offset + 148; i++) {
		sum += buffer[i];
	}

	for (let i = offset + 156; i < offset + 512; i++) {
		sum += buffer[i];
	}

	return readSum === sum;
};

/**
ID3 UINT32 sync-safe tokenizer token.
28 bits (representing up to 256MB) integer, the msb is 0 to avoid "false syncsignals".
*/
exports.uint32SyncSafeToken = {
	get: (buffer, offset) => {
		return (buffer[offset + 3] & 0x7F) | ((buffer[offset + 2]) << 7) | ((buffer[offset + 1]) << 14) | ((buffer[offset]) << 21);
	},
	len: 4
};


/***/ }),
/* 113 */
/***/ ((module) => {



module.exports = {
	extensions: [
		'jpg',
		'png',
		'apng',
		'gif',
		'webp',
		'flif',
		'xcf',
		'cr2',
		'cr3',
		'orf',
		'arw',
		'dng',
		'nef',
		'rw2',
		'raf',
		'tif',
		'bmp',
		'icns',
		'jxr',
		'psd',
		'indd',
		'zip',
		'tar',
		'rar',
		'gz',
		'bz2',
		'7z',
		'dmg',
		'mp4',
		'mid',
		'mkv',
		'webm',
		'mov',
		'avi',
		'mpg',
		'mp2',
		'mp3',
		'm4a',
		'oga',
		'ogg',
		'ogv',
		'opus',
		'flac',
		'wav',
		'spx',
		'amr',
		'pdf',
		'epub',
		'exe',
		'swf',
		'rtf',
		'wasm',
		'woff',
		'woff2',
		'eot',
		'ttf',
		'otf',
		'ico',
		'flv',
		'ps',
		'xz',
		'sqlite',
		'nes',
		'crx',
		'xpi',
		'cab',
		'deb',
		'ar',
		'rpm',
		'Z',
		'lz',
		'cfb',
		'mxf',
		'mts',
		'blend',
		'bpg',
		'docx',
		'pptx',
		'xlsx',
		'3gp',
		'3g2',
		'jp2',
		'jpm',
		'jpx',
		'mj2',
		'aif',
		'qcp',
		'odt',
		'ods',
		'odp',
		'xml',
		'mobi',
		'heic',
		'cur',
		'ktx',
		'ape',
		'wv',
		'dcm',
		'ics',
		'glb',
		'pcap',
		'dsf',
		'lnk',
		'alias',
		'voc',
		'ac3',
		'm4v',
		'm4p',
		'm4b',
		'f4v',
		'f4p',
		'f4b',
		'f4a',
		'mie',
		'asf',
		'ogm',
		'ogx',
		'mpc',
		'arrow',
		'shp',
		'aac',
		'mp1',
		'it',
		's3m',
		'xm',
		'ai',
		'skp',
		'avif',
		'eps',
		'lzh',
		'pgp',
		'asar',
		'stl',
		'chm',
		'3mf',
		'zst',
		'jxl',
		'vcf'
	],
	mimeTypes: [
		'image/jpeg',
		'image/png',
		'image/gif',
		'image/webp',
		'image/flif',
		'image/x-xcf',
		'image/x-canon-cr2',
		'image/x-canon-cr3',
		'image/tiff',
		'image/bmp',
		'image/vnd.ms-photo',
		'image/vnd.adobe.photoshop',
		'application/x-indesign',
		'application/epub+zip',
		'application/x-xpinstall',
		'application/vnd.oasis.opendocument.text',
		'application/vnd.oasis.opendocument.spreadsheet',
		'application/vnd.oasis.opendocument.presentation',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		'application/zip',
		'application/x-tar',
		'application/x-rar-compressed',
		'application/gzip',
		'application/x-bzip2',
		'application/x-7z-compressed',
		'application/x-apple-diskimage',
		'application/x-apache-arrow',
		'video/mp4',
		'audio/midi',
		'video/x-matroska',
		'video/webm',
		'video/quicktime',
		'video/vnd.avi',
		'audio/vnd.wave',
		'audio/qcelp',
		'audio/x-ms-asf',
		'video/x-ms-asf',
		'application/vnd.ms-asf',
		'video/mpeg',
		'video/3gpp',
		'audio/mpeg',
		'audio/mp4', // RFC 4337
		'audio/opus',
		'video/ogg',
		'audio/ogg',
		'application/ogg',
		'audio/x-flac',
		'audio/ape',
		'audio/wavpack',
		'audio/amr',
		'application/pdf',
		'application/x-msdownload',
		'application/x-shockwave-flash',
		'application/rtf',
		'application/wasm',
		'font/woff',
		'font/woff2',
		'application/vnd.ms-fontobject',
		'font/ttf',
		'font/otf',
		'image/x-icon',
		'video/x-flv',
		'application/postscript',
		'application/eps',
		'application/x-xz',
		'application/x-sqlite3',
		'application/x-nintendo-nes-rom',
		'application/x-google-chrome-extension',
		'application/vnd.ms-cab-compressed',
		'application/x-deb',
		'application/x-unix-archive',
		'application/x-rpm',
		'application/x-compress',
		'application/x-lzip',
		'application/x-cfb',
		'application/x-mie',
		'application/mxf',
		'video/mp2t',
		'application/x-blender',
		'image/bpg',
		'image/jp2',
		'image/jpx',
		'image/jpm',
		'image/mj2',
		'audio/aiff',
		'application/xml',
		'application/x-mobipocket-ebook',
		'image/heif',
		'image/heif-sequence',
		'image/heic',
		'image/heic-sequence',
		'image/icns',
		'image/ktx',
		'application/dicom',
		'audio/x-musepack',
		'text/calendar',
		'text/vcard',
		'model/gltf-binary',
		'application/vnd.tcpdump.pcap',
		'audio/x-dsf', // Non-standard
		'application/x.ms.shortcut', // Invented by us
		'application/x.apple.alias', // Invented by us
		'audio/x-voc',
		'audio/vnd.dolby.dd-raw',
		'audio/x-m4a',
		'image/apng',
		'image/x-olympus-orf',
		'image/x-sony-arw',
		'image/x-adobe-dng',
		'image/x-nikon-nef',
		'image/x-panasonic-rw2',
		'image/x-fujifilm-raf',
		'video/x-m4v',
		'video/3gpp2',
		'application/x-esri-shape',
		'audio/aac',
		'audio/x-it',
		'audio/x-s3m',
		'audio/x-xm',
		'video/MP1S',
		'video/MP2P',
		'application/vnd.sketchup.skp',
		'image/avif',
		'application/x-lzh-compressed',
		'application/pgp-encrypted',
		'application/x-asar',
		'model/stl',
		'application/vnd.ms-htmlhelp',
		'model/3mf',
		'image/jxl',
		'application/zstd'
	]
};


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
const http_exception_filter_1 = __webpack_require__(93);
const config_service_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(11);
const shared_module_1 = __webpack_require__(5);
const core_1 = __webpack_require__(94);
const platform_express_1 = __webpack_require__(86);
const rateLimit = __webpack_require__(95);
const helmet = __webpack_require__(96);
const common_1 = __webpack_require__(3);
const setup_1 = __webpack_require__(97);
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