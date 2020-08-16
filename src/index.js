import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Dashboard } from './components/Dashboard/Dashboard';

//! El ReactDOM es la vitualizacion o dibujado de los elementos/componentes que creamos en la web
ReactDOM.render(<Dashboard />, document.getElementById('root'));

// TODO: Para intergar SASS dentro de un proyecto de React debemos de instalar 'npm i node-sass'
