import i404 from "../../assets/404.png";
import AddButtonBlue from "../../components/buttons/AddButonBlue";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export default function NotFoundPage() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

    return (
      <div className={styles.NotFoundPage}>
      <div className={styles.NotFoundPage_top}>
        <img src={i404} alt="issue 404" />
      </div>
      <div className={styles.NotFoundPage_bottom}>
        <h2>Page Not Found</h2>
        <p>We’re sorry, the page you requested could not be found.
        Please go back to the homepage.</p>
       {/* <Link to='/'> <AddButtonBlue>Go Home</AddButtonBlue> </Link> */}
       <button onClick={handleClick}>Go home</button>
      </div>
      </div>
    );
  }