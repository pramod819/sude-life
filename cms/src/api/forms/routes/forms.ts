export default {
    routes: [
        {
            method: 'POST',
            path: '/forms/contact_us',
            handler: 'forms.contactUs',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/dnd',
            handler: 'forms.doNotDisturb',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/become_an_agent',
            handler: 'forms.becomeAgent',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/join_us',
            handler: 'forms.joinUs',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/business_partner',
            handler: 'forms.businessPartner',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/product_form',
            handler: 'forms.productForm',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/newsletter',
            handler: 'forms.newsletter',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/pan_update',
            handler: 'external.panUpdate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/fatca_update',
            handler: 'external.fatcaUpdate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/payment',
            handler: 'external.payment',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/customer_login',
            handler: 'external.customerLogin',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/otp',
            handler: 'external.otpGeneration',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/grievance',
            handler: 'external.grievance',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/join_our_team',
            handler: 'forms.joinOurTeam',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/join_us_professional',
            handler: 'forms.joinUsProfessional',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/careers/job_list',
            handler: 'external.jobList',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/gift_city',
            handler: 'forms.giftCity',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/have_an_idea',
            handler: 'forms.haveAnIdea',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/download_certificate',
            handler: 'external.downloadCertificate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/forms/otp_validate',
            handler: 'external.otpValidate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
