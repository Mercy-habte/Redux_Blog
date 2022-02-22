import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoriesBlog = () => {
    const [Categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    localStorage.setItem("current", token)
    useEffect(() => {
        const fetchCategories = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(' https://frozen-bastion-26115.herokuapp.com/api/categories');
        
                setCategories(result.data);
              } catch (error) {
                setIsError(true);
              }
        
              setIsLoading(false);
        }

        fetchCategories()
    }, [])

    console.log('categories', Categories)
   
  return (
    <>
        <h4>Categories</h4>

        {isError && <div>Something went wrong ...</div>}

        {isLoading && <p>Loading ...</p>}

        {Categories.length > 0 ? Categories.map((category) => (
            <div key={category.category_id}>
                <Link to={`/categories/${category.category_id}`}>{category.category_name}</Link>
            </div>
        )) : <p>No Category Found</p>}
      
    </>
  )
}

export default CategoriesBlog;