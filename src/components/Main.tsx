import {ChevronLeft, ChevronRight,PlayIcon,Heart,Shuffle,SkipBack,SkipForward,Repeat, Mic2Icon,Laptop2,Fullscreen,Volume,LayoutList} from 'lucide-react'
import Image from "next/image";

const Main = () => {
  return (
    <div>
        <main className="flex-1 p-6">
         <div className='flex items-center gap-3'>
          <button className='rounded-full bg-black/25 p-1'>
          <ChevronLeft/>
          </button>
          <button className=' rounded-full bg-black/25 p-1'>
          <ChevronRight/>
          </button>
         </div>

         <h1 className='text-4xl font-bold mt-10'>Good Afertnoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-6'>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin6.png' width={104} height={104} alt='capa do album'/>
              <strong>New Divide </strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button></a>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin-park-3.png' width={104} height={104} alt='capa do al
              bum'/><strong>Meteora </strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button> </a>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin6.png' width={104} height={104} alt='capa do album'/>
              <strong>  Hybrid Theory</strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button></a>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin-park-3.png' width={104} height={104} alt='capa do al
              bum'/><strong>A Thousand Suns </strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button> </a>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin6.png' width={104} height={104} alt='capa do album'/>
              <strong>Road to Revolution </strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button> </a>
            <a href="" className='bg-white/10 group rounded  flex items-center gap-4 overflow-hidden hover:bg-slate-400 transition-colors'>
              <Image src='/linkin-park-3.png' width={104} height={104} alt='capa do al
              bum'/><strong>  Collision Course</strong> <button className=' bg-green-400 rounded-full p-4 ml-auto mr-8 text-black invisible group-hover:visible'><PlayIcon/></button></a>
          </div>

          <h1 className='text-4xl font-bold mt-10'> Best songs of Chester Bennington</h1>
          <div className='grid grid-cols-5 gap-3 mt-5'>
            <a href='' className='bg-white/10 p-4 rounded-md hover:bg-white/20 flex flex-col gap 3 items-center'>
              <Image src='/album1.png' className='w-full' width={140} height={140} alt='capa do al
              bum'/>
              <strong className='text-2xl font-semibold'>In the End</strong>
              <span className='text-xs text-zinc-500'>the best music of the band</span>
            </a>
            <a href='' className='bg-white/10 p-4 rounded-md hover:bg-white/20 flex flex-col gap 3 items-center'>
              <Image src='/album2.jpg' className='w-full' width={140} height={140} alt='capa do al
              bum'/>
              <strong className='text-2xl font-semibold'>Faint</strong>
              <span className='text-xs text-zinc-500'>Album(2000)</span>
            </a>
            <a href='' className='bg-white/10 p-4 rounded-md hover:bg-white/20 flex flex-col gap 3 items-center'>
              <Image src='/album3.jpg' className='w-full' width={140} height={140} alt='capa do album'/>
              <strong className='text-2xl font-semibold'>quickly</strong>
              <span className='text-xs text-zinc-500'>album(2002)</span>
            </a>
            <a href='' className='bg-white/10 p-4 rounded-md hover:bg-white/20 flex flex-col gap 3 items-center'>
              <Image src='/album4.jpg' className='w-full' width={140} height={140} alt='capa do album'/>
              <strong className='text-2xl font-semibold'>New Divide</strong>
              <span className='text-xs text-zinc-500'>Album (2003)</span>
            </a>
            <a href='' className='bg-white/10 p-4 rounded-md hover:bg-white/20 flex flex-col gap 3 items-center'>
              <Image src='/linkin-park-3.png' className='w-full' width={140} height={140} alt='capa do al
              bum'/>
              <strong className='text-2xl font-semibold'>In the End</strong>
              <span className='text-xs text-zinc-500'>the best music of the band</span>
            </a>
        
          </div>

        </main>
    </div>
  )
}

export default Main