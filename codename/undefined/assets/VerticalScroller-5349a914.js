import{k as o,r as f,o as s,c as r,w as a,B as v,a as m,t as y,d as _,F as g,h}from"./index-ab0d9c81.js";const b={class:"w-full h-full overflow-y-scroll overflow-x-hidden"},x={class:"aspect-video h-32 bg-base-200 bg-opacity-25 mx-2 cursor-auto rounded"},k={__name:"VerticalScroller",props:{title:String,showTitle:Boolean},setup(l){const e=o(),t=o(),n=()=>{e.value.style.fontSize="6rem",t.value.style.scale="100%"},i=()=>{e.value.style.fontSize="1.76rem",t.value.style.scale="112%"},c=()=>{e.value.style.fontSize="2.25rem",t.value.style.scale="100%"};return(d,p)=>{const u=f("dragscroll");return s(),r("div",b,[a(m("h2",{ref_key:"main",ref:e,class:"text-4xl pb-7 font-bold transition-all duration-700 text-base-100"},y(l.title||"undefined !"),513),[[v,l.showTitle]]),a((s(),r("div",{ref_key:"bar",ref:t,onDragscrollstart:n,onDragscrollmove:i,onDragscrollend:c,class:"w-full mb-7 py-4 bg-base-300 bg-opacity-40 overflow-hidden cursor-move rounded-lg flex justify-start items-center transition-all duration-700"},[_(d.$slots,"default",{},()=>[(s(!0),r(g,null,h(Array.from(Array(8).keys()),w=>(s(),r("div",x))),256))])],32)),[[u]])])}}};export{k as _};