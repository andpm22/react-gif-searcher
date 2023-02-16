import {useState} from 'react'
import {AddCategory, GifGrid} from './components/index'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Adventure time']);
    
    const onAddCategory = (newCategory) => {
        // setcategories( [...categories, 'Shingeki'] );
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }




  return (
    <>
        <h1>Gif Expert App</h1>
        {/* <AddCategory setCategories={setCategories} /> */}
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        {
            categories.map( (category) => ( 
                <GifGrid key={category} category={category}  /> 
            ))
        }
    </>
  )
}
