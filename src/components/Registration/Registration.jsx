import React, { memo } from 'react';
import * as PropTypes from 'prop-types';

import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import Modal from '../Modal/Modal';
import './registration.css';

function Registration({ modalActiveReg, setModalActiveReg }) {
  return (
    <Modal active={modalActiveReg} setActive={setModalActiveReg}>
      <h2>Registration form</h2>
      <Formik
        initialValues={{
          name: '', email: '', password: '', confirmPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .required('No password provided.')
            .min(6, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords don\'t match')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <h3>Name</h3>
          {/* <label htmlFor="name">Name</label> */}
          <br />
          <Field name="name" id="name" type="text" />
          <ErrorMessage name="name" />
          <br />

          <h3>Email address</h3>
          {/* <label htmlFor="email">Email Address</label> */}
          <br />
          <Field name="email" id="email" type="email" />
          <ErrorMessage name="email" />
          <br />

          <h3>Password</h3>
          {/* <label htmlFor="password">Password</label> */}
          <br />
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <br />

          <h3>Confirm password</h3>
          {/* <label htmlFor="password_c">Confirm password</label> */}
          <br />
          <Field type="password" id="password_c" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Modal>
  );
}

Registration.propTypes = {
  modalActiveReg: PropTypes.bool.isRequired,
  setModalActiveReg: PropTypes.func.isRequired,
};

export default memo(Registration);
