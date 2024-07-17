import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom';

const Layout = () => {
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1); // 이전 페이지로 이동
  // };
  // const goArticles = () => {
  //   navigate('/articles'); // articles 경로로 이동
  // };
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
				<h1><Link to="/">홈</Link></h1>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about?mode=true">소개</Link>
            {/* <Link to="/about">소개</Link> */}
          </li>
          <li>
            <Link to="/profile/velopert">velopert 프로필</Link>
          </li>
          <li>
            <Link to="/profile/gildong">gildong 프로필</Link>
          </li>
          <li>
            <Link to="/profile/jykang">jykang 프로필</Link>
          </li>
          <li>
            <Link to="/articles">게시글 목록</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
