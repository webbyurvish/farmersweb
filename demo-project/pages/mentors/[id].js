import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "@/styles/MentorDetails.module.css";
import Link from "next/link";

export default function EventPage({ mentor }) {
  return (
    <Layout>
      <div className={styles.mentor}>
        <h1>{mentor.name}</h1>
        {
          <div className={styles.image}>
            <Image
              src={mentor.image ? mentor.image : "/images/mentor-default.png"}
              width={960}
              height={600}
            />
          </div>
        }
        <h3>Email : </h3>
        <p>{mentor.email}</p>
        <h3>Street: </h3>
        <p>{mentor.address.street}</p>
        <h3>Company: {mentor.company.name}</h3>
        <Link href="/mentors">{"<"} Go Back</Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const mentors = await res.json();

  const paths = mentors.map((mentor) => ({
    params: { id: mentor.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const mentor = await res.json();

  return {
    props: { mentor },
    revalidate: 1,
  };
}
