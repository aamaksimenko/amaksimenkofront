import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bool, func } from 'prop-types';
import { useFormik } from 'formik';

import { postUser } from '../../redux/actions/actionCreator';
import Modal from '../Modal/Modal';
import { initialValuesRegistration, validationSchemaRegistration } from '../constants';

function AddNews({ isAddNews, setAddNews }) {
  const dispatch = useDispatch();

  const submitRegistration = useCallback((values) => {
    dispatch(postUser(values));
    setAddNews(false);
  }, [dispatch]);

  const formik = useFormik({
    initialValues: initialValuesRegistration,
    validationSchema: validationSchemaRegistration,
    onSubmit: submitRegistration,
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
            id="tags"
            type="text"
            {...formik.getFieldProps('tags')}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <div>{formik.errors.tags}</div>
          ) : null}
          <br />
        </div>
        <button type="submit" id="addNews" className="modal-button">Add news</button>
        <button type="button" id="closeAddNews" className="modal-button" onClick={() => setAddNews(false)}>Close</button>
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
