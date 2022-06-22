import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import {
  initialValuesRegistration,
  validationSchemaRegistration,
} from '../constants';

function EditProfile() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const statusRegistration = useSelector((state) => state.userReducer);
  console.log(statusRegistration);

  const submitRegistration = useCallback(
    (values, { resetForm }) => {
      dispatch(values);
      resetForm(initialValuesRegistration);
      // navigate('/user_page');
    },
    [dispatch]
  );
  const formik = useFormik({
    initialValues: initialValuesRegistration,
    validationSchema: validationSchemaRegistration,
    onSubmit: submitRegistration,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Name</h3>
          <input
            className="form-input"
            value=""
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <h3>Email address</h3>
          <input
            className="form-input"
            value=""
            id="email_reg"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <h3>Password</h3>
          <input
            className="form-input"
            value=""
            id="password_reg"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <h3>Confirm password</h3>
          <input
            className="form-input"
            value=""
            id="confirmPassword"
            type="password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="oneR" className="modal-button">
          Submit
        </button>
        <button
          type="button"
          id="twoR"
          className="modal-button"
          onClick={() => {
            formik.resetForm();
          }}
        >
          Reset form
        </button>
      </form>
    </div>
  );
}

export default memo(EditProfile);
