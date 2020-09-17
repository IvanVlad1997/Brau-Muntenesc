import React from 'react'
import { Redirect } from 'react-router-dom'
import Tabel from './Tabel'
import {connect} from 'react-redux'
import Loading from '../../Loading'



class PanouCursanti extends React.Component {
    componentDidMount() {

    }



    render() {
        if( !this.props.auth.email) return <Loading />
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
            return(
                <div>
                    <Tabel />
                </div>
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