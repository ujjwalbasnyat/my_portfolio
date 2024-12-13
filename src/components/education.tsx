import { education } from '@/app/data'

const Education = () => {
  return (
    <div className='grid grid-cols-1 gap-5'>
        <div className='flex items-center gap-4 text-2xl font-bold '>
        <div>{education.icon}</div>
        <div>{education.title}</div>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
            {education.items.map((item,index)=>(
                <div key={index} className='bg-border hover:bg-hoverBg p-8 rounded-md h-[100%]'>
                    <div className='text-accent font-light'>{item.duration}</div>
                    <div className='text-xl font-semibold'>{item.degree}</div>
                    <div>{item.tools}</div>
                    <div className='pt-5 font-light'>{item.institution}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education