import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/core-ui.css';
import './css/style.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
