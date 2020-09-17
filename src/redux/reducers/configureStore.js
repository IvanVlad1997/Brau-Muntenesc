import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import {AuthUser} from './AuthUser'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import error from './error'
import {Auth} from './user'
import { createForms } from 'react-redux-form';
import {UserDetails} from './userDetails'
import {Profiles} from './listProfiles'
import {plata} from './plata'
import {Plati} from './Plateste'
import {programAdauga} from './programAdaugare'
import {program} from './program'
import {preturiAdauga } from './adaugaPreturi'
import { preturi } from './preturi'
import {videoYT} from './videoYT'
import {videoYTadauga} from './videoYTadauga'
import {Galerie} from './galerie'
import {GalerieVideo} from './galerieVideo'
import {galerieVideo} from './adaugaGalerieVideo'
import {Dimensiuni} from './dimensions'
import {GalerieVideoEvenimente} from './galerieEvenimente'
import {contactEveniment} from './contactEvenimente'
import {alegeGrupa} from './AlegeGrupa'

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