type ButtonStyle = 'black' | 'white' | 'transparentWhite' | 'transparentBlack'

export interface IApiPageResponse {
    success: boolean
    data: IApiPageData
}

export interface IApiPageData {
    info: IApiPageDataInfos
    app: IApiPageDataApp
    components: IApiPageDataComponents
}

export interface IApiPageDataComponents {
    [standardImage]?: IApiStandardImageComponent
    [standardText]?: IApiStandardTextComponent
    [navigation]?: IApiNavigationComponent
    [header]?: IApiHeaderComponent
    [footer]?: IApiFooterComponent
}

export interface MetaTags {
    abstract?: string
    article_author?: string
    article_expiration_time?: string
    article_modified_time?: string
    article_published_time?: string
    article_publisher?: string
    article_section?: string
    article_tag?: string
    author?: string
    book_author?: string
    book_isbn?: string
    book_release_date?: string
    book_tag?: string
    cache_control?: string
    canonical_url?: string
    description?: string
    expires?: string
    generator?: string
    geo_placename?: string
    geo_position?: string
    geo_region?: string
    google?: string
    icbm?: string
    image_src?: string
    keywords?: string
    next?: string
    og_audio?: string
    og_audio_secure_url?: string
    og_audio_type?: string
    og_country_name?: string
    og_description?: string
    og_determiner?: string
    og_email?: string
    og_fax_number?: string
    og_image?: string
    og_image_alt?: string
    og_image_height?: string
    og_image_secure_url?: string
    og_image_type?: string
    og_image_url?: string
    og_image_width?: string
    og_latitude?: string
    og_locale?: string
    og_locale_alternative?: string
    og_locality?: string
    og_longitude?: string
    og_phone_number?: string
    og_postal_code?: string
    og_region?: string
    og_see_also?: string
    og_site_name?: string
    og_street_address?: string
    og_title?: string
    og_type?: string
    og_updated_time?: string
    og_url?: string
    og_video?: string
    og_video_duration?: string
    og_video_height?: string
    og_video_secure_url?: string
    og_video_type?: string
    og_video_width?: string
    original_source?: string
    pragma?: string
    prev?: string
    profile_first_name?: string
    profile_gender?: string
    profile_last_name?: string
    profile_username?: string
    rating?: string
    referrer?: string
    refresh?: string
    revisit_after?: string
    rights?: string
    robots?: string
    set_cookie?: string
    shortlink?: string
    title?: string
    video_actor?: string
    video_actor_role?: string
    video_director?: string
    video_release_date?: string
    video_series?: string
    video_tag?: string
    video_writer?: string
}

// Page Info Types
export interface IApiPageDataInfos {
    pageTitle: string
    metaTags: MetaTags
    pageId: number
    product?: {
        id?: string
        title?: string
    }
    globalSearchPath?: string
    mostSearchedKeywords?: string[]
}

export interface IApiPageDataApp {
    imageBasePath?: string
    language: string
}

export interface IApiHeaderComponent {
    mainMenu: {
        cta: {
            link: string
            text: string
            options: {
                newWindow: boolean
                email: boolean
                telephone: boolean
                primary: boolean
                secondary: boolean
                ctaLink: boolean
                download: boolean
            }
        }
        tabbedView: boolean
        level2?: {
            cta: {
                url: string
                link: string
                text: string
                options: IApiOptionsDataCta
            }
            level3?: {
                cta: {
                    link: string
                    text: string
                    options: IApiOptionsDataCta
                }
                level4?: {
                    cta: {
                        link: string
                        text: string
                        options: IApiOptionsDataCta
                    }
                    benefit?: {
                        title: string
                        cta: {
                            link: string
                            text: string
                            options: IApiOptionsDataCta
                        }[]
                        list: string[]
                    }
                    icon?: string
                }[][]
                icon?: string
            }[][]
            icon?: string
            tabbedView?: boolean
        }[][]
    }[]
    logo: IApiDataImage
    additionalLogo: IApiDataImage
    additionalLogoLink: string
    profileLink: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    topMenu: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }[]
    options: {
        language: boolean
        search: boolean
        profile: boolean
    }
    breadcrumbs?: {
        theme?: string
        list: {
            title: string
            path?: string
            disable?: boolean
        }[]
    }
    globalSearchPath?: string
    mostSearchedKeywords?: string[]
}

export interface CountrySelector {
    [key: string]: {
        title: string
        languages: { title: string; slug: string }[]
    }
}

export interface IApiNavigationComponent {
    type?: string
    menus?: IApiMenus[]
}

export interface IApiMenus {
    text: string
    type: string
    link: string
    targetBlank: boolean
    featuredArticles?: Article[]
}

// StandardText Interface
export interface IApiStandardTextComponent {
    title?: string
    cta?: IApiDataCta
}

// StandardImage Interface
export interface IApiStandardImageComponent {
    variation?: string
    images: IApiStyledImage
}

export interface IApiStandardImageComponent {
    image?: IApiStyledImage
}

export interface IApiStyledImage {
    desktop?: IApiDataImage
    mobile?: IApiDataImage
}

// Common Data Api Interface
export interface IApiCommonData {
    imageBasePath: string
    language: string
}

// Common Interface
export interface IApiDataCta {
    link?: string
    text?: string
    type?: string
    options?: IApiOptionsDataCta
    buttonStyle?: ButtonStyle | string
    Link?: string
    targetBlank?: boolean
}

export interface IApiOptionsDataCta {
    newWindow?: boolean
    email?: boolean
    telephone?: boolean
    primary?: boolean
    secondary?: boolean
    ctaLink?: boolean
    download?: boolean
}

export interface IApiDataImage {
    map?: any
    alt?: string
    width?: string
    height?: string
    url: string
    title?: string
}

export interface IApiDataVideo {
    url: string
    thumbNail: IApiDataImage
}

export interface IApiDataImageIcon {
    alt: string
    width: string
    height: string
    url: string
}

export interface IApiDataSocial {
    url: string
    title: string
    type: string
}

export interface IApiNavFooter {
    links: {
        link: string
        options?: {
            newWindow?: string
        }
        title: string
    }[]
    title: string
}

