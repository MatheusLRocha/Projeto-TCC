import { useState } from "react";
import SupResp from "./SupResp";
import imgGrowthWhey from '../img/whey-growth.jpg';
import imgBlackSkullWhey from '../img/blackSkull-whey.jpg';
import imgMaxWhey from '../img/max-whey.jpg';
import imgDuxWhey from '../img/dux-whey.jpg';
import imgGrowthCrea from '../img/grow-creatina.jpg';
import imgBlackSkullCrea from '../img/blackSkull-creatina.jpg';
import imgMaxCrea from '../img/max-creatina.jpg';
import imgDuxCrea from '../img/dux-creatina.jpg';
import imgGrowthPre from '../img/preTreino-growth.jpg';
import imgBlackSkullPre from '../img/preTreino-blackSkull.jpg';
import imgMaxPre from '../img/preTreino-max.jpg';
import imgDuxPre from '../img/preTreino-dux.jpg';
import imgGrowthMulti from '../img/multi-growth.jpg';
import imgBlackSkullMulti from '../img/multi-blackSkull.jpg';
import imgMaxMulti from '../img/multi-max.jpg';
import imgDuxMulti from '../img/multi-dux.jpg';

const ButtonES = ({ tipo, cName }) => {
   const [supClass, setSupClass] = useState('disabled');
   const [supActive, setSupActive] = useState(false);

   // const [suplemento, setSuplemento] = useState({
   //    nome: '',
   //    texto: '',
   //    referencias: [
   //       {
   //          imagem: '',
   //          link: '',
   //       }
   //    ],
   // });

   
   const [suplemento, setSuplemento] = useState({
      nome: '',
      texto: '',
      referencias: [{}],
   });



   const toggleSup = () => {
      let nome = '';
      let texto = '';
      let referencias = [
         {
            imagem: '',
            link: '',
         }
      ];

      // if (tipo === 'Whey Protein') {
      //   nome = 'Whey Protein';
      //   texto = 'Suplemento proteíco';
      //   imagens = ['img1', 'img2', 'img3', 'img4'];
      // } else if (tipo === 'Creatina') {
      //   nome = 'Creatina';
      //   texto = 'Suplemento para força';
      //   imagens = ['img1', 'img2', 'img3', 'img4'];
      // } else if (tipo === 'Pré-Treino') {
      //   nome = 'Pré-Treino';
      //   texto = 'Suplemento para energia';
      //   imagens = ['img1', 'img2', 'img3', 'img4'];
      // } else if (tipo === 'Multivitamínico') {
      //   nome = 'Multivitamínico';
      //   texto = 'Não sei';
      //   imagens = ['img1', 'img2', 'img3', 'img4'];
      // }

      switch(tipo) {
         case 'Whey Protein':
            nome = 'Whey Protein';
            texto = 'Suplemento proteico para ajudar na recuperação e crescimento muscular.';
            referencias = [
               {
                  imagem: imgGrowthWhey,
                  link: 'https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936',
               },
               {
                  imagem: imgBlackSkullWhey,
                  link: 'https://www.blackskullusa.com.br/whey-80-hd-caveira-preta/p?skuId=559',
               },
               {
                  imagem: imgMaxWhey,
                  link: 'https://www.maxtitanium.com.br/100-whey-refil-900g/p?skuid=1495',
               },
               {
                  imagem: imgDuxWhey,
                  link: 'https://www.duxhumanhealth.com/wheyproteinconcentrado-pouch-1800g/p',
               }
            ]
            break;
         case 'Creatina':
            nome = 'Creatina';
            texto = 'Ajuda a aumentar força e explosão muscular.';
            referencias = [
               {
                  imagem: imgGrowthCrea,
                  link: 'https://www.gsuplementos.com.br/creatina-monohidratada-250gr-growth-supplements-p985931',
               },
               {
                  imagem: imgBlackSkullCrea,
                  link: 'https://www.blackskullusa.com.br/creator--creatina-monohidratada--500g--refil/p?skuId=68',
               },
               {
                  imagem: imgMaxCrea,
                  link: 'https://www.maxtitanium.com.br/creatine-pote-300g/p?skuid=31',
               },
               {
                  imagem: imgDuxCrea,
                  link: 'https://www.duxhumanhealth.com/creatinamonohidratada-pote300g/p',
               }
            ]
            break;
         case 'Pré-Treino':
            nome = 'Pré-Treino';
            texto = 'Dá energia e foco para melhorar o desempenho no treino.';
            referencias = [
               {
                  imagem: imgGrowthPre,
                  link: 'https://www.gsuplementos.com.br/pre-treino-haze-hardcore-300gr-growth-supplements',
               },
               {
                  imagem: imgBlackSkullPre,
                  link: 'https://www.blackskullusa.com.br/novo-bone-crusher-nitro-2t--pre-treino-300g/p?skuId=178',
               },
               {
                  imagem: imgMaxPre,
                  link: 'https://www.maxtitanium.com.br/all-day-jorlan-vieira-pote-300-g/p?skuid=1470',
               },
               {
                  imagem: imgDuxPre,
                  link: 'https://www.duxhumanhealth.com/pre-workout-original-300g/p',
               }
            ]
            break;
         case 'Multivitamínico':
            nome = 'Multivitamínico';
            texto = 'Fornece vitaminas e minerais essenciais para a saúde geral.';
            referencias = [
               {
                  imagem: imgGrowthMulti,
                  link: 'https://www.gsuplementos.com.br/multivitaminico-120-caps-nova-formula-growth-supplements-p985851',
               },
               {
                  imagem: imgBlackSkullMulti,
                  link: 'https://www.blackskullusa.com.br/vitaminas-e-minerais/multivitaminico?srsltid=AfmBOophAHmrAypzXK8mcL29Enxm4nbO2lQ1ACIWmNbWMQXab1a0WZI3',
               },
               {
                  imagem: imgMaxMulti,
                  link: 'https://www.maxtitanium.com.br/produtos/vitaminas-e-minerais',
               },
               {
                  imagem: imgDuxMulti,
                  link: 'https://www.duxhumanhealth.com/multivitaminico-pote30caps/p',
               }
            ]
            break;
         default:
            alert('Erro...');
            break;
      }

      setSuplemento({nome, texto, referencias});

      if (!supActive) {
         setSupActive(!supActive);
         setSupClass('active');
      } else {
         setSupActive(!supActive);
         setSupClass('disabled');
      }
   }

   return (
      <>
         <button className={ cName } onClick={ toggleSup }>{ tipo }</button>

         <SupResp classActive={supClass} results={suplemento} onClick={toggleSup}/>
      </>
   )
} 

export default ButtonES;