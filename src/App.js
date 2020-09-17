import React from 'react';

import Main from './components/Main'
import {Router, Route,Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import {schimbaDimensiuni} from './redux/actions/actiuni'
import {userRedux} from './redux/actions/AuthActions'
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
  render() {
    console.log(this.props.dimensiuni)
  return (

   
          
          <React.Fragment>       
          <Router history={history}>
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
                      <Route exact path ="/locatie" component={Locatie} />
                      <Route exact path ="/galerieevenimente" component={Gal} />
                      
                      <Route exact path ="/atelierAdminPanel" component={AdminPanel} />

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
   dimensiuni: state.dimensiuni
 }
}

export default connect(mapStateToProps,{userRedux, schimbaDimensiuni})(App);
