type JsonSerializable =
    | null
    | string
    | boolean
    | number
    | { [key: string]: JsonSerializable }

interface IAppConfig {
    ENVIRONMENT: 'dev' | 'staging' | 'production'
    LOG_LEVEL: ILogLevel
    BACKEND_URL: string
    FRONTEND_URL: string
    FRONTEND_HOST: string
    API_PREFIX: string
    API_PREFIX_CONTENT: string
    TOKEN_SALT: string
    COOKIE_NAME: string
    COOKIE_PWD: string
    SESSION_PWD: string
    SESSION_KEY: string
    TOKEN_PUBLIC: string
    TOKEN_PRIVATE: string
    BACKEND_AJAX_URL: string
    CMS_URL: string
    API_HOST: string
    API_DYNAMIC: string
    API_LIST_PAGER: string
    API_ERROR_PAGE: string
    GA_TRACKING_ID: string
    FB_PIXEL_ID: string
    FB_VERIFICATION_ID: string
    FACEBOOK_URL: string
    WHATSAPP_URL: string
    TWITTER_URL: string
    API_CLIENT_ID: string
    API_CLIENT_SECRET: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
    NEXT_PUBLIC_RECAPTCHA_ACTION_NAME: string
    JWT_IDENTIFIER: string
    JWT_CREDENTIAL: string
    API_TOKEN: string
    API_CHAT: string
    SITE_ID: string
}

declare module '*.svg' {
    const content: any
    export default content
}
declare module '*.ttf' {
    const content: any
    export default content
}
