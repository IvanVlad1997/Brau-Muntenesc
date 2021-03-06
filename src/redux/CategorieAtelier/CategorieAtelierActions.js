import * as ActionTypes from '../CategorieAtelier/CategorieAtelierConstants'
import { firestore } from '../../firebase/firebase'
import history from '../../history'

export const adaugaCategorie = (p) => (dispatch) => {
    return firestore.collection('categorieAtelier').add({
       numeCategorie: p.numeCategorie,
       descriere: p.descriere,
       linkImagine: p.linkImagine

    })
    .then((r)=> {
            const date = {}
            date.numeCategorie = p.numeCategorie
            date.descriere = p.descriere
            date.linkImagine = p.linkImagine
            date.id= r.id
            dispatch({type: ActionTypes.ADAUGA_CATEGORIE, payload: date})
    })
    .then (() => history.push('/'))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})
}



export const aducCategorie = () => dispatch => {
    return firestore.collection('categorieAtelier').get()
    .then(snapshot => {
        
        let Categorie = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const numeCategorie = c.numeCategorie
            const descriere =c.descriere
            const linkImagine = c.linkImagine
            const id =doc.id
            
           
            Categorie.push({numeCategorie, descriere, linkImagine, id})
           
            
        })
        return Categorie
    })
    .then (data => dispatch({type:ActionTypes.FETCH_CATEGORIE, payload: data}))
    
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteCategorie = (id) => dispatch => {
    return firestore.collection('categorieAtelier').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_CATEGORIE, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}
