import { IApiPageResponse } from 'src/services/api/types'

export default class PagesService implements IPagesService {
    private apiService: IApiService
    private apiUrl: string
    private apiErrorPage: string
    private languages: Array<string>
    private regions: Array<string>
    constructor(apiService: IApiService, appService: IAppService) {
        this.apiService = apiService
        this.apiUrl = appService.configuration.API_DYNAMIC
        this.apiErrorPage = appService.configuration.API_ERROR_PAGE
    }

    public async fetchPagesData(
        pageId: string,
        params?: object
    ): Promise<IApiPageResponse> {
        const paramVal = {}
        if (typeof params === 'object') {
            Object.keys(params).forEach(function (paramKey) {
                if ('id' !== paramKey) {
                    paramVal[paramKey] = params[paramKey]
                }
            })
        }

        const response = await this.apiService.get(this.apiUrl, {
            path: pageId,
            params: JSON.stringify(paramVal),
        })
        return response.data
    }

    public async fetchErrorPagesData(): Promise<IApiPageResponse> {
        const response = await this.apiService.get(this.apiErrorPage)
        return response.data
    }
}
