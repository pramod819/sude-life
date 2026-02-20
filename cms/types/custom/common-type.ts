import { env } from '@strapi/utils';
import exp from 'node:constants';
import investorsCategory from '../../src/api/investors-category/controllers/investors-category';

export interface PageRequest {
    site: string;
    path: string;
    params?: string;
}

export interface PageDataRequest {
    pageApi: string;
    commonApi: string;
    components: object;
    site: string;
    path: string;
    params?: string;
}

export interface PageResponse {
    success: boolean;
    data: PageDataResponse;
    status: number;
}

export interface PageDataResponse {
    app: PageDataApp;
    components: Object;
    info: PageDataInfo;
}

export interface PageDataApp {
    imageBasePath: string;
    language: string;
    homeUrl: string;
}

export interface PageDataInfo {
    path: string;
    pageTitle: string;
    pageId: string;
    globalSearchPath?: string;
    mostSearchedKeywords?: string[];
    product: Object;
    metaTags: Object;
}

export interface Media {
    id: number;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: { small: [object]; thumbnail: [object] };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: string;
    folderPath?: string;
    createdAt: string;
    updatedAt: string;
}

export interface MediaImageRequest {
    id: number;
    img_dsk: Media;
    img_mbl: Media;
}

export interface MediaImage {
    desktop: ImageData;
    mobile: ImageData;
}

export interface ImageData {
    alt: string;
    title: string;
    width: number;
    height: number;
    url: string;
}

export interface BlockText {
    type: string;
    children: BlockTextChildren[];
}

export interface BlockTextChildren {
    type: string;
    text: string;
}

export interface ListRequest {
    id: number;
    text: string;
}

export interface SubComponent {
    id: number;
}

export interface CtaRequest {
    id: number;
    title: string;
    url: string;
    opt: string[];
}

export interface Cta {
    link: string;
    text: string;
    options: { [key: string]: number };
}

export interface OptionResponse {
    [key: string]: boolean;
}

export interface Title {
    text: string;
    tag: string;
}
export interface TitleRequest {
    id: number;
    title: string;
    titleTags: string;
}

export interface AuthorRequest {
    id: number;
    name: string;
    rating: number;
    image: ImageData;
    title: string;
    description: string;
}

export interface AuthorResponse {
    name: string;
    rating: number;
    image: ImageData;
    title: string;
    description: string;
}

export interface AgentRequest {
    id: number;
    name?: string;
    image?: ImageData;
    location?: string;
    clients?: number;
    description?: string;
}

export interface AgentResponse {
    name: string;
    image: ImageData;
    location: string;
    clients: number;
    description: string;
}

export interface PeopleRequest {
    id: number;
    name: string;
    image: MediaImage;
    description: string;
    designation: DesignationRequest[];
    awards: AwardsRequest[];
    linkedIn: string;
    cta: Cta;
    qualifications: string;
    experience: string;
    quote: string;
}

export interface PeopleResponse {
    name: string;
    image: MediaImage;
    description: string;
    designation: DesignationResponse[];
    awards: AwardsResponse[];
    linkedIn: string;
    cta: Cta;
    qualifications: string;
    experience: string;
    quote: string;
}

export interface PlanCategoryRequest {
    id: number;
    name: string;
}

export interface GlossaryRequest {
    id: number;
    name: string;
    description: string;
}

export interface GlossaryResponse {
    name: string;
    description: string;
}

export interface GlossaryApiResponse {
    keyword: string;
    planId: number;
}

export interface DesignationRequest {
    role: string;
    designation: DesignationData;
}

export interface DesignationResponse {
    role: string;
    text: string;
}

export interface AwardsRequest {
    description: string;
    award: AwardData;
}

export interface AwardsResponse {
    award: string;
    description: string;
}

export interface DesignationData {
    text: string;
}

export interface AwardData {
    name: string;
}

export interface ApiResponse {
    success: boolean;
    data: Object;
    status: number;
}

export interface TenderRequest {
    rfpNumber: string;
    tenderStatus: string;
    description: string;
    issueDate: string;
    submissionDate: string;
    document: ImageData;
}

export interface TenderResponse {
    number: string;
    status: string;
    description: string;
    issueDate: string;
    submissionDate: string;
    document: ImageData;
}

export interface StickyModuleData {
    icon: ImageData;
    cta: Cta;
}

export interface WithdrawnPlanResponse {
    code: string;
    codeDescription: string;
    detailPage: string;
    createdAt: string;
    withdrawnProductDate: string;
    withdrawnProductLink: string;
    withdrawnProductCategory: string;
}

export interface MediaType {
    type: string;
    name: string;
    youtubeLink?: string;
    audioLink?: string;
    link?: string;
    document?: ImageData;
    thumbnail?: MediaImage;
    gallery?: MediaGallery[];
}

interface MediaGallery {
    image: MediaImage;
    caption: string;
}

export interface ProductRequest {
    title: string;
    path: string;
    productId: string;
    description: string;
    thumbnail: MediaImage;
    features?: FeatureListData[];
    min?: string;
    max?: string;
    premiumLink?: string;
}

export interface ProductResponse {
    title: string;
    path: string;
    productId: string;
    description?: string;
    thumbnail: MediaImage;
    features?: string[];
    minAmount?: string;
    maxAmount?: string;
    premiumLink?: string;
}

export interface FeatureListData {
    id: number;
    feature: string;
}

export interface LabelPack {
    type: string;
    text: string;
}

