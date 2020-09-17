
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';


const AdminPanel = (props) => {
    if( !props.auth.email) return <Loading />
    else {
         if (props.auth.email === "braumuntenesc@gmail.com")
    return(
     <React.Fragment>
         <Button>Creează o nouă categorie</Button>
         <Button>Adaugă un produs</Button>
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