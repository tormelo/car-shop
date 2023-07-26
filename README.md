# Car Shop

The Car Shop API is a study project aimed at learning about CRUD operations, routing in web development, Typescript, and Object-Oriented Programming (OOP) patterns. The API is built using Express.js and uses MongoDB as the database management system with Mongoose as the ODM.

## Table of Contents

* [Technologies Used](#technologies-used)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation and Running the API in Development Environment](#installation-and-running-the-api-in-development-environment)
* [Tests](#tests)
* [API Endpoints](#api-endpoints)
* [Acknowledgments](#acknowledgments)

## Technologies Used

- Express.js: A fast, minimal, and flexible Node.js web application framework.
- MongoDB: A NoSQL database that provides scalability and flexibility for storing JSON-like documents.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution for modeling application data.
- Chai: A BDD/TDD assertion library for Node.js that provides clear and expressive assertions for unit testing.
- Sinon: A standalone test spy, stubs, and mocks for JavaScript. It provides utilities for simulating function behaviors during tests.

## Features

- Perform CRUD (Create, Read, Update, Delete) operations on vehicle-related data.
- Utilize Object-Oriented Programming (OOP) patterns like domains to organize and manage the application's logic effectively.
- Define and manage routing for handling various API requests.

## Prerequisites

Before running the project, make sure you have Docker and Docker Compose installed on your system. If you don't have them installed, follow the instructions below:

- Install Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- Install Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Installation and Running the API in Development Environment

1. Clone the repository:
    ```bash
    git clone https://github.com/tormelo/car-shop.git
    ```
2. Navigate to the project folder:
    ```bash
    cd car-shop
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the MongoDB and API containers using Docker Compose:
    ```bash
    docker-compose up -d
    ```
5. Access the car_shop container terminal by running the command:
    ```bash
    docker exec -it car_shop bash
    ```
6. Inside the container terminal, start the API:
    ```bash
    npm run dev
    ```
7. The API will be accessible at `http://localhost:3001`.

## Tests

To run the unit tests, follow these steps:

1. Access the car_shop container terminal by running the command:
    ```bash
    docker exec -it car_shop bash
    ```
2. Inside the container terminal, run the tests using one of the following commands:
   - Run tests without coverage:
     ```bash
     npm run test
     ```
   - Run tests with coverage:
     ```bash
     npm run test:coverage
     ```

The test results and coverage report will be displayed in the terminal.

## API Endpoints

### Cars

- **GET /cars**: Get a list of all cars.
- **GET /cars/:id**: Get details of a specific car by its ID.
- **POST /cars**: Add a new car to the database.
- **PUT /cars/:id**: Update details of a specific car by its ID.
- **DELETE /cars/:id**: Delete a car from the database by its ID.

### Motorcycles

- **GET /motorcycles**: Get a list of all motorcycles.
- **GET /motorcycles/:id**: Get details of a specific motorcycle by its ID.
- **POST /motorcycles**: Add a new motorcycle to the database.
- **PUT /motorcycles/:id**: Update details of a specific motorcycle by its ID.
- **DELETE /motorcycles/:id**: Delete a motorcycle from the database by its ID.

## Acknowledgments

This project was created as part of the Web Development course at Trybe. Special thanks to all the instructors who contributed to the learning process and helped in the development of this project.
