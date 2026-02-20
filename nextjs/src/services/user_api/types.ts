export const lgDown = 991.9
export const mdDown = 767.9
export const xsDown = 480

export const apiStatusFailed = 400
export const apiMessageFailed = 'Error !!'

export const apiStatusSuccess = 200

export const apiStatusInvalid = 422

export const apiStatusNotFound = 404

export const apiStatusNotAuthorize = 403

export interface userProfileData {
    stepAboutMe: string
    stepMyInt: string
    stepConfirm: string
    fullName: string
}

export interface IApiUserData extends IApiUserResponse {
    message?: string
}
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export interface IApiDataImage {
    map?: any
    alt?: string
    width?: string
    height?: string
    url: string
    title?: string
}

export interface IApiContactUsData {
    name?: string
    subject?: string
    email?: string
    mobile?: string
    message?: string
    token?: string
    submit?: boolean
}
export interface IApiContactUsForm {
    success?: boolean
    data?: IApiContactUsData
    status?: number
}

export interface IApiDNDData {
    first_name?: string
    last_name?: string
    mobile?: string
    email?: string
    landline?: string
    pincode?: string
    state?: string
    city?: string
    token?: string
}
export interface IApiDNDDataForm {
    success?: boolean
    data?: IApiDNDData
    status?: number
}

export interface IApiJoinUsData {
    first_name?: string
    last_name?: string
    mobile?: string
    email?: string
    city?: string
    token?: string
}
export interface IApiJoinUsForm {
    success?: boolean
    data?: IApiJoinUsData
    status?: number
}

export interface IApiBecomeAnAgentData {
    name?: string
    mobile?: string
    source?: string
    medium?: string
    campaign?: string
    content?: string
    term?: string
    token?: string
}
export interface IApiBecomeAnAgentDataForm {
    success?: boolean
    data?: IApiBecomeAnAgentData
    status?: number
}

export interface IApiNewsLetterData {
    email?: string
    page?: string
    token?: string
}

export interface IApiNewsLetterForm {
    success?: boolean
    data?: IApiNewsLetterData
    status?: number
}
export interface IApiHaveAnIdeaData {
    employee_id?: string
    department?: string
    subject?: string
    idea?: string
    token?: string
}
export interface IApiHaveAnIdeaForm {
    success?: boolean
    data?: IApiHaveAnIdeaData
    status?: number
}
export interface IApiJWTTokenData {
    data?: {
        jwt?: string
    }
}
export interface IApiJWTToken {
    success?: boolean
    data: string
    status?: number
}
export interface IApiGetLocalititesData {
    success?: boolean
    data?: string[]
    status?: number
}

export interface IApiProductData {
    first_name?: string
    last_name?: string
    gender?: string
    dob?: string
    mobile?: string
    email?: string
    product_id?: string
    product_name?: string
    source?: string
    token?: string
    otp?: string
    midwayLink?: string
}

export interface IApiProductForm {
    success?: boolean
    data?: IApiProductData
    status?: number
}

export interface IApiGetBranchesByLocality {
    success?: boolean
    data?: {
        name: string
        slug: string
        address: string
        locality: string
        coordinates: {
            latitude: string
            longitude: string
        }
        banner: {
            image: {
                desktop: IApiDataImage
                mobile: IApiDataImage
            }
            title: string
            subTitle: string
        }
        amenities: any[]
    }[]
    status?: number
}
//Investor Document
export interface IApiDocData {
    document_name?: string
    id?: number
    file_path?: string
}
export interface IApiInvestorDoc {
    success: boolean
    data: IApiDocData[]
    status: number
}
interface RatingData {
    data: {
        message?: string
        users?: string
        rating?: string
    }
}
export interface IApiRatingData {
    success: boolean
    data?: RatingData
    status: number
}
interface ImageObject {
    desktop?: {
        url: string
        alt?: string
    }
    mobile?: {
        url: string
        alt?: string
    }
}
interface CategoryObject {
    id: number
    name: string
    description?: string
}
interface BlogItem {
    title: string
    path: string
    image: ImageObject
    blog_category: CategoryObject
    short_desc: string
    read_time: number
    publish_date: string
}

export interface IApiBlogiltersApiResponse {
    success?: boolean
    data: {
        list: BlogItem[]
        loadMore: boolean
        nextPage: number
    }
    status: number
}
export interface IApiAutoCompleteResponse {
    success?: boolean
    data: string[]
    status: number
}

export interface IApiSearchListResponse {
    list?: {
        title?: string
        description?: string
        path?: string
        createdAt?: string
        updatedAt?: string
        publishedAt?: string
    }[]
    pagination?: {
        page: number
        pageSize: number
        total: number
        pageCount: number
    }
}
export interface IApiSearchResponse {
    success?: boolean
    data: IApiSearchListResponse
    status: number
}
export interface MySavedLikedData {
    success?: boolean
}
export interface BlogViewsdData {
    success?: boolean
}
export interface IApiJwtToken {
    jwt?: string
    user?: {
        id: number
        documentId: string
        username: string
        email: string
        provider: string
        confirmed: boolean
        blocked: boolean
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}
export interface IApiJoinOurTeamData {
    full_name?: string
    mobile?: string
    email?: string
    department?: string
    message?: string
    resume?: string
    token?: string
}

export interface IApiJoinOurTeamForm {
    success?: boolean
    data?: IApiJoinOurTeamData
    status?: number
}
export interface IApiOTPData {
    ClientId: string
    PolicyNo: string
    TransactionId: string
    Status: string
    Remark: string
    otp: string
}
export interface IApiOTP {
    success: boolean
    data: IApiOTPData
    status: number
}
export interface IApiCOIData {
    mobile: string
    pdf: string
}
export interface IApiDownloadCOI {
    success: boolean
    data: IApiCOIData
    status: number
}

export interface NavTitle {
    title: string
}
export interface FundList {
    title: string
    fund_db: string
    color: string
    fund_sud: string
    SFIN: string
    code: string
    display_name: string
    nav_products: NavTitle[]
}
export interface DetailsData {
    list: FundList[]
}
export interface IApiFundNavDetails {
    success?: boolean
    data?: DetailsData
    status?: number
}
export interface FilterList {
    title: string
    nav: string
    date: string
    id: string
}
export interface FilterData {
    list: FilterList[]
}
export interface IApiFundNavDFilter {
    success?: boolean
    data?: FilterData
    status?: number
}
export interface DateFilterData {
    fund?: {
        id: string
    }
    max: {
        max: {
            nav: number
            date: string
        }
    }
    min: {
        min: {
            nav: number
            date: string
        }
    }
}

export interface IListResponse {
    list: DateFilterData
}
export interface IApiDateFilter {
    success?: boolean
    data?: IListResponse
    status?: number
}

export interface JobList {
    designation: string
    department: string
    experience: string
    location: string[]
    description: string
    employeeType: string
    applyLink: string
}
export interface IModuleList {
    businessUnit: string[]
    location: string[]
    jobList: JobList[]
}
export interface CareerApiResponse {
    success?: boolean
    data?: IModuleList
    status?: number
}
