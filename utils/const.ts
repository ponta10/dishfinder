interface Area {
    code: string,
    value: string
}

interface Genre {
    code: string,
    value: string
}

interface Price {
    value: string,
    label: string
}

export const area: Area[] = [
    { code: 'A130301', value: '渋谷'}
]

export const genre: Genre[] = [
    { code: 'italian', value: 'イタリアン'},
]

export const price: Price[] = [
    { value: '1', label: '¥1,000'},
    { value: '2', label: '¥2,000'},
    { value: '3', label: '¥3,000'},
    { value: '4', label: '¥4,000'},
    { value: '5', label: '¥5,000'},
    { value: '6', label: '¥6,000'},
    { value: '7', label: '¥7,000'},
    { value: '8', label: '¥8,000'},
    { value: '9', label: '¥9,000'},
    { value: '10', label: '¥10,000'},
]