"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_2.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    });
    app.use((req, res, next) => {
        logger.debug('Incoming request:');
        logger.debug({
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: req.body,
        });
        next();
    });
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    app.enableCors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Intuifit API')
        .setDescription('The Intuifit API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = process.env.PORT || 3001;
    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
    logger.log(`Swagger documentation is available at: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map