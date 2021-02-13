import React, { Component } from 'react';
//Coonec to STore
import { connect } from 'react-redux';

class ChiTietSanPham extends Component {

    render() {
        const { sanPham } = this.props;

        return (
            <div className="card" style={{ width: 200 }}>
                <img className="card-img-top" src={sanPham.hinhAnh} alt="" width={50} height={200} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <button 
                        className="btn btn-success"
                        onClick={() => this.props.muaSanPham(sanPham)}>
                        Mua sản phẩm
                    </button>
                </div>
            </div>
        )
    }
}

// Xay dung ham dua du lieu duoc chon len STore

const mapDispatchToProps = (dispatch) => {
    return {
        // tao ra props component la function giup dua du lieu len store
        muaSanPham: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                gia: sanPham.gia,
                soLuong: 1
            }
        console.log(sanPham);
        // Tao action dua du lieu len store con (reducer)
            const action = {
                type: 'MUA_SAN_PHAM',
                spGioHang // du lieu duoc gui di
            }
        // Dung ham dispatch dua du lieu action len reducer
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ChiTietSanPham);