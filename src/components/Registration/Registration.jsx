/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { postUser } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import './registration.css';

function Registration({ modalActiveReg, setModalActiveReg }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 8 chars minimum.'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], 'Passwords don\'t match'),
    }),
    onSubmit: (values) => {
      const post = {
        user: {
          name: values.name,
          email: values.email,
          password: values.password,
          confirm_password: values.confirmPassword,
        },
      };
      dispatch(postUser(post));
      // alert(JSON.stringify(post, null, 2));
    },
  });
  return (
    <Modal active={modalActiveReg} setActive={setModalActiveReg}>
      <h2>Registration form</h2>
      <form onSubmit={formik.handleSubmit}>
        <h3>Name</h3>
        <input value="" id="name" type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <h3>Email address</h3>
        <input value="" id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <h3>Password</h3>
        <input value="" id="password" type="password" {...formik.getFieldProps('password')} />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <h3>Confirm password</h3>
        <input value="" id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
        <br />
        <button type="submit" onClick={() => setModalActiveReg(false)}>Submit</button>
        <button type="button" onClick={() => setModalActiveReg(false)}>Close</button>
      </form>
    </Modal>
  );
}

Registration.propTypes = {
  modalActiveReg: PropTypes.bool.isRequired,
  setModalActiveReg: PropTypes.func.isRequired,
};

export default memo(Registration);
