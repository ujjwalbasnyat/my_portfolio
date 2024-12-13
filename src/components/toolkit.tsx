import { skills } from '@/app/data';

const ToolKit= () => {
    return (
       <div className='grid grid-cols-1 items-center justify-center gap-5'>
        <div className='text-center font-bold text-3xl'>{skills.title}</div>
        <div>{skills.description}</div>
        <div className='grid grid-cols-3 xl:grid-cols-8 items-center p-4'>
          {skills.skilllist.map((skill,index)=>(
            <div key={index} className="grid grid-rows-1 relative group inline-flex items-center justify-center hover:text-accent">
              <div className="text-5xl xl:text-8xl grid">{skill.icon}</div>
              <span className=" text-center bottom-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>

            </div>
          ))}
        </div>
       </div>
      );
      
}

export default ToolKit