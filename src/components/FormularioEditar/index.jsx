import { useState } from "react";

import styles from "./FormularioEditar.module.css";

import {useVideosContext} from "@/contexts/VideosContext";


import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";
import BotaoPadrao from "@/components/BotaoPadrao";

function FormularioEditar({ card, onClose }) {
  const { secoes } = useVideosContext();

  const [novoVideo, setNovoVideo] = useState(card);
//   const [tituloVideo, setTituloVideo] = useState("");
//   const [secaoVideo, setSecaoVideo] = useState("");
//   const [imagemVideo, setImagemVideo] = useState("");
//   const [linkVideo, setLinkVideo] = useState("");
//   const [descricaoVideo, setDescricaoVideo] = useState("");
  
  console.log(novoVideo);
  
  function buscaCategoriaNome(id) {
    if (!id) {
      return "";
    }
    const categoria = secoes.filter(secao => secao.id == id);
    var nome = categoria.map(categoria => categoria.nome)
    var nomeFormatado = nome[0];
    return nomeFormatado;
  }
  
  const cardCategoria = (buscaCategoriaNome(novoVideo.categoria));
  console.log(cardCategoria);
  
  const limparFormulario = (setNovoVideo) => {
    setNovoVideo({
      titulo: "",
      categoria: "",
      img: "",
      url: "",
      descricao: "",
    });
  }

  const aoAlterarValor = (event) => {
    const { name, value } = event.target;
    setNovoVideo((prevData) => ({ ...prevData, [name]: value }));
  }
  
  const aoAlternarCategoria = (categoria) => {
    setNovoVideo({ ...novoVideo, categoria: categoria.value });
  }
  
  const aoLimparFormulario = (event) => {
    event.preventDefault();
    limparFormulario(setNovoVideo);
  }
  
  return (
    <form className={styles.formEditar}>
      <div className={styles.inputs}>
        <Campo
         name="titulo"
         label="Título"
         placeholder="Título do vídeo..."
         tamanho="60"
         valor={novoVideo.titulo}
         novoVideo={novoVideo.titulo}
         aoAlterar={aoAlterarValor}
        />
        <ListaSuspensa novoVideo={cardCategoria}
         itens={secoes} aoAlterar={aoAlternarCategoria} />
        <Campo
         name="imagem"
         label="Imagem"
         placeholder="URL da imagem do vídeo..."
         tamanho="60"
         valor={novoVideo.img}
         novoVideo={novoVideo.img}
         aoAlterar={aoAlterarValor}
        />
        <Campo
         name="video"
         label="Vídeo"
         placeholder="URL da vídeo..."
         tamanho="60"
         valor={novoVideo.url}
         novoVideo={novoVideo.url}
         aoAlterar={aoAlterarValor}
        />
        <Campo
         name="descricao"
         label="Descrição"
         placeholder="Do que se trata esse vídeo?..."
         tamanho="120"
         valor={novoVideo.descricao}
         novoVideo={novoVideo.descricao}
         aoAlterar={aoAlterarValor}
        />
        <div className={styles.buttons}>
          <button type="submit">Salvar</button>
          <button onClick={aoLimparFormulario} type="reset">Limpar</button>
        </div>
      </div>
    </form>
  );
}

export default FormularioEditar;