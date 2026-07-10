function HeadSite({
  nome = "Matheus",
  sobrenome = "de Castro",
  lobo = "./assets/img/wolf(2).png", // Remova o caminho estático daqui, pois ele já vem via prop do Home.jsx
  isHobbies = false,
  onBackToHome, // Adicione essa prop para controlar o clique
}) {
  const handleLogoClick = (e) => {
    if (isHobbies) {
      e.preventDefault(); // Impede o navegador de recarregar a página index.html
      onBackToHome(); // Executa a função que muda o estado para voltar à Home
    }
  };

  return (
    <header>
      <a
        href={isHobbies ? "#" : "#"}
        onClick={handleLogoClick}
        className="logo"
      >
        <img src={lobo} className="logo-icon" alt="Lobo" />
        <span className="first-name">{nome}</span>{" "}
        {/* Corrigido de className-name para first-name */}
        <span className="last-name">{sobrenome}</span>
      </a>

      <nav>
        {isHobbies ? (
          <>
            <a href="#" onClick={handleLogoClick}>
              Home
            </a>
            <a href="index.html#projects">Works</a>
            <a href="#art-gallery">Arts</a>
          </>
        ) : (
          <>
            <a href="#experience">Experiência</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Works</a>
            <a href="#about">About</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default HeadSite;
