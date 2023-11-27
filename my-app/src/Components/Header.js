import React from 'react';
// components
import Topbar from './Topbar';
import Sidebar from './Sidebar';
// style
import '../Styles/Header.css';

function Header(props) {
    return(
        <>

        {/* desktop 메뉴 */}
        <div className='menu-desktop-mode'>
            <Topbar />
        </div>

        {/* mobile 메뉴 */}
        <div className='menu-mobile-mode'>
            <Sidebar />
        </div>

        </>
    );
}

export default Header;
