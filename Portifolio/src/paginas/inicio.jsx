import minhaFoto from '../assets/fotoPerfil.jpg'; 

function Inicio() {
  return (
    <div className="card">
      <img src={minhaFoto} alt="Minha Foto" className="foto-perfil" />
      <h2>Bem-vindo ao meu portfólio!</h2>
      <p>
        Estou desenvolvendo alguns projetos de Programação WEB e MOBILE e este é meu espaço para mostrar projetos, habilidades e experiências.
      </p>
    </div>
  );
}

export default Inicio;