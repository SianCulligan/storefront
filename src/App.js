  
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/styles.scss';

import Products from './components/storefront/Products';
import Categories from './components/storefront/Categories';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import { Container, CssBaseline } from '@material-ui/core';

function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <div className='App'>
                <Header />
                <Container maxWidth='sm'>
                    <Categories />
                    <Products />
                </Container>
                {/* <Footer /> */}
            </div>
        </Provider>
    );
}

export default App;