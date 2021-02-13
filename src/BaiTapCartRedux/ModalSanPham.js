import React, { Component } from 'react';
// Kết nối redux store va component
import { connect } from 'react-redux';

 class ModalSanPham extends Component {


    showGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return(
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td><img src={spGH.hinhAnh} alt="" width={60} height={70}/></td>
                    <td>{spGH.gia}</td>
                    <td>
                        <button 
                            className="btn btn-primary mr-3"
                            onClick={() => this.props.tangGiamSoLuongID(index, true)}
                        >+</button>
                        {spGH.soLuong}
                        <button 
                            className="btn btn-primary ml-3"
                            onClick={() => this.props.tangGiamSoLuongID(index, false)}
                        >-</button>
                    </td>
                    <td>{spGH.soLuong * spGH.gia}</td>
                    <td><button 
                        className="btn btn-danger"
                        onClick={() => this.props.xoaSanPham(index)}
                    >Xóa</button></td>
                </tr>
            );
        })
    }

    render() {
        let {gioHang} = this.props;
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>MÃ SP</th>
                            <th>TÊN SP</th>
                            <th>HÌNH ẢNH</th>
                            <th>ĐƠN GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>THÀNH TIỀN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showGioHang()}
                    </tbody>
                    <tfoot>
                        <td colSpan="5"></td>
                        <td>Tổng tiền</td>
                        <td>
                        {this.props.gioHang.reduce((tongtien, spGioHang, index) => {
                            return tongtien += spGioHang.soLuong*spGioHang.gia;
                        },0)}
                        </td>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        gioHang: state.gioHangReducer.gioHang // nhận state từ store, vào gioHangReducer truy xuâts vô gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        xoaSanPham: (index) => {
            const action = {
                type: 'XOA_SAN_PHAM',
                index // du lieu duoc gui di
            }
            // du action len reducer xu ly
            dispatch(action);
        },

        tangGiamSoLuongID: (index, bool) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index, // du lieu duoc gui di
                bool
            }
            // du action len reducer xu ly
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSanPham);