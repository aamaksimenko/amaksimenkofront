import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { editProfile } from '../../redux/actions/actionCreator';

import {
  initialValuesEdit,
  validationSchemaEdit,
} from '../constants';

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAccess = useSelector((state) => state.editProfileReducer.isAccess);
  console.log(isAccess);

  const submitEdit = useCallback(

    (values) => {
      let editUser;
      try {
        editUser = JSON.parse(localStorage.getItem('user'));
        if (!editUser.name || !editUser.id) {
          throw new SyntaxError('User data change error. Try again later');
        }
      } catch (error) {
        alert(error.message);
        localStorage.clear();
        navigate('/user_page');
      }
      if (isAccess) {
        const edit = {
          ...values,
          image: false,
          user_id: editUser.id,
        };
        dispatch(editProfile(edit));
        navigate('/user_page');
      }
    },
    [dispatch],
  );
  const formik = useFormik({
    initialValues: initialValuesEdit,
    validationSchema: validationSchemaEdit,
    onSubmit: submitEdit,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Name</h3>
          <input
            className="form-input"
            value=""
            id="name_edit"
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
            id="email_edit"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <br />
        </div>
        <button type="submit" id="oneEdit" className="modal-button">
          Submit
        </button>
        <button
          type="button"
          id="twoEdit"
          className="modal-button"
          onClick={() => formik.resetForm()}
        >
          Reset form
        </button>
      </form>
    </div>
  );
}

export default memo(EditProfile);