interface StickyModuleItem {
    icon: {
        alt: string
        title: string
        width: number
        height: number
        url: string
    }
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
}

interface IApiFooterComponent {
    logo?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    productMenu?: {
        title?: string
        column?: {
            title?: string
            link?: string
            menuItem?: IApiDataCta[]
        }[][]
    }
    quickLinks?: {
        title?: string
        column?: {
            title?: string
            link?: string
            menuItem?: IApiDataCta[]
        }[][]
    }
    importantLinks?: {
        title?: string
        menuItem?: IApiDataCta[]
    }
    otherLinks?: {
        title?: string
        menuItem?: IApiDataCta[]
    }
    followUs?: {
        title?: string
        portalLogo?: IApiDataImage
        socialIcons?: {
            type?: string
            icon?: IApiDataImage
            link?: string
        }[]
        portalLogoLink?: string
    }
    disclaimer?: {
        title?: string
        description?: string
    }
    infoSection?: {
        column?: {
            title?: string
            description?: string
        }[]
        description?: string
    }
    copyright?: string
    stickyModule: StickyModuleItem[]
}

interface ISocialIcon {
    iconType: string
    icon: IApiDataImage
    Link: string
    targetBlank: string
}

interface FaqItem {
    question: string
    answer: string
    category: string
}

export interface FaqDataProps {
    faqData: FaqItem[]
}

export interface IApiFaqComponent {
    title: {
        tag: string
        text: string
    }
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    faq: FaqItem[]
}

export interface IApiIconAndText {
    title: {
        text?: string
        tag?: string
    }
    cta: {
        map: any
        link?: string
        text?: string
        options?: IApiOptionsDataCta
    }
    icon: {
        map: any
        title?: string
        subTitle?: string
        description?: string
        iconImage?: IApiDataImage
    }
    backgroundImage?: IApiStyledImage
}

// Text And Media Component
export interface LinkLogo {
    link?: string
    logo?: IApiDataImage
}

export interface IApiTextMediaComponent {
    title?: {
        text?: string
        tag?: string
    }
    description?: string
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    mediaType?: string
    media?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    logos?: LinkLogo[]
    scannerText?: string
    scanner?: IApiDataImage
}
export interface IApiConnectWithUs {
    title: {
        text: string
        tag: string
    }
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }[]
    minicard: {
        title: string
        description: string
        iconImage: IApiDataImage
    }[]
}

export interface IApiCardComponent {
    title: {
        text?: string
        tag?: string
    }
    description?: string
    card?: {
        map: any
        order: number
        backgroundColor?: string
        backgroundImage?: IApiStyledImage
        title?: string
        description?: string
        cta: {
            link?: string
            text?: string
            options?: IApiOptionsDataCta
        }
    }
}

export interface IApiIntroductionComponent {
    title: {
        text: string
        tag: string
    }
    description: string
    introCard: {
        bgcolor: string
        title: string
        subTitle: string
        bgimage: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        map: any
    }
}

export interface IApiTestimonialsComponent {
    title?: string
    subtitle?: string
    cta: {
        link?: string
        text?: string
        options?: IApiOptionsDataCta
    }
    authors: {
        name?: string
        rating?: string
        title?: string
        description?: string
        image?: IApiDataImage
    }[]
    backgroundImage: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    bgColor?: string
    quoteImage?: IApiDataImage
    navigationId?: string
    transparentText?: string
}

//c13 goal

export interface IApiOptionsCta {
    newWindow?: boolean
    email?: boolean
    download?: boolean
    telephone?: boolean
    primary?: boolean
    secondary?: boolean
    ctalink?: boolean
}
export interface IApiGoalComponent {
    title: {
        text?: string
        tag?: string
    }
    description?: string
    bgimage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    bgcolor?: string
    goalCard?: {
        bgcolor?: string
        text?: string
        image?: {
            desktop?: IApiDataImage
            mobile?: IApiDataImage
        }
        cta?: {
            link?: string
            text?: string
            options?: IApiOptionsCta
        }
    }[]
}

export interface IApiTextAndImageComponent {
    title?: {
        text?: string
        tag?: string
    }[]
    subtitle?: string
    navigationButton: {
        title?: string
        navigationId?: string
    }
    button: {
        link?: string
        text?: string
        options?: IApiOptionsDataCta
    }
    cta: {
        map: any
        link?: string
        text?: string
        options?: IApiOptionsDataCta
    }
    image?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    ad_text?: {
        map: any
        text?: string
    }
    icons?: IApiDataImage
    subtitleBold?: string
    description?: string
    navigationId?: string
}

export interface IApiTabSliderComponent {
    title?: {
        text?: string
        tag?: string
    }
    navigationId?: string
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    mediaTab: Array<{
        type: 'image' | 'video'
        title: string
        description: string
        mediaList: Array<{
            desktop?: IApiDataImage
            mobile?: IApiDataImage
            // For video type, mediaList contains video URLs
            [key: string]:
                | {
                      alt?: string
                      title?: string
                      width?: number
                      height?: number
                      url?: string
                  }
                | string[]
                | undefined
        }>
    }>
}

// c19 vertical Tab
export interface IApiVerticalTabComponent {
    title?: IApiTitleWithTag
    description?: string
    tabs?: {
        title?: string
        description?: string
        image?: IApiDataImage
        isImage?: string
    }
    bottomText?: string
}
export interface IApiInclusionExclusionComponent {
    title?: IApiTitleWithTag
    subTitle?: string
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    tab: {
        map: any
        title?: string
        description?: string
        icon?: IApiDataImage
        tabItem?: {
            title?: string
            description?: string
        }
        disclaimer?: string
    }
}

interface feature {
    text: string
}

interface agents {
    name: string
    image: IApiDataImage
    location: string
    clients: number
    description: string
}

export interface IApiBecomeAnAgent {
    title: {
        text: string
        tag: string
    }
    subtitle: string
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    feature: feature[]
    agents: agents[]
    labelPack: {
        type?: string
        text?: string
    }[]
    hideAgent?: string
}

