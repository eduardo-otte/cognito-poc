import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CognitoIdentityServiceProvider } from "aws-sdk";

export const loginUserHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const parsedBody = JSON.parse(event.body as string);
  const email = parsedBody["email"];
  const password = parsedBody["password"];

  console.log(`Username: ${email}`);
  console.log(`Password: ${password}`);

  const cognito = new CognitoIdentityServiceProvider();

  try {
    const result = await cognito
      .initiateAuth({
        ClientId: "rs4pf5j8gpcasruib5fskh24k",
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      })
      .promise();

    console.log(result.$response);
    console.log(result.AuthenticationResult);

    const accessToken = result.AuthenticationResult?.AccessToken;
    const idToken = result.AuthenticationResult?.IdToken;
    const refreshToken = result.AuthenticationResult?.RefreshToken;

    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken,
        idToken,
        refreshToken,
      }),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
