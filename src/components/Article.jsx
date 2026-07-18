
export default function Article(props){

  return (
    <>
      <h1 style={{color: "gray"}}>{props.artDate}</h1>
      <h1 className="articleTitle">{props.artTitle}</h1>
      <img src={props.artImgUrl} alt={props.artTitle}/>
      <p>{props.artContent}</p>
      <div style={{color: "red"}}>
        <p><strong>Continues ...</strong></p>
      </div>
    </>
        
  )
}