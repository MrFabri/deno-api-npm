# Deno API using npm packages
This is a very simple Rest API testing the latest feature of deno which is the compatibility with npm. We use popular npm packages like express and mongoose

## Requirements
- **[Deno](https://deno.land/manual/getting_started/installation)**
- The official **[deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)** (if you are using VSC)
- **[MongoDB](https://www.mongodb.com/)**
- An HTTP Client, e.g. Postman, Curl, ThunderClient

## Start
- Install the requirements
- Rename example.env to .env and fill your mongodb URI/cluster

## Routes
```js
GET http://localhost:3000/tasks | Gets all the tasks
```
```js
GET http://localhost:3000/task/:id | Gets an specic task using the id param
```
```js
POST http://localhost:3000/task | Creates a task, fill the req.body with:

{
    "title": string,
    "description": string,
    "done": boolean,
}
```
```js
PUT http://localhost:3000/task/:id | Edits a task using the id param
```
```js
DELETE http://localhost:3000/task/:id | Deletes the task using the id param
```