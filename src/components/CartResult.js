import React, { Component } from 'react';

class CardResult extends Component {
    render() {
        const { cartResult } = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{ cartResult }$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CardResult;
