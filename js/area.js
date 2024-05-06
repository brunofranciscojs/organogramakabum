const departamento = JSON.parse(localStorage.getItem('area'))
const iosFix = new URL((window.location.href)).searchParams.get('value')
const areaPrincipal = departamento.principal !== '' ? iosFix.split('_')[0] : departamento.principal
const areaSecundaria = departamento.subarea !== '' ? iosFix.split('_')[1] : departamento.subarea

const breadCumbNavigation = JSON.parse(localStorage.getItem('breadCumb'))

const shieldIcon = `<svg width="20" height="20" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_136_15)"> <path d="M8.65748 21H8.34252C8.33464 20.9897 8.32922 20.9748 8.31936 20.9697C6.89148 20.2866 5.53852 19.4672 4.26392 18.5106C3.07213 17.6157 1.9666 16.6206 1.10751 15.3623C0.430779 14.3723 0 13.2883 0 12.05C0 9.10163 0 6.15376 0 3.20538C0 2.76745 0.142443 2.57058 0.543649 2.44516C3.09678 1.64638 5.64991 0.849663 8.20205 0.0478032C8.40512 -0.0159344 8.59488 -0.0159344 8.79795 0.0478032C11.3496 0.849663 13.9032 1.64638 16.4559 2.44516C16.8571 2.57058 16.9995 2.76796 16.9995 3.20538C17 6.15376 17.0005 9.10163 16.9995 12.05C16.9995 12.7563 16.86 13.4327 16.5899 14.0814C16.0803 15.3063 15.2591 16.286 14.3281 17.1721C13.1013 18.3395 11.7271 19.2935 10.2751 20.1272C9.74329 20.4325 9.19718 20.7101 8.65748 21.0005V21Z" fill="white"/> </g> <defs> <clipPath id="clip0_136_15"> <rect width="17" height="21" fill="white"/> </clipPath> </defs> </svg>`
const gMailIcon = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" > <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/> <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/> <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/> <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/> <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/> </svg>`
const plusIcon = `<svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.5825 0V7.5825H0V12.6375H7.5825V20.22H12.6375V12.6375H20.22V7.5825H12.6375V0H7.5825Z" fill="url(#paint0_linear_136_22)"/> <defs> <linearGradient id="paint0_linear_136_22" x1="0.539488" y1="3.58604" x2="14.9556" y2="17.3216" gradientUnits="userSpaceOnUse"> <stop stop-color="#EB4315"/> <stop offset="0.325016" stop-color="#A858C6"/> <stop offset="0.645022" stop-color="#1C6AFF"/> <stop offset="1" stop-color="#5AE4A2"/> </linearGradient> </defs> </svg>`
const trophyIcon = `<svg width="20" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_136_5)"> <path d="M1.18668 2.16408C0.901952 2.17555 0.731115 2.33996 0.734674 2.66876C0.741792 3.08169 0.734674 3.49461 0.756028 3.90753C0.845006 5.97215 1.86292 7.46326 3.73145 8.20117C2.98048 6.22831 2.69219 4.2134 2.53559 2.16026C2.05867 2.16026 1.62089 2.14879 1.18668 2.16408Z" fill="#184DFD"/> <path d="M9.3191 12.3533H8.58236C8.41509 13.4009 8.25137 14.4064 8.08765 15.4158H9.81026C9.64654 14.4064 9.48282 13.3894 9.31554 12.3533H9.3191Z" fill="#184DFD"/> <path d="M7.23707 16.3525C6.66761 16.3601 6.24764 16.6583 6.00562 17.2624H11.8924C11.6468 16.6545 11.2304 16.3601 10.6609 16.3486C9.51847 16.3333 8.37955 16.3333 7.23707 16.3486V16.3525Z" fill="#184DFD"/> <path d="M16.7756 2.1717C16.3094 2.14876 15.8431 2.16405 15.4054 2.16405C15.263 3.20783 15.1669 4.22484 14.9747 5.21892C14.7861 6.20917 14.5013 7.17648 14.2522 8.17437C15.4338 7.62763 16.4161 6.85532 16.8539 5.47891C17.1529 4.54218 17.1814 3.57105 17.1564 2.59227C17.1493 2.32846 16.9856 2.17934 16.7685 2.16787L16.7756 2.1717Z" fill="#184DFD"/> <path d="M14.5617 0H3.33623C3.32911 0.0802906 3.31844 0.126171 3.322 0.168228C3.37538 1.94609 3.47504 3.71631 3.84163 5.45594C4.12636 6.81323 4.54633 8.11317 5.26883 9.28694C7.02348 12.1315 10.8745 12.1506 12.6327 9.28694C13.2697 8.25081 13.6719 7.11527 13.9531 5.92238C14.3944 4.06806 14.5119 2.17549 14.5759 0.271459C14.5759 0.183521 14.5653 0.0994074 14.5581 0L14.5617 0Z" fill="#184DFD"/> <path d="M5.04479 18.8071C5.04124 19.3118 5.04479 17.9048 5.04479 18.4095V20H12.8215C12.8357 19.9541 12.8535 19.9235 12.8535 19.8891C12.8535 18.8683 12.8606 19.7591 12.8535 18.7383C12.8535 18.3865 12.6649 18.2068 12.3125 18.2068C10.0703 18.203 7.82803 18.203 5.58578 18.2068C5.21207 18.2068 5.04835 18.398 5.04479 18.8071Z" fill="#184DFD"/> </g> <defs> <clipPath id="clip0_136_5"> <rect width="16.436" height="20" fill="white" transform="translate(0.734619)"/> </clipPath> </defs> </svg>`
const starIcon = '<svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.7243 1.42302C11.5724 0.967176 10.9276 0.967177 10.7757 1.42302L8.67646 7.72061C8.60841 7.92479 8.41734 8.0625 8.20212 8.0625H1.92539C1.45275 8.0625 1.24397 8.65768 1.61304 8.95293L6.94651 13.2197C7.11008 13.3506 7.17474 13.5695 7.1085 13.7683L5.06666 19.8938C4.9091 20.3665 5.46428 20.7536 5.85335 20.4423L10.9377 16.3749C11.1203 16.2288 11.3797 16.2288 11.5623 16.3749L16.6467 20.4423C17.0357 20.7536 17.5909 20.3665 17.4333 19.8938L15.3915 13.7683C15.3253 13.5695 15.3899 13.3506 15.5535 13.2197L20.887 8.95294C21.256 8.65768 21.0472 8.0625 20.5746 8.0625H14.2979C14.0827 8.0625 13.8916 7.92479 13.8235 7.72061L11.7243 1.42302Z" fill="white"/> </svg>'

