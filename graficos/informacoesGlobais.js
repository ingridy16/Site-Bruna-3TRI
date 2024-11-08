const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualisarInformacoesGlobais() {
    const res= await fetch(url)
    const dados= await res.json()
    console.log(dados);
    const paragrafo= document.creatElement('p')
    paragrafo.classlist.add('graficos-conteiner__texto')
    paragrafo.innerHTML= `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} no mundo e que aproximadamente <span>${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio} horas conectadas.`
console.log(paragrafo)
const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

visualisarInformacoesGlobais()