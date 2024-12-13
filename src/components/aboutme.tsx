import { about } from '@/app/data'

const Aboutme = () => {
  return (
    <div className='grid grid-cols-1 gap-5'>
        <div className='font-bold text-2xl'>{about.title}</div>
        <div className=''>{about.description}</div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
            {about.info.map((item,index)=>(
                <div key={index} className='flex items-center gap-5 '>
                    <div className='text-secondary'>{item.fieldName}</div>
                    <div>{item.fieldValue}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Aboutme