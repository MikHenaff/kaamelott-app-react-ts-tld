import { useState } from "react";
import Home from "./Home";
import Card from "./Card";
import CallAPIButton from "./CallAPIButton";
type Infos = {
  personnage: string;
  saison: string;
  episode: string;
};
function App() {
  const [infos, setInfos] = useState<Infos>({} as Infos);
  const [quotation, setQuotation] = useState<string>("");

  async function fetchData() {
    const url = `https://kaamelott.chaudie.re/api/random`;

    const response = await fetch(url);
    const data = await response.json();
    setInfos(data.citation.infos);
    setQuotation(data.citation.citation);
  }

  const name: string = infos?.personnage;
  const season: string = infos?.saison;
  const episode: string = infos?.episode;
  const picture: string = `https://kaamelott.chaudie.re/api/personnage/${name}/pic`;

  return (
    <>
      <Home />
      <CallAPIButton onClick={fetchData} />
      {quotation && (
        <Card
          picture={picture}
          name={name}
          season={season}
          episode={episode}
          quotation={quotation}
        />
      )}
    </>
  );
}

export default App;
