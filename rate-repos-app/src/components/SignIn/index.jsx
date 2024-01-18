import React, { useState } from 'react';

import { Formik } from "formik"

import SignInForm from "./SignInForm"

import useSignIn from '../../utils/useSignIn';

import * as yup from 'yup';

import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});



const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const {username, password} = values;
    try {
      const data = await signIn({ username, password });
      console.log(data.authenticate);
      
      navigate("/");
    } catch (e) {
      setError(e.message);
      setTimeout(()=> setError(null),5000)
      console.log(e.message);
    }
  };

  const initialValues = {
    username: "",
    password:""
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} error={error}/>}
    </Formik>
  )
};

export default SignIn;