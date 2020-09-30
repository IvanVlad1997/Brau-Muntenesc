
import * as ActionTypes from './ActionTypes';
import {  firestore } from '../../firebase/firebase'
import history from '../../history'



export const aducUserii = () => dispatch => {
    return firestore.collection('profiles').get()
    .then(snapshot => {
        
        let useri = [];
        snapshot.forEach(doc => {
            const c = doc.data()
            const email = c.email
            const uid =c.uid
            const nume =c.nume
            const nrTel = c.nrTel
            
            const sumaUltimaPlata =  c.sumaUltimaPlata
            const grupa = c.grupa
            const optiuneAbonament = c.optiuneAbonament
            const comentariu =c.comentariu
            
           
            useri.push({uid, email, nume, nrTel, sumaUltimaPlata, grupa, optiuneAbonament, comentariu})
           
            
        })
        return useri
    })
    .then (useri => dispatch({type:ActionTypes.FETCH_USERS, payload: useri}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}









export const editeazaUser = (id, valori) => dispatch => {
    const date = []
    date.nume = valori.nume
    date.nrTel = valori.nrTel
    
      
 
    date.grupa = valori.grupa
   
 
   
    dispatch({type:ActionTypes.EDITEAZA_USER, payload: date})
  

    
    return firestore.collection('profiles').doc(id).update({
        nume : valori.nume,
        nrTel : valori.nrTel,
       
        grupa: valori.grupa,
   
    })
    .then(()=>{
        if(valori.comentariu) return firestore.collection('profiles').doc(id).update({
             comentariu: valori.comentariu
     })})
    .then(()=> {
        
        history.goBack()})
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}



export const aducPlatile = () => dispatch => {
    return firestore.collection('plati').get()
    .then(snapshot => {
        
        let plati = [];
        snapshot.forEach(doc => {
            const c = doc.data()
           
            const uid =c.uid       
            const sumaUltimaPlata =  c.sumaUltimaPlata
            const optiuneAbonament = c.optiuneAbonament
            const date = c.date
            const platitPanaLa = c.platitPanaLa
            const istoricPlati = c.istoricPlati
           
            plati.push({uid, sumaUltimaPlata, optiuneAbonament, date, platitPanaLa, istoricPlati})
         
        })
        return plati
    })
    .then (Plati => dispatch({type:ActionTypes.FETCH_PLATI, payload: Plati}))
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})

}



export const plateste = (id, valori) => dispatch => {

    firestore.collection("plati").doc(id).get()
    .then(doc => {

        Date.prototype.addDays = function(days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        const plat = {};
        const zi =valori.zi
        const luna = valori.luna
        const an =valori.an
        let  date;
        if (valori.astazi) {
             date = new Date();
        }  
        else{
             date = new Date(an,luna-1,zi)
        }  
        console.log(date)
        var platitPanaLa= date
        plat.date = date
        console.log(plat.date)
        if (valori.optiuneAbonament === 'Abonament')  platitPanaLa=platitPanaLa.addDays(21)
        console.log(platitPanaLa)
        plat.platitPanaLa= platitPanaLa
        const plataNoua = "De la (" + date.toDateString() + ') pana la (' + platitPanaLa.toDateString() + ') cu suma (' + valori.sumaUltimaPlata +') cu tip plata ('+ valori.optiuneAbonament + ')'
       
       plat.optiuneAbonament = valori.optiuneAbonament
       plat.sumaUltimaPlata = valori.sumaUltimaPlata
       plat.id = id
       const arrayvechi = doc.data().istoricPlati
       
      
       arrayvechi.push(plataNoua)
       plat.istoricPlati = arrayvechi

       
      
       
       
      
   dispatch({type:ActionTypes.PLATESTE, payload: plat})
    

    

        return firestore.collection('plati').doc(doc.id).update({
                optiuneAbonament : plat.optiuneAbonament,
                sumaUltimaPlata : plat.sumaUltimaPlata,
                date: plat.date,
                platitPanaLa: plat.platitPanaLa,
                istoricPlati: plat.istoricPlati,
            })
            
    }) 
            
        
     


    .then((doc) => {history.push('/PanouCursanti')})
    .catch(error => {dispatch({type:ActionTypes.FAIL, payload:error})})
}
