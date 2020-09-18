import React, {useEffect} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { aducProduse } from '../../../redux/Produces/ProducesActions';
import Loading from '../../../components/Loading';
import Layout from '../../../components/Atelier/Layout/Layout';

const SingleProduct = (props) =>{
    useEffect(() => {
        props.aducProduse()
      
    }, [])

    console.log(props)
    
    if(props.produs !==undefined)return (
        <React.Fragment>
    <Layout>
    <Card>
    <Image src={props.produs.linkImagine} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{props.produs.descriere}</Card.Header>
          <Card.Description>
       Culoare: {props.produs.culoare}
      </Card.Description>
      <Card.Description>
       Preț: {props.produs.pret} Lei
      </Card.Description>
      <Card.Description>
       Mărimi: {props.produs.marime}
      </Card.Description>
    </Card.Content>
 
  </Card>
  
  </Layout>
  </React.Fragment>
)
return <Loading />
}

const mapStateToProps = (state, ownProps) => {
    return {
       produs : state.ProdusReducer[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {aducProduse})(SingleProduct);