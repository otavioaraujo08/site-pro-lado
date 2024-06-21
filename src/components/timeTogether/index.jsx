import lovedImage from "../../images/youAndMe.webp";
import "./styles.css";

export const TimeTogether = () => {
  function calcularTempoPassado() {
    const dataReferencia = new Date("2023-11-22");

    const dataAtual = new Date();

    const mesesDecorridos =
      (dataAtual.getFullYear() - dataReferencia.getFullYear()) * 12 +
      (dataAtual.getMonth() - dataReferencia.getMonth());

    return mesesDecorridos + " meses";
  }

  return (
    <div className="timeContainer">
      <div className="textContainer">
        <h1 className="timeTogetherText">Mais um mês juntinhos ❤️</h1>

        <h1 className="loveTitle">
          *Amar é ser consciente da nossa própria loucura, é quando a gente se
          junta formando uma só mistura, de igualdade e diferença. Se o amor
          fosse doença seria dessas sem cura.*
        </h1>
        <h1 className="authorTitle">Bráulio Bessa</h1>

        <div className="timeTogetherDiv">
          <h1 className="timeTogetherText">Tempo juntinhos 🦝❤️🐌</h1>
          <h2 className="timeTogetherNumber">❤️ {calcularTempoPassado()} ❤️</h2>
          <h1 className="timeTogetherText">Te amo, meu pacotinho de amor ❤️</h1>
          <h2 className="timeTogetherNumber">
            Obrigado por deixar meus dias mais coloridos e lindos com a sua
            presença ❤️
          </h2>
        </div>
      </div>

      <div className="imageContainer">
        <img src={lovedImage} alt="you and me" className="lovedImage" />
      </div>
    </div>
  );
};
