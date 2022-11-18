# MyWebApp1
 Postgresql-Express-React-Nodejs (PERN) Stack Example!

 How To Develop and Build PERN Stack
A step by step guide with an example project

There are so many ways we can build React apps and ship them for production. One way is to build the React app with NodeJS and PostgreSQL as a database. There are four things that make this stack popular and you can write everything in Javascript. The four things are PostgreSQL, React, Express, and NodeJS. This stack can be used for a lot of uses cases in web development.

The entire frontend is written in React and we are using PostgreSQL as a document database. The express and NodeJS are used for the middle layer. In this post, we will see the details and implementation of the PERN Stack. We will go through step by step with an example project.

Introduction
Prerequisites
Example Project
Project Structure
Install PostgreSQL on Local Machine
Install PGAdmin Tool
Create a Database Table
Building API
Configure PostgreSQL In API
Externalize the Environment Variables
Building UI
Make API Calls From UI
Development Environment Setup
Running on Docker Compose
Dockerize PERN Stack
Linting
Unit Testing API
Unit Testing UI
Integration Tests
Build for production
Demo
Summary
Conclusion

Introduction
As we said earlier, PERN Stack uses four technologies such as PostgreSQL, Express, React, and NodeJS. React is a javascript library for building web apps and it doesn’t load itself in the browser. We need some kind of mechanism that loads the index.html (single page) of React application with all the dependencies(CSS and js files) in the browser. In this case, we are using node as the webserver which loads React assets and accepts any API calls from the React UI app.


PERN Stack
If you look at the above diagram all the web requests without the /api will go to React routing and the React Router kicks in and loads components based on the path. All the paths that contain /api will be handled by the Node server itself.

Prerequisites
There are some prerequisites for this post. You need to have a NodeJS installed on your machine and some other tools that are required to complete this project.

NodeJS
Express Framework
PGAdmin
PostgreSQL
Postgresapp
node-postgres
VSCode
Postman
nodemon
dotenv
Create React App
Typescript
react-bootstrap
NodeJS: As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

Express Framework: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

node-postgres: Non-blocking Postgresql Client for NodeJS

PGAdmin: pgAdmin is an Open Source administration and development platform for PostgreSQL

PostgreSQL: Open Source relational Database

VSCode: The editor we are using for the project. It’s open-source and you can download it here.

Postman: Manual testing your APIs

nodemon: To speed up the development

If you are a complete beginner and don’t know how to build from scratch, I would recommend going through the below articles. We used these projects from this article as a basis for this post.

How To Get Started With React

How To Develop and Build React App With NodeJS

How to Build NodeJS REST API with Express and PostgreSQL

How to write production-ready Node.js Rest API — Javascript version

Example Project
Here is an example of a simple tasks application that creates, retrieves, edits, and deletes tasks. We actually run the API on the NodeJS server and you can use PostgreSQL to save all these tasks.


Example Project
As you add users we are making an API call to the nodejs server to store them and get the same data from the server when we retrieve them. You can see network calls in the following video.


Network Calls
Here is a Github link to this project. You can clone it and run it on your machine.

// clone the project
git clone https://github.com/bbachi/pern-stack-example.git
// React Code
cd ui
npm install
npm start
// API code
cd api
npm install
npm run dev
Project Structure
Let’s understand the project structure for this project. We will have two package.json: one for the React and another for nodejs API. It’s always best practice to have completely different node_modules for each one. In this way, you won’t get merging issues or any other problems regarding web and server node modules collision. It’s easier to convert your PERN Stack into any other stack later such as replacing the API code with microservices and serving your UI through the NGINX web server.


Project Structure
If you look at the above project structure, all the React app resides under the ui folder and nodejs API resides under the api folder.

Install PostgreSQL on Local Machine
There are so many ways to install PostgreSQL on your local machine from the below link. The Postgres.app is the easiest and fastest one.

https://www.postgresql.org/download/macosx/
You can click on the Postgres.app and download the app from that page.


Postgres.app
You can go through the below installation steps and initialize the Database.


Download and Install Instructions
If everything is successful, you can see the below screen with the database named after the user name on the machine.


Postgres.app
Install PGAdmin Tool
The pgAdmin tool is the open-source administration and development platform for PostgreSQL. You can install this tool from the following location.

https://www.pgadmin.org/

