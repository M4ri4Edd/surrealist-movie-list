import React from "react";
import FantasticPlanet from "../Assets/Fantastic.Planet.1973.png";
import Alien from "../Assets/Alien.1979.png";
import Annihilation from "../Assets/annihilation.png";
import AngelsEgg from "../Assets/AngelsEgg.jpg";
import Memories from '../Assets/Memories.png';
import Gandahar from '../Assets/gandahar.jpg';
import Interstelar from '../Assets/interstelar.jpg';
import PlanetApes from '../Assets/caesar-planet-of-the-apes-trilogy.jpg';
import Resurrections from '../Assets/resurrections.png';

const Work = () => {
  const ScienceFiction = [
    {
      image: FantasticPlanet,
      title: "La Planète Sauvage",
      dirYear:"René Laloux - 1973",
      text: "Os Oms são criaturas humanas escravizadas no planeta Ygam. Lá, são tratados como brinquedos dos habitantes nativos azuis gigantes, os Draags.",
    },    
    {
      image: Gandahar,
      title: "Gandahar",
      dirYear:"René Laloux - 1987",
      text: "O povo de Gandahar é subitamente atacado por um exército de autômatos conhecidos como Homens de Metal, que marcham pelas aldeias e transformam suas vítimas em pedra.",
    },
    {
      image: Alien,
      title: "Alien",
      dirYear:"Ridley Scott - 1979",
      text: "Uma nave espacial, ao retornar para Terra, recebe estranhos sinais vindos de um asteroide. Enquanto a equipe investiga o local, um dos tripulantes é atacado por um misterioso ser.",
    },
    {
      image: Annihilation,
      title: "Annihilation",
      dirYear:"Alex Garland - 2018",
      text: "O marido de Lena desaparece enquanto explorava uma misteriosa zona em quarentena pelo governo. Ela resolve se juntar à equipe encarregada de entrar na mesma área buscando descobrir o que realmente aconteceu lá.",
    },
    {
      image:AngelsEgg,
      title:"Angel's Egg",
      dirYear:"Mamoru Oshii, Yoshitaka Amano - 1985",
      text:"Uma jovem é a única protetora de um ovo grande e muito precioso. Seu covil fica perto de uma grande cidade gótica abandonada e decadente, habitada por sombras inquietas."
    },
    {
      image:Memories,
      title:"Memories",
      dirYear:"Katsuhiro Otomo, Koji Morimoto, Tensai Okamura - 1995",
      text:"Um fantasma assombra uma espaçonave, um homem que emite vapores mortais e um canhão gigante que dispara indiscriminadamente contra inimigos desconhecidos."
    },
    {
      image: Interstelar,
      title: "Interstellar",
      dirYear: "Christopher Nolan - 2014",
      text: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie",
    },
    {
      image: PlanetApes,
      title: "Planet of the Apes: Origin",
      dirYear: "Rupert Wyatt - 2011",
      text: "Um chimpanzé de laboratório desenvolve inteligência e emoções humanas e uma batalha épica surge para determinar qual espécie será dominante no planeta Terra.",
    },
    {
      image: Resurrections,
      title: "Matrix - Resurrections",
      dirYear: "Lana Wachowski - 2021",
      text: "Se o Sr. Anderson, conhecido como Neo, aprendeu alguma coisa é que a escolha, mesmo sendo uma ilusão, é a única maneira de sair - ou entrar - da Matrix. Ele sabe o que precisa fazer, mas ainda não descobriu que a Matrix está mais forte e perigosa."
    }
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Lista</p>
        <h1 className="primary-heading">Surreal</h1>
      </div>
      <div className="work-section-scifi">
        {ScienceFiction.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <h3>{data.dirYear}</h3>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
