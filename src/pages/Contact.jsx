const Contact = () => {
  return (
    <>
      <img src="/HomePage/resources/logo.png" alt="連絡先" className="logo" />
      <h1 className="page-title">連絡先とか</h1>
      
      <div className="glass-container" style={{ textAlign: 'center', lineHeight: '2' }}>
        <p><strong>Mail:</strong> neverforgetmatsushima@gmail.com</p>
        <br />
        <p>
          <strong>Background:</strong> <a href="https://coco-factory.jp/ugokuweb/move02-cat/background/" target="_blank" rel="noreferrer" style={{color: '#007bff'}}>coco-factory.jp</a>
        </p>
        <p>
          <strong>Icon:</strong> <a href="https://icooon-mono.com/" target="_blank" rel="noreferrer" style={{color: '#007bff'}}>icooon-mono.com</a>
        </p>
      </div>
    </>
  );
};

export default Contact;
