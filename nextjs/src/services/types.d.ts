type ILogLevel = 'ALL' | 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR'

interface IResponseDataObject {
    [key: string]: JsonSerializable
}

interface IRequestParams {
    [key: string]: JsonSerializable
}

type IHeaderToken = string

type IRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface IPostData {
    [key: string]: JsonSerializable
}

interface IExtraOptions extends RequestInit {
    getParameters: IRequestParams
}

type ResponseDataType = IResponseDataObject | IResponseDataObject[]

interface IApiServiceResponse {
    success?: boolean
    status?: number
    data?: IResponseData
    headers?: Headers
}

interface IApiUserResponse {
    status: number
    data?: IResponseData
    success: boolean
    jwt?: string
}

interface IAppService {
    configuration: IAppConfig
}

interface ILoggerService {
    log(message: string): void
    error(message: string): void
    debug(message: string): void
}

interface IApiService {
    fetchTokenData(
        endpoint?: string,
        getParams?: IRequestParams,
        postParams?: IRequestParams,
        token?: IHeaderToken
    ): Promise<IApiUserResponse>
    getAjaxData(
        url: string,
        params?: IRequestParams,
        extraOptions?: IExtraOptions
    ): Promise<IApiServiceResponse>
    get(
        url: string,
        params?: IRequestParams,
        extraOptions?: IExtraOptions
    ): Promise<IApiServiceResponse>
    createUserData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        token?: IHeaderToken
    ): Promise<IApiUserResponse>
    updateUserData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        token: IHeaderToken
    ): Promise<IApiUserResponse>
    deleteUserData(
        endpoint: string,
        token: IHeaderToken
    ): Promise<IApiUserResponse>
    getUserData(
        endpoint: string,
        getParams: IRequestParams,
        token?: IHeaderToken
    ): Promise<IApiUserResponse>
    fetchAPI(
        endpoint: string,
        token: IHeaderToken,
        params: IRequestParams
    ): Promise<IApiUserResponse>
}

interface IPagesService {
    fetchPagesData(
        pageId: string | string[],
        params?: object
    ): Promise<IApiPageResponse>
    fetchErrorPagesData(): Promise<IApiPageResponse>
}

interface IPaginationService {
    fetchProductListingPagerData(
        cat: string,
        gearType: string,
        gears: string,
        page: string,
        name: string,
        productLevel: string,
        order: string
    ): Promise<IApiProductListingPagerResponse>
}
