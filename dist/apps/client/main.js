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
const auth_module_1 = __webpack_require__(64);
const mongoose_1 = __webpack_require__(19);
const setup_1 = __webpack_require__(78);
const user_module_1 = __webpack_require__(59);
const set_of_questions_module_1 = __webpack_require__(79);
const socket_module_1 = __webpack_require__(86);
const up_load_file_module_1 = __webpack_require__(99);
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
        return 'App run success v4';
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
const class_controller_1 = __webpack_require__(54);
const mongoose_1 = __webpack_require__(19);
const class_entity_1 = __webpack_require__(46);
const user_service_1 = __webpack_require__(47);
const user_module_1 = __webpack_require__(59);
const user_entity_1 = __webpack_require__(18);
const memberClass_service_1 = __webpack_require__(52);
const memberClass_entity_1 = __webpack_require__(53);
const upLoadFile_entity_1 = __webpack_require__(51);
const up_load_file_service_1 = __webpack_require__(49);
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
var _a, _b, _c, _d, _e, _f;
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
const memberClass_service_1 = __webpack_require__(52);
const errors_exception_1 = __webpack_require__(28);
const mongoose = __webpack_require__(24);
const up_load_file_service_1 = __webpack_require__(49);
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
    async findAllClasses(user, query = { skip: '0', limit: '15' }, host) {
        try {
            const classMember = await this._memberClassService.getClassByUserJoined(user.createdBy);
            const newClasses = await this.findAll({ $or: [{ createdBy: user.createdBy }, { _id: { $in: classMember } }] }, query);
            const classes = this.cvtJSON(newClasses);
            const result = [];
            for (const c of classes) {
                const u = await this._userService.findOne({ createdBy: c.createdBy });
                const obj = Object.assign({}, c);
                if (!(c.image === '')) {
                    const image = await this._uploadFileService.findById(c.image);
                    if (image)
                        obj.image = image.path;
                }
                if (u) {
                    const objUser = Object.assign({}, this.cvtJSON(u));
                    if (!(u.image === '')) {
                        const image = await this._uploadFileService.findById(u.image);
                        if (image)
                            objUser.image = image.path;
                    }
                    obj.member = await this._memberClassService.getMemberByClass(obj._id);
                    obj.createdBy = objUser;
                }
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
    __param(5, mongoose_1.InjectConnection()),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof memberClass_service_1.MemberClassService !== "undefined" && memberClass_service_1.MemberClassService) === "function" ? _d : Object, typeof (_e = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _e : Object, typeof (_f = typeof mongoose !== "undefined" && mongoose.Connection) === "function" ? _f : Object])
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const logger_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const respone_service_1 = __webpack_require__(48);
const mongoose_2 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(18);
const up_load_file_service_1 = __webpack_require__(49);
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
                return user;
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
    async updateAvatar(id, payload) {
        try {
            const obj = Object.assign({}, payload);
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
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _c : Object])
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
exports.UpLoadFileService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const errors_exception_1 = __webpack_require__(28);
const user_not_found_exception_1 = __webpack_require__(50);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const upLoadFile_entity_1 = __webpack_require__(51);
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
/* 50 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberClassService = void 0;
const memberClass_entity_1 = __webpack_require__(53);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const logger_service_1 = __webpack_require__(11);
const baseService_service_1 = __webpack_require__(23);
const typegoose_1 = __webpack_require__(22);
const status_enum_1 = __webpack_require__(35);
const user_service_1 = __webpack_require__(47);
const errors_exception_1 = __webpack_require__(28);
const user_not_found_exception_1 = __webpack_require__(50);
let MemberClassService = class MemberClassService extends baseService_service_1.BaseService {
    constructor(_memberClassModel, _loggerService, _userService) {
        super();
        this._memberClassModel = _memberClassModel;
        this._loggerService = _loggerService;
        this._userService = _userService;
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
        try {
            const obj = {
                idClass: idClass,
                status: status,
            };
            const memberClass = await this._model.find(obj).lean();
            if (memberClass.length > 0) {
                const results = await Promise.all(memberClass.map(async (e) => {
                    try {
                        return {
                            user: await this._userService.findByIdAndImage(e.idUser),
                            role: e.role,
                        };
                    }
                    catch (e) {
                        return e.id;
                    }
                }));
                return this.cvtJSON(results);
            }
            return [];
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
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object])
], MemberClassService);
exports.MemberClassService = MemberClassService;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassController = void 0;
const common_1 = __webpack_require__(3);
const class_service_1 = __webpack_require__(45);
const create_class_dto_1 = __webpack_require__(55);
const baseController_1 = __webpack_require__(29);
const logger_service_1 = __webpack_require__(11);
const jwt_auth_guard_1 = __webpack_require__(16);
const user_decorator_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(18);
const resource_exception_1 = __webpack_require__(20);
const status_enum_1 = __webpack_require__(35);
const errors_exception_1 = __webpack_require__(28);
const query_dto_1 = __webpack_require__(56);
const req_dto_1 = __webpack_require__(57);
const host_decorator_1 = __webpack_require__(58);
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
    async updateImage(user, query, updateClassDto) {
        try {
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
    async findAll(host, user) {
        try {
            console.log(host);
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
    common_1.Patch('image'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Query()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object, Object, typeof (_e = typeof req_dto_1.UpdateImageDto !== "undefined" && req_dto_1.UpdateImageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "updateImage", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, host_decorator_1.HostName()),
    __param(1, user_decorator_1.Usr()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "findAll", null);
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
    __metadata("design:paramtypes", [typeof (_o = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _o : Object, typeof (_p = typeof class_service_1.ClassService !== "undefined" && class_service_1.ClassService) === "function" ? _p : Object])
], ClassController);
exports.ClassController = ClassController;


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
exports.UpdateImageDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const up_load_file_service_1 = __webpack_require__(49);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const user_controller_1 = __webpack_require__(60);
const user_entity_1 = __webpack_require__(18);
const user_service_1 = __webpack_require__(47);
const logger_service_1 = __webpack_require__(11);
const upLoadFile_entity_1 = __webpack_require__(51);
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
    })
], UserModule);
exports.UserModule = UserModule;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const user_decorator_1 = __webpack_require__(15);
const baseController_1 = __webpack_require__(29);
const common_1 = __webpack_require__(3);
const query_interface_1 = __webpack_require__(61);
const user_service_1 = __webpack_require__(47);
const logger_service_1 = __webpack_require__(11);
const res_dto_1 = __webpack_require__(62);
const errors_exception_1 = __webpack_require__(28);
const jwt_auth_guard_1 = __webpack_require__(16);
const resource_exception_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(18);
const res_dto_2 = __webpack_require__(63);
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
    async updateAvatar(user, payload) {
        try {
            const result = await this.userService.updateAvatar(user.createdBy, payload);
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
    __metadata("design:paramtypes", [typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object, typeof (_c = typeof res_dto_1.UpdateUserDto !== "undefined" && res_dto_1.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Patch('avatar'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.Usr()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object, typeof (_e = typeof res_dto_2.UpdateAvatarDto !== "undefined" && res_dto_2.UpdateAvatarDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAvatar", null);
UserController = __decorate([
    common_1.Controller('api/user'),
    __metadata("design:paramtypes", [typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _f : Object, typeof (_g = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _g : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
exports.UpdateAvatarDto = void 0;
const class_validator_1 = __webpack_require__(31);
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
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const up_load_file_service_1 = __webpack_require__(49);
const auth_service_1 = __webpack_require__(65);
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const local_strategy_1 = __webpack_require__(69);
const configService_module_1 = __webpack_require__(72);
const config_service_1 = __webpack_require__(7);
const setupJwt_1 = __webpack_require__(73);
const jwt_1 = __webpack_require__(67);
const jwt_strategy_1 = __webpack_require__(74);
const auth_entity_1 = __webpack_require__(68);
const auth_controller_1 = __webpack_require__(75);
const logger_service_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(18);
const upLoadFile_entity_1 = __webpack_require__(51);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const mongoose_2 = __webpack_require__(24);
const bcrypt = __webpack_require__(66);
const config_service_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(11);
const respone_service_1 = __webpack_require__(48);
const jwt_1 = __webpack_require__(67);
const auth_entity_1 = __webpack_require__(68);
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
/* 66 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_jwt_1 = __webpack_require__(70);
const passport_local_1 = __webpack_require__(71);
const passport_1 = __webpack_require__(17);
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(65);
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
/* 70 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 72 */
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
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupJWT = void 0;
const configService_module_1 = __webpack_require__(72);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(70);
const passport_1 = __webpack_require__(17);
const common_1 = __webpack_require__(3);
const config_service_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(65);
const up_load_file_service_1 = __webpack_require__(49);
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
        const headers = req.headers;
        const user = await this.authService.validateUser({ id: payload.data });
        if (user) {
            if (!(user.image === '')) {
                const image = await this.uploadFileService.findById(user.image);
                if (image) {
                    const host = headers.host;
                    const api = 'api/up-load-file';
                    const link = `${host}/${api}?id=${image.path}`;
                    user.image = link;
                }
            }
            done(null, user);
        }
        return done(new common_1.UnauthorizedException(), false);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof up_load_file_service_1.UpLoadFileService !== "undefined" && up_load_file_service_1.UpLoadFileService) === "function" ? _c : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const req_dto_1 = __webpack_require__(76);
