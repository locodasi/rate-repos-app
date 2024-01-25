## **Rate Repository API**
This is a Rate Repository application with her GraphQL API.

## **🚀 Getting started**
Clone this repository and run `npm install in both repository directorys`.

Rate Repository API uses the GitHub API, which has a quite small rate limit (60 requests per hour) for unauthorized requests. Therefore, we need to register it as an OAuth application to obtain client credentials. Register your OAuth application here by setting "Application name" as "Rate Repository API", "Homepage URL" as https://github.com/Kaltsoon/rate-repository-api and "Authorization callback URL" as http://localhost:5000. Now you should see your application here and by going to the application's page, see the "Client ID" and "Client Secret" values.

Create a file `.env` in the `rate-repository-api` directory and copy the contents of the `.env.template` file there. In the `.env` file, replace `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` variable values with your newly registered OAuth application's credentials. If you want, you can also use a different secret for the `JWT_SECRET`` variable, which is used to sign access tokens.

Run `npm run build`. This will setup the SQLite database and run the migrations.

To populate the database with some seed data, `run npm run seed:run`. Note: running this command will remove all existing data.

All done! Just run `npm start` to start the server. After the server has started you should be able to access the Apollo Sandbox at http://localhost:4000.

NOTE The port 5000 might be reserved in new macOS versions. If you see this error

```
Error: listen EADDRINUSE: address already in use :::5000
```
define an alternative port in file .env. You may eg. pick 5001:

```
PORT=5001
```
Change also the Authorization callback URL here to have the new port value.

## **🔑 Authentication**
To list all the registered users, you can run this query in the Apollo Sandbox:
```
{
  users {
    edges {
      node {
        username
      }
    }
  }
}
```
You can retrieve an access token by performing the `authenticate` mutation:
```
mutation {
  authenticate(credentials: { username: "kalle", password: "password" }) {
    accessToken
  }
}
```
All access tokens expire after seven days. If you performed step 5. in the "Getting started" section, users "kalle", "elina" and "matti" all have the password "password".

You can also register a new user by performing the `createUser` mutation:
```
mutation {
  createUser(user: { username: "myusername", password: "mypassword" }) {
    id
    username
  }
}
```
Authorize requests in the Apollo Sandbox
A handy way to authorize requests in the Apollo Sandbox is to retrieve an access token using the `authorize` mutation (see above for details) and then add the following in the "Headers" tab below the operations editor:
```
{
  "Authorization": "Bearer <ACCESS_TOKEN>"
}
```
Replace the `<ACCESS_TOKEN>` part with your access token.

## **📖 Documentation**
Apollo Sandbox offers documentation on how to use the API. Start the server by running `npm start`, open the Apollo Sandbox at http://localhost:4000 and you should be able to see the documentation next to the operations editor.

after in the rate-repos-app run npm start and enjoy de app!
