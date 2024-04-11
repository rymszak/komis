const add=document.querySelector('#add')
const tab=[]
const search=document.querySelector('#search')
const view=document.querySelector('#view')
const display=document.querySelector('#display')

add.addEventListener('click',function(evt){
    evt.preventDefault()
    const mark=document.querySelector('#mark')
    const model=document.querySelector('#model')
    const year=document.querySelector('#year')
    const kolor=document.querySelector('#kolor')
    const przebieg=document.querySelector('#przeb')
    const auto={
        mark: mark.value,
        model: model.value,
        year: year.value,
        kolor: kolor.value,
        przebieg: przebieg.value
    }
    tab.push(auto)
    console.log(tab) 
    display.innerHTML=`<div class="element">
    <div> 
        <h3>marka ${auto.mark}</h3>
        <p>model: ${auto.model}, kolor: ${auto.kolor}, rok produkcji: ${auto.year}, przebieg: ${auto.przebieg}</p>
    </div>
    <button>usuń</button>
</div>`
})


search.addEventListener('click', function(ev){
    display.innerHTML=''
    const mark=document.querySelector('#mark')
    const model=document.querySelector('#model')
    const year=document.querySelector('#year')
    const kolor=document.querySelector('#kolor')
    const przebieg=document.querySelector('#przeb')
    const auto={
        mark: mark.value,
        model: model.value,
        year: year.value,
        kolor: kolor.value,
        przebieg: przebieg.value
    }
    console.log(tab)
   const filtr=tab.filter(object=>{
       object.mark.includes(auto.mark)
   })
   filtr.forEach(element => {
    display.innerHTML+=`<div class="element">
    <div> 
        <h3>marka ${element.mark}</h3>
        <p>model: ${element.model}, kolor: ${element.kolor}, rok produkcji: ${element.year}, przebieg: ${element.przebieg}</p>
    </div>
    <button>usuń</button>
    </div>` 
   });
})

view.addEventListener('click', function(event){
    event.preventDefault()
    display.innerHTML=""
    tab.forEach(element => {
        display.innerHTML+=`<div class="element">
    <div> 
        <h3>marka ${element.mark}</h3>
        <p>model: ${element.model}, kolor: ${element.kolor}, rok produkcji: ${element.year}, przebieg: ${element.przebieg}</p>
    </div>
    <button id='del'>usuń</button>
</div>`
    });
})
