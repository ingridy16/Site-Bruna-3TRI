const url= 'https://github.com/guilhermeonrails/api/blob/main/dados-globais.json'

async function visualisarinformacoesGlobais() {
    const res= await fetch(url)
    const dados= await res.json()
    console.log(dados);

}

visualisarinformacoesGlobais()