import { skills } from '@/app/data';

const ToolKit= () => {
    return (
       <div className='grid grid-cols-1  gap-5 p-5 bg-border xl:px-10 xl:py-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:col-span-2 text-center p-4'>{skills.title}</div>
        <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr]'>
        <div className='text-xl xl:text-2xl font-light'>{skills.description}</div>
        <div className='grid grid-cols-3 xl:grid-cols-8 items-center p-4'>
          {skills.skilllist.map((skill,index)=>(
            <div key={index} className="grid grid-rows-1 relative group inline-flex items-center justify-center hover:text-accent">
              <div className="text-5xl xl:text-6xl p-4">{skill.icon}</div>
              <span className=" text-center bottom-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
        </div>
       </div>
      );
      
}

export default ToolKit