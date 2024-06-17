import streamlit as st
import pandas as pd
import pymongo
import joblib

# Load the model
model = joblib.load('../../AdaptEd/Prediction/prediction_model.pkl')

# MongoDB connection URI
MONGODB_URI = 'mongodb+srv://aalok:21004@adapted.x6irkuo.mongodb.net/AdaptEd?retryWrites=true&w=majority&appName=AdaptEd'

# Connect to MongoDB
client = pymongo.MongoClient(MONGODB_URI)
db = client["AdaptEd"]
collection = db["predictions"]

def main():
    st.write("Update started")
    try:
        # Find the latest user data (or you can specify a query to find the needed document)
        user_data = collection.find_one(sort=[('_id', pymongo.DESCENDING)])  

        if user_data:
            # Extract user data with default values
            input_data = pd.DataFrame({
                'Level': [user_data.get('programmingExperience', 'Beginner')],
                'Languages': [user_data.get('programmingLanguages', 'Python')],
                'ProjectInterest': [user_data.get('projectInterests', 'Building websites and web applications')],
                'Goal': [user_data.get('learningGoal', 'Get a job in web development')],
                'AlgorithmComfort': [user_data.get('algorithmComfort', 'Very comfortable')],
                'WebDesignComfort': [user_data.get('designComfort', 'Very comfortable')],
                'ExcitingDevelopment': [user_data.get('developmentTypeExcitement', 'Creating visually appealing user interfaces')],
                'FrontendFrameworks': [user_data.get('frontendFrameworks', 'React')],
                'JavaFrameworks': [user_data.get('javaFrameworks', 'Spring')],
                'ProblemSolvingApproach': [user_data.get('problemSolvingApproach', 'Visualizing the problem and solution')],
                'Age': [user_data.get('age', 18)]
            })

            # Make prediction
            prediction = model.predict(input_data)
            score = prediction[0]

            # Update the document with the prediction score
            collection.update_one(
                {"_id": user_data["_id"]},
                {"$set": {"score": score}}
            )

            st.write("Score updated successfully.")
        else:
            st.write("No user data found in MongoDB.")

    except Exception as e:
        st.error(f"An error occurred: {e}")

if __name__ == '__main__':
    main()
