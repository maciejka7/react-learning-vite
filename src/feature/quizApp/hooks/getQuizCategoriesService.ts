import { useQuery } from "@tanstack/react-query"

const URL = 'https://opentdb.com/'

interface Category {
    id: number,
    name: string,
}

const ENDPOINTS = {
    GET_CATEGORIES: 'api_category.php'
}

const getQuizCategories = async () : Promise<Category[]> => {
        const data = await fetch(`${URL}${ENDPOINTS.GET_CATEGORIES}`)
        const result = await data.json();
        return result['trivia_categories']

}

export const useGetQuizCategoriesService = () => {

    const { isLoading, isError, data, error } = useQuery(['quizCategories'], getQuizCategories)

    return { isLoading, isError, categories: data, error }

}