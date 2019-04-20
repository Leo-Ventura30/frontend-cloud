import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Box from './pages/Box';

//Brouter => define o tipo que aparecera subpasta na URL
//switch => garante que cada endereço chame 1 rota
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path= "/" exact component= {Main} />
            <Route path= "/box/:id" component= {Box} />
        </Switch>  
    </BrowserRouter>
);

export default Routes;