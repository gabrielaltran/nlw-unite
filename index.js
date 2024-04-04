let participantes = [
  {
    nome: "Gabriel Augusto Altran",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Lucas Miguel Alcaraz",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Diego Altran L10",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 0, 3, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "João Paulo Xavier",
    email: "xaxo@gmail.com",
    dataInscricao: new Date(2023, 11, 4, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Tiringa Pantarma",
    email: "tiringa@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Lauro Antigo",
    email: "lauro@gmail.com",
    dataInscricao: new Date(2023, 9, 6, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Loli Gebien",
    email: "lolig@gmail.com",
    dataInscricao: new Date(2023, 8, 7, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Lebron James",
    email: "lbj@gmail.com",
    dataInscricao: new Date(2023, 7, 8, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Boca de Suvela",
    email: "boca@gmail.com",
    dataInscricao: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "123 de Oliveira 4",
    email: "123@gmail.com",
    dataInscricao: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

//condicional: semppre que for criar uma condicional, a informação precisa ser 'true'
  if (participante.dataCheckIn == null) {
    dataCheckIn = `
    <button data-email="${participante.email}" onclick="fazerCheckIn(event)"> Confirmar check-in </button>
    `
  }

  return ` 
  <tr>
    <td>
      <strong> 
        ${participante.nome}
    </strong>
    <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
document
.querySelector("tbody")
.innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
//verificar se o participante já existe
const participanteExiste = participantes.find(
  (p) => {
    return p.email == participante.email
  }
)

if (participanteExiste) {
  alert('Email já cadastrado')
  return
}

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

//limpar o formulario

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {
// confirmar se realmente quer o check in
  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?"
  if(confirm(mensagemConfirmacao) == false) {
    return 
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
    
    participante.dataCheckIn = new Date()
// atualizar o check-in do participante
    atualizarLista(participantes)

// atualizar a lista de participante
}