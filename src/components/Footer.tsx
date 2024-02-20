import Image
 from "next/image"
 import {PlayIcon,Heart,Shuffle,SkipBack,SkipForward,Repeat, Mic2Icon,Laptop2,Fullscreen,Volume,LayoutList} from 'lucide-react'


const Footer = () => {
  return (
    <div>
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 flex items-center justify-between">

<div className='flex  items-center gap-2'>
<Image src='/linkin-park-3.png' width={55} height={55} alt='capa do album'/>
<div className='flex flex-col'>
  <strong>In the End</strong>
  <span className='text-xs text-zinc-400'>the best music of the band</span>
</div>
 <a href="" className='text-white'><Heart/></a> 
</div>

<div className='flex flex-col gap-2 items-center'>

  <div className='flex items-center gap-4'>
      <Shuffle  size={20} className='text-zinc-200'/>
      <SkipBack size={20} className='text-zinc-200'/>
      <button className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-400 pl-1 '><PlayIcon/></button>
      <SkipForward size={20} className='text-zinc-200'/>
      <Repeat size={20} className='text-zinc-200'/>
  </div>

<div className='flex items-center gap-2'>
   <span className='text-xs text-zinc-200'>2:45</span>
    <div className='h-1 w-96 bg-zinc-600 rounded-full'>
    <div className='h-1 w-56 bg-zinc-100 rounded-full'></div>
    </div>
    <span className='text-xs text-zinc-200'>4:30</span>
</div>

</div>

<div className='flex items-center gap-3'>
  <a href=""> <Mic2Icon size={20}/></a>
  <a href=""> <LayoutList size={20}/></a>
  <a href=""> <Laptop2 size={20}/> </a>
  <a href=""> <div><Volume size={20}/></div></a>
  <a href=""> <Fullscreen size={20}/></a>
</div>
</footer>
    </div>
  )
}

export default Footer