import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store'
import {ConnectedDashboard} from "./Dashboard";
import {Route} from 'react-router-dom';
import { ConnectedNavigation } from "./Navigation"
import {history} from '../store/history';
import {Router} from "react-router-dom";

//This will be our main Component from where we work.
export const Main = () => (
   <Router history={history}>
       <Provider store={store}>
           <div>
               <ConnectedNavigation/>
               <Route exact path='/dashboard'
                      render={() => (<ConnectedDashboard/>)}
                      />
           </div>
       </Provider>
   </Router>
)