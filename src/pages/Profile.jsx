import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <img src="/HomePage/resources/logo.png" alt="プロフィール" className="logo" />
      <h1 className="page-title">私について</h1>
      
      <div className="glass-container grid-nav">
        {/* PDF pages are rendered using the dynamic PdfPage component */}
        <a href="/HomePage/resources/resume.zip" className="btn-glass" download="resume.zip">
          <img src="/HomePage/resources/rirekisho.png" alt="履歴書とか" />
          <p>履歴書とか</p>
        </a>
        <Link to="/pdf/works" className="btn-glass">
          <img src="/HomePage/resources/shokureki.png" alt="ザックリとした職歴" />
          <p>ザックリとした職歴</p>
        </Link>
        <Link to="/pdf/hobby" className="btn-glass">
          <img src="/HomePage/resources/hobby.png" alt="趣味" />
          <p>趣味</p>
        </Link>
      </div>
    </>
  );
};

export default Profile;
