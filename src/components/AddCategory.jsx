import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    
    const OnInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        //Evita estar repitiendo las peticions
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        // setCategories( categories => [inputValue, ...categories] )
        onNewCategory(inputValue.trim())
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Look for a GIF here"
                value={inputValue}
                onChange={OnInputChange} 
            />
        </form>


  )
}
