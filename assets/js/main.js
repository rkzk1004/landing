gsap.registerPlugin(ScrollTrigger);

// lenis
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)
lenis.scrollTo(0)

// split
const headlinetitle = new SplitType('.sc-intro .headline', { types: 'words, chars', });
const textHover = new SplitType('.text-hover span', { types: 'words, chars', });
const promiseHover = new SplitType('.promise-hover span', { types: 'words, chars', });

// intro-motion
const introMotionTl = gsap.timeline({})
introMotionTl
// .to('.sc-intro-motion',{
//   'clip-path': 'circle(0% at 50% 50%)',
//   delay:2,
//   duration:1,
//   ease:'circ.out',
// })
.to('.sc-intro .char',{
  yPercent:-100,
  delay:1.3,
  stagger:{
    from:"random",
    each:0.1,
  }
})
.to('.sc-intro img',{
  scale:1,
  stagger:{
    from:"random",
    each:0.1,
  }
})

// btn-menu
const menuTl = gsap.timeline({paused:true})
menuTl
.to('.group-menu',{yPercent:100},'a')
.to('.group-menu .menu-item a',{yPercent:-100,stagger:0.1,duration:0.2})
.to('.group-menu .text span',{y:'0',delay:0.1})

$('.btn-menu').click(function(){
  $(this).toggleClass('on')
  
  if($('.btn-menu').hasClass('on')){
    menuTl.play()
  }else{
    menuTl.reverse()
  }
})
$('.group-menu a').click(function(){
  $('.btn-menu').removeClass('on')
  menuTl.reverse()
})
$('.btn-contact').click(function(){
  $('html,body').scrollTop($(document).height())
})

// sc-intro
const introTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-project',
    start:'0 100%',
    end:'10% 0',
    scrub:true
  }
})
introTl
.to('.sc-intro',{filter:'blur(10px)',yPercent:-25,opacity:0})

// sc-project
const projectTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-project .inner1',
    start:'0 60%',
    scrub:false
  }
})
projectTl
.from('.sc-project .side-text .text',{y:'2rem'},'a')
.from('.sc-project .inner1 .desc',{yPercent:200,opacity:0},'a')
.from('.sc-project .promise-hover',{yPercent:150,opacity:0},'a')

// sc-circle
const circleTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-circle',
    start:'0 70%',
    end:'100% 100%',
    scrub:true,
    ease:'power1.out'
  }
})
circleTl
.from('.sc-circle .headline',{yPercent:20},'a')
.from('.sc-circle .headline span:nth-child(1)',{xPercent:10},'a')
.from('.sc-circle .headline span:nth-child(3)',{xPercent:-10},'a')
.from('.sc-circle .circle-1',{yPercent:350},'a+=0.2')

.to('.sc-circle .circle-1',{width:'250rem',height:'250rem'},'b')
.to('.sc-circle .circle-2',{width:'250rem',height:'250rem'},'b+=0.06')
.to('.sc-circle .circle-3',{width:'250rem',height:'250rem'},'b+=0.13')
.to('.sc-circle .circle-4',{width:'250rem',height:'250rem'},'b+=0.2')
.to('.sc-circle .circle-4 img',{width:'320px',height:'320px'},'b+=0.22')

// sc-promise
const promiseTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-promise',
    start:'0 70%',
    end:'100% 100%',
  }
})
promiseTl
.from('.sc-promise .side-text span',{y:'1rem',duration:0.5},'a')
.from('.sc-promise .text span',{yPercent:100,duration:0.5},'a')

// footer
$('.btn-scrollup').click(function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})