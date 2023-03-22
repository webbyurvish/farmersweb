import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Mentor.module.css";

export default function Mentor({ mentor }) {
  return (
    <div className={styles.mentor}>
      <div className={styles.img}>
        <Image
          src={mentor.image ? mentor.image : "/images/mentor-default.png"}
          width={170}
          height={100}
          alt="Mentor profile image"
        />
      </div>
      <div className={styles.info}>
        <span>{mentor.attributes.email}</span>
        <h3>{mentor.attributes.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/mentors/${mentor.id}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
}
