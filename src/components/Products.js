import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

function Products(props) {
    let productsHTML = [];
    // let productCategory = [];

    // for (let i = 0; i < props.products.length; i++) {
    // if (props.products[i].category === props.currentCategory)
    //         productCategory.push(
    //             <> 
    //              <p className="prodCat" >{props.products[i].category}</p>
    //             </>)}

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory) {
        console.log('PRODUCTS', props.products[i].category);

            productsHTML.push(
                <div key={i}>
             <h3 className="prodName" >{props.products[i].name}</h3>
             
           <img className="prodImg" src={props.products[i].imgURL} alt={props.products[i].name} /> 
            <p className="prodDesc" >{props.products[i].description}</p>
            <p className="prodPrice" >Price: ${props.products[i].price}</p>
            <p className="prodStock" >Quantity in Stock: {props.products[i].stock}</p>
            <Button variant="contained" color="primary" disableElevation>
                ADD TO CART
            </Button>  
                </div>
            ) }}
    
            return (
                <>
                    <h2>Products</h2>
                    {/* {productCategory[0]} */}
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