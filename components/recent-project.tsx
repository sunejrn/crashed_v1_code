import Link from "next/link"
import { getProjects } from "@/lib/project"
import Project from "@/components/projects"

export default async function RecentProjects() {

    const projects = await getProjects(4);

  return (
    <section className="pb-24">
        <div>
            <h2 className="title mb-12">My Recent Projects</h2>

            <Project projects={projects}/>
            <Link
                href={"/projects"}
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
            >
                <span className="hover:text-blue-500">View All Projects</span>
            </Link>
        </div>
    </section>
  )
}
