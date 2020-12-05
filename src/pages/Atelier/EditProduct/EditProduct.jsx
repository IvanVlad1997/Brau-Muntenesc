import React, {useEffect} from 'react';
import { Formik, Field } from 'formik';
import {Form, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {editeazaProdus, aducProduse} from '../../../redux/Produces/ProducesActions'
import {connect} from 'react-redux'
import { aducCategorie } from '../../../redux/CategorieAtelier/CategorieAtelierActions';
import Loading from '../../../common/Loading/Loading';

const NewCategory = (props) => {
  const {aducCategorie, aducProduse} = props
  useEffect(() => {
    aducCategorie()
    aducProduse()
    
  }, [aducCategorie, aducProduse])
  
if (props.categorii.categorie !=='' && props.produs !== undefined)  return (
  
  <React.Fragment>
    <h1>Editează produs</h1>
    <Formik
      initialValues={{ categorie: props.produs.categorie, descriere:props.produs.descriere, linkImagine: props.produs.linkImagine, culoare: props.produs.culoare, pret: props.produs.pret, marime: props.produs.marime, linkImagine2: props.produs.linkImagine2, linkImagine3: props.produs.linkImagine3, linkImagine4: props.produs.linkImagine4, linkImagine1: props.produs.linkImagine1}}
      validate={values => {
        const errors = {};
        if (!values.categorie || values.categorie ==='Neselectat') {
          errors.categorie = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
           props.editeazaProdus(values, props.produs.id)  
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
          <label htmlFor="linkImagine1">Link Imagine 1</label>
          <input
            type="text"
            name="linkImagine1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.linkImagine1}
          />
          </Form.Field>
          {errors.linkImagine1 && touched.linkImagine1 && errors.linkImagine1}


          <Form.Field>
          <label htmlFor="linkImagine2">Link Imagine 2</label>
          <input
            type="text"
            name="linkImagine2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.linkImagine2}
          />
          </Form.Field>
          {errors.linkImagine2 && touched.linkImagine2 && errors.linkImagine2}

            
          <Form.Field>
          <label htmlFor="linkImagine3">Link Imagine 3</label>
          <input
            type="text"
            name="linkImagine3"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.linkImagine3}
          />
          </Form.Field>
          {errors.linkImagine3 && touched.linkImagine3 && errors.linkImagine3}

          <Form.Field>
          <label htmlFor="linkImagine4">Link Imagine 4</label>
          <input
            type="text"
            name="linkImagine4"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.linkImagine4}
          />
          </Form.Field>
          {errors.linkImagine4 && touched.linkImagine4 && errors.linkImagine4}
            
          
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


const mapStateToProps = (state, ownProps) => {
    return {
        categorii : Object.values(state.CategorieReducer),
        produs: state.ProdusReducer[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {aducCategorie, aducProduse, editeazaProdus})(NewCategory);