import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import {
  FormWrapper,
  Label,
  AddContactButton,
  ErrorText,
} from './FormikForm.styled';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export const FormikForm = ({ onSubmit }) => {
  return (
      <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit({
            ...values,
          });
          resetForm();
        }}
      >
        <FormWrapper>
          <Label htmlFor="name">
            Name:
            <Field type="text" name="name" />
          </Label>
          <ErrorText name="name" component="span"></ErrorText>
          <Label htmlFor="number">
            Number:
            <Field type="tel" name="number" />
          </Label>
          <ErrorText name="number" component="span"></ErrorText>
          <AddContactButton type="submit">Add contact</AddContactButton>
        </FormWrapper>
      </Formik>
    </div>
  );
};

FormikForm.propTypes = { onSubmit: PropTypes.func.isRequired };