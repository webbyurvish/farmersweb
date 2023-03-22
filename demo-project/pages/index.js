import Layout from "@/components/Layout";
import Mentor from "@/components/Mentor";
import Link from "next/link";
import { API_URL } from "config";

export default function Home({ mentors }) {
  return (
    <Layout>
      <h1>UpComing Mentors</h1>
      {mentors.length === 0 && <h3> No Mentors </h3>}
      {mentors.map((mentor) => (
        <Mentor key={mentor.id} mentor={mentor} />
      ))}
      {mentors.length > 0 && (
        <Link href="/mentors" className="btn-secondary">
          View All Mentors
        </Link>
      )}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/mentors`);
  const mentors = await res.json();

  return {
    props: { mentors: mentors.data.slice(0, 3) },
    revalidate: 1,
  };
}
