let elForm = document.querySelector('.form')
let elForm2 = document.querySelector('.form2')
let elForm3 = document.querySelector('.form3')


elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let val = e.target.elements

fetch(`https://63dcad3dc45e08a0435df959.mockapi.io/data`,
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:val.userId.value, title:val.title.value, body: val.body.value})
    }
    )
    .then((res)=> {
        console.log(res);
        return res.json()
    })
    .then((data)=> {
        console.log(data);
    })
})

fetch('https://63dcad3dc45e08a0435df959.mockapi.io/data')
.then((res)=> {
    console.log(res);
    return res.json()
    })
    .then((data)=> {
        console.log(data    );
    })





elForm2.addEventListener('submit', (e)=>{
    e.preventDefault()
    let val = e.target.elements
    let id = e.target.elements.id.value
    
fetch(`https://63dcad3dc45e08a0435df959.mockapi.io/data/${id}`,
    {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
    },
        body: JSON.stringify({userId:val.userId.value, title:val.title.value, body: val.body.value})
    }
    )
        .then((res)=> {
            console.log(res);
            return res.json()
        })
        .then((data)=> {
            console.log(data);
        })
})



elForm3.addEventListener('submit', (e)=>{
    e.preventDefault()
    let id = e.target.elements.id.value
    
fetch(`https://63dcad3dc45e08a0435df959.mockapi.io/data/${id}`,
    {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
    },
    }
    )
        .then((res)=> {
            console.log(res);
            return res.json()
        })
        .then((data)=> {
            console.log(data);
        })
})