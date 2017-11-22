export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-lwvvna2p2mfn"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://2pgfo7u35g.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ikoOcpaAh",
    APP_CLIENT_ID: "48qfghiujcajn5en3iniedi0bg",
    IDENTITY_POOL_ID: "us-west-2:3c1f437b-6ea6-41a5-8531-844691662e49"
  }
};
