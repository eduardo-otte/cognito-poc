# cognito-poc
Proof-of-concept of AWS Cognito's signup and auth APIs.

# Getting started
Install dependencies with `yarn`.

Run an offline version of the project with `yarn start`. Serverless doesn't support Cognito authorizers in offline mode, but this command is still useful to check if your project is building correctly.

Deploy to AWS with `sls deploy`.

It is necessary to create a Cognito User Pool and an App Client beforehand. Replace all IDs in the project as needed.
