import { useState } from 'react';

function gerarSenhaAleatoria() {
  const digitos = new Set();
  while (digitos.size < 4) {
    digitos.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digitos).join('');
}

function verificarTentativa(tentativa, senha) {
  let acertos = 0;
  let semiAcertos = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senha[i]) {
      acertos++;
    } else if (senha.includes(tentativa[i])) {
      semiAcertos++;
    }
  }

  return { acertos, semiAcertos };
}

function JogoSenha() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState([]);
  const [jogoAtivo, setJogoAtivo] = useState(false);

  const iniciarJogo = () => {
    const novaSenha = gerarSenhaAleatoria();
    setSenha(novaSenha);
    setTentativa('');
    setHistorico([]);
    setJogoAtivo(true);
    console.log("Nova senha:", novaSenha); 
  };

  const handleTentar = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      alert("Digite 4 dígitos diferentes.");
      return;
    }

    const resultado = verificarTentativa(tentativa, senha);
    setHistorico([{ tentativa, ...resultado }, ...historico]);
    setTentativa('');

    if (resultado.acertos === 4) {
      alert("Parabéns! Você acertou a senha!");
      setJogoAtivo(false); 
    }
  };

  const mostrarSenha = () => {
    alert(`A senha é: ${senha}`);
    setJogoAtivo(false);
  };

  return (
    <div className="card">
      <h2>Jogo Senha <br />(Bulls and Cows)</h2>

      {!jogoAtivo && (
        <button onClick={iniciarJogo}>Iniciar Jogo</button>
      )}

      {jogoAtivo && (
        <>
          <input
            type="text"
            maxLength={4}
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value.replace(/\D/g, ''))}
            placeholder="Digite 4 números diferentes"
          />
          <br />
          <button onClick={handleTentar}>Tentar</button>
          <button onClick={mostrarSenha}>Desistir</button>

          <h3>Tentativas</h3>
          <ul>
            {historico.map((item, index) => (
              <li key={index}>
                {item.tentativa} - {item.acertos} Bulls, {item.semiAcertos} Cows
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default JogoSenha;
