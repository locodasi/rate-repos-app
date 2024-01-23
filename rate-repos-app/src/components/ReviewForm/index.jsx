import { Formik } from "formik";
import React, { useState } from 'react';

import ReviewCreateForm from "./ReviewCreateForm";

import useCreateReview from "../../hooks/useCreateReview";

import * as yup from 'yup';

import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
    ownerName: yup
    .string()
    .required('Repository owner name is required'),
    repositoryName: yup
    .string()
    .required('Repository name is required'),
    rating: yup
    .number("Raiting must be a number")
    .min(0,"Raiting must 0 or more")
    .integer("Raiting mus be a integer number")
    .max(100, "Raiting must be 100 or lower")
    .required('Raiting is required'),
    text: yup
    .string()
});

const ReviewForm = () => {

    const [createReview] = useCreateReview();
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const onSubmit = async ({ownerName, repositoryName,rating,text}) => {
        try {
          const data = await createReview({ownerName, repositoryName,rating,text});
          console.log("hola");
          console.log(data.createReview);
          
          navigate(`/repository/${data.createReview.repositoryId}`);
        } catch (e) {
          setError(e.message);
          setTimeout(()=> setError(null),5000)
          console.log(e)
        }
      };

    const initialValues = {
        ownerName: "",
        repositoryName:"",
        rating: "",
        text: ""
      };
    
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({handleSubmit}) => <ReviewCreateForm onSubmit={handleSubmit} error={error}/>}
      </Formik>
    )
}

export default ReviewForm;