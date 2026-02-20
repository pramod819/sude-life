export interface IApiProductListingPagerResponse {
    success: boolean
    data: IApiProductListingPagerData
}

interface IApiProductListingPagerData {
    products: {
        name: string
        image: {
            desktop: {
                alt: string
                title: string
                width: string
                height: string
                url: string
            }
            mobile: {
                alt: string
                title: string
                width: string
                height: string
                url: string
            }
        }
        productType: string[]
        gearType: string[]
        teaserText: string
        productDescription: string
        productLevel: string[]
        countryUrl: {
            country: string // Note: the field name 'coutry' seems misspelled. Consider changing to 'country' if applicable.
            url: string
            eshopUrl: string
        }[]
        topics: {
            [key: string]: {
                tid: string
                name: string
                child: any[] // Consider specifying more detailed types if the structure of 'child' is known.
            }
        }
        gearId: string[]
    }[]
    gearList: string[]
    filterAll: {
        productLevel: {
            value: string
            title: string
            weight: string
        }[]
        gears: {
            value: string
            title: string
            weight: string
        }[]
        label: {
            value: string
            title: string
            weight: string
        }[]
        category: {
            value: string
            title: string
            weight: string
        }[]
        gearType: {
            [key: string]: {
                value: string
                title: string
                weight: string
            }[]
        }
    }
    typeLabel: {
        gearType: {
            [key: string]: {
                value: string
                title: string
            }[]
        }
        gearLabel: {
            [key: string]: {
                value: string
                title: string
            }[]
        }
    }
}
