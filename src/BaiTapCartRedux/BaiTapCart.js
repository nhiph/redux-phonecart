import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalSanPham from './ModalSanPham';

export default class BaiTapCart extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-info">BÀI TẬP GIỎ HÀNG REDUX</h3>
                <ModalSanPham />
                <DanhSachSanPham />
            </div>
        )
    }
}
