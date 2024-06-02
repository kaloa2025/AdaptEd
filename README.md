# AdaptEd Course Recommendation System

This project is a web application designed to recommend courses based on a user's programming background and preferences. The application uses a machine learning model to predict the best courses for users, which are then displayed in a user-friendly interface. The project includes a backend server, a frontend application, and a Python-based prediction service.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- User Authetication
- User can input their programming background and preferences.
- Machine learning model predicts a score based on user input.
- Courses are recommended based on the predicted score.
- User gives a quiz prior to enrolling in a course.
- Quiz generates a score which categorizes user in different levels.
- Based on levels user are suggested to start course from specific Lecture number.
- User-friendly interface to display recommended courses.
- Easy Navigation

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express
- **Machine Learning**: Python (pandas, joblib)
- **Database**: MongoDB (Atlas)

## Installation

### Prerequisites

- Node.js and npm installed
- Python installed
- MongoDB database set up

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/adapted-course-recommendation.git
cd adapted-course-recommendation
```

2. **Set up the backend:**

```bash
cd backend
npm install
```

3. **Set up the frontend:**

```bash
cd ../frontend
npm install
```

4. **Set up the Python environment:**

```bash
cd ../Prediction
pip install -r requirements.txt
```

5. **Load the machine learning model:**

Place the `prediction_model.pkl` file in the `Prediction` directory.

6. **Set up environment variables:**

Create a `.env` file in the `backend` directory with the following content:

```
MONGODB_URI=your_mongodb_connection_string
```

## Usage

### Running the Backend Server

```bash
cd backend
nodemon index.js
```

### Running the Frontend Application

```bash
cd frontend
npm start
```

### Running the Prediction Service

```bash
cd Prediction
streamlit run predict.py
```

## Project Structure

```
adapted-course-recommendation/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
|   |   |   |── screens/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── Prediction/
│   ├── predict.py
│   └── prediction_model.pkl
│
├── README.md
└── .gitignore
```

Happy coding! 😊
```

This README provides a comprehensive overview of your project, including installation and usage instructions, which should help users get started quickly. Make sure to replace placeholders like `your-username` and `your_mongodb_connection_string` with the actual values.
