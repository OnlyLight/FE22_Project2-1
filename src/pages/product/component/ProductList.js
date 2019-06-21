import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from "./ProductItem";

import { addItemSelected } from '../../../redux/actions';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onShowDetail = this.onShowDetail.bind(this);
    }

    onClickAdd(item) {
        return (event) => {
            const { productSelected, add } = this.props;
            let countObject = productSelected;

            if (!countObject) { // First Array Check Count Init
                countObject = [];
                countObject.push({...item, count: 1, status: 1})
            }
            else { // Array Check Count exist
                let idx = countObject.findIndex(obj => obj.id === item.id); // Get index of element in Array Check Count
                if (idx > -1) // Found element in Array Check Count
                    countObject[idx].count += 1;
                else // Don't Found element in Array Check Count
                    countObject.push({...item, count: 1, status: 1})
            }
            localStorage.setItem('id-item--cart', JSON.stringify(countObject)); // Set LocalStorage for Array Check Count
            add(countObject);
        }
    }

    onShowDetail(item) {
        return event => {
            let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
            if (!arrItemRecently) arrItemRecently = [];

            let findItem = arrItemRecently.findIndex(it => it.id === item.id);
            if (findItem <= -1) {
                arrItemRecently.push(item);
            }

            localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
            window.location.href = '/detail';
        }
    }

    render() {
        const { products } = this.props;
        return(
            <div className="product_list--item">
                {
                    products.map((item, idx) => <ProductItem key={idx}
                                                             productName={item.productName}
                                                             decription={item.decription}
                                                             price={item.price}
                                                             productNameList={item.productNameList}
                                                             decriptionList={item.decriptionList}
                                                             path={item.image}
                                                             onClick={this.onClickAdd(item)}
                                                             onShowDetail={this.onShowDetail(item)}/>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        productSelected: state.productSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item) => {
            dispatch(addItemSelected(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
