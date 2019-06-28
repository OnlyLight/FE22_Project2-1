import React, { Component } from 'react';

class RowItemProduct extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">
                    <img className="img-fluid" src="../../../../images/HOME/product_2.jpg" alt="product-bought"/>
                </td>
                <td className="text-center">
                    <div className="table--item content--cart"><span>a</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>100.000đ</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>Mô tả</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>abc</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>bbb</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item"><span>ccc</span></div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <input type="checkbox"/>
                    </div>
                </td>
                <td className="text-center">
                    <div className="table--item">
                        <button className="btn btn-warning">Sửa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default RowItemProduct;