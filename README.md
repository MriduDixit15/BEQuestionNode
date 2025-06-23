# BEQuestionNode

## Overview

A backend API for managing survey questions with multi-language support. Each question has 4 options and one correct answer. Built with Node.js, Express, and MongoDB.

---

## Features

- **CRUD operations** for survey questions
- **Multi-language support** for questions and options (e.g., English, Hindi)
- **Fetch all questions** or a single question by ID
- **RESTful API** design

---

## API Endpoints

### Create a Question
`POST /questions`
```json
{
  "text": { "en": "What is 2+2?", "hi": "2+2 क्या है?" },
  "options": [
    { "en": "3", "hi": "3" },
    { "en": "4", "hi": "4" },
    { "en": "22", "hi": "22" },
    { "en": "44", "hi": "44" }
  ],
  "correctOption": 1
}
```

### Get All Questions
`GET /questions`
- Returns a list of all survey questions.

### Get a Single Question
`GET /questions/:id`
- `:id` - ID of the question to retrieve.
- Returns the question with the given ID.

### Update a Question
`PUT /questions/:id`
```json
{
  "text": { "en": "What is 3+3?", "hi": "3+3 क्या है?" },
  "options": [
    { "en": "5", "hi": "5" },
    { "en": "6", "hi": "6" },
    { "en": "33", "hi": "33" },
    { "en": "63", "hi": "63" }
  ],
  "correctOption": 1
}
```
- `:id` - ID of the question to update.
- Updates the question with the given ID.

### Delete a Question
`DELETE /questions/:id`
- `:id` - ID of the question to delete.
- Deletes the question with the given ID.

---

## Data Model

### Question
- `id`: Unique identifier for the question.
- `text`: Object containing the question text in multiple languages.
- `options`: Array of objects, each containing option text in multiple languages.
- `correctOption`: Index of the correct option in the `options` array.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js, used for building the API endpoints.
- **MongoDB**: NoSQL database for storing survey questions.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd BEQuestionNode
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGODB_URI=<your-mongodb-uri>
     ```
5. Start the server:
   ```bash
   npm start
   ```
6. The API will be running on `http://localhost:5000`.

---
 
## Acknowledgments

- Inspired by various survey and quiz applications.
- Thanks to the contributors and open-source libraries that made this project possible.

---

## Contact

- **Mridu Dixit** - [mridudixit15@gmail.com](mailto:mridudixit15@gmail.com)