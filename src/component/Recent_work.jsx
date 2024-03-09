import React, { useEffect } from 'react'
import chat from "./2023-12-18.png"
import textgm from "./textgm.png"
import todo from "./todo.png"
import parallax from "./Parallax.png"
import newsgm from "./newsgm.png"
import catering from "./Catering2.png"
import band from "./band1.png"
import Architect from "./Arcitect.png"
import Anadearmas from "./Anadearmas.png" 
import Academia from "./Academia.png"
import gsap from 'gsap'
export default function Recent_work() {
    useEffect(()=>{
        const tl=gsap.timeline()
        tl.to("#intro1",{
            opacity:1,
            duration:0.5,
        })
        tl.to("#name",{
            opacity:1,
            duration:0.7,
        })
        tl.to("#work",{
            opacity:1,
            duration:1,
        })
    },[])
  return (
    <div>
        <div className='text-center text-white my-10'>
            <p id='intro1' className='opacity-0 text-[10px] text-slate-400 text-sans'>My Portfolio</p>
            <p id='name' className='opacity-0 text-lg font-sans font-bold text-slate-300'>Recent Works</p>
        </div>
        <div id='work' className='opacity-0 flex gap-12 justify-center'>
            {/*-----------------------1st row-1_1----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={chat} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Chat App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>An Encrypted Chat app used to Communicate with Friends & Family</p>
            </div>
            {/*-----------------------1st row-1_2----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={textgm} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Text-Gm App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>A text editor app used to edit text in different manner & having multiple toggle themes</p>
            </div>
            {/*-----------------------1st row-1_3----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={todo} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Todo App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>A todo list reminder app used for storing Activities</p>
            </div>
        </div>
        {/*-------------------------2nd row 2_1-----------------------------------------*/}
        <div id='work' className='opacity-0 flex gap-12 justify-center mt-8 mb-0'>
            {/*-----------------------1st row-1_1----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={parallax} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Parallax App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>A parallax app used to create immersive user experiences by utilizing layered scrolling effects</p>
            </div>
            {/*-----------------------1st row-1_2----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={newsgm} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>News-Gm App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>A news app which provide facility to watch latest news </p>
            </div>
            {/*-----------------------1st row-1_3----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={catering} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Catering App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>A catering app which provide facility to streamlines event planning by offering customizable menus, real-time availability, and seamless booking</p>
            </div>
        </div>
        {/* ----------------------------------------------3rd row--------------------------------------------- */}
        <div id='work' className='opacity-0 flex gap-12 justify-center mt-8 mb-0'>
            {/*-----------------------3st row-1_1----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={Academia} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Academia of Development</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>An Software-House Web application which provide facility to students to enroll in different cources offered by Software house</p>
            </div>
            {/*-----------------------3st row-1_2----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={Architect} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Arctitect App</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>An architect firm app which simplifies project management with intuitive design tools, collaborative features, and seamless document sharing.</p>
            </div>
            {/*-----------------------3st row-1_3----------------------------------------*/}
            <div className='bg-[#2D3250] rounded-lg p-4 '>
                <img src={Anadearmas} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                <p className='pt-3 font-sans font-semibold text-slate-200'>Animated page</p>
                <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>An animated page that use Sherry js for amazing Animation </p>
            </div>
        </div>

    </div>
  )
}
