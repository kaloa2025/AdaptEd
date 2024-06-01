import streamlit as st
import pandas as pd
import pymongo
import joblib

# Load the pre-trained model

# Load the model
model = joblib.load('C:/Users/Lenovo/OneDrive/Desktop/adapted/Prediction/prediction_model.pkl')

# Now you can use the model for predictions

# model = joblib.load('Prediction\prediction_model.pkl')

# Connect to MongoDB
MONGODB_URI = 'mongodb+srv://aalok:21004@adapted.x6irkuo.mongodb.net/AdaptEd?retryWrites=true&w=majority&appName=AdaptEd'
client = pymongo.MongoClient(MONGODB_URI)
db = client["AdaptEd"]
collection = db["predictions"]

# Define the Streamlit app
def main():
    # st.title('Course Suggestion')
    st.write("Update started")
    try:
        # Query MongoDB for user data
        user_data = collection.find_one()  # Assuming there's only one document in the collection

        # Extract user information from MongoDB document
        if user_data:
            level = user_data.get('programmingExperience', 'Beginner')
            languages = user_data.get('programmingLanguages', 'Python')
            project_interest = user_data.get('projectInterests', 'Building websites and web applications')
            goal = user_data.get('learningGoal', 'To get a job in web development')
            algorithm_comfort = user_data.get('algorithmComfort', 'Very comfortable')
            web_design_comfort = user_data.get('designComfort', 'Very comfortable')
            exciting_development = user_data.get('developmentTypeExcitement', 'Creating visually appealing user interfaces')
            frontend_frameworks = user_data.get('frontendFrameworks', 'React')
            java_frameworks = user_data.get('javaFrameworks', 'Spring')
            problem_solving_approach = user_data.get('problemSolvingApproach', 'I prefer visualizing the problem and solution')
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

            score=prediction[0]

            # Display prediction result
            # st.subheader('Suggested Course:')
            # suggested_course = "Java and DSA" if prediction[0] >= 0 and prediction[0] <= 5 else "Introduction to Web Development"
            # st.success(suggested_course)

            # Store the result in the destination database
            dest_db = client["AdaptEd"]
            result_collection = dest_db["predictions"]
            # result_document = {
            #     'user_id': user_data['_id'],
            #     'suggested_course': suggested_course
            # }
            result_collection.update_one(
                {"_id": user_data["_id"]},
                {"$set": {"score": score}}
            )
            print("Update complete")
            st.write("Score updated successfully.")
            # result_collection.insert_one(result_document)

        else:
            st.write("No user data found in MongoDB.")

    except Exception as e:
        st.error(f"An error occurred: {e}")

if __name__ == '__main__':
    main()
