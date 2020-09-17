import React, { Component } from 'react';
import {Icon, Button} from 'semantic-ui-react'
import history from '../../../history'


class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      width: window.innerWidth,
      height: 0 
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    document.removeEventListener('click', (this.closeMenu))
}
updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  

  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', (this.closeMenu));
       
    });  
      
    }
    else {
       
       history.push(`/${event.target.value}`)
    }
  }
  
  

  render() {
      
      if (this.state.width > 600) 
      return (
        
        <div style={{paddingTop:20}} >
            <Button.Group size="tiny" vertical floated="left" color="red" compact>
             
          <Button   onClick={this.showMenu}>
            <Icon name="arrow down"></Icon>
          </Button>
          
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }} >
                 
                  <Button style={{fontSize:12}} value = "Cursuri" > Acasă </Button>  
                  <Button style={{fontSize:12}} value = "contact" > Contact </Button>
                  <Button style={{fontSize:12}} value = "galerie">  Foto </Button>
                  <Button style={{fontSize:12}} value ="galerievideo">  Video</Button>
                  <Button style={{fontSize:12}} value = "vlog"> Vlog </Button>
                  <Button style={{fontSize:12}} value = "preturi"> Prețuri </Button>
                  <Button style={{fontSize:12}} value = "program"> Program </Button>
                  
                </div>
              )
              : (
                null
              )
          }
             </Button.Group>
        </div>
    
      );
      else  return (
        
        <div style={{paddingTop:20}} >
            <Button.Group size="tiny" vertical floated="left" color="red" compact>
             
          <Button   onClick={this.showMenu}>
            <Icon name="arrow down"></Icon>
          </Button>
          
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                 
                  <Button style={{fontSize:8}} value = "Cursuri" > Acasă </Button>  
                  <Button style={{fontSize:8}} value = "contact" > Contact </Button>
                  <Button style={{fontSize:8}} value = "galerie">  Foto </Button>
                  <Button style={{fontSize:8}} value ="galerievideo">  Video</Button>
                  <Button style={{fontSize:8}} value = "vlog"> Vlog </Button>
                  <Button style={{fontSize:8}} value = "preturi"> Prețuri </Button>
                  <Button style={{fontSize:8}} value = "program"> Program </Button>
                  
                </div>
              )
              : (
                null
              )
          }
             </Button.Group>
        </div>
    
      );
  }
}

export default DropDown

// onClick={() => history.push("/")}