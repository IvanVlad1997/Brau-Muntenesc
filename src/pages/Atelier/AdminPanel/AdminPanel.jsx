
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../../common/Loading/Loading';


const AdminPanel = (props) => {
    if( !props.auth.email) return <Loading />
    else {
         if (props.auth.email === "braumuntenesc@gmail.com")
    return(
     <React.Fragment>
         <Link className="ui button" to="/newCategory">Creează o nouă categorie</Link>
         <Link className="ui button" to="/newProduct">Creează un produs nou</Link>
         <Link className="ui primary button" to="/Atelier">Înapoi</Link>
     </React.Fragment>
    );
    else return <Redirect to="/" />
}}

const mapStateToProps = (state) => {
    return {
       auth: state.auth
    }
}


export default connect(mapStateToProps)(AdminPanel);