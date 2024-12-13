import { skills } from "@/app/data";


const Skills = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
        <div className="text-2xl font-bold">{skills.title}</div>
        <div className="grid ">{skills.description}</div>
        <div className="grid grid-cols-4 gap-4">
        {
            skills.skilllist.map((skill, index)=>(
                <div key={index} className="grid grid-rows-1 relative group inline-flex items-center justify-center hover:text-accent">
                    <div className="text-5xl xl:text-6xl grid">{skill.icon}</div>
                    <span className=" text-center bottom-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default Skills