interface DescriptionItem {
    description?: string
    title?: string
}
interface accordion {
    title?: string
    description?: DescriptionItem[]
    variation?: string
}

export interface IApiBenefitsComponent {
    mainTitle?: IApiTitleWithTag
    shortDescription?: string
    title?: string
    bulletPoints: string[]
    shortText?: string
    accordion: accordion[]
    description?: string
}

export interface IApiDocumentDownloadsComponent {
    title: IApiTitleWithTag
    clainType?: {
        map: any
        title?: string
        documentList?: {
            map: any
            documentName?: string
            document?: string
            info?: string
        }
    }
}

export interface IApiLearnAboutPlanComponent {
    title: IApiTitleWithTag
    subTitle?: string
    media?: {
        map: any
        icon?: IApiDataImage
        title?: string
        media?: string
    }
}

interface card {
    title: string
    description: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    bulletPoint: string[]
    subTitle?: string
}

export interface IApiCardSlider {
    title?: {
        text?: string
        tag?: string
    }
    card?: card[]
    navigationId?: string
}

interface AvoidClaimRejectItem {
    title: string
    description: string
}
export interface IApiAvoidClaimRejection {
    title: {
        text: string
        tag: string
    }
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    avoidClaimReject: AvoidClaimRejectItem[]
}

export interface IApiIconTextSlider {
    title?: {
        text?: string
        tag?: string
    }
    card?: {
        length: number
        map: any
        icon?: IApiDataImage
        title?: string
        description?: string
    }
    disclaimer?: string
}

export interface IApiKeyReasons {
    title?: {
        text?: string
        tag?: string
    }
    keyReasons?: {
        map: any
        icon?: IApiDataImage
        description?: string
    }
}

interface EligibilityList {
    text?: string
}

export interface IApiEligibility {
    title?: IApiTitleWithTag
    eligibility?: {
        map: any
        title?: string
        image?: IApiDataImage
        eligibilityList?: EligibilityList[]
    }
}

export interface IApiTitleWithTag {
    text: string
    tag: string
}

interface StepToBuy {
    title: string
    description: string
    icon: IApiDataImage
}
interface CTAStepToBuy {
    link?: string
    text?: string
    options?: IApiOptionsDataCta
}
export interface IApiStepsToBuy {
    title?: IApiTitleWithTag
    subTitle?: string
    overlapTitle?: string
    stepToBuy?: StepToBuy[]
    cta?: CTAStepToBuy[]
}
interface Step {
    title?: string
    description: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

export interface IApiStepToHowItWorks {
    title?: IApiTitleWithTag
    stepToWork: Step[]
}

interface Plans {
    title?: string
    description?: string
}

export interface IApiSelectPlan {
    title?: IApiTitleWithTag
    subTitle?: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    selectPlan: Plans[]
}

//IApiHowItWorks
interface Video {
    alt?: string
    title?: string
    width?: number
    height?: number
    url?: string
}
export interface TabHowItWorks {
    tabTitle?: string
    description?: string
    video?: Video
    youtubeVideoId?: string
}
export interface IApiHowItWorks {
    title?: IApiTitleWithTag
    tab?: TabHowItWorks[]
}
interface IconWithText {
    title?: string
    description?: string
    icon: IApiDataImage
}

export interface IApiWhenToBuyPlan {
    title?: IApiTitleWithTag
    backgroundColor?: string
    disclaimerText?: string
    iconWithText?: IconWithText[]
}

interface FeatureList {
    title: string
    description: string
    icon: IApiDataImage
    bulletPoints: string[]
}

interface Feature {
    firstColumn: FeatureList[]
    secondColumn: FeatureList[]
}

export interface IApiPlanFeatures {
    title?: IApiTitleWithTag
    subtitle: string
    backgroundColour: string
    feature: Feature[]
}

export interface IApiImageTextPlan {
    title?: IApiTitleWithTag
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    link?: IApiDataCta
    button?: IApiDataCta
    planList?: PlanList[]
    description?: string
    backgroundColor?: string
}

interface PlanList {
    title?: string
    description?: string
}
interface Item {
    title: string
    description: string
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
}

export interface IApiImageWithTextBlocks {
    title: {
        text: string
        tag: string
    }
    description: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    items: Item[]
}
export interface IApiFullWidthBanner {
    image: {
        desktop: ImageDetails
        mobile: ImageDetails
    }
    title: string
    subTitle: string
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }[]
}

interface LogoItem {
    logo: IApiDataImage
}

export interface IApiLogoComponent {
    title: IApiTitleWithTag
    logos: LogoItem[]
}

interface Promoter {
    title: string
    description: string
    logo: IApiDataImage
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
}

export interface IApiOurPromotersComponent {
    title: IApiTitleWithTag
    promoters: Promoter[]
}

interface Designation {
    role: string
    text: string
}

interface Person {
    name: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    description: string
    designation: Designation[]
    linkedIn: string
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    qualifications: string
    experience: string
    quote: string
}

export interface IDesignation {
    role: string
    text: string
}

export interface IAwardPerson {
    name: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    description?: string | null
    designation: IDesignation[]
    awards: IAward[]
    linkedIn?: string | null
    cta?: ICta | null
    qualifications?: string
    experience?: string
    quote?: string
}
export interface IApiPeopleListing {
    variation: string
    title: IApiTitleWithTag
    people?: Person[]
    awards?: {
        [category: string]: IAwardPerson[]
    }
}

export interface IApiCardSliderDescription {
    title: IApiTitleWithTag
    backgroundImage: {
        desktop: ImageDetails
        mobile: ImageDetails
    }
    cards: CardList[]
    navigationId?: string
}

interface CardList {
    title?: string
    description?: string
    image: {
        desktop?: ImageDetails
        mobile?: ImageDetails
    }
    cta?: IApiDataCta
}

//Horizontal Tabs Component
export interface IApiHorizontalTabs {
    title?: IApiTitleWithTag
    shortDescription?: string
    tabs?: {
        tabTitle?: string
        title?: string
        description?: string
        bulletPoint?: string[]
        image: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        isRightSideImage?: string
    }[]
}

