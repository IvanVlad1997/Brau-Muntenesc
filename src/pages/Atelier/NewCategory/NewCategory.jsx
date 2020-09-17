import React from 'react';
import { Formik } from 'formik';
import {Form, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {adaugaCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
import {connect} from 'react-redux'

const NewCategory = (props) => (
  <React.Fragment>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ numeCategorie: '', descriere:'', linkImagine: ''}}
      validate={values => {
        const errors = {};
        if (!values.numeCategorie) {
          errors.numeCategorie = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          props.adaugaCategorie(values)  
        //   alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="numeCategorie">Categorie nouă</label>
          <input
            type="text"
            name="numeCategorie"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.numeCategorie}
          />
          </Form.Field>
          {errors.numeCategorie && touched.numeCategorie && errors.numeCategorie}

          <Form.Field>
          <label htmlFor="descriere">Descriere</label>
          <input
            type="text"
            name="descriere"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descriere}
          />
          </Form.Field>
          {errors.descriere && touched.descriere && errors.descriere}

          <Form.Field>
          <label htmlFor="linkImagine">Link Imagine</label>
          <input
            type="text"
            name="linkImagine"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.linkImagine}
          />
          </Form.Field>
          {errors.linkImagine && touched.linkImagine && errors.linkImagine}


            <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>

    <Link className="ui button primary" to="/atelierAdminPanel" >Înapoi</Link >
  </React.Fragment>
);

export default connect(null, {adaugaCategorie})(NewCategory);