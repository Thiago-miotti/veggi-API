

<h2 align="center">
FullStack dev test Veggi.
</h2>


## 📺 Prerequisites

Before running app locally make sure that you install following things:

-   [NodeJs](https://nodejs.org/pt-br/download/) 
-   [MySQL](https://dev.mysql.com/downloads/mysql/)   


## 🚀 Local Development

### Step 1: Clone the repo

```bash
https://github.com/Thiago-miotti/veggi-API.git
```

### Step 2: Configuration

1. Create `.env` file in the project root dir

    ```bash
    $ touch .env
    ```

2. Copy everything from `.env.example` and paste it in `.env`
3. And fill it with your local config 

## Step 3: Setup the DB

1. Copy everything from `src/infra/scripts/11102021.sql` 
2. Paste on a sql shell with whatever MySQL client
or just run the file on a MySQL console 
    ```bash
    source <path-to-folder>/src/infra/scripts/11102021.sql
    ```

## Step 4: Run
1. If you have nodemon installed, you can just run this command:
    ```bash
    npm run dev
    ```
    if you don't:
    ```bash
    node src/app.js
    ```


## ⭐ Testing
If you use postman, there is a file called `endpoints.json`, you can import this file into postman to test all the endpoints of the api.
