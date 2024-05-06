const anchorIcon = 
    `<svg viewBox="0 0 24 24" fill="none" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99991 11.9999H14.9999" stroke-linecap="round" stroke-width="2"></path> 
        <path d="M9 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6H9" stroke-linecap="round" stroke-width="2"></path> 
        <path d="M15 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H15" stroke-linecap="round" stroke-width="2"></path>
    </svg>`



document.querySelectorAll('.loading div').forEach(div => div.style.cssText = bgColor(hex))

fetch('./js/deps.json').then(response => response.json()).then(areas =>{
    Object.entries(areas).forEach(([area, detalhes]) =>{
        const departamento = document.createElement('div')
        const hidden = document.createElement('div')
        const titulo = document.createElement('h3')
        const ul = document.createElement('ul')

        departamento.classList.add(`area`, `${area.split(' ').join('').toLowerCase()}`)
        departamento.setAttribute('ativo', 'false')
        departamento.setAttribute('data-cor', detalhes.cor)
        departamento.setAttribute('id', `${area.split(' ').join('').toLowerCase()}`)
        departamento.onclick = (e) => expandir(e)
        departamento.style.cssText += `--hover:#${detalhes.cor.split('-')[1]}; --bg:#${detalhes.cor.split('-')[0]}`
        
        titulo.innerHTML = area + `<a onclick="entrarArea(event)">${anchorIcon}</a>` + `<img src="./img/${area}.png"/>`
        titulo.setAttribute('level0','')

        titulo.onclick = (e) =>{
            e.target.tagName === 'H3' && window.innerWidth > 769 ? 
                    e.target.querySelector('a').click()
            : ''
        }

        detalhes.subareas ? titulo.setAttribute('breadcumb','') : ''
        

        const listarAreas = (subareas, areaPrincipal, level = 1) => {
            Object.keys(subareas).forEach(subarea => {
                const subareaLi = document.createElement('li')
                subareaLi.innerHTML = `<span level${level}>${subarea === 'DeA' ? 'D&A' : subarea} <a onclick="entrarArea(event)">${anchorIcon}</a></span>`

                subareaLi.onclick = (e) => {
                    if(e.target.tagName === "SPAN"){
                        e.preventDefault()
                        e.target.querySelector('a').click()
                    }
                } 
                areaPrincipal.appendChild(subareaLi)
                if (typeof subareas[subarea] === 'object') {
                    const subul = document.createElement('ol')
                    listarAreas(subareas[subarea], subul, level + 1)
                    subareaLi.appendChild(subul)
                }
            })
        }

        detalhes.subareas ? listarAreas(detalhes.subareas, ul) : ''

        hidden.appendChild(ul);
        departamento.appendChild(titulo);
        departamento.appendChild(hidden);
        departamento.querySelector('div').style.setProperty('--bg',`#${detalhes.cor.split('-')[1]}`)   
        document.querySelector('.areas').append(departamento)
        
        abriu = false
        const expandir = (e) => {
            if (abriu == false && e.target.tagName === 'DIV'){
                e.target.setAttribute('ativo', 'true')
                abriu = true
            } else if (abriu == true && e.target.tagName === 'DIV') {
                e.target.setAttribute('ativo', 'false') 
                abriu = false
            } else if (abriu == false && e.target.tagName === 'H3' && window.innerWidth < 769){
                e.target.parentElement.setAttribute('ativo', 'true')
                abriu = true
            }else{
                e.target.parentElement.setAttribute('ativo', 'false')
                abriu = false
            }
        }
    })
})

