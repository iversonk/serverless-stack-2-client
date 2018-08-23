const dev = {
   STRIPE_KEY: "pk_test_2WoGmjw3d5Dblirog7NS91oY",
   s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-4jjl3ur7hsss"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://tbo7k8fqwg.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_3ByJLz190",
    APP_CLIENT_ID: "6pk7rb34g337289s7nke8sp5n1",
    IDENTITY_POOL_ID: "us-west-2:64421279-0f5b-4ef0-b634-95fd758ac71a"
  },

};

const prod = {
 STRIPE_KEY: "pk_test_2WoGmjw3d5Dblirog7NS91oY",
 s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1l0lecz209egg"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://oed27i1vuk.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_Zod25kJAP",
    APP_CLIENT_ID: "2rs4nul0668qphtav15mshoqnp",
    IDENTITY_POOL_ID: "us-west-2:1c5f4185-406e-4c19-b187-96da5c5a09e3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
