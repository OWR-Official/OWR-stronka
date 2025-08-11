
document.addEventListener('DOMContentLoaded', ()=>{
  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const t = document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  // Accessibility: focus outline on keyboard nav
  document.body.addEventListener('keyup', (e)=>{
    if(e.key==='Tab') document.body.classList.add('show-focus');
  });
});
