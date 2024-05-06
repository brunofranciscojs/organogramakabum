const hex = ['c859f1','004cff','ff5c00','00e4bd','ffc300','eeeeee']
const bgColor = (hex) =>{
    for (let i = hex.length; i--; ) {
        var corUnica = hex.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        return `--cor:#${corUnica}`
    }
}

const entrarArea = (e) => {
    let lv0 = e.target.closest('.area').querySelector('h3')
    let lv1 = e.target.closest('span[level1]')
    let lv2 = e.target.closest('span[level2]')
    
    let breadCumb = ''
    if (e.target.tagName === 'A') {
        
        
        if( e.target.parentElement == lv1 ){
            breadCumb = `${lv0.innerText.trim()} > ${e.target.parentElement.textContent.trim()}`
        }else if ( e.target.parentElement == lv2 ) {
            breadCumb = `${lv0.innerText.trim()} > ${e.target.parentElement.parentElement.parentElement.previousElementSibling.textContent.trim()} > ${lv2.textContent.trim()}`
        } else if ( e.target.parentElement == lv0) {
            breadCumb = lv0.innerText.trim()
        }

        localStorage.setItem('area', 
            JSON.stringify({
                principal: lv0.innerText,
                subarea: e.target.parentElement.innerText,
                breadCumb: breadCumb
            })
        )
    }
    setTimeout(() => { 
        window.location = 
        `./area.html?value=${lv0.innerText}_${e.target.parentElement.innerText}`
    },200)
}

const entrarColaborador = (e) => {
    const name = e.target
    const area = e.target.parentElement.parentElement.querySelector('b')
    
    if (e.target.tagName === 'H2') {
        localStorage.setItem('colaborador', JSON.stringify({ nome: name.innerText,subarea: area.innerText,area:document.querySelector('.areasEbusca h2').innerText }) )

    setTimeout(() =>{
        window.location = `./colaborador.html?value=${name.innerText}_${document.querySelector('.areasEbusca h2').innerText}`
    },200)
}
}
const menuBreadCumb = (e) =>{
    let lv0 = e.target.parentElement.querySelector('[level="0"]')
    let lv1 = e.target.parentElement.querySelector('[level="1"]')
    let lv2 = e.target.parentElement.querySelector('[level="2"]')
    let secundaria = ''
    
    if(e.target.tagName === 'LI'){

        e.target == lv1 ? secundaria = `${e.target.previousElementSibling.innerText} > ${e.target.innerText}` : ''
        e.target == lv0 ? secundaria = `${e.target.innerText}` : ''
        e.target == lv2 ? secundaria = `${e.target.previousElementSibling.previousElementSibling.innerText} > ${e.target.previousElementSibling.innerText} > ${e.target.innerText}` : ''
       
            localStorage.setItem('area', 
                    JSON.stringify({ 
                        principal:
                        lv0.innerText, 
                        subarea:e.target.innerText, 
                        breadCumb:secundaria 
                    }) 
                )
            }   
        setTimeout(() =>{ window.location = `./area.html?value=${lv0.innerText}_${e.target.innerText}` },200)
}

const defaultNinja = () =>{ return Math.floor(Math.random()*12) }
const desacentuar = (busca) => { return busca.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}

const primeiraLetra = (nome) => {   
    const capitalizadas = nome.split(' ').map(word => 
        word.length >= 3 && word != 'CEO' ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() :
        word.toLowerCase().replace('ceo','CEO').replace('sr','Sr.').replace('rh','RH').replace('jr','Jr.').replace('pl','Pl.')
    ) 
    return capitalizadas.join(' ')
}
const nomeSobrenome = (nome) =>{
    const graca = nome.split(' ')
    return `${graca[0]} ${graca[1] && graca[1].length <= 3 ? graca[2] ? graca[2] : graca[1] : graca[1] ? graca[1] : ''}`
}
let data = new Date()
let anoAtual = data.getFullYear()
document.querySelector('.copyright').innerHTML = `&copy; ${anoAtual}, KABUM S.A.`