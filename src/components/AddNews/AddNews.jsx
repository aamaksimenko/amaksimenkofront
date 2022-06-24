import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { addNews, userData, logOutUser } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import { initialValuesAddNews, validationSchemaAddNews } from '../constants';

function AddNews({ isAddNews, setAddNews }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNews = useSelector((state) => state.addNewsReducer.error);

  const submitAddNews = useCallback(
    (values, { resetForm }) => {
      try {
        if (isNews) {
          throw new Error(`${isNews}`);
        }
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('article', values.article);
        formData.append('tag', values.tag);
        formData.append('image', false);
        // const addingNews = {
        //   ...values,
        //   image: false,
        // };
        dispatch(addNews(formData));
        resetForm(initialValuesAddNews);
        dispatch(userData());
        setAddNews(false);
      } catch (error) {
        alert(error.message);
        localStorage.clear();
        dispatch(logOutUser());
        navigate('/');
      }
    },
    [dispatch],
  );

  const formik = useFormik({
    initialValues: initialValuesAddNews,
    validationSchema: validationSchemaAddNews,
    onSubmit: submitAddNews,
  });
  return (
    <Modal isActive={isAddNews} setActive={setAddNews}>
      <h2 className="modal-title">Add News</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <h3>Title</h3>
          <input
            className="form-input"
            value=""
            id="title"
            type="text"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}

          <h3>Article</h3>
          <input
            className="form-input"
            value=""
            id="article"
            type="text"
            {...formik.getFieldProps('article')}
          />
          {formik.touched.article && formik.errors.article ? (
            <div>{formik.errors.article}</div>
          ) : null}

          <h3>Tags</h3>
          <input
            className="form-input"
            value=""
            id="tag"
            type="text"
            {...formik.getFieldProps('tag')}
          />
          {formik.touched.tag && formik.errors.tag ? (
            <div>{formik.errors.tag}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="addNews" className="modal-button">
          Add news
        </button>
        <button
          type="button"
          id="closeAddNews"
          className="modal-button"
          onClick={() => setAddNews(false)}
        >
          Close
        </button>
      </form>
    </Modal>
  );
}

AddNews.defaultProps = {
  isAddNews: false,
  setAddNews: null,
};
AddNews.propTypes = {
  isAddNews: bool,
  setAddNews: func,
};

export default memo(AddNews);
