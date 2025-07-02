
const projects = [
    {
        id: 1, 
        title: "Project1",
        decription: "desc 1",
        image: "/Projects/flowerboy.jpg",
        tags: ["react", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        
    },

    {
        id: 2, 
        title: "Project2",
        decription: "desc 2",
        image: "/Projects/flowerboy.jpg",
        tags: ["react", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        
    },

    {
        id: 3, 
        title: "Project3",
        decription: "desc 3",
        image: "/Projects/flowerboy.jpg",
        tags: ["react", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        
    },
]




export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
            {" "}
            Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text0muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects ** add more stuff later **
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project, key) => (
                  <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                  >
                    <div className="h-48 overlow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                  </div>  
                ))}
            </div>
        </div>
    </section>
}