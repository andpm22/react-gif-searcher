import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  // const [images, setImages] = useState([]);
  
  // const getImages = async() => {
  //   const newImages = await getGifs(category)
  //   setImages(newImages);

  // }
  // useEffect(() => {
  //   // getGifs(category).then( img => setImages(img))
  //   getImages();
  // }, [])

  const {images, isLoading} = useFetchGifs(category)


    return (
      <>
      {
        isLoading && ( <h3>Cargando...</h3> )
      }
        <div className="grid">
        {
            images.map((img) => ( 

              <GiftItem 
                key={img.id}
                {...img}
              />
            ))
          }   
        </div>
      </>
  )
};