const icones = ['a','b','c','d','e']

const bgIcon = (icones) => {
    for (let i = icones.length; i--; ) {
        var iconeUnico = icones.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        return iconeUnico
    }
}
fetch(`./js/deps.json`).then(response => response.json()).then(areas => {
        document.querySelector('.loader').style.cssText = `--cor:#${areas[areaPrincipal].cor.split('-')[0]}; --after:url('../img/${bgIcon(icones)}.png')`
        document.querySelector('header').style.backgroundColor = `#${areas[areaPrincipal].cor.split('-')[0]}` 
        document.querySelector('#area h2').innerText = areaPrincipal
        document.querySelector('.subAreas h3').innerText = areaSecundaria === 'D' ? 'D&A' : areaSecundaria
        document.querySelector('.subAreas').style.setProperty('--tema',`#${areas[areaPrincipal].cor.split('-')[0]}`)
        document.querySelector('#area').style.setProperty('--cor',`#${areas[areaPrincipal].cor.split('-')[1]}`)
        document.body.style.setProperty('--cor',`#${areas[areaPrincipal].cor.split('-')[0]}`)
        document.querySelector('#area').classList.add(areas[areaPrincipal].cor)
        document.querySelector('#area .head').style.backgroundColor = `#${areas[areaPrincipal].cor.split('-')[0]}` 
        document.querySelector('.colaboraderes').style.setProperty('--tema',`#${areas[areaPrincipal].cor.split('-')[0]}`)

        if(areas[areaPrincipal].cor.includes('FFC200')){
            document.querySelector('div[resultado]').style.setProperty('--cores','#001753')
        }else{
            document.querySelector('div[resultado]').style.setProperty('--cores',`#${areas[areaPrincipal].cor.split('-')[0]}`)
        }
        let nivel = -1
        departamento.breadCumb.split('>').forEach((level) =>{
            nivel++
            document.querySelector('.breadCumb ol').innerHTML += `> <li level=${nivel} onclick="menuBreadCumb(event)">${level == ' DeA' ? 'D&A' : level}</li>`
        })
    })
    
let headDaArea = [], liderados = []


//1MIgBa5iCrcZJUE6MX0g8L0BZfSTP_TfqYIh17DOP5HA
//1ULVe7X0mbUprxGuz44WX9Umjzg0DEsDl6t3ShZ17AS4

