import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import styles from "./NovoVideo.module.css";

import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";
import BotaoPadrao from "@/components/BotaoPadrao";
import {useVideosContext} from "@/contexts/VideosContext";

function NovoVideo() {
  const navigate = useNavigate();
  const { secoes, setCards } = useVideosContext();
  const [novoVideo, setNovoVideo] = useState({
    titulo: "",
    categoria: "",
    img: "",
    url: "",
    descricao: "",
  });
  
  console.log(novoVideo)
  
  const aoAlterarValor = (event) => {
    const { name, value } = event.target
    setNovoVideo((prevData) => ({ ...prevData, [name]: value }));
  }
  
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
  
  const limparFormulario = (setNovoVideo) => {
    setNovoVideo({
      titulo: "",
      categoria: "",
      img: "",
      url: "",
      descricao: "",
    });
  }
  
  const cardCategoria = buscaCategoriaNome(novoVideo.categoria);
  
  const aoAlternarCategoria = (categoria) => {
    const novoValor = buscaCategoriaId(categoria);
    setNovoVideo({ ...novoVideo, categoria: novoValor });
  }
  
  const aoEnviarFormulario = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://my-json-server.typicode.com/Iarley-01/api-aluraflix/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoVideo)
    });
    const dados = await response.json();
    setCards(prevCards => [...prevCards, dados]);
    navigate("/");
    } catch(error) {
      console.error("Erro ao adicionar vídeo: ", error);
    }
  }
  
  const aoLimparFormulario = (event) => {
    event.preventDefault();
    limparFormulario(setNovoVideo);
  }

  return (
    <section className={styles.container}>
      <h2>NOVO VÍDEO</h2>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      <form className={styles.formulario}>
        <h3>Criar Card</h3>
        
        <Campo 
        name="titulo"
        valor={novoVideo.titulo} 
        novoVideo={novoVideo.titulo}
        label="Título" 
        placeholder="Título do vídeo..." 
        tamanho="60"
        aoAlterar={aoAlterarValor}
        />
        
        <ListaSuspensa 
        itens={secoes} 
        valor={cardCategoria} 
        aoAlterar={aoAlternarCategoria}/>
        
        <Campo
         name="img"
         label="Imagem"
         placeholder="URL da imagem do vídeo..."
         tamanho="60"
         novoVideo={novoVideo.img}
         aoAlterar={aoAlterarValor}
        />
        <Campo
         name="url"
         label="Vídeo"
         placeholder="URL do vídeo..."
         tamanho="60"
         novoVideo={novoVideo.url}
         aoAlterar={aoAlterarValor}
        />
        <Campo
         name="descricao"
         label="Descrição"
         placeholder="Do que se trata esse vídeo?..."
         tamanho="120"
         novoVideo={novoVideo.descricao}
         aoAlterar={aoAlterarValor}
        />
        
        <div className={styles.buttons}>
          <BotaoPadrao 
            onClick={aoEnviarFormulario}
            salvarVideo
            type="submit"
          >
            Salvar
          </BotaoPadrao>
          <BotaoPadrao onClick={aoLimparFormulario} type="reset">Limpar</BotaoPadrao>
        </div>
      </form>
    </section>
  );
}

export default NovoVideo;