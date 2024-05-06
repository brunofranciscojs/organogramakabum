let content = [], badge = 0, aniversarios = 0;

const notificou = (e) =>{
    if( e.target.tagName === 'SPAN' && badge == 0 ){
        document.querySelector('.bell sup').style.opacity = '0'
        e.target.parentElement.querySelector('div').setAttribute('notificacao',''); 
        aniversarios == '0' ? verAniversarios() : ''
        badge = 1
        aniversarios = 1
        localStorage.setItem('notificacao','aberta')
    }else{
        e.target.parentElement.querySelector('div').removeAttribute('notificacao',''); 
        badge = 0 
    }
}

const verAniversarios = () => {
    fetch('./js/deps.json').then(response => response.json()).then( deps =>{
        Object.entries(deps).forEach( area => content.push(desacentuar(area[0].toUpperCase())) )
        content.forEach(aba =>{
            fetch(`https://docs.google.com/spreadsheets/d/1MIgBa5iCrcZJUE6MX0g8L0BZfSTP_TfqYIh17DOP5HA/gviz/tq?&sheet=${aba}`)
            .then(response => response.text())
            .then(json => {
                
                const notificacao = JSON.parse( json.substring(47).slice(0,-2) ).table.rows
                notificacao.forEach((dado) => {
                    const aniversario = (data) => {
                        const hoje = new Date(), 
                        dtNasc = new Date(data), 
                        diferenca = hoje - dtNasc,
                        tStampAno = 1000 * 60 * 60 * 24 * 365.25,
                        idade = Math.floor(diferenca / tStampAno), 
                        diaNiver = new Date(dtNasc.getFullYear() + idade + 1, dtNasc.getMonth(), dtNasc.getDate())

                        const nome = dado.c[0].v,
                        foto = `https://drive.google.com/thumbnail?id=${dado.c[1].v.split('d/')[1].split('/')[0]}`,
                        area = dado.c[2].v,
                        bDay = new Intl.DateTimeFormat('pt-BR', { day:'2-digit', month:'2-digit' }).format(new Date(dado.c[15].f))

                        if(diaNiver.getDate() == hoje.getDate()){
                            document.querySelector('.bell sup').style.opacity = localStorage.getItem('notificacao') === 'aberta' ? '0' : '1'
                            document.querySelector('div[aniversariantes]').innerHTML += 
                            
                                `<div data-funcionario>
                                    <div class="figure">
                                        <img loading="lazy" src="${foto}" class="foto" onerror="this.onerror=null;this.src='./img/ninjas/${defaultNinja()}.webp'" draggable="false"/>
                                        <div data-nome>
                                            <h2>${nome} </h2> 
                                            <b>${area}</b>
                                            <sub>${bDay}</sub>
                                        </div>
                                    </div>
                                </div>`
                        }
                    }
                    aniversario(dado.c[15].f)  
                })     
            })
        })
    })
}

