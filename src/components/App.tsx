import { useState } from "react";
import Home from "./Home";
import Card from "./Card";
import CallRandomQuotationButton from "./CallRandomQuotationButton";
import CallRandomCharacterQuotationButton from "./CallRandomCharacterQuotationButton";
import Footer from "./Footer";
import axios from "axios";

type Infos = {
  personnage: string;
  acteur: string;
  saison: string;
  episode: string;
};

function App() {
  const [infos, setInfos] = useState<Infos>({} as Infos);
  const [quotation, setQuotation] = useState<string>("");

  async function fetchData() {
    const response = await fetch("/random");
    const data = await response.json();
    setInfos(data.citation.infos);
    setQuotation(data.citation.citation);
  }

  const name: string = infos?.personnage;
  const actor: string = infos?.acteur;
  const season: string = infos?.saison;
  const episode: string = infos?.episode;
  const picture: string = `https://kaamelott.chaudie.re/api/personnage/${name}/pic`;

  async function fetchRandom(name: string) {
    axios.get(`/random/personnage/${name}`).then((response) => {
      setInfos(response.data.citation.infos);
      setQuotation(response.data.citation.citation);
    });
  }

  return (
    <div className="min-h-full pb-[80px]">
      <Home />
      <CallRandomQuotationButton onClick={fetchData} />
      {quotation && (
        <>
          <Card
            picture={picture}
            name={name}
            actor={actor}
            season={season}
            episode={episode}
            quotation={quotation}
          />
          <CallRandomCharacterQuotationButton
            name={name}
            onClick={() => fetchRandom(name)}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
