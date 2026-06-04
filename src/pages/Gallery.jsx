import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <img src="/HomePage/resources/logo.png" alt="ギャラリー" className="logo" />
      <h1 className="page-title">作品一覧</h1>
      
      <div className="glass-container grid-nav" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <Link to="/pdf/game" className="btn-glass">
          <img src="/HomePage/resources/planetImage.png" alt="プレイ可能作品:ローグライト" style={{width:'150px', height:'150px'}} />
          <p>プレイ可能作品:ローグライト</p>
        </Link>
        <Link to="/pdf/kinnenn" className="btn-glass">
          <img src="/HomePage/resources/smoking.png" alt="企画書：3Dアクション" style={{width:'150px', height:'150px'}} />
          <p>企画書：3Dアクション</p>
        </Link>
        <Link to="/pdf/proposal1" className="btn-glass">
          <img src="/HomePage/resources/bonfire.png" alt="企画書：見下ろし形探索" style={{width:'150px', height:'150px'}} />
          <p>企画書：見下ろし形探索</p>
        </Link>
        <Link to="/pdf/proposal2" className="btn-glass">
          <img src="/HomePage/resources/card.png" alt="企画書：カードゲーム" style={{width:'150px', height:'150px'}} />
          <p>企画書：カードゲーム</p>
        </Link>
        <Link to="/tierlist" className="btn-glass">
          <img src="/HomePage/image/tierImage/tier.png" alt="ゲームプレイリストとtier表" style={{width:'150px', height:'150px'}} />
          <p>ゲームプレイリストとtier表</p>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