export interface IApiSimpleIntroduction {
    title?: IApiTitleWithTag
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    introductionDetails?: {
        description?: string
        introductionList?: IntroductionList[]
    }[]
}

interface IntroductionList {
    title?: string
    description?: string
}

//Tenders
export interface IApiTendersComponent {
    title?: IApiTitleWithTag
    tabs?: string[]
    tableHeader?: string[]
    status?: string[]
    tenders?: TenderData[]
}

interface TenderData {
    number?: string
    status?: string
    description?: string
    issueDate?: string
    submissionDate?: string
    document?: DocumentInfo
}

interface DocumentInfo {
    alt?: string
    title?: string
    width?: number
    height?: number
    url?: string
}

export interface IApiTextBlocks {
    title?: IApiTitleWithTag
    textBlockTitle?: string
    textBlocks?: {
        title?: string
        description?: string
    }[]
    importantPointHeading?: string
    importantPoints?: string
}

export interface IApiScrollingCards {
    title?: IApiTitleWithTag
    cards?: {
        title?: string
        description?: string
        colour?: string
        image: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
    }[]
    navigationId?: string
}

// ImageTextWithPointers
export interface IApiImageTextWithPointers {
    title?: IApiTitleWithTag
    type?: string
    image?: IApiDataImage
    points?: {
        title?: string
        description?: string
    }[]
    description?: string
    descriptionWithPoints?: string
}

export interface IApiColumnCardsWithCta {
    title?: IApiTitleWithTag
    subTitle?: string
    cards?: {
        title?: string
        colour?: string
        fontColour?: string
        image?: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        cta?: IApiDataCta
        expandText?: string
    }[]
    importantPointHeading?: string
    importantPoints?: string
}

interface StepsTabs {
    title: string
    description: string
    icon: IApiDataImage
}

export interface IApiStepsToBuyOnline {
    title: IApiTitleWithTag
    subTitle: string
    description: string
    tabs: StepsTabs[]
}

// Glossary
export interface IApiGlossaryComponent {
    title?: IApiTitleWithTag
    description?: string
    planId?: number
    bgImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    glossaries?: GlossariesList[]
}

interface GlossariesList {
    id?: number
    keyword?: string
    description?: string
}

// Error And Maintenance
export interface IApiErrorAndMaintenance {
    errorCode?: string
    title?: IApiTitleWithTag
    description?: string
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cta?: IApiDataCta
}

//Withdrawn Products
export interface IApiWithdrawnProducts {
    title?: IApiTitleWithTag
    products?: {
        code?: string
        codeDescription?: string
        withdrawnProductDate?: string
        detailPage?: string
        withdrawnProductLink?: string
        category?: string
        withdrawnProductCategory?: string
    }[]
}

//TwoColumnIconText
export interface IApiTwoColumnIconText {
    title?: IApiTitleWithTag
    shortDescription?: string
    items?: {
        icon?: IApiDataImage
        title?: string
        description?: string
    }[]
    description?: string
}

//Two Cards with CTA
export interface IApiTwoCardsWithCta {
    variation?: string
    title?: IApiTitleWithTag
    subTitle?: string
    cards?: {
        bgColour?: string
        image?: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        title?: string
        subTitle?: string
        cta?: IApiDataCta
        titleBottom?: string
        pointers?: string[]
    }[]
}

//Cards with Icon
export interface IApiCardWithIcon {
    title?: IApiTitleWithTag
    subTitle?: string
    backgroundImage: string
    cardDetails?: {
        icon?: IApiDataImage
        title?: string
        description?: string
        cta?: IApiDataCta[]
    }[]
    show4inarow?: string
}

interface GuideTab {
    title: string
    shortDescription?: string
    description: string
}

export interface IApiGuideComponent {
    title: IApiTitleWithTag
    description: string
    tabs: GuideTab[]
}

