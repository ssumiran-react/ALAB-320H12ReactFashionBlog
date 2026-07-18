
export default function Article(props){

  return (
    <>
      <h2 style={{color: "gray"}}>{props.artDate}</h2>
      <h2 className="articleTitle">{props.artTitle}</h2>
      <img src={props.artImgUrl} alt={props.artTitle}/>
      <p>{props.artContent}</p>
      <div style={{color: "red",textAlign: "right"}}>
        <a ><strong>Continues ...</strong></a>
      </div>
    </>
        
  )
}