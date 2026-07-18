
export default function Article(props){
  const imagePath = `${props.artImgUrl}`;
  console.log("te ",imagePath)
  return (
    <>
      <h2 style={{color: "gray"}}>{props.artDate}</h2>
      <h2 className="articleTitle">{props.artTitle}</h2>
      <img style={{width:"100%"}} src={imagePath} alt={props.artTitle}/>
      <p>{props.artContent}</p>
      <div style={{color: "red",textAlign: "right"}}>
        <a ><strong>Continues ...</strong></a>
      </div>
    </>
        
  )
}