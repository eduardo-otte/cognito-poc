import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CognitoIdentityServiceProvider } from "aws-sdk";

export const createUserHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const parsedBody = JSON.parse(event.body as string);
  const email = parsedBody["email"];
  const password = parsedBody["password"];

  console.log(`Username: ${email}`);
  console.log(`Password: ${password}`);

  const cognito = new CognitoIdentityServiceProvider();

  const result = await cognito
    .signUp({
      ClientId: "rs4pf5j8gpcasruib5fskh24k",
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
      ],
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.$response.data),
  };
};