const req_dto_2 = __webpack_require__(77);
const logger_service_1 = __webpack_require__(11);
const baseController_1 = __webpack_require__(29);
const jwt_auth_guard_1 = __webpack_require__(16);
const auth_service_1 = __webpack_require__(65);
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
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupMongoDb = void 0;
const configService_module_1 = __webpack_require__(72);
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
/* 79 */
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
const setOfQuestions_controller_1 = __webpack_require__(80);
const setOfQuestions_service_1 = __webpack_require__(81);
const setOfQuestions_entity_1 = __webpack_require__(82);
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
const setOfQuestions_service_1 = __webpack_require__(81);
const baseController_1 = __webpack_require__(29);
const resource_exception_1 = __webpack_require__(20);
const errors_exception_1 = __webpack_require__(28);
const user_entity_1 = __webpack_require__(18);
const req_dto_1 = __webpack_require__(83);
const req_dto_2 = __webpack_require__(84);
const query_dto_1 = __webpack_require__(85);
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
const setOfQuestions_entity_1 = __webpack_require__(82);
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
/* 82 */
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
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketModule = void 0;
const auth_service_1 = __webpack_require__(65);
const user_entity_1 = __webpack_require__(18);
const setOfQuestions_entity_1 = __webpack_require__(82);
const setOfQuestions_service_1 = __webpack_require__(81);
const common_1 = __webpack_require__(3);
const socket_gateway_1 = __webpack_require__(87);
const mongoose_1 = __webpack_require__(19);
const question_entity_1 = __webpack_require__(25);
const question_service_1 = __webpack_require__(21);
const userSocket_service_1 = __webpack_require__(95);
const userSocket_entity_1 = __webpack_require__(96);
const userScoreQuizSocket_entity_1 = __webpack_require__(94);
const userScoreQuizSocket_service_1 = __webpack_require__(93);
const userHostSocket_service_1 = __webpack_require__(91);
const userHostSocket_entity_1 = __webpack_require__(92);
const user_service_1 = __webpack_require__(47);
const user_entity_2 = __webpack_require__(18);
const upLoadFile_entity_1 = __webpack_require__(51);
const logger_service_1 = __webpack_require__(11);
const up_load_file_service_1 = __webpack_require__(49);
const socket_wsJwtGuard_1 = __webpack_require__(98);
const auth_entity_1 = __webpack_require__(68);
const configService_module_1 = __webpack_require__(72);
const jwt_1 = __webpack_require__(67);
const setupJwt_1 = __webpack_require__(73);
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
        ],
    })
], SocketModule);
exports.SocketModule = SocketModule;


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGateway = void 0;
const socket_events_1 = __webpack_require__(88);
const websockets_1 = __webpack_require__(89);
const common_1 = __webpack_require__(3);
const socket_io_1 = __webpack_require__(90);
const setOfQuestions_service_1 = __webpack_require__(81);
const question_service_1 = __webpack_require__(21);
const userHostSocket_service_1 = __webpack_require__(91);
const userScoreQuizSocket_service_1 = __webpack_require__(93);
const userSocket_service_1 = __webpack_require__(95);
const random_1 = __webpack_require__(97);
const socket_wsJwtGuard_1 = __webpack_require__(98);
let AppGateway = class AppGateway {
    constructor(_questionService, _userHostSocketService, _userScoreQuizSocketService, _userMemberSocketService, _setOfQuestionsService) {
        this._questionService = _questionService;
        this._userHostSocketService = _userHostSocketService;
        this._userScoreQuizSocketService = _userScoreQuizSocketService;
        this._userMemberSocketService = _userMemberSocketService;
        this._setOfQuestionsService = _setOfQuestionsService;
        this.logger = new common_1.Logger('AppGateway');
    }
    async handleCreate1Room(client, payload) {
        console.log(client.id);
        this.server.emit('abc', {
            msg: 'Create Room Quiz Success',
            idRoom: client.id,
        });
    }
    async handleCreateRoom(client, payload) {
        const idRoom = random_1.RandomFunc();
        client.join(idRoom);
        console.log(client.id);
        const questions = await this._questionService.findAll({
            idSetOfQuestions: payload.idSetOfQuestions,
        });
        const mapIdQuestions = questions.map((e) => e._id);
        const userHostSocket = await this._userHostSocketService.createUserHostSocket({
            idRoom: idRoom,
            host: client.id,
            questions: mapIdQuestions,
        });
        if (userHostSocket) {
            this.server.emit(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_SSC, {
                msg: 'Create Room Quiz Success',
                idRoom: idRoom,
            });
        }
        else {
            this.server.emit(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_SSC, {
                msg: 'Create Room Quiz Fail',
                idRoom: null,
            });
        }
    }
    async handleJoinRoom(client, payload) {
        client.join(payload.idRoom);
        console.log(client.id);
        const newMember = await this._userMemberSocketService.createMemberSocket({
            idRoom: payload.idRoom,
            userId: client.id,
        });
        if (newMember) {
            this.server.emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
                msg: 'Join Room Quiz Success',
                user: newMember,
            });
            return;
        }
        this.server.emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
            msg: 'Join Room Quiz False',
            user: null,
        });
        return;
    }
    async handleStartQuiz(client, payload) {
        const host = await this._userHostSocketService.findOne({
            idRoom: payload.idRoom,
            host: client.id,
        });
        if (host) {
            const startGame = await this._userHostSocketService.findOneAndUpdate({ _id: host._id }, { play: true });
            if (startGame) {
                client.broadcast.to(host.idRoom).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
                    msg: 'Start Game Success',
                    data: startGame,
                });
            }
            client.broadcast.to(host.idRoom).emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
                msg: 'Fail Game Success',
                data: startGame,
            });
        }
        this.server.emit(socket_events_1.SOCKET_EVENT.JOIN_ROOM_SSC, {
            msg: 'Dont find host start game',
            data: null,
        });
    }
    handleLeaveRoom(client, payload) {
        this.server.emit(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_SSC, payload);
    }
    handleStatistQuiz(client, payload) {
        this.server.emit(socket_events_1.SOCKET_EVENT.STATISTICAL_ROOM_SSC, payload);
    }
    handleAnswerTheQuestion(client, payload) {
        this.server.emit(socket_events_1.SOCKET_EVENT.ANSWER_THE_QUESTION_SSC, payload);
    }
    handleTakeTheQuestion(client, payload) {
        this.server.emit(socket_events_1.SOCKET_EVENT.TAKE_THE_QUESTION_SSC, payload);
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
    common_1.UseGuards(socket_wsJwtGuard_1.WsJwtGuard),
    websockets_1.SubscribeMessage('acb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppGateway.prototype, "handleCreate1Room", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.CREATE_QUIZ_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AppGateway.prototype, "handleCreateRoom", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.JOIN_ROOM_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AppGateway.prototype, "handleJoinRoom", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.START_QUIZ_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AppGateway.prototype, "handleStartQuiz", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.LEAVE_ROOM_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _k : Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleLeaveRoom", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.ANSWER_THE_QUESTION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _l : Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleAnswerTheQuestion", null);
__decorate([
    websockets_1.SubscribeMessage(socket_events_1.SOCKET_EVENT.TAKE_THE_QUESTION_CSS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _m : Object, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleTakeTheQuestion", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway({ cors: true }),
    __metadata("design:paramtypes", [typeof (_o = typeof question_service_1.QuestionService !== "undefined" && question_service_1.QuestionService) === "function" ? _o : Object, typeof (_p = typeof userHostSocket_service_1.UserHostSocketService !== "undefined" && userHostSocket_service_1.UserHostSocketService) === "function" ? _p : Object, typeof (_q = typeof userScoreQuizSocket_service_1.UserScoreQuizSocketService !== "undefined" && userScoreQuizSocket_service_1.UserScoreQuizSocketService) === "function" ? _q : Object, typeof (_r = typeof userSocket_service_1.UserMemberSocketService !== "undefined" && userSocket_service_1.UserMemberSocketService) === "function" ? _r : Object, typeof (_s = typeof setOfQuestions_service_1.SetOfQuestionsService !== "undefined" && setOfQuestions_service_1.SetOfQuestionsService) === "function" ? _s : Object])
], AppGateway);
exports.AppGateway = AppGateway;


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOCKET_EVENT = void 0;
var SOCKET_EVENT;
(function (SOCKET_EVENT) {
    SOCKET_EVENT["CREATE_QUIZ_CSS"] = "CREATE_QUIZ_CSS";
    SOCKET_EVENT["CREATE_QUIZ_SSC"] = "CREATE_QUIZ_SSC";
    SOCKET_EVENT["JOIN_ROOM_CSS"] = "JOIN_ROOM_CSS";
    SOCKET_EVENT["JOIN_ROOM_SSC"] = "JOIN_ROOM_SSC";
    SOCKET_EVENT["LEAVE_ROOM_CSS"] = "LEAVE_ROOM_CSS";
    SOCKET_EVENT["LEAVE_ROOM_SSC"] = "LEAVE_ROOM_SSC";
    SOCKET_EVENT["STATISTICAL_ROOM_SSC"] = "STATISTICAL_ROOM_SSC";
    SOCKET_EVENT["START_QUIZ_CSS"] = "START_QUIZ_CSS";
    SOCKET_EVENT["START_QUIZ_SSC"] = "START_QUIZ_SSC";
    SOCKET_EVENT["ANSWER_THE_QUESTION_CSS"] = "ANSWER_THE_QUESTION_CSS";
    SOCKET_EVENT["ANSWER_THE_QUESTION_SSC"] = "ANSWER_THE_QUESTION_SSC";
    SOCKET_EVENT["TAKE_THE_QUESTION_CSS"] = "TAKE_THE_QUESTION_CSS";
    SOCKET_EVENT["TAKE_THE_QUESTION_SSC"] = "TAKE_THE_QUESTION_SSC";
})(SOCKET_EVENT = exports.SOCKET_EVENT || (exports.SOCKET_EVENT = {}));


/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 90 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 91 */
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
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const userHostSocket_entity_1 = __webpack_require__(92);
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
};
UserHostSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userHostSocket_entity_1.UserHostSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserHostSocketService);
exports.UserHostSocketService = UserHostSocketService;


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
var UserHostSocket_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserHostSocket = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
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
    typegoose_1.prop({ default: [] }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], UserHostSocket.prototype, "questions", void 0);
