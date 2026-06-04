import React from 'react';

const MyProducts = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        開発中作品：ローグライトシューティング
      </h1>

      {/* Section 1 */}
      <div className="glass-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 300px' }}>
          <img 
            src="/HomePage/image/sakura_cover.png?v=2" 
            alt="SakuraSupremeShooter" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }} 
          />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ff7eb3' }}>
            ローグライトシューティングゲーム<br/>「SakuraSurpremeShooter」
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            パーツを集めて弾を改造。<br/>
            激難シューティングをぬるゲー化する爽快なゲーム体験。
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="glass-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <img 
            src="/HomePage/image/sakura_proto.png?v=2" 
            alt="プロトタイプ版" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }} 
          />
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
            <iframe 
              src="https://www.youtube.com/embed/Mf1hVZgdM6M" 
              title="TGCA応募動画" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#00c6ff' }}>
            - プロトタイプ版 -
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
            ゲームの方針が固まり切らず、画面作りが甘かった頃のバージョン。
          </p>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '4px solid #00c6ff' }}>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>TGCAに応募した際の記録動画を右に掲載しています。</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="glass-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 300px' }}>
          <img 
            src="/HomePage/image/sakura_alpha.png?v=2" 
            alt="開発中のアルファ版" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }} 
          />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#00f2fe' }}>
            開発中のアルファ版
          </h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#e0e0e0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              花 + 弾幕シューティング + ローグライトの方針を固めきり、現在鋭意製作中！
            </li>
            <li>
              デザイン面を強化するため、プロトタイプからデザイナーさんを呼んで作ってもらう体制へ。
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MyProducts;
