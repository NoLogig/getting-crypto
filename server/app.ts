import * as express from "express";

import * as cors from "cors";
import { join, dirname } from "path";
import { json, urlencoded } from "body-parser";

import * as logger from 'morgan';
import * as errorHandler from "errorhandler";

// Database
import { Db } from "mongodb";
import { database, dbCtrl } from "./mongoDB/index";

// Application Configure Objects
import * as appConfig from "./config";

// Routers
import homeRouter from "./routes/home";

// Creates and configures an ExpressJS web server.
export class Server {

  // Reference to Express instance
  public app: express.Application = null;
  // Database variable for later reuse
  public db: Db = null;
  // MongoDataBase Configure Object
  private dbConfig = appConfig.db;
  // CORS Configure Object
  private corsOptions: cors.CorsOptions = appConfig.corsOptions;

  // Run configuration methods on the Express instance
  constructor() {

    this.app = express();
    this.database();

    this.middleware();
    this.routes();

  }

  // Configure DataBase
  private database() {
    // Connect to Database an store for later reuse
    database.connectToDatabase(this.dbConfig, (db) => {
      this.db = db;
    });
  }

  // Configure Express middleware
  private middleware() {

    // Morgan dev logger log every request to the console
    this.app.use(logger('dev'));
    // JSON parser for HTML forms
    this.app.use(json());
    // Query string parser
    this.app.use(urlencoded({ extended: false }));

    // Static paths
    this.app.use(express.static(join(__dirname, "/../client")));
    // Set CORS
    this.app.use(cors(this.corsOptions ));
    // Enable CORS pre-flight
    this.app.options("*", cors(this.corsOptions));
  }

  // Configure Routes and API endpoints
  private routes() {

    this.app.use('/home', homeRouter);

    // // catch 404 and forward to error handler
    // this.app.use((req, res, next) => {
    //   let err = new Error('Not Found');
    //   err['status'] = 404;
    //   next(err);
    // });
    // //  error handlers
    // this.app.use(errorHandler());

  }
}

let server = new Server();
export default server;
