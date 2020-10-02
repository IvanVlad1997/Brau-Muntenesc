import React from 'react';

import Main from './components/Main'
import {Router, Route,Switch, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {schimbaDimensiuni} from './redux/actions/actiuni'
import {userRedux, stergeEroarea} from './redux/actions/AuthActions'
import history from './history'
import Cursuri from './components/Cursuri/Cursuri'
import Evenimente from './components/Evenimente/Evenimente'
import Atelier from './pages/Atelier/Home/Atelier'
import {auth} from './firebase/firebase'
import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import PanouCursanti from './components/Cursuri/PanouCursanti/PanouCursanti'
import ShowUser from './components/Cursuri/PanouCursanti/Users/ShowUser'
import EditProfile from './components/Cursuri/PanouCursanti/Users/EditProfile';
import Plateste from './components/Cursuri/PanouCursanti/Users/Plateste';
import Preturi from './components/Cursuri/ComponenteCursuri/Preturi';
import Program from './components/Cursuri/ComponenteCursuri/Program';
import Vlog from './components/Cursuri/ComponenteCursuri/Vlog';
import Poze from './components/Cursuri/ComponenteCursuri/Poze'
import Contact from './components/Cursuri/ComponenteCursuri/Contact';
import GalerieVideo from './components/Cursuri/ComponenteCursuri/GalerieVideo'
import Locatie from './components/Cursuri/ComponenteCursuri/Locatie';
import Gal from './components/Evenimente/ComponenteEv/Gal';
import Page404 from './pages/Page404/Page404'
import AdminPanel from './pages/Atelier/AdminPanel/AdminPanel';
import NewCategory from './pages/Atelier/NewCategory/NewCategory'
import Category from './pages/Atelier/Category/Category';
import NewProduct from './pages/Atelier/NewProduct/NewProduct'
import SingleProduct from './pages/Atelier/SingleProduct/SingleProduct'
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate/PoliticaConfidentialitate';
import Cookies from 'universal-cookie';
import {Button} from 'semantic-ui-react'
import ParteneriMedia from './components/Cursuri/pages/Parteneri media/ParteneriMedia'


class App extends React.Component {


  componentDidMount() {
   
   


    auth.onAuthStateChanged((user) => {
     if (user) {this.props.userRedux(user.uid)} 
        else {
          console.log(" No user is signed in.")
        }         
    }); 
    window.addEventListener('resize', this.updateDimensions); 
   
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}
updateDimensions = () => {
  this.props.schimbaDimensiuni (window.innerWidth, window.innerHeight );


};

  refreshPage() {
  window.location.reload(false);
}

 Functie (){
   console.log('asdadwadawdwadawdaw')
  const cookies = new Cookies();
  if (cookies.get('GDPR') === undefined){
  {cookies.set('GDPR', 'Vazut', { path: '/' })
  // alert("Continuând să navigați, acceptați politica de confidențialitate. Link: http://localhost:3000/politicaconfidentialitate")
    return (

      <div  style={{background:"gray", height:150, color: "black", pading: 40, textAlign: "center", opacity: 0.8}}>
        
      <h2>
        Continuând să navigați, acceptați politica de confidențialitate. Apăsați <Link  to="/politicaconfidentialitate">aici</Link> pentru a fi redirecționați pe pagina Politicii de confidențialitate.
  
      <Button onClick={this.refreshPage}>Am înțeles</Button> 
      </h2>
    
      </div>
     
     

      )}
}
}

eroareLogare() {
  if (this.props.auth.errMess && this.props.auth.errMess !==undefined) {
    alert(this.props.auth.errMess)
    this.props.stergeEroarea()
    
  }
}



  render() {
    console.log(this.props.dimensiuni)
  return (

   
          
          <React.Fragment>   
              
          <Router history={history}>
          {this.Functie()}
          {this.eroareLogare()}
          
              <div>
               
                  <Switch>
                      <Route path="/" exact component={Main} /> 
                      <Route exact path="/Cursuri" component={Cursuri} />
                      <Route exact path="/Atelier" component={Atelier} />
                      <Route exact path="/Evenimente" component={Evenimente} />
                      <Route exact path="/signin" component={SingIn} />
                      <Route exact path="/signup" component={SingUp} />
                      <Route exact path = "/PanouCursanti" component={PanouCursanti} />
                       <Route exact path = "/user/:id" component={ShowUser} />
                      <Route exact path ="/user/edit/:id" component={EditProfile} />
                      <Route exact path ="/user/plateste/:id" component={Plateste} />
                      <Route exact path ="/preturi" component={Preturi} />
                      <Route exact path ="/program" component={Program}/>
                      <Route exact path ="/galerie" component= {Poze} />
                      <Route exact path ="/vlog" component={Vlog} />
                      <Route exact path ="/contact" component={Contact} />
                      <Route exact path ="/galerievideo" component={GalerieVideo} />
                      <Route exact path ="/partenerimedia" component={ParteneriMedia} />
                      <Route exact path ="/locatie" component={Locatie} />
                      <Route exact path ="/galerieevenimente" component={Gal} />   
                      <Route exact path ="/atelierAdminPanel" component={AdminPanel} />
                      <Route exact path ="/newCategory" component={NewCategory} />
                      <Route exact path ="/newProduct" component={NewProduct} />
                      <Route exact path ="/category/:id" component={Category} />
                      <Route exact path ="/product/:id" component={SingleProduct} />
                      <Route exact path ="/politicaconfidentialitate" component={PoliticaConfidentialitate} />
                      <Route path="*" component={Page404}/>
                   </Switch>
              </div>
          </Router>
      </React.Fragment>



  );
  }
}

 const mapStateToProps = (state) => {
 return {
   dimensiuni: state.dimensiuni,
   auth: state.auth
 }
}

export default connect(mapStateToProps,{userRedux, schimbaDimensiuni, stergeEroarea})(App);
