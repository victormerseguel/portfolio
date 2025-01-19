import styles from "./page.module.css";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts} id="contacts">
        <div className={styles.table}>
          <div className={`${styles.row} ${styles.firstRow}`}>
            <div className={styles.left}>
              <div className={styles.inside}>
                <h2 className={styles.contactArtist}>Victor Merseguel</h2>
              </div>
              <div className={styles.inside}>
                <h3 className={styles.contactInfo}>
                  <a
                    href="mailto: merseguel@gmail.com"
                    style={{ color: "#343434" }}
                  >
                    <span>MAIL: </span>vm@victormerseguel.com
                  </a>
                </h3>
              </div>
              <div>
                <h3 className={styles.contactInfo}>
                  <a href="tel:+351935715802" style={{ color: "#343434" }}>
                    <span>TEL: </span>+351 935715802
                  </a>
                </h3>
              </div>
            </div>
            <div className={styles.right}>
              <img src="/assets/img/chair.png" alt="" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.left} ${styles.products}`}>
              <div>
                <p>Promocional</p>
                <p>Contúdo</p>
              </div>
              <div>
                <p>Color Grading</p>
                <p>Edição</p>
              </div>
              <div>
                <p>Vídeo Clipe Musical</p>
                <p>Produção Musical</p>
              </div>
            </div>
            <div className={`${styles.right} ${styles.since}`} id="since">
              <h3 className={styles.contactInfo}>since 2017</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
