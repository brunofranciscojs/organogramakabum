let items = [], areas = []
fetch('./js/deps.json').then(response => response.json()).then( deps =>{
    Object.entries(deps).forEach( area =>{ areas.push(desacentuar(area[0]).toUpperCase()) })
    //1ULVe7X0mbUprxGuz44WX9Umjzg0DEsDl6t3ShZ17AS4__1MIgBa5iCrcZJUE6MX0g8L0BZfSTP_TfqYIh17DOP5HA
    
    areas.forEach(aba =>{
        fetch(`https://docs.google.com/spreadsheets/d/1MIgBa5iCrcZJUE6MX0g8L0BZfSTP_TfqYIh17DOP5HA/gviz/tq?&sheet=${aba}`).then(response => response.text())
        .then(json => {
            const abas = JSON.parse( json.substring(47).slice(0,-2) ).table.rows
            abas.forEach((colaborador) => {

                const nomeSobrenome = (nome) =>{
                    const graca = nome.split(' ')
                    return `${graca[0]} ${graca[1] && graca[1].length <= 3 ? graca[2] ? graca[2] : graca[1] : graca[1] ? graca[1] : ''}`
                }
                const checarExistencia = (col) =>{
                    return colaborador.c[col] ? colaborador.c[col].v : ''
                }
                const caminhoFoto = checarExistencia(1)
                items.push({
                    nome: nomeSobrenome(checarExistencia(0)),
                    foto: checarExistencia(1).includes('drive.google') ? `https://drive.google.com/thumbnail?id=${checarExistencia(1).split('d/')[1].split('/')[0]}` : checarExistencia(1), 
                    cargo: checarExistencia(5),
                    area: checarExistencia(2),
                    tema: `${deps[checarExistencia(2)].cor.split('-')[1]}`
                })    
            })     
        })
    })

})

const buscarColaborador = (e) => {
    const name = e.target
    const area = e.target.parentElement.querySelector('sup')

    if (e.target.tagName === 'BUTTON') {
        localStorage.setItem('colaborador', 
            JSON.stringify({
                nome: name.textContent,
                area: area.textContent
            })
        )
        setTimeout(() =>{
            window.location = `./colaborador.html?value=${name.textContent}_${area.textContent}`
        },200)
    }
}
const buscando = (nome) => {
    const buscaMinuscula = nome.toLowerCase()

    const search = items.filter(item => {
        const nomeMinusculo = desacentuar(item.nome).toLowerCase()
        const cargoMinusculo = desacentuar(item.cargo).toLowerCase()
        const areaMinuscula = desacentuar(item.area).toLowerCase()

        return nomeMinusculo.includes(buscaMinuscula) || cargoMinusculo.includes(buscaMinuscula) || areaMinuscula.includes(buscaMinuscula)
    });

    return search.map((name,index) => {
        const ninjaAleatorio = index > 12 ? '12' : index
         return `<div achou onclick="buscarColaborador(event)" style="--tema:#${name.tema}">
                    <img src="${name.foto}" draggable="false" onerror="this.onerror=null;this.src='./img/${ninjaAleatorio}.webp'"/>
                    <div>
                        <button>${primeiraLetra(name.nome)}</button>
                        <sup>${name.area}</sup>
                        <span>${primeiraLetra(name.cargo)}</span>
                    </div>
                </div>`
        })
    }
document.querySelector('input').addEventListener('input', (e) => {
    let divResultado = document.querySelector('div[resultado]')
    divResultado.innerHTML = buscando(e.target.value).join('')
  
    if (e.target.value.length > 1 ){
        divResultado.setAttribute('buscando', '')
    }else{
        divResultado.removeAttribute('buscando', '')
        divResultado.innerHTML = ''
    }
})

document.querySelector('input').addEventListener('focus',() =>{
    document.querySelector('input').scrollIntoView({behavior:'smooth',align:true})
})
