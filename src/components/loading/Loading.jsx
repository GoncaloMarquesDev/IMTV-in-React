import "./Loading.css";
function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <p>Loading ...</p>
      </div>
    </div>
  );
}

export default Loading;