fetch(`https://docs.google.com/spreadsheets/d/1MIgBa5iCrcZJUE6MX0g8L0BZfSTP_TfqYIh17DOP5HA/gviz/tq?&sheet=${desacentuar(areaPrincipal).replace(/\./g,'')}&range=A2:Z1000`)
.then(response => response.text())
.then(json => {
    const planilha = JSON.parse(json.substring(47).slice(0, -2)).table.rows;
    planilha.map((dado) =>{

            const checarExistencia = (col) =>{ return dado.c[col] ? dado.c[col].v : '' }
            const checarEntrada = (col) =>{ return dado.c[col] ? dado.c[col].f : '' }
            const caminhoFoto = checarExistencia(1)

            const nome = nomeSobrenome(checarExistencia(0)),
            foto = caminhoFoto.includes('drive') ? `https://drive.google.com/thumbnail?id=${checarExistencia(1).split('/d')[1].split('/')[0]}` : checarExistencia(1),
            email = checarExistencia(6),
            cargo = primeiraLetra(checarExistencia(5)),
            area = primeiraLetra(checarExistencia(3)),
            area2 = primeiraLetra(checarExistencia(2)),
            bio = checarExistencia(7),
            headArea = checarExistencia(14) === true,
            
            subarea = desacentuar(primeiraLetra(areaSecundaria)) == desacentuar(checarExistencia(4)) || desacentuar(primeiraLetra(areaSecundaria)) == desacentuar(area) || desacentuar(primeiraLetra(areaSecundaria)) == desacentuar(checarExistencia(2))
            const condicaoBadge = (col) => dado.c[col] && dado.c[col].v == true ? 'flex' : 'none'

            const tempoKabum = (data) => {
                const hoje = new Date(),
                dataEntrada = new Date(data),
                diferenca = hoje - dataEntrada,
                tStampAno = 1000 * 60 * 60 * 24 * 365.25,
                anosCasa = Math.floor(diferenca / tStampAno),
                diferencaMeses = diferenca % tStampAno,
                mesesCasa = Math.floor(diferencaMeses / (1000 * 60 * 60 * 24 * (365.25 / 12)))

                    if(anosCasa < 1 ){
                        return {
                            span:`${mesesCasa > 1 ? `${mesesCasa} Meses` : `${mesesCasa} Mês`}  de KaBuM!`, 
                            toolTip:`${anosCasa} ${anosCasa > 1 ? 'Anos' : 'Ano'} e ${mesesCasa} ${mesesCasa > 1 ? 'Meses' : 'mês'} de KaBuM!` }
                    }else {
                        return {
                            span:`${anosCasa} ${anosCasa > 1 ? 'Anos' : 'Ano'} de KaBuM!`,
                            toolTip:`${anosCasa} ${anosCasa > 1 ? 'Anos' : 'Ano'} e ${mesesCasa} ${mesesCasa > 1 ? 'Meses' : 'mês'} de KaBuM!` 
                        }
                    }
                }

            if (headArea){
                headDaArea += 
                        `<div class="figure">
                            <img src="${foto}" class="foto" draggable="false" onerror="console.log(); this.src='./img/${defaultNinja()}.webp'"/>
                        </div>
                        <div>
                            <div flex-top>
                                <div data-name>
                                    <h2>${primeiraLetra(nome)} <span>(@${email.split('@')[0]})</span></h2>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${gMailIcon} E-mail</a>
                                </div>
                                <span data-info>${primeiraLetra(cargo)} | <b>${primeiraLetra(area) == 'N/a' ? primeiraLetra(area2) : primeiraLetra(area)}</b></span>
                                <p data-bio>${bio}</p>
                            </div>

                            <div data-badges>
                                <span data-time title="${tempoKabum(checarEntrada(8)).toolTip}"> 
                                    ${trophyIcon} <span>${tempoKabum(checarEntrada(8)).span}</span>
                                </span>
                                
                                <span data-cipa style="display:${condicaoBadge(10)}">${shieldIcon} <span>CIPA</span> </span>
                                <span data-brigada style="display:${condicaoBadge(11)}">${shieldIcon} <span>Brigada</span> </span>
                                <span data-star style="display:${condicaoBadge(12)}">${starIcon} <span>Estrela Ninja</span> </span>
                                <span data-plus style="display:${condicaoBadge(13)}">${plusIcon}  <span>Ninja</span> </span>
                            </div>
                        </div>`

            } else if (subarea) {

                        liderados +=
                            `<div data-funcionario onclick="entrarColaborador(event)">
                                <div class="figure">
                                    <img loading="lazy" src="${foto}" class="foto" onerror="this.onerror=null;this.src='./img/${defaultNinja()}.webp'" draggable="false"/>
                                    <div data-badges>
                                        <span data-cipa style="display:${condicaoBadge(10)}">${shieldIcon} <span>CIPA</span> </span>
                                        <span data-brigada style="display:${condicaoBadge(11)}">${shieldIcon} <span>Brigada</span> </span>
                                        <span data-star style="display:${condicaoBadge(12)}">${starIcon} <span>Estrela Ninja</span> </span>
                                        <span data-plus style="display:${condicaoBadge(13)}">${plusIcon}  <span>Ninja</span> </span>
                                    </div>
                                </div>
                                <div>
                                    <div flex-top>
                                        <div data-name>
                                            <h2>${primeiraLetra(nome)} </h2> 
                                            <span>(@${email.split('@')[0]})</span>
                                        </div>

                                        <span data-info >
                                            <span>${cargo}</span> | <b>${area}</b>
                                        </span>
                                        <p data-bio>${bio}</p>

                                        <div data-subinfo>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${gMailIcon} E-mail</a>

                                            <span data-time title="${tempoKabum(checarEntrada(8)).toolTip}"> 
                                                ${trophyIcon} <span>${tempoKabum(checarEntrada(8)).span}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        }
                    })
                    document.querySelector('.head').innerHTML = headDaArea
                    document.querySelector('.colaboraderes').innerHTML = liderados
                })



