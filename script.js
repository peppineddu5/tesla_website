

  "use strict";
  console.clear()
  
  {
  
    const selector = 'scrollport'
    const selected = 'selected'
    const scrollports = document.getElementsByClassName(selector)
  
    for (const scrollport of scrollports) {
      
      scrollport.addEventListener('scroll', debounce(check, 250) /* simulate scrollend event */ )
    }
  
    function check(e) {
      
      const rect = e.target.getBoundingClientRect();
      const centerCell = document.elementFromPoint(rect.left + e.target.offsetWidth / 2, rect.top + e.target.offsetHeight / 2)
      for (const cell of e.target.getElementsByClassName(selected)) {
        cell.classList.remove(selected)
        
      }
      centerCell.classList.add(selected)
  
      console.log(centerCell.id)
      const box1=document.getElementById("box1");
      const box2=document.getElementById("box2");
      const box3=document.getElementById("box3");
      if(centerCell.id==="box1"){
  box1.style.opacity="1";
  
        box1.style.opacity="1";
        box2.style.opacity="0";
        box3.style.opacity="0";
      }else if(centerCell.id==="box2"){
        box1.style.opacity="0";
        box2.style.opacity="1";
        box3.style.opacity="0";
      }else if(centerCell.id==="box3"){
        box1.style.opacity="0";
        box2.style.opacity="0";
        box3.style.opacity="1";
      }
   
    }
  
    
  
    
    
  }
  
  
  
  function debounce(func, wait, immediate) {
    let timeout;
   
    return function() {
      
      const context = this,
        args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        
      };
      
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  