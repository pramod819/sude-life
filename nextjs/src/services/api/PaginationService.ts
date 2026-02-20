import { IApiProductListingPagerResponse } from 'src/services/api/pagination'

export default class PaginationService implements IPaginationService {
    private apiService: IApiService
    private apiUrl: string
    private ProductListingUrl: string

    constructor(apiService: IApiService, appService: IAppService) {
        this.apiService = apiService
        this.apiUrl = appService.configuration.API_LIST_PAGER
        this.ProductListingUrl = '/product'
    }
    public async fetchProductListingPagerData(
        cat: string,
        gearType: string,
        gears: string,
        page: string,
        name: string,
        productLevel: string,
        order: string
    ): Promise<IApiProductListingPagerResponse> {
        const response = await this.apiService.getAjaxData(
            this.apiUrl + this.ProductListingUrl,
            {
                cat: cat,
                gearType: gearType,
                gears: gears,
                page: page,
                name: name,
                productLevel: productLevel,
                order: order,
            }
        )
        return response.data
    }
}
