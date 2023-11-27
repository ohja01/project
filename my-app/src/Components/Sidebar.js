import React from 'react';
import styled from 'styled-components';
// style
import '../Styles/SidebarStyle.css';

const Logo = styled.img`
    width: 100px;
`;
const Menu = styled.div`
    background-color: #808080;
`;

function Sidebar(props) {
    return(
        <Menu>
            test
        </Menu>
    )
}

export default Sidebar;
