let button = document.querySelector('button')

let buttonFunc = () => {
    axios('https://swapi.dev/api/planets/2')
    .then(res => {

        for(let i = 0; i < res.data.residents.length; i++){
            
            axios(res.data.residents[i])
            .then(res => {
                const h2 = document.createElement('h2')
                h2.textContent = res.data.name
                document.querySelector('body').appendChild(h2)
            })
        }
    })

}

addEventListener('click', buttonFunc)