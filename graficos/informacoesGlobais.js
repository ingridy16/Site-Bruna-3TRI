const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualisarinformacoesGlobais() {
    const res= await fetch(url)
    const dados= await res.json()
    cosole.log(paragrafo);
    const paragrafo document.creatElement('p')
    paragrafo.classlist.add('graficos-conteiner__texto')
    paragrafo.innerHTML= `Você sabia que o mundo tem &{dados.total_pessoas_mundo} no mundo e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

visualisarinformacoesGlobais()