export interface IApiStandardImageWithText {
    title: IApiTitleWithTag
    description: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

//Cards with Icon
export interface IApiVideoCarousel {
    title?: string
    type?: string
    subTitle?: string
    youtubeLink?: string
    thumbnail?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}
;[]

//Pure text Component
export interface IApiPureTextComponent {
    title?: IApiTitleWithTag
    description?: string
}

//Overview Component
export interface IApiOverviewComponent {
    title: IApiTitleWithTag
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    text?: {
        title?: string
        description?: string
    }[]
    cards?: {
        icon?: IApiDataImage
        title?: string
        description?: string
    }[]
}

export interface IApiCenterTextImageComponent {
    title: IApiTitleWithTag
    subTitle: string
    description: string
    bgColour: string
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

//Banner Carousel
export interface IApiBannerCarouselComponent {
    title?: IApiTitleWithTag
    slides?: {
        image?: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        ctas?: IApiDataCta[]
    }
}

//Product Cards  Component
export interface ProductCards {
    name?: string
    description?: string
    thumbnail?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    features?: string[]
}
export interface IApiProductCardsComponent {
    title: IApiTitleWithTag
    subtitle?: string
    products?: ProductCards[]
    blockTitle?: string
    bulletPoints?: string[]
    disclaimerText?: string
}

interface Tab {
    title: string
    medias: MediaItem[]
}

type MediaItem =
    | VideoMedia
    | DocumentMedia
    | LinkMedia
    | AudioMedia
    | GalleryMedia

interface VideoMedia {
    type: string
    name: string
    youtubeLink: string
    displayDate: string
}

interface DocumentMedia {
    type: string
    name: string
    displayDate: string
    document: DocumentDetails
}

interface LinkMedia {
    type: string
    name: string
    displayDate: string
    link: string
}

interface AudioMedia {
    type: string
    name: string
    displayDate: string
    audioLink: string
}

interface GalleryMedia {
    type: string
    name: string
    displayDate: string
    thumbnail: ThumbnailDetails
    gallery: GalleryItem[]
}

interface DocumentDetails {
    alt: string
    title: string
    width: number
    height: number
    url: string
}

interface ThumbnailDetails {
    desktop: IApiDataImage
    mobile: IApiDataImage
}

interface GalleryItem {
    caption: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

export interface IApiMediaTemplateComponent {
    title: string
    tabs: Tab[]
}

export interface IApiPointersWithTextComponent {
    title: IApiTitleWithTag
    subTitle: string
    texts: string[]
}

interface AccordionItem {
    title: string
    description: string
}
export interface IApiAccordionWithImageComponent {
    title: IApiTitleWithTag
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    type: string
    accordion: AccordionItem[]
}

// Product Display Banner Component
interface ProductBanner {
    name: string
    description: string
    thumbnail: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    features: string[]
    minAmount: string
    maxAmount: string
}
export interface IApiProductDisplayBanner {
    backgroundImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    title: IApiTitleWithTag
    subtitle?: string
    products?: ProductBanner[]
}
//text wit product
export interface IApiTextWithProduct {
    title?: IApiTitleWithTag
    disclaimer?: string
    subtitle?: string
    product?: {
        title?: string
        path?: string
        description?: string
        features?: string[]
        minAmount?: number
    }
    secondProduct?: {
        title?: string
        path?: string
        description?: string
        features?: string[]
        minAmount?: number
    }
}

//Disclaimer Points
export interface IApiDisclaimer {
    title?: IApiTitleWithTag
    disclaimerPoints?: string
}

//IApiContactFormComponent
export interface IApiContactFormComponent {
    title?: IApiTitleWithTag
    subTitle?: string
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    formTitle?: string
    labelPack?: {
        type?: string
        text?: string
    }[]
}
//IApiHaveAnIdeaFormComponent
export interface IApiHaveAnIdeaComponent {
    navigationId?: string
    title?: IApiTitleWithTag
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    departments: string[]
    formTitle?: string
    labelPack?: {
        type?: string
        text?: string
    }[]
}
//IApiDNDFormComponent
export interface IApiDNDFormComponent {
    title?: IApiTitleWithTag
    shortDescription?: string
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    formTitle?: string
    labelPack?: {
        type?: string
        text?: string
    }[]
}

//IApiJoinUsFormComponent
export interface IApiJoinUsFormComponent {
    title?: IApiTitleWithTag
    bulletPoints?: string[]
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    formTitle?: string
    labelPack?: {
        type?: string
        text?: string
    }[]
    bgColour?: string
    bulletPointsOverlayColour?: string
    navigationId?: string
}

//PromoterTabsComponent
interface PromoterFeatures {
    title?: string
    shortDescription?: string
    icon?: IApiDataImage
}

interface PromoterLabel {
    label?: string
    number?: string
    icon?: IApiDataImage
    isLink?: string
}

export interface IApiPromoterTabs {
    titleTags?: IApiTitleWithTag
    backgroundImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    promoters?: {
        title?: string
        tabIcon?: IApiDataImage
        tabTitle?: string
        description?: string
        image?: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        promoterFeatures?: PromoterFeatures[]
        promoterLabel?: PromoterLabel[]
    }[]
}

export interface IApiTextVerticalCardsComponent {
    titleTags?: IApiTitleWithTag
    description?: string
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cards?: {
        highlightText?: string
        text?: string
    }[]
}

export interface IApiBlogCategory {
    title?: IApiTitleWithTag
    blogCategories?: {
        icon?: IApiDataImage
        name?: string
        categoryPage?: string
    }[]
}

// Faq With Tab Component
interface FaqList {
    question?: string
    answer?: string
}

export interface IApiFaqWithTab {
    titleTags?: IApiTitleWithTag
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    tabList?: {
        tabText?: string
        faqList?: FaqList[]
    }[]
    navigationId?: string
}

// Horizontal tabs with numbering and icons
interface Htabs {
    title: string
    description: string
    icon: IApiDataImage
}
export interface IApiHorizontalTabsWithIcons {
    titleTags?: IApiTitleWithTag
    label?: string
    subTitle?: string
    description: string
    tabItems: Htabs[]
}

// FaqWithVerticalTab
interface FaqverticalTab {
    tabText?: string
    faqList?: {
        question?: string
        answer?: string
    }[]
}

export interface IApiFaqWithVerticalTab {
    titleTags?: IApiTitleWithTag
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    horizontalTab?: {
        tabText?: string
        verticalTab?: FaqverticalTab[]
    }[]
}

interface TabBlock {
    tabText: string
    title: string
    description: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    pointerTitle: string
    points: string[]
}

export interface IApiTabsWithTextImage {
    tabs: TabBlock[]
}

export interface IApiThreeBackgroundCardsComponent {
    title: IApiTitleWithTag
    shortDescription: string
    card: {
        title: string
        description: string
    }[]
}

interface RotatingScrollableCard {
    bgColour: string
    title: string
    description: string
    fontColour: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}
export interface IApiRotatingScrollableCards {
    title: IApiTitleWithTag
    subTitle: string
    cards: RotatingScrollableCard[]
}

interface contactUsCard {
    designation: string
    name: string
    logo: IApiDataImage
    address: string
    email: string
    website: string
    contactNumber: string
}
export interface IApiHelpComponents {
    titleTags: IApiTitleWithTag
    subTitle: string
    contactUsList: contactUsCard[]
}

export interface IApiCardWithIconText {
    title: IApiTitleWithTag
    description?: string
    cardDetails?: {
        icon: IApiDataImage
        title: string
        description?: string
    }[]
}

export interface IApiNewsLetter {
    title?: string
    subtitle?: string
    bgColour?: string
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    inputPlaceholder?: string
    btnText?: string
    successMessage?: string
}

//IApiProductFormsComponent
export interface IApiProductFormsComponent {
    title?: IApiTitleWithTag
    subTitle?: string
    shortDescription?: string
    pointers?: string[]
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    formTitle?: string
    product?: {
        name?: string
        productId?: string
        soldOffline?: boolean
    }
    labelPack?: {
        type?: string
        text?: string
    }[]
    redirectUrl?: string
    disclaimer?: string[]
    disableBlopRedirection?: boolean
    disableCcLeads?: boolean
}

export interface IApiCardWithBackgroundText {
    title: IApiTitleWithTag
    subTitle: string
    subtitleBold: boolean
    cards: {
        cardTitle: string
        subTitle: string
        backgroundImage: IApiDataImage
        backgroundColor: string
        link?: string
        fontColour?: string
    }[]
    navigationId?: string
}

export interface IApiOnlyIconText {
    title: IApiTitleWithTag
    cardDetails: {
        description: string
        icon: IApiDataImage
    }[]
}

export interface IApiBranchLocatorComponent {
    title: IApiTitleWithTag
    state: {
        name: string
        districts: string[]
    }[]
    labelPack: {
        type: string
        text: string
    }[]
    navigationId?: string
}

export interface IApiBranchDetailsComponent {
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
    amenitiesTitle?: string
    amenitiesBgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

interface GalleryItem {
    caption: string
    image: Image
}

interface ImageData {
    name: string
    thumbnail: Image
    gallery: GalleryItem[]
    publish_date: string
}

interface YearData {
    tag: string
    data: ImageData[]
}

export interface IApiGalleryComponent {
    title: IApiTitleWithTag
    variation: string
    imageGallery: YearData[]
    navigationId: string
}

// TABLE COMPONENT
export interface IApiTableComponent {
    title?: IApiTitleWithTag
    assortedTable?: {
        header?: string[]
        rows?: MyTableRowData[]
        hideHeader: boolean
    }
    collapseTable: boolean
}

interface MyTableRowData {
    type?: 'standardText' | 'standardTable'
    collapsableText?: string
    columns?: MyColumnData[]
    columnOne?: string
    columnTwo?: string
}

interface MyColumnData {
    text?: string
    table?: MyTableData[]
    columns?: MyTextContentData[][]
}

interface MyTableData {
    text?: string
    header?: {
        columnOne?: string
        columnTwo?: string
    }
    rows: MyTableRowData[]
}

interface MyTableRowData {
    columnOne?: string
    columnTwo?: string
}

interface MyTextContentData {
    boldText?: string | null
    normalText?: string
}
//InvestorLanding
interface Category {
    display_format?: string
    show_filter_quarterly?: boolean
    investor_category?: string
    id?: number
}
interface LabelPacks {
    type: string
    text: string
}
export interface IApiInvestorLanding {
    titleTags: IApiTitleWithTag
    subTitle: string
    labelPack?: LabelPacks[]
    investorCategory?: Category[]
    documentYear?: string[]
    quarter?: string[]
}

interface Documents {
    documentName: string
    document: string
}
interface CategoriesList {
    tabText: string
    documentList: Documents[]
}
export interface IApiPoliciesDisclosure {
    titleTags?: IApiTitleWithTag
    subTitle?: string
    policiesAndDisclosure?: CategoriesList[]
    labelPack?: LapelPacks[]
}

interface SpeaksCardss {
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }

    transparentImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    quote: string
    name: string
    designation: string
}
export interface IApiLeaderShipSpeaks {
    title: IApiTitleWithTag
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cards: SpeaksCardss[]
    navigationId?: string
}

//Claims Horizontal Tabs Icons Text
interface IconList {
    iconText: string
    points: string
    icon: IApiDataImage
    textPosition: string
}
interface TableContent {
    header: string
    description: string
    columnOneHeader: string
    columnTwoHeader: string
    rowData: {
        columnOneText: string
        columnTwoText: string
    }[]
    importantPointHeader: string
    importantPoints: string
}
export interface IApiClaimsHorizontalTabsIconsText {
    titleTags: IApiTitleWithTag
    description: string
    tabList: {
        tabText: string
        description: string
        iconList: IconList[]
        tableContent: TableContent[]
    }[]
}
export interface RatingData {
    rating?: number
    users?: string
    message?: string
}
export interface IApiRatingComponent {
    title?: IApiTitleWithTag
    cta?: IApiDataCta
    pageId?: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    rating: number
}
// Blog Listing //

interface LabelPackTypes {
    trendingFilter: string
    titleByAscOrder: string
    titleByDescOrder: string
    dateByAscOrder: string
    dateByDescOrder: string
    searchTitle: string
    detailsLink: string
    viewText: string
    durationText: string
    loadButton: string
    noResult: string
}

type LabelPack = Array<{
    type: keyof LabelPackTypes
    text: string
}>

interface BlogItem extends Blog {
    id: number
    title: string
    path: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    rating?: {
        id?: string
        title?: string
    }[]
}

export interface IApiMediaQueries {
    titleTags?: IApiTitleWithTag
    mediaQuery?: {
        icon?: IApiDataImage
        boxTitle?: string
        boxText?: string
        boxType?: string
    }[]
}

//Public Disclosure
export interface DownloadFileData {
    id?: number
    url?: string
}
export interface FinancialYearData {
    id: number
    financial_year?: string
    year?: string
    q1?: DownloadFileData
    h1?: DownloadFileData
    m9?: DownloadFileData
    fy?: DownloadFileData
}
interface IUnclaimedPoint {
    id: number
    text: string
}
interface IUnclaimedList {
    id: number
    title?: string
    type?: 'Unordered' | 'Ordered'
    points?: IUnclaimedPoint[]
}

export interface UnclaimedData {
    id: number
    title?: string
    disclaimer?: string
    list?: IUnclaimedList[]
    documents?: IUnclaimedList[]
}
interface DocumentUpload {
    id: number
    documentId: string
    name?: string
    upload?: {
        url?: string
    }

