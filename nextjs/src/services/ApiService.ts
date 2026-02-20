export default class ApiService implements IApiService {
    private loggerService: ILoggerService
    private backendUrl: string
    private frontendUrl: string
    private frontendHost: string
    private backendAjaxUrl: string
    private apiHost: string
    constructor(appService: IAppService, loggerService: ILoggerService) {
        this.loggerService = loggerService
        this.backendUrl = appService.configuration.BACKEND_URL
        this.frontendUrl = appService.configuration.FRONTEND_URL
        this.frontendHost = appService.configuration.FRONTEND_HOST
        this.backendAjaxUrl = appService.configuration.BACKEND_AJAX_URL
        this.apiHost = appService.configuration.API_HOST
    }

    private async fetchData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        extraOptions: { [k: string]: any } = {}
    ) {
        let url = `${this.backendUrl}${endpoint}`
        if (getParams && Object.keys(getParams).length) {
            url += '?'
            url += Object.entries(getParams)
                .reduce((result, [key, value]) => {
                    return `${result}${key}=${value}&`
                }, '')
                .slice(0, -1)
        }

        let options: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/plain, */*',
                Host: `${this.apiHost}`,
            },
        }

        const { extraHeaders, ...otherExtraOptions } = extraOptions

        if (extraHeaders && Object.keys(extraHeaders).length) {
            options.headers = {
                ...options.headers,
                ...extraHeaders,
            }
        }

        if (otherExtraOptions && Object.keys(otherExtraOptions).length) {
            options = {
                ...options,
                ...otherExtraOptions,
            }
        }

        if (postParams && Object.keys(postParams).length) {
            options = {
                ...options,
                body: JSON.stringify(postParams),
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()

        return {
            status: data.status,
            headers: data.headers,
            data: data,
        }
    }

    private async fetchUserData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        method: IRequestMethod,
        token?: IHeaderToken
    ) {
        let url = `${this.backendUrl}${endpoint}`

        if (getParams && Object.keys(getParams).length) {
            url += '?'
            url += Object.entries(getParams)
                .reduce((result, [key, value]) => {
                    return `${result}${key}=${value}&`
                }, '')
                .slice(0, -1)
        }

        let options: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Host: `${this.apiHost}`,
            },
        }

        if (token) {
            options.headers = {
                ...options.headers,
                Authorization: 'Bearer ' + token,
            }
        }

        if (postParams && Object.keys(postParams).length) {
            options = {
                ...options,
                body: JSON.stringify(postParams),
            }
        }

        options = {
            ...options,
            method: method,
        }
        const response = await fetch(url, options)
        const data = await response.json()

        return {
            status: data?.status,
            data: data?.data,
            success: data?.success,
        }
    }

    public async fetchTokenData(endpoint: string, postParams: IRequestParams) {
        const url = `${this.backendUrl}${endpoint}`
        let options: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Host: `${this.apiHost}`,
            },
        }

        if (postParams && Object.keys(postParams).length) {
            options = {
                ...options,
                body: JSON.stringify(postParams),
            }
        }

        options = {
            ...options,
            method: 'POST',
        }

        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }

    private async fetchAPIRoute(
        endpoint: string,
        token: IHeaderToken,
        params: IRequestParams
    ) {
        try {
            const url = `${this.frontendUrl}${endpoint}`

            const options: RequestInit = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Host: `${this.frontendHost}`,
                    Authorization: 'Bearer ' + token,
                },
                method: 'POST',
                body: JSON.stringify(params),
            }

            const response = await fetch(url, options)
            const data = await response.json()
            const success = data?.success

            if (!success) {
                throw Error('Failed !!')
            }

            return {
                data: data?.data,
                status: data?.status,
                success: data?.success,
            }
        } catch (e) {
            return {
                data: null,
                status: 400,
                success: false,
            }
        }
    }

    public get(
        url: string,
        params?: IRequestParams,
        extraOptions?: IExtraOptions
    ) {
        return this.fetchData(
            url,
            params,
            {},
            {
                method: 'GET',
                ...extraOptions,
            }
        )
    }
    private async fetchAjaxData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        extraOptions: { [k: string]: any } = {}
    ) {
        let url = `${this.backendAjaxUrl}${endpoint}`
        if (getParams && Object.keys(getParams).length) {
            url += '?'
            url += Object.entries(getParams)
                .reduce((result, [key, value]) => {
                    return `${result}${key}=${value}&`
                }, '')
                .slice(0, -1)
        }

        let options: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/plain, */*',
                Host: `${this.apiHost}`,
            },
        }

        const { extraHeaders, ...otherExtraOptions } = extraOptions

        if (extraHeaders && Object.keys(extraHeaders).length) {
            options.headers = {
                ...options.headers,
                ...extraHeaders,
            }
        }

        if (otherExtraOptions && Object.keys(otherExtraOptions).length) {
            options = {
                ...options,
                ...otherExtraOptions,
            }
        }

        if (postParams && Object.keys(postParams).length) {
            options = {
                ...options,
                body: JSON.stringify(postParams),
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()

        return {
            status: data.status,
            headers: data.headers,
            data: data,
        }
    }

    public getAjaxData(
        url: string,
        params?: IRequestParams,
        extraOptions?: IExtraOptions
    ) {
        return this.fetchAjaxData(
            url,
            params,
            {},
            {
                method: 'GET',
                ...extraOptions,
            }
        )
    }

    public getUserData(
        endpoint: string,
        getParams: IRequestParams,
        token?: IHeaderToken
    ) {
        return this.fetchUserData(endpoint, getParams, {}, 'GET', token)
    }

    public createUserData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        token?: IHeaderToken
    ) {
        return this.fetchUserData(
            endpoint,
            getParams,
            postParams,
            'POST',
            token
        )
    }

    public updateUserData(
        endpoint: string,
        getParams: IRequestParams,
        postParams: IRequestParams,
        token: IHeaderToken
    ) {
        return this.fetchUserData(endpoint, getParams, postParams, 'PUT', token)
    }

    public deleteUserData(endpoint: string, token: IHeaderToken) {
        return this.fetchUserData(endpoint, {}, {}, 'DELETE', token)
    }

    public fetchAPI(
        endpoint: string,
        token: IHeaderToken,
        params: IRequestParams
    ) {
        return this.fetchAPIRoute(endpoint, token, params)
    }
}
