# dummy-api
Dummy API

- [Create your database](#create-your-database)
- [Deploy](#deploy)
  * [Deploy to Heroku](#deploy-to-heroku)
  * [Deploy to Glitch](#deploy-to-glitch)
- [Refer](#refer)
<!-- toc -->

## Create your database
1. Press `Use this template` button in the right corner
2. Grive your new repository a name and press `Create repository from template` button
3. Clone your newly created repository to your computer
4. Change the contents of `db.json` and `routes.json` (optional) **to your own content** according to the [json-server example](https://github.com/typicode/json-server#example) and then commit your changes to git locally.

+ This example will create `/users` route, each resource will have `id`, `name` and `email`
```json
// db.json
{
  "users": [
    {
      "id": 1,
      "name": "Ngoc Khuong",
      "email": "me@ngockhuong.com"
    }
  ]
}
```
+ This example will define a custom route, search user by email
```json
// routes.json
{
  "/users/email/:email": "/users?email=:email"
}
```
5. If you want to change home page template, please update the contents at `public/`
## Deploy
### Deploy to Heroku
Heroku is a free hosting service for small projects. Easy setup and deploy from the command line via *git*.

**Pros**:
+ Easy setup
+ Free

**Cons**:
+ App has to sleep a couple of hours every day.
+ "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds. Can maybe be solved with [Kaffeine](http://kaffeine.herokuapp.com/)

#### Install Heroku and deploy
##### From Dashboard
1. [Create your database](#create-your-database)
2. Create an account on [https://heroku.com](https://heroku.com)
3. Login and **Create new app**
4. Go to **Deploy** tab > **Deployment method** > Choose **GitHub**
5. Go to **Connect to GitHub**, connect to your github account and search your repository > Click **Connect**
6. Go to **Manual deploy** > Choose a branch to deploy > Press **Deploy Branch**
7. Go to **Overview** tab to view build log and more.

##### From CLI
1. Install the Heroku CLI on your computer: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

2. Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:
```bash
heroku login
```

3. Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:
```bash
heroku create my-cool-project
```

4. Push your app to __Heroku__ (you will see a wall of code)
```bash
git push heroku master
```

5. Visit your newly create app by opening it via heroku:
```bash
heroku open
```

6. For debugging if something went wrong:
```bash
heroku logs --tail
```

##### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):
```json
 "scripts": {
    "start" : "node server.js"
 }
```
Or look **Procfile**:
```
web: npm start
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference heroku port. So the code will have the following:
```js
const port = process.env.PORT || 3000;
```

### Deploy to Glitch
Same as Heroku, will sleep after a while.
1. Register for [Glitch](https://glitch.com/)
2. Click **New Project**
3. Click **Import from GitHub**
4. Paste the full URL of your repository `https://github.com/lamngockhuong/dummy-api.git` into the URL input and click OK.
5. Wait for it to setup
6. Go to **Settings** > **Edit project details** > Change Project Name. Then press **Save**
7. Press **Share** button to get your URL to live site. It should be something for example like: [https://dummy-api-test.glitch.me](https://dummy-api-test.glitch.me)

## Refer
+ [JSON Server](https://github.com/typicode/json-server)
+ [JSON Server Heroku](https://github.com/jesperorb/json-server-heroku)
