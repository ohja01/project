import React from 'react';
import styled from 'styled-components';
// style
import '../Styles/TopbarStyle.css';
// image
import logo from '../Images/logo.png'

const Logo = styled.img`
    width: 100px;
`;
const Menu = styled.div`
    background-color: #808080;
    display: flex;
`;
const Nav = styled.nav`
    display: flex;
`;
const Item = styled.li`
    padding: 0 10px;
    height: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    cursor: pointer;
    &:hover {
        background-color: #ffffff;
        border-bottom: 3px solid black;
    }
`;

function Topbar(props) {
    return(
        <Menu>

        {/* 로고 이미지 : Home 링크 연결 */}
        <div className='logo'>
            <Logo src={logo}></Logo>
        </div>

        {/* 각 메뉴 링크 연결 (+ 네비게이션 기능??) */}
        <Nav className='menu'>
            <Item>menu1</Item>
            <Item>menu2</Item>
            <Item>menu3</Item>
            <Item>menu4</Item>
            <Item>menu5</Item>
        </Nav>

        {/* 로그인 / 회원가입 : 로그인 후 내정보 및 로그아웃 버튼으로 변경 */}
        <Nav className='register'>
            <div>로그인</div>
            <div>회원가입</div>
        </Nav>
        
        </Menu>
    )
}

export default Topbar;
