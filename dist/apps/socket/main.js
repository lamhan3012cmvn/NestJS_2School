/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 3 */
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
const common_1 = __webpack_require__(4);
const winston = __webpack_require__(5);
const config_service_1 = __webpack_require__(6);
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
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const dotenv = __webpack_require__(7);
const winston = __webpack_require__(5);
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
/* 7 */
/***/ ((module) => {

module.exports = require("dotenv");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(4);
const axios_1 = __webpack_require__(10);
const config_service_1 = __webpack_require__(6);
const logger_service_1 = __webpack_require__(3);
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
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

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
exports.SocketModule = void 0;
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(12);
const terminus_1 = __webpack_require__(13);
const socket_wsJwtGuard_1 = __webpack_require__(14);
const configService_module_1 = __webpack_require__(16);
const setupJwt_1 = __webpack_require__(17);
const shared_module_1 = __webpack_require__(9);
const socket_controller_1 = __webpack_require__(18);
const socket_service_1 = __webpack_require__(19);
const message_module_1 = __webpack_require__(20);
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            terminus_1.TerminusModule,
            configService_module_1.ConfigModule,
            jwt_1.JwtModule.registerAsync(setupJwt_1.setupJWT('JWT_SECRET')),
            message_module_1.MessageModule,
        ],
        controllers: [socket_controller_1.SocketController],
        providers: [socket_service_1.SocketService, socket_wsJwtGuard_1.WsJwtGuard],
    })
], SocketModule);
exports.SocketModule = SocketModule;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WsJwtGuard = void 0;
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(12);
const websockets_1 = __webpack_require__(15);
let WsJwtGuard = class WsJwtGuard {
    constructor(jwt) {
        this.jwt = jwt;
    }
    async canActivate(context) {
        var _a, _b;
        try {
            const client = context.switchToWs().getClient();
            const authToken = (_b = (_a = client.handshake) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.authorization;
            const encodeJWT = await this.jwt.verifyAsync(authToken);
            return Boolean(true);
        }
        catch (err) {
            throw new websockets_1.WsException(err.message);
        }
    }
};
WsJwtGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], WsJwtGuard);
exports.WsJwtGuard = WsJwtGuard;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

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
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(4);
const config_service_1 = __webpack_require__(6);
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
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupJWT = void 0;
const configService_module_1 = __webpack_require__(16);
const config_service_1 = __webpack_require__(6);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketController = void 0;
const common_1 = __webpack_require__(4);
const socket_service_1 = __webpack_require__(19);
let SocketController = class SocketController {
    constructor(socketService) {
        this.socketService = socketService;
    }
    getHello() {
        return this.socketService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SocketController.prototype, "getHello", null);
SocketController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" ? _a : Object])
], SocketController);
exports.SocketController = SocketController;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocketService = void 0;
const common_1 = __webpack_require__(4);
let SocketService = class SocketService {
    getHello() {
        return 'Hello World!';
    }
};
SocketService = __decorate([
    common_1.Injectable()
], SocketService);
exports.SocketService = SocketService;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(12);
const terminus_1 = __webpack_require__(13);
const socket_wsJwtGuard_1 = __webpack_require__(14);
const configService_module_1 = __webpack_require__(16);
const setupJwt_1 = __webpack_require__(17);
const shared_module_1 = __webpack_require__(9);
const message_socket_1 = __webpack_require__(21);
const axios_1 = __webpack_require__(10);
const message_service_1 = __webpack_require__(24);
const logger_service_1 = __webpack_require__(3);
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    common_1.Module({
        imports: [
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),
            shared_module_1.SharedModule,
            terminus_1.TerminusModule,
            configService_module_1.ConfigModule,
            jwt_1.JwtModule.registerAsync(setupJwt_1.setupJWT('JWT_SECRET')),
        ],
        providers: [message_service_1.MessageService, message_socket_1.MessageSocket, logger_service_1.LoggerService, socket_wsJwtGuard_1.WsJwtGuard],
    })
], MessageModule);
exports.MessageModule = MessageModule;


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageSocket = void 0;
const common_1 = __webpack_require__(4);
const websockets_1 = __webpack_require__(15);
const socket_io_1 = __webpack_require__(22);
const message_event_1 = __webpack_require__(23);
const message_service_1 = __webpack_require__(24);
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
                client.emit(message_event_1.MESSAGE_EVENT.SEEN_MESSAGE_CONVERSATION_SSC, res.data);
            });
            return;
        }
        client.to(client.id).emit(message_event_1.MESSAGE_EVENT.SEEN_MESSAGE_CONVERSATION_SSC, {
            message: 'get message fail',
            data: null,
        });
    }
    async handleOnJoinRoomConversation(client, payload) {
        console.log('JOIN_CONVERSATION_SSC', payload);
        client.join(payload.idConversation);
        client.emit(message_event_1.MESSAGE_EVENT.JOIN_CONVERSATION_SSC, payload);
    }
    async handleOnLeaveRoom(client, payload) {
        console.log('LEAVE_CONVERSATION_SSC', payload);
        client.leave(payload.conversationId);
        client.emit(message_event_1.MESSAGE_EVENT.LEAVE_CONVERSATION_SSC, payload);
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
/* 22 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MESSAGE_EVENT = void 0;
var MESSAGE_EVENT;
(function (MESSAGE_EVENT) {
    MESSAGE_EVENT["SEEN_MESSAGE_CONVERSATION_SSC"] = "SEEN_MESSAGE_CONVERSATION_SSC";
    MESSAGE_EVENT["SEEN_MESSAGE_CONVERSATION_CSS"] = "SEEN_MESSAGE_CONVERSATION_CSS";
    MESSAGE_EVENT["JOIN_CONVERSATION_SSC"] = "JOIN_CONVERSATION_SSC";
    MESSAGE_EVENT["JOIN_CONVERSATION_CSS"] = "JOIN_CONVERSATION_CSS";
    MESSAGE_EVENT["LEAVE_CONVERSATION_SSC"] = "LEAVE_CONVERSATION_SSC";
    MESSAGE_EVENT["LEAVE_CONVERSATION_CSS"] = "LEAVE_CONVERSATION_CSS";
})(MESSAGE_EVENT = exports.MESSAGE_EVENT || (exports.MESSAGE_EVENT = {}));


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
const axios_1 = __webpack_require__(10);
const common_1 = __webpack_require__(4);
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
/* 25 */
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisIoAdapter = void 0;
const platform_socket_io_1 = __webpack_require__(28);
const redis_1 = __webpack_require__(29);
const socket_io_redis_1 = __webpack_require__(30);
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
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("redis");

/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("socket.io-redis");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(3);
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
const core_1 = __webpack_require__(1);
const platform_express_1 = __webpack_require__(2);
const logger_service_1 = __webpack_require__(3);
const shared_module_1 = __webpack_require__(9);
const socket_module_1 = __webpack_require__(11);
const rateLimit = __webpack_require__(25);
const helmet = __webpack_require__(26);
const RedisIoAdapter_1 = __webpack_require__(27);
const common_1 = __webpack_require__(4);
const http_exception_filter_1 = __webpack_require__(31);
const config_service_1 = __webpack_require__(6);
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(socket_module_1.SocketModule, new platform_express_1.ExpressAdapter(), {
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
        const port = configService.getNumber('PORT_SOCKET') || 3000;
        const host = configService.get('HOST_SOCKET') || '127.0.0.1';
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