import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import {AuthUser} from './reducers/AuthUser'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import error from './reducers/error'
import {Auth} from './reducers/user'
import { createForms } from 'react-redux-form';
import {UserDetails} from './reducers/userDetails'
import {Profiles} from './reducers/listProfiles'
import {plata} from './reducers/plata'
import {Plati} from './reducers/Plateste'
import {programAdauga} from './reducers/programAdaugare'
import {program} from './reducers/program'
import {preturiAdauga } from './reducers/adaugaPreturi'
import { preturi } from './reducers/preturi'
import {videoYT} from './reducers/videoYT'
import {videoYTadauga} from './reducers/videoYTadauga'
import {Galerie} from './reducers/galerie'
import {GalerieVideo} from './reducers/galerieVideo'
import {galerieVideo} from './reducers/adaugaGalerieVideo'
import {Dimensiuni} from './reducers/dimensions'
import {GalerieVideoEvenimente} from './reducers/galerieEvenimente'
import {contactEveniment} from './reducers/contactEvenimente'
import {alegeGrupa} from './reducers/AlegeGrupa'
import {CategorieReducer} from './CategorieAtelier/CategorieAtelierReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth : AuthUser,
            error: error,
            profiles: Profiles,
            plati: Plati,
            program: program,
            preturi: preturi,
            videoYT: videoYT,
            galerie: Galerie,
            GalerieVideo: GalerieVideo,
            dimensiuni: Dimensiuni,
            GalerieVideoEvenimente: GalerieVideoEvenimente,
            CategorieReducer,
            

            ...createForms({
                UserDetails: UserDetails,
                user: Auth,
                plata: plata,
                programAdauga: programAdauga,
                preturiAdauga: preturiAdauga,
                videoYTAdauga: videoYTadauga,
                galerieVideoAdauga: galerieVideo,
                contactEvenimente: contactEveniment,
                alegeGrupa:alegeGrupa,
            })
        }),
        composeEnhancers(applyMiddleware(thunk, logger))
        );
        
        return store;
        
        
}