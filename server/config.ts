export const serverPort = 4300;
export const secret = "RbBQqA6uF#msRF8s7h*?@=95HUm&DgMDd6zLFn4XzWQ6dtwXSJwBX#?gL2JWf!";
export const length = 128;
export const digest = "sha256";
export const apiUrl = "https://getting-crypto.herokuapp.com/";
export const dbConnectionString = "mongodb://29149/nologig-db"; // looks like mongodb://<user>:<pass>@ds129143.mlab.com:27017/no-logig

export const db = {
  host: "ds129143.mlab.com",
  dbuser: "Guest",
  dbpassword: "Guest!",
  port: 29143,
  dbname: "nologig-db",
  testsMayDropDb: false
};

export const authConfig = {

  'facebookAuth': {
    'clientID': 'your-secret-clientID-here', // your App ID
    'clientSecret': 'your-client-secret-here', // your App Secret
    'callbackURL': 'http://localhost:8080/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
  },
  'twitterAuth': {
    'consumerKey': 'your-consumer-key-here',
    'consumerSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },
  'googleAuth': {
    'clientID': 'your-secret-clientID-here',
    'clientSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  }
};

export const corsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "https://getting-crypto.herokuapp.com/",
  preflightContinue: false
};
