// rxreducer
const stateGioHang = {
    gioHang: [
        {maSP:2, tenSP:'Iphone x', hinhAnh: 'https://www.viettablet.com/images/detailed/26/iphone-x-lock.png', soLuong: 1, gia: 2000, thanhTien: 2000}
    ]
}

export const gioHangReducer = (state = stateGioHang, action) => {
    console.log(action);
    switch (action.type) {
        case 'MUA_SAN_PHAM':{
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex( spGH => spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong += 1;
            }else{
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA_SAN_PHAM':{
            let gioHangCapNhat = [...state.gioHang];
            // Xoa gio hang dua vao index
            gioHangCapNhat.splice(action.index, 1);
            //Gan gio hang moi cho state.gioHang => render lai giao dien
            state.gioHang = gioHangCapNhat;
            return {...state};
        } 
        case 'TANG_GIAM_SL':{
            const {index, bool} = action;
            let gioHangCapNhat = [...state.gioHang];
            if(bool){
                gioHangCapNhat[index].soLuong += 1;
            }else{
                if(gioHangCapNhat[index].soLuong >1){
                    gioHangCapNhat[index].soLuong -= 1;
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        default:
            return {...state}
    }
}
