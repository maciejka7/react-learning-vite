import React from 'react'
import { useGetQuizCategoriesService } from '../hooks/getQuizCategoriesService'

type Props = {}

export const QuizApp = (props: Props) => {

  const { categories, error, isError, isLoading } = useGetQuizCategoriesService()

  const [selectedCategory, setSelectedCategory] = React.useState<number | ''>('')
  
  const handlePageRefresh = () => window.location.reload()
  const handleSelectCateogry = (categoryId: any) => {
    console.log(categoryId.target.value);
    
  }

  if (isError) {
    return <><p>STH WENT WRONG, Try to <a href="#" onClick={handlePageRefresh}>refresh</a>
    </p >
    {error && <p> { JSON.stringify(error, null, 2) }</p>} 
    </>
  }

  if (isLoading) {
    return <p> Loading ... </p>
  }

    return (
      <div>
        QuizApp
        <p>eeee: {selectedCategory}</p>
        {categories && 
        <select onChange={(e) => handleSelectCateogry(e)}>
          <option value="">Select a question category </option>
          {categories.map(category => 
            (<option 
              key={category.id}
              value={category.id}
              
            >
            {category.name}</option>
            )
          )}
        </select>
        }  
      </div>
    )
}