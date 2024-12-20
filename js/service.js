function handleViewMoreBtn(viewSectionId){

    console.log('haiiii');
    

    const viewSection = document.getElementById(viewSectionId)
    const button = document.getElementById(`${viewSectionId}-btn`)
    const viewSectionHide = document.getElementById(`${viewSectionId}-hidden`)
  
    viewSection.style.display = 'block';
    button.style.display = 'none';
    viewSectionHide.style.display = 'none'
  
  
    
  }
  



  window.addEventListener('DOMContentLoaded',()=>{
   
    const services = document.getElementsByClassName('service-span')

    let i = 1

    services[0].style.display = 'block'
   setInterval(()=>{
    console.log(i);

    // if(i!=0){
    if(i==0){
      services[3].style.display = 'none'
    }else{
      services[i-1].style.display='none'
    }
      services[i].style.display = 'block'
    // }

    if(i==3){
      i=0
    }else{
      i++
    }
    
   },2000)
    
  })