import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const testSignupHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body as string);

  console.log(body);

  return {
    statusCode: 200,
    body: "Gave good!",
  };
};

export default testSignupHandler;
