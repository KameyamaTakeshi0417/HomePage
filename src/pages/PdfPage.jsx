import { useParams } from 'react-router-dom';

const pdfMap = {
  works: 'his.pdf',
  hobby: 'prof.pdf',
  game: 'spaceSlider.pdf',
  kinnenn: 'kinnenn.pdf',
  proposal1: 'bonfire.pdf',
  proposal2: 'seventhImmortal.pdf'
};

const titleMap = {
  works: 'ザックリとした職歴',
  hobby: '趣味',
  game: 'プレイ可能作品:ローグライト',
  kinnenn: '企画書：3Dアクション',
  proposal1: '企画書：見下ろし形探索',
  proposal2: '企画書：カードゲーム'
};

const PdfPage = () => {
  const { type } = useParams();
  
  const pdfFile = pdfMap[type];
  const title = titleMap[type] || 'ドキュメント';

  if (!pdfFile) {
    return <div className="page-title">PDFが見つかりません。</div>;
  }

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <div className="pdf-container glass-container" style={{ padding: 0 }}>
        <embed src={`/HomePage/resources/${pdfFile}`} type="application/pdf" />
      </div>
    </>
  );
};

export default PdfPage;
