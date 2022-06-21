import * as Yup from 'yup';

export const initialValuesRegistration = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const initialValuesLogIn = {
  email: '',
  password: '',
};

export const initialValuesAddNews = {
  title: '',
  article: '',
  tag: '',
};

export const yupVariable = {
  nameNumberMax: 15,
  nameString: 'Must be 15 characters or less',
  emailString: 'Invalid email address',
  passwordRequired: 'No password provided.',
  passwordNumberMin: 6,
  passwordString: 'Password is too short - should be 6 chars minimum.',
  confirmPasswordMatch: 'Passwords don\'t match',
  required: 'Required',
  titleAddMax: 100,
  titleString: 'Must be 15 characters or less',
  articleAddMax: 250,
  articleString: 'Must be 15 characters or less',
  tagAddMax: 100,
  tagString: 'Must be 15 characters or less',
};

export const validationSchemaRegistration = Yup.object({
  name: Yup.string()
    .max(yupVariable.nameNumberMax, yupVariable.nameString)
    .required(yupVariable.required),
  email: Yup.string()
    .email(yupVariable.emailString)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString),
  confirmPassword: Yup.string()
    .required(yupVariable.required)
    .oneOf([Yup.ref('password')], yupVariable.confirmPasswordMatch),
});

export const validationSchemaLogIn = Yup.object({
  email: Yup.string()
    .email(yupVariable.emailString)
    .required(yupVariable.required),
  password: Yup.string()
    .required(yupVariable.passwordRequired)
    .min(yupVariable.passwordNumberMin, yupVariable.passwordString),
});

export const validationSchemaAddNews = Yup.object({
  title: Yup.string()
    .max(yupVariable.titleAddMax, yupVariable.titleString)
    .required(yupVariable.required),
  article: Yup.string()
    .max(yupVariable.articleAddMax, yupVariable.articleString)
    .required(yupVariable.required),
  tag: Yup.string()
    .max(yupVariable.tagAddMax, yupVariable.tagString)
    .required(yupVariable.required),
});
