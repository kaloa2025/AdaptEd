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

See Working Here
https://youtu.be/EpBzKjrsVRE

SCREENSHOTS
![Pre_Planning3](https://github.com/kaloa2025/AdaptEd/assets/113432220/edfeec36-5c9e-43ef-814f-8c414e5d2a4e)
![Pre_Planning](https://github.com/kaloa2025/AdaptEd/assets/113432220/e68b2f97-e33e-4045-a0f2-2a2ab2f97203)
![Pre_Planing2](https://github.com/kaloa2025/AdaptEd/assets/113432220/d32debcb-0556-4177-8da2-b7592f724357)

![Figma](https://github.com/kaloa2025/AdaptEd/assets/113432220/0c624b09-acfe-45d3-8d0f-bded2c9fb18b)
<img width="820" alt="DB_Structure" src="https://github.com/kaloa2025/AdaptEd/assets/113432220/87fc483e-f52c-48c4-b014-72ed9c09d469">

![Landing_Page](https://github.com/kaloa2025/AdaptEd/assets/113432220/3a5d7fd6-f03e-42b1-a459-35a1069efb29)
![Course_Detail_page](https://github.com/kaloa2025/AdaptEd/assets/113432220/28c12659-328e-40f8-becb-f85240448aed)
![Suggested_Page](https://github.com/kaloa2025/AdaptEd/assets/113432220/d6923393-3443-4bbb-8729-921d6559a752)
![Screenshot 2024-06-02 220403](https://github.com/kaloa2025/AdaptEd/assets/113432220/6f06dc7c-6726-4a20-a3ba-99d88a6065f8)

![Python_Folder_Structure](https://github.com/kaloa2025/AdaptEd/assets/113432220/cc36849c-0e36-42ad-b228-d254fc58ef8a)
![Project_Structure](https://github.com/kaloa2025/AdaptEd/assets/113432220/7f7692e6-75ff-4cfa-b51c-51f5b920d729)
![Terminals](https://github.com/kaloa2025/AdaptEd/assets/113432220/aa0730e2-ff9a-43b6-a4fd-518c48a55889)
