import { Link } from "react-router-dom";



const NotFoundPage = () => {
  return (
    <div>
      <h2>Oops, page not found!</h2>
      <p>proceed to <Link to='/'>Home Page</Link></p>
    </div>
  );
}

export default NotFoundPage;