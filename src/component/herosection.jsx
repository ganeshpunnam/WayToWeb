import React from 'react'
import './herosection.css';
import { MdKeyboardArrowRight } from "react-icons/md";
const HeroSection = () => {
   const services = [
       { id: 1, title: 'Search Engine Opt.', src: 'https://tradefinanceglobal.com/wp-content/uploads/2020/05/2-Get-matched-with-lenders.jpg' },
       { id: 2, title: 'Social Media', src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIhwo4yzwwe2ub5Q57Q6v-bA1HCLPCoK1PA7idLTSZULvFc5SN' },
       { id: 3, title: 'eCommerce Solutions', src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy-1BHTyo8cjQ9r7gBQ3FbLCM___2D3iLQ10LgVAVdrv4U3pTJ' },
       { id: 4, title: 'Pay Per Click', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2ecVGdRjbdvoAt_YiV37JTChu_FwUtKT_hwUthtZO-Q80m6z' },
       { id: 5, title: 'Branding Strategy', src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTw-7CUSy0GlIh9YK8VLIUAwMrnhowJJGuuvBlWRAubKdxJXzuZ' },
       { id: 6, title: 'Marketing Copywriting', src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUC8eoTvBGHvt1xJAQyNK_x6291CkwUEwL7UsHYobEvHuSgU' }
     ];
  return (
    <div className='mainContainer'>
       <div className='subContainer'>
        <img className='animation' src='https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/3.png'/>
        <img className='animation2' src='https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/2.png'/>
        <img className='animation3' src='https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/1.png'/>
           <div className='subChid'>
         <h1 style={{fontSize :'65px', color : 'white'}}>Build Fast.</h1>
         <h1 style={{fontSize :'65px', color : 'white'}} >Earn More.</h1>
         <p style={{fontSize :'18px', color : 'white', width:'80%', textAlign:'center', marginTop:'15px'}}>Use customer data to build great and solid product
         experiences that convert</p>
         </div>
      
       <div className='subContainer2'>
        <div className='button1'>
          <button className='button-1'> Start a Free Trial</button>
          <MdKeyboardArrowRight style={{width:'30px', height:'25px'}}/>
        </div>
        <div className='button2'>
          <button className='button-2'> Learn More</button>
          <MdKeyboardArrowRight style={{width:'30px', height:'25px', color:'white'}}/>
        </div>
       </div>
       <div className='subContainer3'>
       <img width="150" height="30" src="https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/client-3.svg" class="attachment-full size-full" alt="" itemprop="image"></img>
       <img width="43"  src="https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/client-2.svg" class="attachment-full size-full" alt="" itemprop="image"></img>
       <img width="90"  src="https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/client-1.svg" class="attachment-full size-full" alt="" itemprop="image"></img>
        <img width="43"  src="https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/client-4.svg" class="attachment-full size-full" alt="" itemprop="image"></img>
        
       </div>
       </div>
       <header className="header" >
       <a href="#">Business Solutions</a>
       <a href="#">Case studies</a>
       <a href="#">New Features</a>
       <a href="#">Build your shop</a>
       <a href="#">Get in touch</a>
     </header>
     <div className="content">
       <h2>Our Services</h2>
       <p>Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.</p>
       <div className="services">
         {services.map(service => (
           <div key={service.id} className="service">
             <img src={service.src} alt={service.title} />
             <h3>{service.title}</h3>
           </div>
         ))}
       </div>
     </div>
      
    </div>
  )
}

export default HeroSection
