import React, { useEffect } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton } from '@mui/material';
import gsap from 'gsap';
export default function Experience() {
    useEffect(()=>{
        const tl =gsap.timeline()
        tl.to("#intro1",{
            opacity:1,
            duration:0.5,
        })
        tl.to("#name",{
            opacity:1,
            duration:0.5,
        })
        tl.to("#front",{
            opacity:1,
            duration:0.5,
        })
        tl.to("#back",{
            opacity:1,
            duration:0.5,
        })
    },[])
  return (
    <div className='pb-5'>
      <div className='text-center text-white mt-10'>
            <p id='intro1' className='text-[10px] text-slate-400 text-sans opacity-0'>My Abilities</p>
            <p id='name' className='opacity-0 text-lg font-sans font-bold text-slate-300 mb-4'>My Experience</p>
        </div>
        <div className='text-slate-200  flex justify-center gap-7'>
            {/*----------------------------front-end-------------------------------------------*/}
            <div id='front' className='opacity-0 rounded-2xl bg-[#2D3250] text-center p-5'>
            <p className='text-lg font-sans font-bold text-slate-300'>Frontend</p>
            <p className='text-lg font-sans font-bold text-slate-300'>Development</p>
            
            <div className='flex gap-24 p-5'>

                <div className='flex '>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>HTML</p>
                    <p className='font-thin text-sm'>Basic</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>CSS/SCSS</p>
                    <p className='font-thin text-sm'>Basic</p>
                    </div>
                </div>

            </div>
{/*------------------------------2nd line----------------------------------------*/}

<div className='flex gap-24 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Javascript</p>
    <p className='font-thin text-sm'>Basic</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Git</p>
    <p className='font-thin text-sm'>Basic</p>
    </div>
</div>

</div>

{/*------------------------------3rd line------------------------------------*/}
<div className='flex gap-24 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Tailwind</p>
    <p className='font-thin text-sm'>Basic</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>React</p>
    <p className='font-thin text-sm'>Basic</p>
    </div>
</div>

</div>
{/*-------------------------------------------------------------------*/}
                 </div>


                
        </div>
    </div>
  )
}
