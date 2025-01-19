import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Bio = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/assets/img/bio_bg.png"}
        fill
        sizes="100vh"
        className={styles.bg}
        alt="background"
      />
      <div className={styles.img_container}>
        <div className={styles.img}>
          <Image
            src={"/assets/img/bio_phone_bg.jpg"}
            fill
            sizes="30vh"
            className={styles.bg}
            alt="Telefone"
          />
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          src={"/assets/img/bio_photo_frame.png"}
          width={116}
          height={116}
          alt="Fundo Foto"
        />
        <Image
          src={"/assets/img/bio_photo.png"}
          width={102}
          height={102}
          alt="Foto Victor Merseguel"
        />
      </div>
      <header className={styles.header}>
        <h1>Victor Merseguel</h1>
        <h2>
          Videomaker | web developer
          {/* <br />
          gestor de tráfego */}
        </h2>
      </header>
      <nav className={styles.links}>
        <Link href={"/film/works"}>
          <button>Vídeos</button>
        </Link>
        <Link href={"/web"}>
          <button>Websites</button>
        </Link>
        {/* <Link href={"https://wa.link/dczzr9"} passHref>
          <button>Gestão de Tráfego</button>
        </Link> */}
      </nav>
      <div className={styles.footer}>
        <Link href={"https://wa.link/8k76dg"} passHref>
          <Image
            src={"assets/img/bio_whatsapp_icon.svg"}
            width={18}
            height={18}
            alt="Ícone do WhatsApp"
          />
        </Link>
        <Link href={"mailto: merseguel@gmail.com"}>
          <Image
            src={"assets/img/bio_email_icon.svg"}
            width={22}
            height={14}
            alt="Ícone de e-mail"
          />
        </Link>
      </div>
    </div>
  );
};

export default Bio;
