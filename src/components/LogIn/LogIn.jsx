import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { postLogIn } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import InfoBlock from '../InfoBlock/InfoBlock';
import './login.css';

function LogIn({ isLogIn, setModalLogIn }) {
  const dispatch = useDispatch();
  const statusLogIn = useSelector((state) => state.userReducer);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 8 chars minimum.'),
    }),
    onSubmit: (values) => {
      dispatch(postLogIn(values));
      formik.resetForm({ values: '' });
    },
  });
  return (
    <Modal isActive={isLogIn} setActive={setModalLogIn}>
      <h2 className="modal-title">Sign in</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Email address</h3>
          <input className="form-input" id="email_log" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <h3>Password</h3>
          <input className="form-input" id="password_log" type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="oneL" className="modal-button">Submit</button>
        <button type="button" id="twoL" className="modal-button" onClick={() => setModalLogIn(false)}>Close</button>
      </form>

      {statusLogIn.error
        ? <InfoBlock severity="error" text={statusLogIn.error} />
        : null}

      {statusLogIn.user?.message
        ? <InfoBlock severity="success" text={statusLogIn.user.message} />
        : null}
    </Modal>
  );
}
LogIn.defaultProps = {
  isLogIn: false,
  setModalLogIn: null,

};
LogIn.propTypes = {
  isLogIn: bool,
  setModalLogIn: func,
};

export default memo(LogIn);
