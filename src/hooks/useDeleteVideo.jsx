export default function useDeleteVideoCard(setCards) {
  const aoDeletar = (id) => {
    fetch(`https://my-json-server.typicode.com/Iarley-01/api-aluraflix/videos/${id}`, 
    {
      method: "DELETE",
      
    }
    ).then(() => {
      setCards(prevCards => prevCards.filter(card => card.id != id))
    }).catch(error => console.error(`Erro ao eliminar o vídeo de id ${id}: ${error}`))
  }
  return aoDeletar;
}