import HeadSite from "./components/HeadSite";
import logoWolf from "./assets/img/wolf(2).png"; 

function Hobbies({ onBackToHome }) {
  return (
    <>
      <HeadSite
        lobo={logoWolf}
        isHobbies={true} 
        onBackToHome={onBackToHome} 
      />

      <main>
        <section id="art-gallery">
          <h2>Arts</h2>
          
        </section>
      </main>
    </>
  );
}

export default Hobbies;
