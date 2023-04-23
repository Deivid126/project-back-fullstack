import swaggerJSDoc, {SwaggerDefinition} from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    info: {
        title: 'API de Carrinhos',
        version: '1.0.0',
        description: 'Documentação da API de Carrinhos',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['./src/controllers/CartController.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
