import { useState } from "react";
import Home from "./Home";
import Hobbies from "./Hobbies";

function App() {
  // Estado que define qual página renderizar: 'home' ou 'hobbies'
  // Exemplo de como deve estar no seu arquivo pai (App.jsx)
  const [isHobbies, setIsHobbies] = useState(false);

  if (isHobbies) {
    return <Hobbies onBackToHome={() => setIsHobbies(false)} />;
  }

  return (
    <Home
      onNavigateToHobbies={() => setIsHobbies(true)}
      onBackToHome={() => setIsHobbies(false)} // Passa a função aqui
    />
  );
}

export default App;
