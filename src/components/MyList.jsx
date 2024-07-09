const musicList = [
  {id:"1", singer:"Usher", song:"Yeah"},
  {id:"2", singer:"Ne-Yo", song:"So Sick"},
  {id:"3", singer:"Chris Brown", song:"Run It"},
]

export default function MyList(){
  return musicList.map((item) => {
    return (
      <li key={item.id}>
        <p><span className="font-bold">Artista:</span> {item.singer}</p>
        <p><span className="font-bold">Música:</span>  {item.song}</p>
      </li>
    )
  })
}
