// src/components/NotFound.js
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
