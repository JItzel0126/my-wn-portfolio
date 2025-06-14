import './Header.css';

function Header() {
    return(
        <header className="header">
            <div className="header-logo">
            <h2>Web Novel</h2>
            </div>
            <div className="header-info">
            <ul>
                <li>회원가입</li>
                <li>로그인</li>
                <li>마이페이지</li>
            </ul>
            </div>
        </header>
    );
}

export default Header;