export interface BlogResponse {
    id: number;
    title: string;
    path: string;
    image: MediaImage;
    short_desc: string;
    read_time: number;
    likeCount: BlogLikeResponse;
    viewCount: BlogLikeResponse;
    publish_date: string;
}

export interface BlogWithCategoryResponse {
    id: number;
    title: string;
    path: string;
    image: MediaImage;
    short_desc: string;
    read_time: number;
    likeCount: BlogLikeResponse;
    viewCount: BlogLikeResponse;
    publish_date: string;
    categories: string[];
    additionalCTA: Cta;
}

export interface BlogCategoryRequest {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    icon: ImageData;
    categoryPage: string;
}

export interface BlogCategoryResponse {
    id: number;
    name: string;
    icon: ImageData;
    categoryPage: string;
}

export interface BlogLikeResponse {
    count: number;
    id?: number;
}

export interface DisclosureResponse {
    rows: PublicdisclosureResponse[];
}

export interface PublicdisclosureResponse {
    id: number;
    financial_year: string;
    q1: string[];
    h1: string[];
    m9: string[];
    fy: string[];
    year: string;
}

export interface blogViweApiParam {
    blogId: number;
    type: string;
}

export interface saveBlogLikeApiParam {
    blogId: number;
    token: string;
}

export interface saveBlogDataApiParam {
    blogId: number;
    type: string;
    token: string;
}

export interface BranchResponse {
    name: string;
    slug: string;
    address: string;
    locality: string;
    coordinates: BranchCoordinates;
    banner: BranchBanner;
    amenitiesTitle: string;
    amenitiesBgImage: MediaImage;
    amenities: BranchAmenities[];
}

export interface BranchCoordinates {
    latitude: string;
    longitude: string;
}

export interface BranchBanner {
    title: string;
    subTitle: string;
    image: MediaImage;
}

export interface BranchAmenities {
    type: string;
    text: string;
}

export interface InvestorCategoryResponse {
    id: number;
    investor_category: string;
    display_format: string;
    show_filter_quarterly: boolean;
}

export interface InvestorCategoryApiParam {
    category: number;
    year?: string;
    quarter?: string;
}

export interface DocumentListResponse {
    document_name: string;
    id: number;
    file_path: string;
}

export interface PartnerDetails {
    Partner: string;
    PartnerCode: string;
}

export interface PolicyDetails {
    PolicyNo: string;
    DOB: string;
    ClientId: string;
    ApplicationNumber: string;
}

export interface CaseCreationItem {
    Action: string;
    Case: CaseItem[];
    CaseTransaction: CaseItem[];
}

export interface CaseItem {
    Key: string;
    Value: string;
}

export const HTTP_STATUS_SUCCESS: number = 200;

export const HTTP_STATUS_NOTFOUND: number = 404;

export const HTTP_STATUS_FORBIDDEN: number = 403;

export const HTTP_STATUS_UNAUTHORIZED: number = 401;

export const HTTP_STATUS_ERROR: number = 500;

export const HTTP_STATUS_VALIDATION: number = 422;

export const MAX_RESULT_GLOSSARY: number = 20;

export const VALIDATION_FAILED = 'Error! Please try again later';

export const API_RESULT_FORMAT = {
    success: true,
    data: {},
    status: HTTP_STATUS_SUCCESS,
};

export const API_RESULT_FAIL = {
    success: false,
    data: {},
    status: HTTP_STATUS_FORBIDDEN,
};

export const STATUS_PUBLISH = 'published';

export const TENDER_STATUS = ['Upcoming', 'Closing soon', 'Active', 'Closed'];

export interface FormResponse {
    success: boolean;
    data: object;
    status: number;
}

export interface FormResponseExternal {
    success: boolean;
    data: {
        value: any;
    };
    status: number;
}

export const RATTING_DATA = [
    { id: 1, title: 'Poor' },
    { id: 2, title: 'Satisfactory' },
    { id: 3, title: 'Good' },
    { id: 4, title: 'Very Good' },
    { id: 5, title: 'Excellent' },
];

export interface ratingViweApiParam {
    productId: string;
}

export interface saveProductRatingApiParam {
    productId: string;
    token: string;
    rating: number;
}

export interface saveRatingDataApiParam {
    productId: string;
    rating: number;
    token: string;
}

export interface RatingResponse {
    rating: number;
    users: number;
    id?: number;
    message?: string;
}

export interface ExternalApiResponse {
    success: boolean;
    data: any;
    status: number;
}

export interface disclosureApiParam {
    type: string;
}

export interface InvestorFactsheetApiParam {
    year: string;
    month?: string;
}

export interface TopicData {
    type: string;
    topicNumber: number;
    tags?: string[];
    title: string;
    shortDescription?: string;
    bannerImage?: MediaImage;
    thumbnail?: MediaImage;
    path?: string;
    video?: VideoModule;
    details?: CardModule;
    publishedDate?: string;
}

export interface VideoModule {
    description: string;
    video: ImageData;
}

export interface CardModule {
    variation: string;
    colour: string;
    fontColour: string;
    number: number;
    numberBgColour: string;
    title: string;
    description: string;
    imagePosition: string;
    quote: string;
    image: MediaImage;
}

export interface OtherTopicData {
    number: number;
    module: string;
    list: TopicData[];
}

export interface CountryRequest {
    id: number;
    name: string;
    country_code: string;
    dialing_code: string;
}

export interface CountryResponse {
    name: string;
    countryCode: string;
    dialingCode: string;
}