__decorate([
    typegoose_1.prop({ default: -1 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UserHostSocket.prototype, "currentQuestion", void 0);
UserHostSocket = UserHostSocket_1 = __decorate([
    typegoose_1.index({ idRoom: 1, host: 1 }, { unique: true })
], UserHostSocket);
exports.UserHostSocket = UserHostSocket;


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserScoreQuizSocketService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const userScoreQuizSocket_entity_1 = __webpack_require__(94);
let UserScoreQuizSocketService = class UserScoreQuizSocketService extends baseService_service_1.BaseService {
    constructor(_userScoreQuizSocket, _loggerService) {
        super();
        this._userScoreQuizSocket = _userScoreQuizSocket;
        this._loggerService = _loggerService;
        this._model = _userScoreQuizSocket;
    }
};
UserScoreQuizSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userScoreQuizSocket_entity_1.UserScoreQuizSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserScoreQuizSocketService);
exports.UserScoreQuizSocketService = UserScoreQuizSocketService;


/***/ }),
/* 94 */
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
const baseModel_entity_1 = __webpack_require__(26);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
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
    typegoose_1.prop({ default: 0 }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], UserScoreQuizSocket.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ default: '' }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], UserScoreQuizSocket.prototype, "question", void 0);
exports.UserScoreQuizSocket = UserScoreQuizSocket;


