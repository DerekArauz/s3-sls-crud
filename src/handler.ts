import { APIGatewayProxyHandler} from 'aws-lambda';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';

//Función test que será ejecutada dentro de middy
const baseHello: APIGatewayProxyHandler = async (event, _context) => {
    return{
        statusCode: 200,
        body: JSON.stringify({
            message: 'TEST S3',
            input: event,
        }),
    };
};

//Encubrir la función con middy, aplicar middlew3are para parsear el json
export const hello = middy(baseHello)
    .use(httpJsonBodyParser());