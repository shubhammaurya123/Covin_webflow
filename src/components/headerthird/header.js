import React from 'react'
import './header.css'
const header = () => {
  return (
    <div className='headerthird' >
        <div className='textValue' >Analyze conversation <br/>for excellence</div>
        <div  className='AnalyzeItem'>
             <div className='ItemRowOne-1'>
                <div className='Item-1' > 
                  <span className='value'> 21<span className='par'>%</span> <br/></span>
                  <span> Increase in Sales</span>
                </div>
                <div className='Item-1' > 
                  <span className='value'> 27<span className='par'>%</span><br/></span>
                  <span>Increase in CSAT </span>
                </div>
                <div className='Item-1' > 
                  <span className='value'> 100<span className='par'>%</span> <br/></span>
                  <span> Compliance monitoring</span>
                </div>
             </div>
             <div className='ItemRowTwo-2'>
             <div className='Item-1' > 
                  <span className='value'> 17<span className='par'>%</span><br/></span>
                  <span> Increase in Sales</span>
                </div>
                <div className='Item-1' > 
                  <span className='value'> 56 <span className='par'>Sec</span><br/></span>
                  <span>Increase in CSAT </span>
                </div>
                <div className='Item-1' > 
                  <span className='value'> 60<span className='par'>%</span><br/></span>
                  <span> Compliance monitoring</span>
                </div>
             </div>
        </div>

    </div>
    
  )
}

export default header