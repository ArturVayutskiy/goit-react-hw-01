import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <img className={styles.cardImg}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={styles.cardTitleName}>Petra Marica</p>
        <p className={styles.cardCaption}>@pmarica</p>
        <p className={styles.cardCaption}>Salvador, Brasil</p>
      </div>   

      <ul className={styles.cardList}>
        <li className={styles.cardListItem}>
          <span>Followers</span>
          <span className={styles.cardListNumber}>1000</span>
        </li>
        <li className={styles.cardListItem}>
          <span>Views</span>
          <span className={styles.cardListNumber}>2000</span>
        </li>
        <li className={styles.cardListItem}>
          <span>Likes</span>
          <span className={styles.cardListNumber}>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
