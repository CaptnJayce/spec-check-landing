import "./index.css";

export function App() {
  return (
    <div className="app">
      <h1>Hello Spec Check</h1>
      <div className="download-buttons">
        <div className="download-item">
          <button className="btn">Download for Desktop</button>
          <span className="coming-soon">Coming soon...</span>
        </div>
        <div className="download-item">
          <button className="btn">Download for Android</button>
          <span className="coming-soon">Coming soon...</span>
        </div>
        <div className="download-item">
          <button className="btn">Download for iOS</button>
          <span className="coming-soon">Coming soon...</span>
        </div>
      </div>
    </div>
  );
}

export default App;
