import * as ActionTypes from '../CategorieAtelier/CategorieAtelierConstants'
import { auth, firestore, fireauth, firebasestore, storage } from '../../firebase/firebase'
import history from '../../history'

export const adaugaCategorie = (p) => (dispatch) => {
    return firestore.collection('categorieAtelier').add({
       numeCategorie: p.categorie,
       descriere: p.descriere,
       linkImagine: p.linkImagine

    })
    .then((doc)=> {
            const date = {}
            date.categorie = p.categorie
            date.descriere = p.descriere
            date.linkImagine = p.linkImagine
            dispatch({type: ActionTypes.ADAUGA_CATEGORIE, payload: date})
    })
}



export const aducCategorie = () => dispatch => {
    return firestore.collection('categorieAtelier').get()
    .then(snapshot => {
        
        let Categorie = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const categorie = c.categorie
            const descriere =c.descriere
            const linkImagine = c.linkImagine
            const id =doc.id
            
           
            Categorie.push({categorie, descriere, linkImagine, id})
           
            
        })
        return Categorie
    })
    .then (data => dispatch({type:ActionTypes.FETCH_CATEGORIE, payload: data}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

// export const deleteProgram = (id) => dispatch => {
//     return firestore.collection('program').doc(id).delete()
//     .then(()=> dispatch({type: ActionTypes.DELETE_PROGRAM, payload: id}))
//     .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

// }
