import React from 'react'
import { Container, Header} from 'semantic-ui-react'

import DropDown from './Dropdown'

const Locatie = () => {
    return (
        <Container textAlign="center" style={{border:0, paddingTop: 50}} >
           
            <DropDown />
            <Header>Adresa: Sudarc - fostul Consproiect, str. Maramureș, nr. 12, et. 2, cam. 97  vizavi de Liceul Mihai Viteazul</Header>
        <div className="google-map-code">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.361319547443!2d26.021141615028913!3d44.93632227909822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2498dac260f15%3A0x6d7e987283bc5a58!2sConsproiect!5e0!3m2!1sro!2sro!4v1598020525295!5m2!1sro!2sro" 
       width="600" 
       height="450" 
   
       style={{border:0, paddingTop: 50}} 
      
       aria-hidden="false" 
      ></iframe>
      </div>
      
      </Container>
    )    
}

export default Locatie

