import Layout from "@/components/Layout";
import Mentor from "@/components/Mentor";
import { API_URL } from "config";

export default function Mentors({ mentors }) {
  return (
    <Layout>
      <h1>Mentors</h1>
      {mentors.length === 0 && <h3> No Mentors </h3>}
      {mentors.map((mentor) => (
        <Mentor key={mentor.id} mentor={mentor} />
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/mentors`);
  const mentors = await res.json();

  return {
    props: { mentors: mentors.data },
    revalidate: 1,
  };
}
