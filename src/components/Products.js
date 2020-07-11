import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

function Products(props) {
    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(
                <>
            <h3 className="prodName" key={i}>{props.products[i].name}</h3>
            <img className="prodImg" key={i} src={props.products[i].imgURL} alt={props.products[i].name} /> 
            <p className="prodDesc" key={i}>{props.products[i].description}</p>
            <p className="prodPrice" key={i}>Price: ${props.products[i].price}</p>
            <p className="prodStock" key={i}>Quantity in Stock: {props.products[i].stock}</p>
            <Button variant="contained" color="primary" disableElevation>
                ADD TO CART
            </Button> 
                </>
            ) }

            return (
                <>
                    <h2>Products</h2>
                    {productsHTML}
                </>
            );
        }


// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent
const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentCategory: state.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);