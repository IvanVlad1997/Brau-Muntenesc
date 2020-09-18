import React, {useEffect} from 'react';
import { Formik, Field } from 'formik';
import {Form, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import {adaugaCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
import {connect} from 'react-redux'
import { aducCategorie } from '../../../redux/CategorieAtelier/CategorieAtelierActions';
import Loading from '../../../components/Loading';

const NewCategory = (props) => {
  useEffect(() => {
    props.aducCategorie()
    
  }, [])

if (props.categorii.categorie !=='')  return (
  
  <React.Fragment>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ categorie: '', descriere:'', linkImagine: '', culoare: '', pret: '', marime: ''}}
      validate={values => {
        const errors = {};
        if (!values.categorie || values.categorie ==='Neselectat') {
          errors.categorie = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // props.adaugaCategorie(values)  
          alert(JSON.stringify(values, null, 2));
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
         <Field as="select" name="categorie">
             <option value="Neselectat">Selectează o categorie</option>
             {
               props.categorii.map((categorie, index) => {
                  return <option key={index} value={categorie.numeCategorie}>{categorie.numeCategorie}</option>
               })
             }
            
           </Field>
          {errors.categorie && touched.categorie && errors.categorie}
         
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

          <Form.Field>
          <label htmlFor="culoare">Culoare</label>
          <input
            type="text"
            name="culoare"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.culoare}
          />
          </Form.Field>
          {errors.culoare && touched.culoare && errors.culoare}

          <Form.Field>
          <label htmlFor="marime">Marime</label>
          <input
            type="text"
            name="marime"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.marime}
          />
          </Form.Field>
          {errors.marime && touched.marime && errors.marime}
          <Form.Field>
          <label htmlFor="pret">Preț</label>
          <input
            type="number"
            name="pret"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pret}
          />
          </Form.Field>
          {errors.pret && touched.pret && errors.pret}


            <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>

    <Link className="ui button primary" to="/atelierAdminPanel" >Înapoi</Link >
  </React.Fragment>
);
return <Loading />
}


const mapStateToProps = (state) => {
    return {
        categorii : Object.values(state.CategorieReducer)
    }
}

export default connect(mapStateToProps, {aducCategorie})(NewCategory);