import React, { Component } from 'react';
import PhoneData from '../data/PhoneData.json';
import ChiTietSanPham from './ChiTietSanPham';

export default class DanhSachSanPham extends Component {

    // SHOW PHONEDATA
    showSanPham = () => {
        return PhoneData.map((sanPham, index) => {
            return (
                <div className="col-3" key={index}>
                    <ChiTietSanPham sanPham={sanPham}/>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center text-primary">DANH SACH SAN PHAM</h3>
                <div className="row">
                {this.showSanPham()}
                </div>
            </div>
        )
    }
}
