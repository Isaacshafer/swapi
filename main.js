let button = document.querySelector('button')

let buttonFunc = () => {
    console.log('button clicked')
    axios('https://swapi.dev/api/planets/2')
    .then(response => {

        for(let i = 0; i < response.data.residents.length; i++){
            
            axios(`${response.data.residents[i]}`)
            .then(res => {
                const h2 = document.createElement('h2')
                h2.textContent = res.data.name
                document.querySelector('body').appendChild(h2)
            })
        }
    })

}

addEventListener('click', buttonFunc)