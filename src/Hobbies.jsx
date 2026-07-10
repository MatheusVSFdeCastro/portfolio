import HeadSite from "./components/HeadSite";
import logoWolf from "./assets/img/wolf(2).png"; // Importe a imagem aqui também se necessário

function Hobbies({ onBackToHome }) {
  return (
    <>
      <HeadSite
        lobo={logoWolf}
        isHobbies={true} // Ativa o modo de voltar
        onBackToHome={onBackToHome} // Repassa a função que você mandou do App.jsx
      />

      <main>
        {/* Todo o conteúdo atual da sua página de Hobbies (galeria de artes, etc) fica aqui */}
        <section id="art-gallery">
          <h2>Arts</h2>
          {/* Suas fotos/hobbies */}
        </section>
      </main>
    </>
  );
}

export default Hobbies;
