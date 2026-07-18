import Article from "./Article"

export default function Main () {
  
  const articleList = [
    { artDate: "11/22/26",
      artTitle: "On the Street in Brooklyn",
      artImgUrl: "../assets/fashion/blobimg1.jpg",
      artContent: " 45fsdgddadfadfwt"
    },
    { artDate: "11/22/26",
      artTitle: "Vintage in Vogue",
      artImgUrl: "../assets/fashion/blobimg2.jpg",
      artContent: " dtsteewt"
    }
  ]

  return (
    <div> <img src="../assets/fashion/blobimg1.jpg"/>
      <Article  artDate= "11/22/26"
        artTitle= "On the Street in Brooklyn"
        artImgUrl= "../assets/fashion/blobimg1.jpg"
        artContent= " 45fsdgddadfadfwt" 
      />
    </div>
  )
}