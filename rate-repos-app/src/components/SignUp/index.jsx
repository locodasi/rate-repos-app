import React, { useState } from 'react';

import { Formik } from "formik"

import SignUpForm from './SignUpForm';

import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';

import * as yup from 'yup';

import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1,"Username lenght must be 1 or more")
    .max(30,"Username lenght must be 30 or less"),
  password: yup
    .string()
    .min(5,"Username lenght must be 5 or more")
    .max(50,"Username lenght must be 50 or less")
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirm is required')
});

const SignUp = () => {

  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const {username, password} = values;
    try {
      await signUp({username,password});
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
    password:"",
    passwordConfirm: ""
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit} error={error}/>}
    </Formik>
  )
}

export default SignUp;