/***/ }),
/* 95 */
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
const mongoose_1 = __webpack_require__(19);
const baseService_service_1 = __webpack_require__(23);
const logger_service_1 = __webpack_require__(11);
const typegoose_1 = __webpack_require__(22);
const userSocket_entity_1 = __webpack_require__(96);
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
};
UserMemberSocketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(userSocket_entity_1.UserMemberSocket.modelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _b : Object])
], UserMemberSocketService);
exports.UserMemberSocketService = UserMemberSocketService;


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
var UserMemberSocket_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMemberSocket = void 0;
const baseModel_entity_1 = __webpack_require__(26);
const baseModel_entity_2 = __webpack_require__(26);
const class_transformer_1 = __webpack_require__(27);
const typegoose_1 = __webpack_require__(22);
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
UserMemberSocket = UserMemberSocket_1 = __decorate([
    typegoose_1.index({ idRoom: 1, userId: 1 }, { unique: true })
], UserMemberSocket);
exports.UserMemberSocket = UserMemberSocket;


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RandomFunc = void 0;
const RandomFunc = () => (Math.random() + 1).toString(36).substring(4).toUpperCase();
exports.RandomFunc = RandomFunc;


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WsJwtGuard = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(67);
const websockets_1 = __webpack_require__(89);
const auth_service_1 = __webpack_require__(65);
let WsJwtGuard = class WsJwtGuard {
    constructor(authService, jwt) {
        this.authService = authService;
        this.jwt = jwt;
    }
    async canActivate(context) {
        var _a, _b;
        try {
            const client = context.switchToWs().getClient();
            console.log(`LHA:  ===> file: socket.wsJwtGuard.ts ===> line 16 ===> client`, client);
            const authToken = (_b = (_a = client.handshake) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.token;
            console.log(`LHA:  ===> file: socket.wsJwtGuard.ts ===> line 21 ===> authToken`, authToken);
            const encodeJWT = await this.jwt.verifyAsync(authToken);
            console.log(`LHA:  ===> file: socket.wsJwtGuard.ts ===> line 30 ===> abc`, encodeJWT);
            const user = await this.authService.validateUser(encodeJWT.data);
            console.log(user);
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
/* 99 */
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
const up_load_file_controller_1 = __webpack_require__(100);
const upLoadFile_entity_1 = __webpack_require__(51);
const up_load_file_service_1 = __webpack_require__(49);
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
/* 100 */
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
const platform_express_1 = __webpack_require__(101);
const common_1 = __webpack_require__(3);
const multer_1 = __webpack_require__(102);
const path_1 = __webpack_require__(103);
const fs = __webpack_require__(104);
const FileType = __webpack_require__(105);
const logger_service_1 = __webpack_require__(11);
const up_load_file_service_1 = __webpack_require__(49);
const errors_exception_1 = __webpack_require__(28);
const jwt_auth_guard_1 = __webpack_require__(16);
const blurHash_1 = __webpack_require__(106);
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
/* 101 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 102 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 104 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 105 */
/***/ ((module) => {

module.exports = require("file-type");

/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeImageToBlurhash = void 0;
const sharp = __webpack_require__(107);
const blurhash_1 = __webpack_require__(108);
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
/* 107 */
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),
/* 108 */
/***/ ((module) => {

module.exports = require("blurhash");

/***/ }),
/* 109 */
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
/* 110 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 111 */
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),
/* 112 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupSwagger = void 0;
const swagger_1 = __webpack_require__(114);
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
/* 114 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisIoAdapter = void 0;
const platform_socket_io_1 = __webpack_require__(116);
const redis_1 = __webpack_require__(117);
const socket_io_redis_1 = __webpack_require__(118);
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
/* 116 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("redis");

/***/ }),
/* 118 */
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
const http_exception_filter_1 = __webpack_require__(109);
const config_service_1 = __webpack_require__(7);
const logger_service_1 = __webpack_require__(11);
const shared_module_1 = __webpack_require__(5);
const core_1 = __webpack_require__(110);
const platform_express_1 = __webpack_require__(101);
const rateLimit = __webpack_require__(111);
const helmet = __webpack_require__(112);
const common_1 = __webpack_require__(3);
const setup_1 = __webpack_require__(113);
const RedisIoAdapter_1 = __webpack_require__(115);
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