import React from 'react'
import {connect} from 'react-redux'
import {aducUserii, aducPlatile} from '../../../../redux/actions/index'
import { Button, List } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Loading from '../../../../common/Loading/Loading'
import Moment from 'react-moment'


class ShowUser extends React.Component {
    componentDidMount() {
     
        this.props.aducPlatile()
        this.props.aducUserii()
        
    }

   buton() {
        if (this.props.auth.email === "braumuntenesc@gmail.com"){              
         return  (
             <React.Fragment>
            <Link to ={`/user/edit/${this.props.user.uid}`}>
                 <Button  >Editează informațiile</Button>
            </Link>
            <Link to ={`/user/plateste/${this.props.user.uid}`}>
                 <Button primary >Plată</Button>
            </Link>
            </React.Fragment>
         )
    }
  }


    renderList(plata) {
 
      return plata.istoricPlati.map((ist, index)=>{
        return (
          <List.Item key={index}>{ist}</List.Item>  
                )
      })   
    }
     
    renderComm(comentariu) {
      if (comentariu) return(
      <List.Item>
      <List.Header>Comentariu</List.Header>
        {comentariu}
      </List.Item>
     
        )
    }

    render() {
        
        
        
        if(this.props.user === undefined || this.props.plata === undefined)
         return <Loading />
        return (
            <React.Fragment>
            <List selection size="large"  divided relaxed verticalAlign='middle'>
            <List.Item>
              <List.Header>Nume</List.Header>{this.props.user.nume}
            </List.Item>
            <List.Item>
              <List.Header>Email</List.Header>
              {this.props.user.email}
            </List.Item>
            <List.Item>
              <List.Header>Număr de telefon</List.Header>
              {this.props.user.nrTel}
            </List.Item>
            
            <List.Item>
              <List.Header>Sumă pentru ultima plată</List.Header>
              {this.props.plata.sumaUltimaPlata}
            </List.Item>
            <List.Item>
              <List.Header>Ultima plata</List.Header>
              <Moment format ="DD/MM/YYYY" >{this.props.plata.date.toDate()}</Moment>
            </List.Item>
            <List.Item>
              <List.Header>Platit până la</List.Header>
              <Moment format ="DD/MM/YYYY" >{this.props.plata.platitPanaLa.toDate()}</Moment>
            </List.Item>
            <List.Item>
              <List.Header>Opțiune abonament</List.Header>
              {this.props.plata.optiuneAbonament}
            </List.Item>
            <List.Item>
              <List.Header>Grupă</List.Header>
              {this.props.user.grupa}
            </List.Item>
            {this.renderComm(this.props.user.comentariu)}
            <List.Item>
            <List.Header>Istoric plați</List.Header>
                     <List>
                        {this.renderList(this.props.plata)}
                        
                    </List>

            </List.Item>
            <List.Item>
           
            <List.Header>Id</List.Header>
              {this.props.user.uid}
            </List.Item>

          </List>

            {this.buton()}

            <Link to ={`/PanouCursanti`}>
                 <Button primary >Înapoi</Button>
            </Link>
             </React.Fragment>
           
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        plata: state.plati[ownProps.match.params.id],
        user: state.profiles[ownProps.match.params.id],
        auth : state.auth,
       
    }
}

export default connect(mapStateToProps,{aducUserii, aducPlatile})(ShowUser)