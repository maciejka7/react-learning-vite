import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

export const URL = 'https://opentdb.com'

export interface Category {
    id: number,
    name: string,
}

export const ENDPOINTS = {
    GET_CATEGORIES: 'api_category.php'
}

export const quizUrl = `${URL}/${ENDPOINTS.GET_CATEGORIES}`


const getQuizCategories = async () : Promise<Category[]> => {

    try {
        const result = await axios.get<{'trivia_categories': Category[]}>(quizUrl)

        if (result.status !== 200) {
            throw new Error(`Faild to fetch categories. Why? status -> ${result.statusText} | ${result.status}`)
        } else 
        return result.data['trivia_categories']
    } catch (e) {

        if(isAxiosError(e)) {
            throw new Error('Axios Error: ', e)
        }

        throw new Error(`sth gone wrond while fetching ${quizUrl}`)
    }
    

}

export const useQuizCategories = () => {

    const { isLoading, isError, data, error, ...rest } = useQuery(['quizCategories'], getQuizCategories)

    return { isLoading, isError, categories: data, error, ...rest }

}


// typeguard

const isAxiosError = (error : any): error is AxiosError => ('code' in error || 'message' in error);