    previewUrl: string
}
interface DocumentData {
    id: number
    title?: string
    url?: string
}
export interface GovernanceData {
    id: number
    title?: string
    documents?: DocumentData[]
}
export interface CardData {
    title: string
    financial_year?: FinancialYearData[]
    uncliamed?: UnclaimedData
    governance?: GovernanceData
}
export interface IApiPublicsDisclosure {
    title?: IApiTitleWithTag
    cardDetails?: CardData[]
}

interface DownloadDocument {
    title: string
    document: string
}

export interface IApiDownloadsSectionComponent {
    title: IApiTitleWithTag
    subTitle: string
    documents: DownloadDocument[]
}

export interface IApiSimpleBannerComponent {
    title: IApiTitleWithTag
    subTitle: string
    bgImage: {
        desktop: Image
        mobile: Image
    }
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }[]
    navigationId?: string
    rating?: string
    tags?: string
}

interface EligibilityCriteria {
    boldText: string
    text: string
}

export interface IApiTitleWithPointers {
    title: IApiTitleWithTag
    eligibility: EligibilityCriteria[]
    eligibilityHeader: string
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

//IApi Claims Perquisite Component
export interface IApiClaimsPerquisiteComponent {
    tabList: {
        tabText?: string
        header?: string
        tableContent?: {
            tableHeader?: string
            columnHeader1?: string
            columnHeader2?: string
            columnHeader3?: string
            columnHeader4?: string
            columnHeader5?: string
            columnHeader6?: string
            rows: {
                columnData1?: string
                columnData2?: string
                columnData3?: string
                columnData4?: string
                columnData5?: string
                columnData6?: string
            }[]
            disclaimerText?: string
        }[]
        formDownload?: {
            formName?: string
            formUpload?: string
        }[]
        faqList?: {
            question?: string
            answer?: string
        }[]
        backgroundImage: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
    }
    leftText?: string
    rightText?: string
    getDirection?: IApiDataCta
    scheduleCall?: IApiDataCta
    labelPack: {
        type?: string
        text?: string
    }[]
    short_desc: string
    read_time: number
    likeCount?: {
        count: number
        id: number
    }
    viewCount?: {
        count: number
        id: number
    }
    publish_date: string
}

interface BlogData {
    list: Blog[]
    loadMore: boolean
}

interface BlogCategory {
    id: number
    name: string
    data: BlogData
}

export interface IApiBlogListing {
    title: IApiTitleWithTag
    filter: boolean
    blogsByCategory: BlogCategory[]
    labelPack: LabelPack
    showSlider?: boolean
    displayFormat?: string
    cta?: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
}
export interface SliderFormatProps {
    content: Blog[]
    setContent: React.Dispatch<React.SetStateAction<Blog[]>>
    labelPack: LabelPack
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
}

//Blog Content
interface SubText {
    type: string
    text: string
}

interface BlogText {
    type: string
    children: SubText[]
}

interface BlogContent {
    title?: IApiTitleWithTag
    text?: BlogText[]
    variation?: string
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    bulletPoint?: string[]
}
export interface Category {
    id: number
    name: string
}
interface BlogCategory {
    [key: string]: Category
}
export interface IApiBlogContent {
    title: string
    short_desc: string
    blog_category: BlogCategory[]
    read_time: number
    publish_date: string
    content: BlogContent[]
    labelPack: LabelPack
    likeCount?: {
        count: number
        id: number
    }
    viewCount?: {
        count: number
        id: number
    }
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    blogId: number
}

//Related Blog
interface Articles {
    id: string
    title: string
    path: string
    image?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    short_desc: string
    read_time: number
    likeCount?: {
        count: number
        id: number
    }
    viewCount?: {
        count: number
        id: number
    }
    publish_date: string
    isLiked?: boolean
    additionalCTA?: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    categories?: string[]
}
export interface IApiRelatedBlogs {
    title: IApiTitleWithTag
    articles: Articles[]
    labelPack: LabelPack
}

interface CardItem {
    icon: IApiDataImage
    text: string
    cta: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    popupContent: string
}

export interface IApiCardWithPopup {
    title: IApiTitleWithTag
    shortDescription: string
    cardItems: CardItem[]
}
// Must Read Blogs
export interface IApiMustReadBlogs {
    title: IApiTitleWithTag
    shortDescription: string
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    articles: Articles[]
}

export interface IApiJoinOurTeamComponent {
    title?: IApiTitleWithTag
    subTitle?: string
    bgImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    departments?: string[]
    formTitle?: string
    labelPack?: {
        type?: string
        text?: string
    }[]
    redirectUrl?: string
    navigationId?: string
}

//Feature Articles
export interface IApiFeaturedArticles {
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    labelPack?: {
        type?: string
        text?: string
    }[]
    blogs: Articles[]
}

interface OverlapCard {
    cardTitle?: string
    description?: string
    icon?: IApiDataImage
    cta?: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }[]
}

export interface IApiTextWithOverlapCard {
    title?: IApiTitleWithTag
    backgroundImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cards?: OverlapCard[]
    navigationId?: string
    description?: string
}
export interface IApiBannerWithPlaceholders {
    title: IApiTitleWithTag
    shortDescription: string
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cta?: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    leftText?: string
    rightText?: string
    rightImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    leftImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
}

export interface IApiTabbedMenus {
    name?: string
    link?: string
    active?: boolean
}
;[]

// Video Slider Component
export interface IApiVideoSliderComponent {
    title?: {
        text?: string
        tag?: string
    }
    shortDescription?: string
    backgroundImage?: {
        desktop?: IApiDataImage
        mobile?: IApiDataImage
    }
    cta?: {
        link: string
        text: string
        options: IApiOptionsDataCta
    }
    videoItems: {
        videoTitle: string
        video: IApiDataImage
        image: IApiDataImage
    }[]
}

interface PeopleCards {
    name?: string
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    designation?: {
        role?: string
        text?: string
    }[]
    linkedIn?: string
    quote?: string
}

export interface IApiMeetTheTeam {
    title: IApiTitleWithTag
    bgImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    people?: PeopleCards[]
}

//Investor Factsheet
export interface IApiInvestorFactSheet {
    title: IApiTitleWithTag
    subTitle: string
    labelPack?: LabelPacks[]
    year?: string[]
    month?: string[]
}

//Fund Nav
export interface NavFunds {
    id: string
    display_name: string
    code: string
    fund_sud: string
    fund_db: string
    SFIN: string
    color: string
    pdf: {
        file_path: string
    }
    nav_products: {
        id: string
        title: string
    }[]
    minimum: {
        nav: number
        date: string
    }
    maximum: {
        nav: number
        date: string
    }
}
export interface FundNavDetails {
    id: string
    title: string
    nav: string
    date: string
    fund: NavFunds
}
export interface IApiFundNav {
    title: IApiTitleWithTag
    fundNames: {
        id: string
        name: string
    }[]
    fundNavDetails: FundNavDetails[]
    labelPack: LabelPacks[]
}

//Career Search Module
export interface Job {
    designation: string
    department: string
    experience: string | null
    location: string[]
    employeeType?: string
    description: string
    applyLink: string
}

interface JobData {
    businessUnit: string[]
    location: string[]
    jobList: Job[]
}

export interface CareersSearchModuleProps {
    title: IApiTitleWithTag
    labelPack: LabelPacks[]
    jobData: JobData
    navigationId?: string
}

export interface IApiVideoWithPointers {
    title: IApiTitleWithTag
    pointers: {
        thumbnail: IApiDataImage
        video: IApiDataImage
        benefits: {
            icon: IApiDataImage
            benefit: string
        }[]
    }[]
    navigationId?: string
}

export interface IApiImagesWithQuotes {
    imagesWithQuotes: {
        overlapImage?: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        mainImage?: IApiDataImage
        quote?: string
        name?: string
        designation?: string
    }[]
}

export interface IApiEmployeeSpeakComponent {
    title: IApiTitleWithTag
    description?: string
    employeeList: {
        videoTitle?: string
        thumbnail: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        video: IApiDataImage
        name?: string
        location?: string
        image?: IApiDataImage
    }[]
}

export interface IApiNavigation {
    items?: {
        navigationId?: string
        title?: string
    }[]
}

export interface IApiSocialPosts {
    title: IApiTitleWithTag
    navigationId?: string
    subTitle?: string
    backgroundImage?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    iconList?: {
        link?: string
        icon?: IApiDataImage
    }[]
}

export interface IFormListItem {
    cta: IApiDataCta
    bulletPointList: string[]
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    title: string
    subTitle: string
    bgColor: string
    formType: string
}

export interface IApiJoinOurTeamProfessional {
    title?: IApiTitleWithTag
    formList: IFormListItem[]
    labelPack?: LabelPacks[]
    navigationId?: string
}
//Learning Module
interface TopicGroup {
    topicNumber: number
    type: string
    title: string
    path: string
    thumbnail: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    publishedDate: string
    video?: IApiDataImage
    description?: string
}
export type VideoItem = {
    url: string
    title: string
    description: string
}
export interface Modules {
    module?: {
        moduleNumber: number
        title: string
    }
    topicList: TopicGroup[]
    video?: VideoItem
}

export interface LearningModuleListingProps {
    title: IApiTitleWithTag
    modules: Modules[]
}

export interface Detail {
    variation: string
    colour: string
    fontColour: string | null
    number: string | null
    numberBgColour: string | null
    title?: string | null
    description?: string | null
    imagePosition: string
    quote: string | null
    image: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    } | null
}
export interface LearningModuleDetailData {
    title: string
    details: Detail[]
}
export interface TopicItem {
    topicNumber: number
    type: string
    tags: string[]
    title: string
    shortDescription: string
    bannerImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    path: string
    video?: { url: string }
    publishedDate?: string
}
export interface LearningModuleBannerProps {
    title: IApiTitleWithTag
    shortDescription: string
    topics: TopicItem[]
    btnText: string
}

export interface IApiSingleLongCard {
    title: IApiTitleWithTag
    backgroundImage: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    cta?: IApiDataCta
}
export interface ListItems {
    topicNumber?: number
    type?: string
    title?: string
    path?: string
    thumbnail?: {
        desktop: IApiDataImage
        mobile: IApiDataImage
    }
    publishedDate?: string
}
export interface List {
    number?: number
    module?: string
    list?: ListItems[]
}
export interface LearningModuleMoreTopicsTypes {
    title: IApiTitleWithTag
    cta?: IApiDataCta
    list?: List
}

export interface IApiCardsListing {
    title: IApiTitleWithTag
    description: string
    cardDetails: {
        title: string
        description: string
        image: {
            desktop: IApiDataImage
            mobile: IApiDataImage
        }
        cta?: IApiDataCta
    }[]
}

//nested tabs
export interface TabAction {
    type?: 'document' | 'link'
    link?: string
}

// Each tab can recursively contain children tabs
export interface TabItem {
    text: string
    children?: TabItem[] // recursive type
    action?: TabAction | TabAction[] | [] // flexible: single, multiple, or empty
}

// Root structure for your nested tabs
export interface INestedTabs {
    title: {
        text?: string
        tag?: string // e.g. "H1", "H2", "H3"
    }
    tabs?: TabItem[]
}

type GetLabel = (t: string, fallback?: string) => string
export interface ConfirmMobileModalProps {
    open: boolean
    countryCode?: string
    defaultMobile?: string
    onConfirm: (mobile: string) => void | Promise<void>
    getLabel: GetLabel
    isLoading?: boolean
    onClose?: () => void
}

export interface COIDownloadProps {
    navigationId: string
    title: IApiTitleWithTag
    subTitle?: string
    shortDescription?: string
    formTitle?: string
    labelPack?: LabelPacks[]
}
export interface OtpModalProps {
    open: boolean
    mobile: string
    onClose: () => void
    onResend: () => Promise<boolean> | boolean
    onSuccess: () => void
    getLabel: GetLabel
    initialCooldown?: number
    type?: string
    countryCode?: string
    autoSubmitOnComplete?: boolean
}

export interface IApiEmployeeWish {
    navigationId: string
    variation: string
    title: IApiTitleWithTag
    shortDescription: string
    employeeList: {
        name: string
        date: string
        department: string
        designation: string
    }[]
    labelPack: {
        type: string
        text: string
    }[]
}

export interface IApiGlobalSearchComponent {
    navigationId?: string
    title?: IApiTitleWithTag
    searchPlaceholder?: string
    buttonLabel?: string
}

export interface SettlementRatioData {
    title?: IApiTitleWithTag
    description: string
    fyRatios: FyRatio[]
}
