import streamlit as st
import pandas as pd
import numpy as np
import joblib

# Load the pre-trained model
model = joblib.load('student_pass_predictor.pkl')

# Define the Streamlit app
def main():
    st.title('Student Pass Prediction App')

    # Text input fields for user input
    st.subheader('Enter Student Details:')
    sex = st.selectbox('Sex (F/M)',['F', 'M'])
    age = st.text_input('Age')
    address = st.selectbox('Address ',['Rural', 'Urban'])
    studytime = st.text_input('Study Time (hours)')
    schoolsup = st.selectbox('School Support', ['Yes', 'No'])
    famsup = st.selectbox('Family Support', ['Yes', 'No'])
    internet = st.selectbox('Internet Access', ['Yes', 'No'])

    # Button to trigger prediction
    if st.button('Predict'):
        # Create a DataFrame with user input
        input_data = pd.DataFrame({
            'sex': [sex],
            'age': [age],
            'address': [address],
            'studytime': [studytime],
            'schoolsup': [schoolsup],
            'famsup': [famsup],
            'internet': [internet]
        })

        # Make predictions
        prediction = model.predict(input_data)

        # Display prediction result
        st.subheader('Suggested Course ')
        if prediction[0] == 'yes':
            st.success('Course 1.')
        else:
            st.success('Course 2')


if __name__ == '__main__':
    main()

