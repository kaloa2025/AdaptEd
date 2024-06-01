import streamlit as st
import pandas as pd
import pymongo
import joblib

# Load the pre-trained model
model = joblib.load('prediction_model.pkl')

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["Prediction"]
collection = db["Data"]

# Define the Streamlit app
def main():
    st.title('Course Suggestion')

    try:
        # Query MongoDB for user data
        user_data = collection.find_one()  # Assuming there's only one document in the collection

        # Extract user information from MongoDB document
        if user_data:
            level = user_data.get('level', 'Beginner')
            languages = user_data.get('languages', 'Python')
            project_interest = user_data.get('project_interest', 'Building websites and web applications')
            goal = user_data.get('goal', 'To get a job in web development')
            algorithm_comfort = user_data.get('algorithm_comfort', 'Very comfortable')
            web_design_comfort = user_data.get('web_design_comfort', 'Very comfortable')
            exciting_development = user_data.get('exciting_development', 'Creating visually appealing user interfaces')
            frontend_frameworks = user_data.get('frontend_frameworks', 'React')
            java_frameworks = user_data.get('java_frameworks', 'Spring')
            problem_solving_approach = user_data.get('problem_solving_approach', 'I prefer visualizing the problem and solution')
            age = user_data.get('age', 18)

            # Create a DataFrame with user input
            input_data = pd.DataFrame({
                'Level': [level],
                'Languages': [languages],
                'ProjectInterest': [project_interest],
                'Goal': [goal],
                'AlgorithmComfort': [algorithm_comfort],
                'WebDesignComfort': [web_design_comfort],
                'ExcitingDevelopment': [exciting_development],
                'FrontendFrameworks': [frontend_frameworks],
                'JavaFrameworks': [java_frameworks],
                'ProblemSolvingApproach': [problem_solving_approach],
                'Age': [age],
            })

            # Make prediction
            prediction = model.predict(input_data)

            # Display prediction result
            st.subheader('Suggested Course:')
            suggested_course = "Java and DSA" if prediction[0] >= 0 and prediction[0] <= 5 else "Introduction to Web Development"
            st.success(suggested_course)

            # Store the result in the destination database
            dest_db = client["Prediction"]
            result_collection = dest_db["course"]
            result_document = {
                'user_id': user_data['_id'],
                'suggested_course': suggested_course
            }
            result_collection.insert_one(result_document)

        else:
            st.write("No user data found in MongoDB.")

    except Exception as e:
        st.error(f"An error occurred: {e}")

if __name__ == '__main__':
    main()
