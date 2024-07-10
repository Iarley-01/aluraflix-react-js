import { useState } from "react";

import styles from "./FormularioEditar.module.css";

import {useVideosContext} from "@/contexts/VideosContext";


import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";
import BotaoPadrao from "@/components/BotaoPadrao";

function FormularioEditar({ card, onClose }) {
  const { secoes, setCards } = useVideosContext();

  const [novoVideo, setNovoVideo] = useState(card);
  
  console.log(novoVideo);
  function buscaCategoriaNome(id) {
    if (!id) {
      return "";
    } else {
    const categoria = secoes.filter(secao => secao.id == id);
    var nome = categoria.map(categoria => categoria.nome)
    var nomeFormatado = nome[0];
    return nomeFormatado;
    }
  }
  
  function buscaCategoriaId(nomeCategoria) {
    var categoria = secoes.filter(secao => secao.nome == nomeCategoria);
    var idCategoria = categoria.map(categoria => categoria.id);
    var idFormatado = idCategoria[0];
    return idFormatado;
  }
  
  const cardCategoria = buscaCategoriaNome(novoVideo.categoria);

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
    const novoValor = buscaCategoriaId(categoria);
    setNovoVideo({ ...novoVideo, categoria: novoValor });
  }
  
  const aoEnviarFormulario = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Iarley-01/api-aluraflix/videos/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoVideo)
    });
    const dados = await response.json();
    onClose(null);
    setCards(prevCards => prevCards.map(c => c.id == card.id ? { ...c, ...dados } : c))
      
    } catch(error) {
      console.error("Erro ao atualizar vídeo: ", error);
    }
    console.log(novoVideo);
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
         itens={secoes} aoAlterar={ aoAlternarCategoria} />
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
          <button onClick={aoEnviarFormulario} type="submit">Salvar</button>
          <button onClick={aoLimparFormulario} type="reset">Limpar</button>
        </div>
      </div>
    </form>
  );
}

export default FormularioEditar;