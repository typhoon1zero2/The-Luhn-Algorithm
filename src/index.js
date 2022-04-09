import  { StrictMode } from "react";
import ReactDOM from "react";
import './style.css';
import App from './App';
import { BrowserRouter as Route } from 'react-router-dom';

const element = document.getElementById('root')

ReactDOM.render(
    <StrictMode>
        <Route>
            <App />
        </Route>
    </StrictMode>, element
    // document.getElementById('root')
);