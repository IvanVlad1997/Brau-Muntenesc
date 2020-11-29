import React, {useState, useEffect} from 'react';
import {storage, firestore} from '../../../firebase/firebase'
import {connect} from 'react-redux'
import {aducGalerie, deleteGalerie, adaugaGalerieFotoLink} from '../../../redux/actions/actiuni'
import { Button, Container, Grid, Card, Header} from 'semantic-ui-react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';

import history from '../../../history'
import Layout from "../../../components/Cursuri/Layout/Layout";


const Galerie = (props) => {
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [link, setLink] = useState('')
    const [name, setname] = useState('')
    console.log(props)
    
    const {aducGalerie} = props

    useEffect(() => {
        aducGalerie()
      }, [aducGalerie]);
    

    const handleFireBaseUpload = e => {
        e.preventDefault()
      console.log('start of upload')
      // async magic goes here...
      if(imageAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
      const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
         .then(fireBaseUrl => {
           setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
            firestore.collection('galerie').add({
                imgUrl: fireBaseUrl,
                name: imageAsFile.name,
                culink: false
            })
         })
      })
      }
  

 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(image)
  }

  const form =() => {
    if( !props.auth.email) return <div></div>
    else if (props.auth.email === "braumuntenesc@gmail.com")
      return(
        <form className="ui form" onSubmit={handleFireBaseUpload}>
        <label>Încarcă imagine din calculator</label>
        <input 
    // allows you to reach into your file directory and upload image to the browser
          type="file"
          onChange={handleImageAsFile}
        />
        
           <button type ="submit">
                Trimite                          
            </button> 
      </form>
      )
  }

  const form2 =() => {
    if( !props.auth.email) return <div></div>
    else if (props.auth.email === "braumuntenesc@gmail.com")
      return(
        <form className="ui form" onSubmit={handleSubmit2}>
        <label>Încarcă imagine din link</label>
        <input  onChange={handleImageAsLink}
    // allows you to reach into your Link directory and upload image to the browser
          type="text"
        />
         <label>nume</label>
         <input  onChange={handleImageAsName}
    // allows you to reach into your Link directory and upload image to the browser
          type="text"
        />
           <button type ="submit">
                Trimite                          
            </button> 
      </form>
      )
  }

  const  handleSubmit2 = (e)  => {
    e.preventDefault()
    console.log(link, name)
     props.adaugaGalerieFotoLink(link,name)
  }

  
 const handleImageAsLink = (e) => {
  setLink(e.target.value)
}
  
const handleImageAsName = (e) => {
  setname(e.target.value)
}



  const butonDelete =(id, nume, culink) => {
    if( !props.auth.email) return <div></div>
    else if (props.auth.email === "braumuntenesc@gmail.com")
      return(
        <Card.Meta>
             <Button onClick = {()=> props.deleteGalerie(id, nume, culink)}>Șterge</Button>
        </Card.Meta>
      )
  }
    


    const renderList = () => {

        return props.galerie.map((poza) => {
            return (
              <Grid.Column key={poza.id} style={{paddingTop:30}}>
                  <Card centered={true} >
                  <LazyLoadImage
                  
                  
                    height={228.156}
                    width={290}
                    src={poza.imgUrl} // use normal <img> attributes as props
                    /> 
                   
                    <Card.Content>
                      <Card.Header>{poza.name}</Card.Header>
                      
                        {butonDelete(poza.id,poza.name,poza.culink)}
                     
                     
                    </Card.Content>
                
                  </Card>
              </Grid.Column>
            )
            
        })
    }


    return (
        <Layout>
          <Container >
            <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} stackable>
              <Grid.Row>
              <Grid.Column>
                  <Button.Group size='large' >
                      <Button onClick={() => history.push('/Cursuri')}>Du-mă înapoi</Button>
                      <Button.Or text="Sau" ></Button.Or>
                      <Link className= "ui button" to ="/galerievideo">La galeria video</Link>
                  </Button.Group>
                  <Header
                        style = {{paddingTop: 20, paddingBottom: 20}}
                        color = "red"
                        textAlign= "center"
                        size='huge'>Galerie foto
                  </Header>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} >
                  {renderList()}
              </Grid.Row>
            </Grid>
              {form()}
              {form2()}
          </Container>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return{
        auth : state.auth,
        galerie : Object.values(state.galerie),
        dimensiuni: state.dimensiuni
    }
}

export default connect(mapStateToProps,{aducGalerie, deleteGalerie, adaugaGalerieFotoLink})(Galerie)