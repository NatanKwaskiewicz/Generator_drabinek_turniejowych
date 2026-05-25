import { useQuery } from '@tanstack/react-query'
import type { Format } from '../types'

const getFormats = async (): Promise<Format[]> => {
    const response = await fetch('http://localhost:3000/formats')
    if (!response.ok) throw new Error(`Server error: ${response.statusText}`)
    return response.json()
}

export const useFormats = () => {
    return useQuery<Format[]>({
        queryKey: ['formats'],
        queryFn: getFormats,
    })
}
