import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { editProfile } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import { validationSchemaEdit } from '../constants';

function EditProfile({ isEditProfile, setEditProfile }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAccess = useSelector((state) => state.editProfileReducer.isAccess);
  const isEdit = useSelector((state) => state.editProfileReducer.error);
  const userData = useSelector((state) => state.userData.data.user);

  const submitEdit = useCallback(
    (values, { resetForm }) => {
      try {
        if (isEdit) {
          throw new SyntaxError(`${isEdit}`);
        } else if (isAccess) {
          const edit = {
            ...values,
            image: false,
          };
          dispatch(editProfile(edit));
          resetForm({});
          setEditProfile(false);
        }
      } catch (error) {
        alert(error.message);
        localStorage.clear();
        navigate('/user_page');
      }
    },
    [dispatch],
  );
  const initialValuesEdit = {
    name: userData?.name,
    email: userData?.email,
  };
  const formik = useFormik({
    initialValues: initialValuesEdit,
    validationSchema: validationSchemaEdit,
    onSubmit: submitEdit,
  });
  return (
    <Modal isActive={isEditProfile} setActive={setEditProfile}>
      <form onSubmit={formik.handleSubmit}>
        <h2 className="modal-title">Edit profile</h2>
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
          Edit Profile
        </button>
        <button
          type="button"
          id="closeEdit"
          className="modal-button"
          onClick={() => setEditProfile(false)}
        >
          Close
        </button>
        <button
          type="button"
          id="resetEdit"
          className="modal-button"
          onClick={() => formik.resetForm()}
        >
          Reset
        </button>
      </form>
    </Modal>
  );
}

EditProfile.defaultProps = {
  isEditProfile: false,
  setEditProfile: null,
};
EditProfile.propTypes = {
  isEditProfile: bool,
  setEditProfile: func,
};

export default memo(EditProfile);
