import React from 'react';

export const FooterFirst = () => {
  return (
    <footer style={{ backgroundColor:"lightgrey", marginTop:"20px"}}>
      <div style={{display:"flex",padding:"30px 80px" ,justifyContent:"flex-start", gap:"150px" }}>
      <div className="footer-column">
        <h5>Support</h5>
        
          <a href=''>Help Centre</a> <br/>
          <a href=''>AirCover</a> <br/>
          <a href=''>Anti-discrimination</a> <br/>
          <a href=''>Disability support</a> <br/>
          <a href=''>Cancellation options</a> <br/>
          <a href=''>Report neighbourhood concern</a> <br/>
       
      </div>
      <div className="footer-column">
        <h5>Hosting</h5>
        
          <a href=''>Airbnb your home</a> <br/>
          <a href=''>AirCover for Hosts</a> <br/>
          <a href=''>Hosting resources</a> <br/>
          <a href=''>Community forum</a> <br/>
          <a href=''>Hosting responsibly</a> <br/>
          <a href=''>Join a free Hosting class</a>
        
      </div>
      <div className="footer-column">
        <h5>Airbnb</h5>
        
          <a href=''>Newsroom</a> <br/>
          <a href=''>New features</a> <br/>
          <a href=''>Careers</a> <br/>
          <a href=''>Investors</a> <br/>
          <a href=''>Airbnb.org emergency stays</a>
        
      </div>
      </div>
      
      <div style={{border:"1px solid", width:"95%" ,marginLeft:"30px", borderBottom:"none",borderLeft:"none",borderRight:"none", height:"60px", padding:"15px"}}>
                <span>© 2024 Airbnb, Inc.</span> 
                <a href=''> . Privacy</a>
                <a href=''> . Terms</a>
                <a href=''> . Sitemap</a>
                <a href=''> . Company details</a>
      </div>
    </footer>
  );
};


