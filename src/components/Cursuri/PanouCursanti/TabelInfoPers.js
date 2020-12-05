import React from 'react'
import { Table, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import Loading from '../../../common/Loading/Loading'
import {connect} from 'react-redux'


class TabelInfo extends React.Component{
    renderList() {
        return  this.props.profiles.map(user =>{
        return this.props.plati.map(plata =>{
      
         if (user.uid === plata.uid ){
             if (this.props.alegeGrupa.grupa === 'Toti')
             return ( 
                <Table.Row key={user.uid}>
                   <Table.Cell>
                   <Link to ={`/user/${user.uid}`}>
                       {user.nume}
                   </Link>
                   </Table.Cell>
                   <Table.Cell>{user.nrTel}</Table.Cell>
                   <Table.Cell>{user.email}</Table.Cell>
                   <Table.Cell>{user.grupa}</Table.Cell>
                   <Table.Cell>
                   <Moment format ="DD/MM/YYYY" >{plata.platitPanaLa.toDate()}</Moment>      
                   </Table.Cell>
                   <Table.Cell>{plata.sumaUltimaPlata}</Table.Cell>
                 </Table.Row>            
            )
           else if (user.grupa === this.props.alegeGrupa.grupa)

                return ( 
                    <Table.Row key={user.uid}>
                       <Table.Cell>
                       <Link to ={`/user/${user.uid}`}>
                           {user.nume}
                       </Link>
                       </Table.Cell>
                       <Table.Cell>{user.nrTel}</Table.Cell>
                       <Table.Cell>{user.email}</Table.Cell>
                       <Table.Cell>{user.grupa}</Table.Cell>
                       <Table.Cell>
                       <Moment format ="DD/MM/YYYY" >{plata.platitPanaLa.toDate()}</Moment>      
                       </Table.Cell>
                       <Table.Cell>{plata.sumaUltimaPlata}</Table.Cell>
                     </Table.Row>            
                )
                else return null;
        
                
      
       }
       else return null;
   })
})
}
    
    render() {
        
        if( !this.props.profiles[0] || !this.props.plati[0]) return (
            <Table.Row>
                <Table.Cell>
                   <Loading />
                </Table.Cell>
            </Table.Row>
                        
        )
        else {
     

            
      return (
          <React.Fragment>
              
              {this.renderList()}
              <Link to ={`/Cursuri`}>
                 <Button primary >Înapoi</Button>
              </Link>
          </React.Fragment>
      )          
       
    }
}

}


const mapStateToProps = (state) => {
    return {
        alegeGrupa: state.alegeGrupa,
       
    }
}

export default connect(mapStateToProps)(TabelInfo)