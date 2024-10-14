
import styles from "./style.module.css";
import {Button, Link} from "@mui/material";


function Banner () {
    return <div className={styles.divBanner}>
    <h1 className={styles.h1_Banner}> Amazing Discounts on Pets Products!</h1>
    <Link>
  <Button
    sx={{
      ml: '40px', // margin-left
      backgroundColor: 'rgba(13, 80, 255, 1)', // background-color
      color: 'white',
      padding: '16px 56px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        transform: 'scale(1.05)', // увеличение при hover
      },
      '&:active': {
        backgroundColor: 'transparent',
        color: 'rgba(13, 80, 255, 1)',
        border: '2px solid rgba(13, 80, 255, 1)',
        transform: 'scale(0.95)', // уменьшение при активации
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // добавление тени
      },
      "@media (max-width: 768px)": {
        marginRight: "20px",
        padding: '12px 34px',
        fontSize: '14px',
      },
      "@media (max-width: 576px)": {
        marginRight: "10px",
        padding: '8px 20px',
        fontSize: '11px',
      },
    }}
  >
    Check out
  </Button>
</Link>
    </div>
}
export default Banner;