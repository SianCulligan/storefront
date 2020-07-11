import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { Header, Categories, Products, } from './components/CompontentIndex';

import "./styles/styles.css"

// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />

                <Categories />
                <Products />
            </div>
        </Provider>
    );
}

export default App;