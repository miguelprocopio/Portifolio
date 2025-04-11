import outraFoto from '../assets/minhaFoto.jpeg';
function Sobre() {
    return (
      <div className="card">
        <img src={outraFoto} alt="Minha Foto" className="outra-foto" />
        <h2>Sobre Mim</h2>
        <p>Meu nome é Miguel Procópio, sou apaixonado por tecnologia, design e criação de soluções que fazem a diferença. Tenho experiência em desenvolvimento web, com foco em construir interfaces intuitivas e funcionais. Gosto de aprender coisas novas e estou sempre em busca de novos desafios para crescer pessoal e profissionalmente. Atualmente, estou me aprofundando em React, e desenvolvendo projetos que demonstram minhas habilidades e evolução na área. Estou em busca de ambientes onde inovação, troca de conhecimento e evolução constante caminhem juntos. Além da programação, também curto futebol, jogos, academia, etc.</p>
      </div>
    );
  }
  
  export default Sobre;
  