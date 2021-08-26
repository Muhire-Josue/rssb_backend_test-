# express-app-starter

This is a RESTful API to upload an excel file and save the data in a relational database, catches errors and stores them in the database

### Requirements

- `Nodejs v10-13` - a JavaScript run-time environment that executes JavaScript code outside of a browser
- `POSTGRES` - a database management system for data persistence
- `.env.example` - a file that contains all the variable environment for this project

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies and running some pre-defined scripts.

Download the project

```bash
git clone https://github.com/Muhire-Josue/rssb_backend_test-.git
```

cd into the project

```bash
cd rssb_backend_test/
```

Install dependencies

```bash
npm install
```

Run server

```bash
npm run dev
```

## Usage

```
Head over to postman (or web browser) and hit this URL GET: http://localhost:3000
```

### Technologies used

- `NPM` - a package manager for the JavaScript programming language
- `Git` - version-control system for tracking changes in source code during software development

### API ENDPOINTS

| API            | Methods | Description    |
| -------------- | ------- | -------------- |
| `users/signup` | POST    | Create account |
| `users/login`  | POST    | Login          |
| `files/upload` | POST    | Upload file    |
| `/files`       | GET     | Get all data   |
| `/files/:id`   | GET     | Get a data     |
