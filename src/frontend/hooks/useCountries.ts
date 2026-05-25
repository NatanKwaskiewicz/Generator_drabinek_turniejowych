import { useQuery } from '@tanstack/react-query'

export interface Country {
    name: string
    code: string
    flag: string
    flagUrl: string
}

const fetchCountries = async (): Promise<Country[]> => {
    const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,cca2,flag,flags'
    )
    if (!response.ok) throw new Error('Failed to fetch countries')
    const data: any[] = await response.json()
    return data
        .map((c) => ({
            name: c.name?.common ?? '',
            code: c.cca2 ?? '',
            flag: c.flag ?? '',
            flagUrl: c.flags?.svg ?? c.flags?.png ?? '',
        }))
        .filter((c) => c.name && c.code)
        .sort((a, b) => a.name.localeCompare(b.name))
}

export const useCountries = () =>
    useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: Infinity,
    })