import Article from "./Article"

export default function Main() {

  const articleList = [
    {
      artDate: "11/22/26",
      artTitle: "On the Street in Brooklyn",
      artImgUrl: "../assets/fashion/blobimg1.jpg",
      artContent: "OLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum"
    },
    {
      artDate: "11/21/26",
      artTitle: "Vintage in Vogue",
      artImgUrl: "../assets/fashion/blobimg2.jpg",
      artContent: "simply dummy text of the Lorem Ipsum is  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum"
    }
  ]
  // <img src="../assets/fashion/blobimg1.jpg"

  return (
    <article>
      {articleList.map((a) =>
        <div key={a.artTitle}>
          <br />
            <Article artDate={a.artDate}
              artTitle={a.artTitle}
              artImgUrl={a.artImgUrl}
              artContent={a.artContent}
            />
          <br />
          <hr />
        </div>
      )}

    </article>
  )
}