pgAdmin Tool
Once installed, you can open that and connect to the PostgreSQL server with the following credentials. It changes based on your user name folder.

// name of the server
name: local (You can name anything)
// Hostname
host name: localhost
// User Name
username: <user name based on the above postgres.app>

pgAdmin Tool
Let’s connect to the server by clicking on the register as below.


Register Server
The server name can be anything that you give for your server such as local, dev, test, etc.


Server Name
Let’s give all the details such as HostName, port, username, etc under the connection tab.


Connection Details
Once connected, you can see the details below.


Connected
Create a Database Table
Let’s create a table by clicking on the Query Tool as below.


Query Tool
Let’s run the following query to create the database table.


Creating a Database Table

Table Created
Building API
We have configured PostgreSQL in the previous section, it’s time to build the API. I would recommend you go through two articles posted in the prerequisites section. Let me put those here as well.

How to Build NodeJS REST API with Express and PostgreSQL

How to write production-ready Node.js Rest API — Javascript version

The starting point of the API is the server.js file in which we define all the routes and import the express. Here is the file where the nodejs server runs on port 3080 and starts listening for the incoming requests.


server.js
We have defined 4 routes for CRUD operations. Notice that we are using four different HTTP methods for creating, updating, reading, and deleting operations. The request comes to these routes and each route calls the respective method in the controller class. You can read the body of the incoming requests in the req object defined in each route. The result of these methods is a promise based so you need to use then method to read and send back to the client with the method res.json().

Here is the controller class in which we are calling the service class with async/await. The async/await is the cleaner way of reading promises. You don’t need async/await here since we are directly returning the result of the service class.


Task Controller
Let’s look at the service class in which we call the repository to interact with the PostgreSQL data.


Task Service
You need to know how to configure PostgreSQL Connection in the NodeJS before looking at the repository so that you can read the data from PostgreSQL. Let’s find that out in the following section.

Configure PostgreSQL In API
Let’s configure the pg Client from our application. The first thing we need to do is to get the connection string or connection details. You can get it from the properties below.


Connection Details
The next thing is to install the pg client with the following command.

// install client and sequelize
npm install pg
npm install sequelize
// node-postgres home page
https://node-postgres.com/
Let’s place the connection string and database name in the application properties file as below. You have to URL encode the password if you have any special characters in the password.

Here is the configuration file in which you connect to PostgreSQL with the help of the connection string. We are using pg and sequelize to connect with PostgreSQL for all the queries. These tools make it easy for you to interact with PostgreSQL.


DB Configuration File
The next thing we should define is the schema for the database model as below.


Task Model
Finally, we have a repository class as below using the above model for the CRUD operations.


Task Repository
Externalize the Environment Variables
We have seen how to configure your PostgreSQL connection in the API. We need to store this kind of configuration outside of your app so that you can build once and deploy it in multiple environments with ease.

We need to use the dotenv library for environment-specific things. Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

The first step is to install this library npm install dotenv and put the .env file at the root location of the project


Properties File
We just need to put this line require('dotenv').config() as early as possible in the application code as in the server.js file.


server.js
Let’s define the configuration class where it creates a connection with the connection details from the properties. We are using pg client to connect with PostgreSQL for all the queries. This client makes it easy for you to interact with PostgreSQL. We are fetching the connection details with the dotenv library and connecting it to PostgreSQL with pg client. We are exposing one function from this file connect.

Sequelize is a promise-based NodeJS ORM tool for many relational databases such as Postgres, MYSQL, etc.


Configuration with dotenv
Building UI
Once you create the separate folder for React code you need to start with the following command to scaffold the React structure with the help of React CLI. We will not build the entire app here instead we will go through important points here. You can clone the entire GitHub Repo and check the whole app.

npm create-react-app ui
Here is the index.js file for the app and App Component as the bootstrap component which means this is the first component that loads in the browser.


index.js
Here is the starting point of the application in which we define the Home component to load for the path /. You need to import the react-router-dom library for the routing part of the app. The Home page will be loaded when we start the application.


App.js
Here is the Home component. This is a simple application where you add, update, delete tasks. You can go through the GitHub repo to check the rest of the files. We are using two hooks here one is for maintaining the local state and another is for fetching the data from the API.


Home.js
We have another two important components here one is for the createTask Form component and another is for the Tasks table.


