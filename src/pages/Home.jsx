import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <img src="/HomePage/resources/logo.png" alt="亀山健志のポートフォリオ" className="logo" />
      <h1 className="page-title">亀山健志のポートフォリオ</h1>
      
      <div className="glass-container grid-nav">
        <Link to="/profile" className="btn-glass">
          <img src="/HomePage/resources/human.png" alt="私について" />
          <p>私について</p>
        </Link>
        <Link to="/gallery" className="btn-glass">
          <img src="/HomePage/resources/art.png" alt="作品とか" />
          <p>作品とか</p>
        </Link>
        <Link to="/contact" className="btn-glass">
          <img src="/HomePage/resources/mail.png" alt="連絡先とか" />
          <p>連絡先とか</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
