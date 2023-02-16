

export const GiftItem = ({title, url, id}) => {
  return (
    <div>        
        <h2>{title}</h2>
        <img src={url} alt="{title}"/>
    </div>

  )
}
