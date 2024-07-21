import React from 'react';
import './boody.css';

function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="grid">
          <div className="card">
            <img src="https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/Img.jpg" alt="eCommerce Solutions" />
            <a  href="#" className="btn">Explore eCommerce Solutions </a>
          </div>
          <div className="card">
            <div className="title-bar">
              <span className="badge">SELECTED PROJECTS</span>
              <h2 style={{width:'80%'}}>Magical Design Solutions 💡</h2>
            </div>
            <p>Adjust your design through a wide range of theme options in the <a href=''>WordPress Customizer</a> and see the changes instantly.</p>
            <a href="#" className="btn">Start Your Shop 👍</a>
          </div>
          <div className="card">
          <div className="title-bar">
          <span className="badge">SELECTED PROJECTS</span>
            <h2>Ideas driven by passion.✏️</h2>
            </div>
            <p>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>
            <p>Search Engine - 75%</p>          
            <div className="progress-bar">
                
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
            <p>Digital Marketing - 95%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '95%' }}></div>
            </div>
           
          </div>
          <div className="card">
            <img src="https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/Img-1.jpg" alt="Presentation" />
          </div>
          <div className="card-9">
          <video className='vide'
        autoPlay 
        loop 
        muted 
        preload="auto" 
        style={{ width:'100%', height: '500px'
         }}
      >
        <source src="https://starthub-4.liquid-themes.com/wp-content/uploads/2022/07/56c7bb725f5d91101742004902831a69.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

          </div>
          <div className="card-2">
            <p>See How It Works</p>
            <ol className="list">
              <li>Download App and Create your Profile <p style={{marginTop:'7px'}}>Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.</p></li>
              <li>Organize your Widgets <p style={{marginTop:'7px'}}>Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.</p></li>
              <li>Enjoy Your New App Center <p style={{marginTop:'7px'}}>Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs. added draw shape widget</p></li>
            </ol>
          </div>
       
         
        <div className="card">
          <div className="card-header">
            <span className="badge">NEW FEATURES</span>
            <h2>Happy customers around the globe ⚡</h2>
          </div>
          <ul className="feature-list">
  <li><button>4 New Demos</button></li>
  <li><button>New gradient tools 🎨</button></li>
  <li><button>Top scroll Indicator</button></li>
  <li><button>New marquee options</button></li>
  <li><button>Performance </button></li>
  <li><button>Blend mode</button></li>
  <li><button>Lottie animations</button></li>
  <li><button>New rotator</button></li>
</ul>

        </div>
        <div className="card">
        <img className="card-image" src="https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/Img-2.jpg" alt="Happy customers" />
      </div>
      <div className="card">
      <img className="card-image" src="https://staging-hub.liquid-themes.com/starthubfour/wp-content/uploads/2022/07/Img-3.jpg" alt="eCommerce Solution" />
      </div>
      <div className="card">
    
        <div className="card-content">
          <div className="card-header">
            <span className="badge">BUILD YOUR SHOP</span>
            <h2>Ultimate eCommerce Solution for you ⚡</h2>
          </div>
          <p id='p1'>
            Adjust your design through a wide range of theme options in the WordPress Customizer and see the changes instantly.
          </p>
          <div className="features">
            <div className="feature">
            <img style={{width:'50px'}}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR6kqou_9TcK5iU-6-gyEbu2AF1MAoFUxP95O2-xHepDs9AfO'/>

              <span>Infinite Loading</span>
            </div>
            <div className="feature">
              
            <img style={{width:'50px'}}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR6kqou_9TcK5iU-6-gyEbu2AF1MAoFUxP95O2-xHepDs9AfO'/>
            <span>Masonry Layout</span>
            </div>
            <div className="feature">
            <img style={{width:'50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR6kqou_9TcK5iU-6-gyEbu2AF1MAoFUxP95O2-xHepDs9AfO'/>

              <span>OffCanvas Filter</span>
            </div>
          </div>
        </div>
      </div>
    
    </div>
        </div>
        </div>
     
  );
}

export default App;
