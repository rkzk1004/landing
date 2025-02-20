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

// 인트로효과
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
.to('.header .group-gnb',{
  opacity: 1,
  delay: 0.5
})

// 메뉴효과
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

// 스크롤시 최상단 페이지 사라짐
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

// 일정 스크롤에 닿으면 프로젝트 컨텐츠 출력
const projectTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-project .inner0',
    start:'0 50%',
    scrub:false
  }
})
projectTl
.from('.sc-project .side-text .text',{y:'2rem'},'a')
.from('.sc-project .inner0 .desc',{yPercent:200,opacity:0},'a')
.from('.sc-project .promise-hover',{yPercent:150,opacity:0},'a')

// 스크롤을 내리면 동그라미 커짐
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
.to('.sc-circle .circle-2',{width:'250rem',height:'250rem'},'b+=0.07')
.to('.sc-circle .circle-3',{width:'250rem',height:'250rem'},'b+=0.15')
.to('.sc-circle .circle-4',{width:'150rem',height:'150rem'},'b+=0.21')

// 커서따라다니는 이미지 (호버시 이미지 출력)
$(window).mousemove(function(e){
  const cursorX = e.clientX
  const cursorY = e.clientY
  gsap.to('.cursor-img',1,{
    x:cursorX,
    y:cursorY,
    // ease:"none"
  })
})
$('.promise-hover').each(function(idx,item){
  const dataName = $(item).data('img')
  $(item).hover(function(){
    $(dataName).addClass('on')
    $(this).siblings().$(dataName).removeClass('on')
  },function(){
    $(dataName).removeClass('on')
  })
})

// 버튼 클릭시 최상단으로 이동
$('.btn-scrollup').click(function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})