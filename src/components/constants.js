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

export const yupVariable = {
  nameNumberMax: 15,
  nameString: 'Must be 15 characters or less',
  emailString: 'Invalid email address',
  passwordRequired: 'No password provided.',
  passwordNumberMin: 6,
  passwordString: 'Password is too short - should be 6 chars minimum.',
  confirmPasswordMatch: 'Passwords don\'t match',
  required: 'Required',
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
