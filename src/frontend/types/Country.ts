export interface Country {
    name: string
    code: string
    flag: string
    flagUrl: string
}

export interface RestCountry {
    name?: {
        common?: string
    }
    cca2?: string
    flag?: string
    flags?: {
        svg?: string
        png?: string
    }
}
