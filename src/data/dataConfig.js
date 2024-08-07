// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path, { dirname } from 'path';
const mysql = require('mysql')

// const express = require('express');

const DATABASE_HOST="localhost";
const DATABASE_PORT=3306;
const DATABASE_USER="root";
const DATABASE_PASSWORD="";
const DATABASE_NAME="crm_db";

// DATABASE_URL="mysql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}"  //DO NOT REMOVE THIS!!! Dynamically pulls through the database connection using the above.

const db = mysql.createConnection({
host: "${DATABASE_HOST}",
user: "${DATABASE_USER}",
password: "${DATABASE_USER}",
database:"${DATABASE_NAME}",
port: "${DATABASE_PORT}"
})

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
});


export default db;
// export {DataClient};

// # DATABASE_URL="mysql://username:password@localhost:3306/crm_db"
// # Assigns environment variables required to access the mySQL database via Prisma 
