import { useState } from "react";
import ExercResp from "./ExercResp";

const ButtonES = ({ tipo, cName, amb }) => {
   const [exHomeClass, setExHomeClass] = useState('disabled');
   const [exHomeActive, setExHomeActive] = useState(false);

   const [texto, setTexto] = useState([]);

   const toggleHome = () => {
      let conteudo = [];

      // if (tipo === 'Peito') {
      //    conteudo = 'Treino para peito';
      // } else if (tipo === 'Ombro') {
      //    conteudo = 'Treino para ombro';
      // } else if (tipo === 'Costa') {
      //    conteudo = 'Treino para costa';
      // } else if (tipo === 'Braço') {
      //    conteudo = 'Treino para braço';
      // } else if (tipo === 'Perna') {
      //    conteudo = 'Treino para perna';
      // } else if (tipo === 'Full Body') {
      //    conteudo = 'Treino Full Body';
      // } else if (tipo === 'PPL') {
      //    conteudo = 'Treino PPL';
      // } else if (tipo === 'Upper/Lower') {
      //    conteudo = 'Treino Upper/Lower';
      // } else if (tipo === 'ABC') {
      //    conteudo = 'Treino ABC';
      // }

     if (tipo === 'Peito' && amb === 'casa') {
         conteudo = ['Flexão padrão', 'Flexão declinada', 'Flexão declinada'];
     } else if (tipo === 'Ombro' && amb === 'casa') {
         conteudo = ['Elevação lateral com mochila', 'Elevação lateral com mochila', 'Crucifixo inverso com mochila'];
     } else if (tipo === 'Costa' && amb === 'casa') {
         conteudo = ['Barra com pegada pronada', 'Barra com pegada supinada'];
     } else if (tipo === 'Braço' && amb === 'casa') {
         conteudo = ['Flexão com braços juntos', 'Tríceps banco', 'Rosca direta com mochila', 'Extensão de punho com mochila'];
     } else if (tipo === 'Perna' && amb === 'casa') {
         conteudo = ['Agachamento básico', 'Agachamento búlgaro', 'Afundo'];
     } else if (tipo === 'Peito' && amb === 'academia') {
         conteudo = ['Supino inclinado(com barra ou halter)', 'Supino reto(com barra ou halter)', 'Crucifixo máquina'];
     } else if (tipo === 'Ombro' && amb === 'academia') {
         conteudo = ['Desenvolvimento sentado com halteres', 'Elevação lateral com halteres', 'Posterior dos ombros com aparelho específico'];
     } else if (tipo === 'Costa' && amb === 'academia') {
         conteudo = ['Puxada com polia alta', 'Puxada com polia baixa', 'Puxada horizontal com barra', 'Elevação dos ombros com barra'];
     } else if (tipo === 'Braço' && amb === 'academia') {
         conteudo = ['Flexão dos antebraços com barra(mãos supinadas)', 'Bíceps com aparelho scott', 'Tríceps com polia alta(mãos pronadas)', 'Extensão dos antebraços(deitado com halteres)'];
     } else if (tipo === 'Perna' && amb === 'academia') {
         conteudo = ['Agachamento com peso', 'Extensão dos membros inferiores com aparelho específico', 'Leg curl', 'Flexão dos joelhos(em pé; alternado; com aparelho específico)', 'Abdutores(sentado; com aparelho específico)', 'Extensão do quadril com polia baixa', 'Flexão plantar sentado no aparelho', 'Flexão plantar com aparelho específico'];
     }

      setTexto(conteudo);

      if (!exHomeActive) {
         setExHomeActive(!exHomeActive);
         setExHomeClass('active');
      } else {
         setExHomeActive(!exHomeActive);
         setExHomeClass('disabled');
      }
   }

   return (
      <>
         <button className={ cName } onClick={toggleHome}>{ tipo }</button>

         <ExercResp classActive={exHomeClass} results={texto} onClick={toggleHome}/>
      </>
   )
} 

export default ButtonES;