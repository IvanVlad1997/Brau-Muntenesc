import * as ActionTypes from './ProducesConstants'
import {  firestore} from '../../firebase/firebase'
import history from '../../history'

export const adaugaProdus = (p) => (dispatch) => {
    return firestore.collection('produs').add({
       categorie: p.categorie,
       descriere: p.descriere,
       linkImagine: p.linkImagine,
       culoare: p.culoare,
       marime: p.marime,
       pret: p.pret

    })
    .then(()=> {
            const date = {}
            date.categorie = p.categorie
            date.descriere = p.descriere
            date.linkImagine = p.linkImagine
            date.culoare = p.culoare
            date.marime = p.marime
            date.pre = p.pret
            dispatch({type: ActionTypes.ADAUGA_PRODUS, payload: date})
    })
    .then (() => history.push('/'))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})
}



export const aducProduse = () => dispatch => {
    return firestore.collection('produs').get()
    .then(snapshot => {
        
        let produse = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const categorie = c.categorie
            const descriere =c.descriere
            const linkImagine = c.linkImagine
            const marime = c.marime
            const pret = c.pret
            const culoare = c.culoare
            const id =doc.id
            
           
            produse.push({categorie, descriere, linkImagine, culoare, pret, marime,  id})
           
            
        })
        return produse
    })
    .then (data => dispatch({type:ActionTypes.FETCH_PRODUS, payload: data}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}

export const deleteProdus = (id) => dispatch => {
    return firestore.collection('produs').doc(id).delete()
    .then(()=> dispatch({type: ActionTypes.DELETE_PRODUS, payload: id}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}
