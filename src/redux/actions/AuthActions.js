import * as ActionTypes from './ActionTypes';
import { auth, firebaseauth, firestore, firebasestore } from '../../firebase/firebase'
import history from '../../history'

 
export const userRedux = (uid) => (dispatch) => {
    
    return firestore.collection('users').doc(uid).get()
    .then(docRef =>{
         const c = docRef.data()
         const date= {};
         date.email= c.email;
         date.uid = c.uid;
         date.userName = c.user
         date.persistance =  c.persistance
         date.LoggedWith = c.LoggedWith
        
     
         dispatch({type: ActionTypes.FETCH_USER, payload:date})
     })
     .catch(error => (dispatch({type: ActionTypes.FAIL, payload: error})))

}



export const loginUser = (creds) => (dispatch) => {
    dispatch({type:ActionTypes.LOGIN_REQUEST})
    if (creds.persistance === true)  auth.setPersistence(firebaseauth.Auth.Persistence.SESSION)
    return auth.signInWithEmailAndPassword(creds.user,creds.password)
    .then((c) => {
        console.log(c)
        const date= {};
        date.email= c.user.email;
        date.uid = c.user.uid;
        date.userName = creds.user
        date.LoggedWith = 'Email and password'
        date.persistance =  creds.persistance
    
        dispatch({type:ActionTypes.LOGIN_SUCCESS, payload: date})
        return date})
        .then((d) => {firestore.collection('users').doc(d.uid).set({
          email: d.email,
          uid : d.uid,
          userName : d.userName,
          password : creds.password,
          LoggedWith : d.LoggedWith,
          persistance :  d.persistance,
         

 
        })
          
          console.log(d)
          return d;
      })
        .then((d) => { 
         
            firestore.collection("profiles").doc(d.uid).get()
            .then(doc => {
              if (doc.exists) {
                
              }
              else
                firestore.collection('profiles').doc(d.uid).set({
                email: d.email,
                uid : d.uid,
                nume : 'Nume',
                nrTel : 'Telefon',
                grupa: 'Fără grupă',
            })    
              
          })
          return d
        }
        )
        .then((d) => {
          console.log(d)
          firestore.collection("plati").doc(d.uid).get()
          .then(doc => {
            if (doc.exists) {
              return 
            }
            else
            return firestore.collection('plati').doc(d.uid).set({
              uid : d.uid,
             optiuneAbonament: 'Optiune Abonament',
             date: new Date(),
             platitPanaLa: new Date(),
             sumaUltimaPlata: '0',
             istoricPlati: [],
             
          })    
         
        })
        })
        .then(history.push("/"))
        .catch(error => (dispatch({type: ActionTypes.LOGIN_FAILURE, payload: error})))


      
}


export const logoutUser = () => (dispatch) => {
    dispatch({type:ActionTypes.LOGOUT_REQUEST})
    auth.signOut().then(() => {
        dispatch({type:ActionTypes.LOGOUT_SUCCESS})
      }).catch((error) => {
        dispatch({type: ActionTypes.LOGOUT_FAILURE, payload: error})
      });
    
}


export const singupUser = (creds) => (dispatch) => {
    dispatch({type:ActionTypes.SINGUP_REQUEST})
    auth.createUserWithEmailAndPassword(creds.user,creds.password)

    .then((c)=>{
        dispatch({type:ActionTypes.SINGUP_SUCCESS})
       
      
                })
        .then(() =>  dispatch(loginUser(creds)))
        .then(history.push("/"))
      .catch(error => dispatch({type: ActionTypes.SINGUP_FAILURE, payload: error}))

}

 
//google


export const googleLogin = () => (dispatch) => {
    const provider = new firebaseauth.GoogleAuthProvider()

    dispatch({type:ActionTypes.LOGIN_REQUEST})
   
    return auth.signInWithPopup(provider)
    .then((c) => { 
        console.log(c.user)
        const date= {};
        date.email= c.user.email;
        date.uid = c.user.uid;
        date.userName = c.user.displayName
        date.password = 'parola'
        date.LoggedWith = 'Google'
        date.persistance =  true
        dispatch({type:ActionTypes.LOGIN_SUCCESS, payload: date})
        return date})
        .then((d) => { firestore.collection('users').doc(d.uid).set({
        email: d.email,
        uid : d.uid,
        userName : d.userName,
        LoggedWith : d.LoggedWith,
        persistance :  d.persistance
        })
        return d;
      })
      .then((d) => {     
        firestore.collection("profiles").doc(d.uid).get()
        .then(doc => {
          if (doc.exists) {
            return 
          }
          else
          return firestore.collection('profiles').doc(d.uid).set({
            email: d.email,
            uid : d.uid,
            nume : 'Nume',
            nrTel : 'Telefon',
            grupa: 'Fără grupă',
            sumaUltimaPlata :'Ultima Plata',
            optiuneAbonament : 'Optiune Abonament',
        })    
       
      })
      return d;
    
    }
    )
    .then((d) => {
      console.log(d)
      firestore.collection("plati").doc(d.uid).get()
      .then(doc => {
        if (doc.exists) {
          return 
        }
        else
        return firestore.collection('plati').doc(d.uid).set({
          uid : d.uid,
         optiuneAbonament: 'Optiune Abonament',
         date: new Date(),
         platitPanaLa: new Date(),
         sumaUltimaPlata: '0',
         istoricPlati: [],
      })    
     
    })
    })
        .then(history.push("/"))
        .catch(error => (dispatch({type: ActionTypes.LOGIN_FAILURE, payload: error})))
    
}


