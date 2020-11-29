import React from 'react'
import { Redirect } from 'react-router-dom'
import Tabel from '../../../components/Cursuri/PanouCursanti/Tabel'
import {connect} from 'react-redux'
import Loading from '../../../components/Loading'
import Layout from "../../../components/Cursuri/Layout/Layout";



class PanouCursanti extends React.Component {
    componentDidMount() {

    }



    render() {

        if( !this.props.auth.email) return <Loading />
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
            return(
                <Layout>
                    <Tabel />
                </Layout>
            )
            }
            else return  <Redirect to="/" />
     }
}
}

const mapStateToProps = (state) => {
    return  {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PanouCursanti)