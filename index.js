document.body.onclick= (e)=>{
    const x = e.pageX
    const y = e.pageY 
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.left= `${x}px`
    circle.style.top= `${y}px` 
    document.body.appendChild(circle)
    setTimeout(()=>circle.remove() , 2000)

}

setInterval(()=>
setTimeout(()=>{
    const x = Math.random() *window.innerWidth
    const y = Math.random() * window.innerHeight
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.left= `${x}px`
    circle.style.top= `${y}px` 
    document.body.appendChild(circle)
    setTimeout(()=>circle.remove() , 2000)
    
} , 1000), 600)


