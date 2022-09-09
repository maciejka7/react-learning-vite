import React, { ChangeEvent, FormEvent } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { Category, useQuizCategories } from '../hooks/useQuizCategories'

type Props = {}

type SelectedCategory = {} | Category

export const QuizApp = (props: Props) => {

  const { categories, error, isError, isLoading } = useQuizCategories()

  const [selectedCategory, setSelectedCategory] = React.useState<SelectedCategory>({})

  const handlePageRefresh = () => window.location.reload()
  const handleSelectCateogry = (selectEvent: ChangeEvent<HTMLSelectElement>) => {

    const category = categories?.find(category => category.id === Number(selectEvent.target.value))

    if (category && 'name' in category) {

      setSelectedCategory({
        id: selectEvent.target.value,
        name: category.name

      })
    }
  }

  const categorySelected = 'name' in selectedCategory

  if (isError) {
    return <><p>STH WENT WRONG, Try to <a href="#" onClick={handlePageRefresh}>refresh</a>
    </p >
      {error && <p> {JSON.stringify(error, null, 2)}</p>}
    </>
  }

  if (isLoading) {
    return <p> Loading ... </p>
  }

  return (
    <div>
      QuizApp
      <p>SelectedCategory: { categorySelected && selectedCategory.name}</p>
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
      <div>
        {categorySelected && <button> go next</button>}
      </div>
    </div>
  )
}