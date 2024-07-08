import { useState } from "react";

import styles from "./FormularioEditar.module.css";

import {useVideosContext} from "@/contexts/VideosContext";


import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";
import BotaoPadrao from "@/components/BotaoPadrao";

function FormularioEditar() {
  const { secoes } = useVideosContext();

  const [novoVideo, setNovoVideo] = useState("");
  const [tituloVideo, setTituloVideo] = useState("");
  const [secaoVideo, setSecaoVideo] = useState("");
  const [imagemVideo, setImagemVideo] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [descricaoVideo, setDescricaoVideo] = useState("");
  
  return (
    <form className={styles.formEditar}>
      <div className={styles.inputs}>
        <Campo
         label="Título"
         placeholder="Título do vídeo..."
         tamanho="60"
         valor={tituloVideo}
        />
        <ListaSuspensa itens={secoes} />
        <Campo
         label="Imagem"
         placeholder="URL da imagem do vídeo..."
         tamanho="60"
         valor={imagemVideo}
        />
        <Campo
         label="Vídeo"
         placeholder="URL da vídeo..."
         tamanho="60"
         valor={linkVideo}
        />
        <Campo
         label="Descrição"
         placeholder="Do que se trata esse vídeo?..."
         tamanho="120"
         valor={descricaoVideo}
        />
        <div className={styles.buttons}>
          <BotaoPadrao type="submit">Salvar</BotaoPadrao>
          <BotaoPadrao type="reset">Limpar</BotaoPadrao>
        </div>
      </div>
    </form>
  );
}

export default FormularioEditar;