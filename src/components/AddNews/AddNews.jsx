import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { addNews, userData } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import { initialValuesAddNews, validationSchemaAddNews } from '../constants';

function AddNews({ isAddNews, setAddNews }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAccess = useSelector((state) => state.userReducer.isAccess);
  const user = JSON.parse(localStorage.getItem('user'));

  const submitAddNews = useCallback(
    (values) => {
      if (isAccess) {
        if (!user.name || !user.id) {
          alert(
            'Authorization error! Please, repeat the authorization procedure',
          );
          localStorage.clear();
          navigate('/');
        }
        const addingNews = {
          ...values,
          image: false,
          author: user.name,
          user_id: user.id,
        };
        dispatch(addNews(addingNews));
        dispatch(userData());
        setAddNews(false);
      }
    },
    [dispatch, isAccess],
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
