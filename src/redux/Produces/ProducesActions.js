import * as ActionTypes from './ProducesConstants'
import {  firestore} from '../../firebase/firebase'
import history from '../../history'

export const adaugaProdus = (p) => (dispatch) => {
    return firestore.collection('produs').add({
       categorie: p.categorie,
       descriere: p.descriere,
       linkImagine: p.linkImagine,
       linkImagine1: p.linkImagine1,
       linkImagine2: p.linkImagine2,
       linkImagine3: p.linkImagine3,
       linkImagine4: p.linkImagine4,
       culoare: p.culoare,
       marime: p.marime,
       pret: p.pret

    })
    .then(()=> {
            const date = {}
            date.categorie = p.categorie
            date.descriere = p.descriere
            date.linkImagine = p.linkImagine
            date.linkImagine1 = p.linkImagine1
            date.linkImagine2 = p.linkImagine2
            date.linkImagine3 = p.linkImagine3
            date.linkImagine4 = p.linkImagine4
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
            const linkImagine1 = c.linkImagine1
            const linkImagine2 = c.linkImagine2
            const linkImagine3 = c.linkImagine3
            const linkImagine4 = c.linkImagine4
            const marime = c.marime
            const pret = c.pret
            const culoare = c.culoare
            const id =doc.id
            
           
            produse.push({categorie, descriere, linkImagine, linkImagine2, linkImagine3, linkImagine4, linkImagine1, culoare, pret, marime,  id})
           
            
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