CreateTask and Tasks Components
Run the React code in local with the following command which runs on the port 3000 on localhost. Make sure you are in the root folder of React code which is todo-app here.

cd ui
npm start

React Code running on port 3000
Make API Calls From UI
Here is the service file which calls the API, in this case. We have four API operations to get, add, edit, and delete tasks with root path /api.


TodoService.js
From the react components you can call this service to get the data using React Hooks. Here is an example.


Home Component
You can look at the below article for a detailed post.

How To Make API calls in React Applications

Development Environment Setup
Usually, the way you develop and the way you build and run in production are completely different.

In the development phase, we run the nodejs server and the React app on completely different ports. It’s easier and faster to develop that way. If you look at the following diagram the React app is running on port 3000 with the help of a webpack dev server and the nodejs server is running on port 3080.


Development Environment
There should be some interaction between these two. We can proxy all the API calls to nodejs API. Create-react-app provides some inbuilt functionality and to tell the development server to proxy any unknown requests to your API server in development, add a proxy field to your package.json of the React. Have a look at the package.json below. Remember you need to put this in the React UI package.json file.


package.json
Now you can run both Reac UI and NodeJS API on different ports and the React Code interacts with the API.

// React Code
cd ui
npm install
npm start
// API code
cd api
npm install
npm run dev


Network Calls
Running on Docker Compose
Docker Compose is really useful when we don’t have the development environment setup on our local machine to run all parts of the application to test or we want to run all parts of the application with one command. For example, if you want to run NodeJS REST API and PostgreSQL database on different ports and need a single command to set up and run the whole thing. You can accomplish that with Docker Compose.

Coming Soon!!

Dockerize PERN Stack
Docker is an enterprise-ready container platform that enables organizations to seamlessly build, share, and run any application, anywhere. Almost every company is containerizing its applications for faster production workloads so that they can deploy anytime and sometimes several times a day. There are so many ways we can build a PERN Stack. One way is to dockerize it and create a docker image so that we can deploy that image any time or sometimes several times a day.

Coming Soon!!

Linting
We need to lint our project in that way it’s easier to follow some standards in your project. We will see this in a separate article.

Coming Soon!!

Unit Testing API
There are so many tools out there to unit test your application such as Mocha, Chai, etc. We need a separate article for that to cover different libraries.

Coming Soon!!

Unit Testing UI
We will see how to unit test with UI with jest library.

Coming Soon!

Integration Tests
We will use cypress for the integration tests.

Coming Soon!

Build for production
We have to build the project for production in a different way. We can’t use the proxy object. Here is the detailed article on how to package your app for production.

Packaging Your React App With NodeJS Backend For Production

Demo
Here is an example of a simple tasks application that creates, retrieves, edits, and deletes tasks. We actually run the API on the NodeJS server and you can use PostgreSQL to save all these tasks.


Example Project
As you add users we are making an API call to the nodejs server to store them and get the same data from the server when we retrieve them. You can see network calls in the following video.


Network Calls
Summary
There are so many ways we can build React apps and ship them for production.
One way is to build the React app with NodeJS and PostgreSQL as a database. There are four things that make this stack popular and you can write everything in Javascript.
The four things are PostgreSQL, React, Express, and NodeJS. This stack can be used for a lot of uses cases in web development.
We will have two package.json: one for the React and another for nodejs API. It’s always best practice to have completely different node_modules for each one.
You can get the connection string and configure the NodeJS application to talk to PostgreSQL with pg client, etc.
node-postgres: Non-blocking Postgresql Client for NodeJS
PGAdmin: pgAdmin is an Open Source administration and development platform for PostgreSQL
We need to use the dotenv library for environment-specific things. Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
In the development phase, we run the nodejs server and the React app on completely different ports. It’s easier and faster to develop that way.
We need to lint our project in that way it’s easier to follow some standards in your project.
There are so many tools out there to unit test the API such as Mocha, Chai, etc.
We can unit test with UI with jest library.
We will use cypress for the integration tests.
We have to build the project for production in a different way. We can’t use the proxy object.
Conclusion
PERN Stack is very good when you want to develop a simple web app and deploy your frontend and backend together. We have seen how to write PERN Stack in detail. In future posts, we will see how to build and deploy the PERN Stack on different Clouds such as GCP, Azure, AWS, etc.
Bye!
