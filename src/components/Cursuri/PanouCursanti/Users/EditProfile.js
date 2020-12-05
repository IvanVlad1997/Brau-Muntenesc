import React from 'react'
import {connect} from 'react-redux'
import {aducUserii, editeazaUser} from '../../../../redux/actions/index'
import {Form, Control} from 'react-redux-form'
import Loading from '../../../../common/Loading/Loading'

class EditUser extends React.Component {
    componentDidMount() {
        this.props.aducUserii()
       
    }

    onSubmit(v) {
        
         this.props.editeazaUser(this.props.match.params.id, v)
    }

    render() {
        if(!this.props.user)
         return <Loading />
        return (
            <Form className= "ui form"
            model="UserDetails"
            onSubmit={(creds) => this.onSubmit(creds) }>
                <label htmlFor="UserDetails.nume">Nume</label>
                <Control.text model="UserDetails.nume" id="nume" defaultValue={this.props.user.nume} />
                <label htmlFor="UserDetails.grupa ">Grupa</label>
                <Control.select model="UserDetails.grupa" id="UserDetails.grupa">
                        <option value="Luni19">Luni 19</option>
                        <option value="Marți18">Marți 18</option>
                        <option value="Marți19">Marți 19</option>
                        <option value="Fără grupă">Fără grupă</option>
                        <option value="Arhivă">Arhivă</option>
                    </Control.select>
                    <label htmlFor="UserDetails.comentariu">comentariu</label>
                <Control.text model="UserDetails.comentariu" id="comentariu"  />
                
                <label htmlFor="UserDetails.nrTel">nrtel</label>
                <Control.text model="UserDetails.nrTel" defaultValue={this.props.user.nrTel} />
             
                <button type ="submit">
                      Trimite                          
                  </button> 

             </Form>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        user: state.profiles[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps,{aducUserii, editeazaUser})(EditUser)