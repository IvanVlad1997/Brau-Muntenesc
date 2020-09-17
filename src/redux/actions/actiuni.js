
import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore, storage } from '../../firebase/firebase'
import history from '../../history'


export const adaugaProgram = (p) => (dispatch) => {
    return firestore.collection('program').add({
        zi: p.zi,
        ora: p.ora
    })
    .then((doc)=> {
            const date = {}
            date.zi = p.zi
            date.ora = p.ora
            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_PROGRAM, payload: date})
    })
}



export const aducProgram = () => dispatch => {
    return firestore.collection('program').get()
    .then(snapshot => {
        
        let program = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const zi = c.zi
            const ora =c.ora
            const id =doc.id
            
           
            program.push({zi, ora, id})
           
            
        })
        return program
    })
    .then (program => dispatch({type:ActionTypes.FETCH_PROGRAMS, payload: program}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteProgram = (id) => dispatch => {
    return firestore.collection('program').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_PROGRAM, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}




export const adaugaPreturi = (p) => (dispatch) => {
    return firestore.collection('preturi').add({
        categorie: p.categorie,
        pret: p.pret
    })
    .then((doc)=> {
            const date = {}
            date.categorie = p.categorie
            date.pret = p.pret
            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_PRETURI, payload: date})
    })
}



export const aducPreturi = () => dispatch => {
    return firestore.collection('preturi').get()
    .then(snapshot => {
        
        let preturi = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const pret = c.pret
            const categorie =c.categorie
            const id =doc.id
            
           
            preturi.push({pret, categorie, id})
           
            
        })
        return preturi
    })
    .then (preturi => dispatch({type:ActionTypes.FETCH_PRETURI, payload: preturi}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deletePreturi = (id) => dispatch => {
    return firestore.collection('preturi').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_PRETURI, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

//VIDEO

export const adaugaVideo = (p) => (dispatch) => {
    return firestore.collection('video').add({
        titlu: p.titlu,
        link: p.link
    })
    .then((doc)=> {
            const date = {}
            date.titlu = p.titlu
            date.link = p.link
            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_VIDEO, payload: date})
    })
}



export const aducVideo = () => dispatch => {
    return firestore.collection('video').get()
    .then(snapshot => {
        
        let video = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const link = c.link
            const titlu =c.titlu
            const id =doc.id
            
           
            video.push({link, titlu, id})
           
            
        })
        return video
    })
    .then (video => dispatch({type:ActionTypes.FETCH_VIDEO, payload: video}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteVideo = (id) => dispatch => {
    return firestore.collection('video').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_VIDEO, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}




export const aducGalerie = () => dispatch => {
    return firestore.collection('galerie').get()
    .then(snapshot => {
        
        let galerie = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const imgUrl = c.imgUrl
            const name =c.name
            const id =doc.id
            const culink = c.culink
            
           
            galerie.push({imgUrl, name, id, culink})
           
            
        })
        return galerie
    })
    .then (galeri => dispatch({type:ActionTypes.FETCH_GALERIE, payload: galeri}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}


export const deleteGalerie = (id, nume, culink) => dispatch => {
   
    var desertRef = storage.ref().child(`images/${nume}`);
    console.log(culink)
// Delete the file

  // File deleted successfully
    return firestore.collection('galerie').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_GALERIE, payload: id}))
    .then(() => { console.log(desertRef)
        if (!culink) desertRef.delete()})
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})
}
  





export const adaugaGalerieVideo = (p) => (dispatch) => {
    return firestore.collection('GalerieVideo').add({
        link: p.link
    })
    .then((doc)=> {
            const date = {}
            date.link=p.link

            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_GALERIEVIDEO, payload: date})
    })
}



export const aducGalerieVideo = () => dispatch => {
    return firestore.collection('GalerieVideo').get()
    .then(snapshot => {
        
        let GalerieVideo = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const link = c.link
           
            const id =doc.id
            
           
            GalerieVideo.push({link, id})
           
            
        })
        return GalerieVideo
    })
    .then (video => dispatch({type:ActionTypes.FETCH_GALERIEVIDEO, payload: video}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteGalerieVideo = (id) => dispatch => {
    return firestore.collection('GalerieVideo').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_GALERIEVIDEO, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}



export const schimbaDimensiuni= ( width, height) => dispatch => {
    const dim= {}
    dim.height = height
    dim.width = width
    dispatch({type:ActionTypes.SCHIMBA_DIMENSIUNI, payload:dim})
}


export const adaugaGalerieFotoLink = (link, nume) => (dispatch) => {

    return firestore.collection('galerie').add({
        imgUrl: link,
        name: nume,
        culink: true
    })
    .then((doc)=> {
            const date = {}
            date.link=link
            date.nume = nume
            date.culink = true

            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_GALERIE, payload: date})
    })
}



export const adaugaGalerieVideoEvenimente = (p) => (dispatch) => {
    return firestore.collection('GaleriVideoEvenimente').add({
        link: p.link
    })
    .then((doc)=> {
            const date = {}
            date.link=p.link

            date.id = doc.id
            dispatch({type: ActionTypes.ADAUGA_GALERIEVIDEOEVENIMENTE, payload: date})
    })
}



export const aducGalerieVideoEvenimente = () => dispatch => {
    return firestore.collection('GaleriVideoEvenimente').get()
    .then(snapshot => {
        
        let GaleriVideoEvenimente = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const link = c.link
           
            const id =doc.id
            
           
            GaleriVideoEvenimente.push({link, id})
           
            
        })
        return GaleriVideoEvenimente
    })
    .then (video => dispatch({type:ActionTypes.FETCH_GALERIEVIDEOEVENIMENTE, payload: video}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteGalerieVideoEvenimente = (id) => dispatch => {
    return firestore.collection('GaleriVideoEvenimente').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_GALERIEVIDEOEVENIMENTE, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const trimiteCerereEveniment = (creds) => dispatch => {
    return firestore.collection('CereriEveniment').add({
      nume : creds.nume,
      email : creds.email,
      telefon : creds.telefon,
      dataEveniment : creds.dataEveniment,
      oras : creds.oras,
      restaurant : creds.restaurant,
      nrPerechi : creds.nrPerechi,  
    })
    .then(()=> {
        const templateId = 'template_GttVimcA'
        // sendFeedback (templateId, variables) {
            window.emailjs.send(
              'gmail', templateId ,
              creds
              ).then(res => {
                console.log('Email successfully sent!')
              })
              .then(() =>{ history.push('/') 
                            alert('Cererea a fost trimisă. Vă vom contacta în cel mai scurt timp')})
              // Handle errors here however you like, or use a React error boundary
              .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
          
    })
}
