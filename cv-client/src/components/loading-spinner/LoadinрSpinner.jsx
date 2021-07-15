import './LoadingSpinner.scss';

function LoadingSpinner() {
  return (
    <div className="spinner app-text app-text_small">
      Loading
      <span className="spinner__span" />
    </div>
  );
}

export default LoadingSpinner;
