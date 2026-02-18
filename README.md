loginFrom
Login and Signup Form with React, Formik, Yup, and Local Storage
This project is a simple implementation of a Login and Signup form using React, Formik for form management, Yup for form validation, and Local Storage for persisting user data. The goal is to create a seamless user authentication experience where users can sign up, log in, and have their data stored locally in the browser.

Features
Login Form: Allows existing users to log in using their email and password.

Signup Form: Allows new users to create an account by providing their name, email, and password.

Form Management: Uses Formik for handling form state, submissions, and errors.

Form Validation: Uses Yup for robust client-side validation.

Local Storage: Stores user data securely in the browser's local storage.

Responsive Design: The forms are designed to work on all screen sizes.

Technologies Used
React: A JavaScript library for building user interfaces.

Formik: A library for managing form state and handling form submissions.

Yup: A schema validation library for form validation.

Local Storage: A web storage API to persist user data in the browser. Usage

Signup Form Users can sign up by providing their name, email, and password.
The form validates inputs using Yup schema validation and manages state with Formik.

On successful signup, user data is stored in local storage.

Login Form Existing users can log in using their email and password.
The form validates inputs and checks if the user exists in local storage.

On successful login, the user is redirected to a welcome page (or dashboard).

How It Works
Formik is used to handle form state, submissions, and errors.

Yup is integrated with Formik to provide validation schemas for both the login and signup forms.

Local Storage is used to store and retrieve user data, ensuring persistence across page reloads.
