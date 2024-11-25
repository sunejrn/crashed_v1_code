import Intro from "@/components/Intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-project";

export default function Home() {
  return (
    <section className="py-24 ">
      <div className="container max-w-3xl">
        <Intro/>

        {/* My Recet Posts */}
        <RecentPosts/>
        <RecentProjects/>
      </div>
    </section>
  );
}