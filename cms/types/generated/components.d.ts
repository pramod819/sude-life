import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCta extends Struct.ComponentSchema {
    collectionName: 'components_common_ctas';
    info: {
        description: '';
        displayName: 'cta';
    };
    attributes: {
        opt: Schema.Attribute.JSON &
            Schema.Attribute.CustomField<
                'plugin::multi-select.multi-select',
                [
                    'Open in New Window:newWindow',
                    'Email Link:email',
                    'Telephone Link:telephone',
                    'Primary CTA:primary',
                    'Secondary CTA:secondary',
                    'Download Link:download',
                    'CTA Link:ctaLink',
                ]
            >;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        url: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CommonMediaImg extends Struct.ComponentSchema {
    collectionName: 'components_cmn_media_imgs';
    info: {
        description: '';
        displayName: 'Media Image';
    };
    attributes: {
        img_dsk: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
        img_mbl: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
    };
}

export interface CommonMutliText extends Struct.ComponentSchema {
    collectionName: 'components_common_mutli_texts';
    info: {
        description: '';
        displayName: 'List';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CommonTitleTags extends Struct.ComponentSchema {
    collectionName: 'components_common_title_tags';
    info: {
        description: '';
        displayName: 'Title Tags';
    };
    attributes: {
        title: Schema.Attribute.String;
        titleTags: Schema.Attribute.Enumeration<
            ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
        >;
    };
}

export interface CorpDynamicBlogComponent extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_blog_components';
    info: {
        description: '';
        displayName: 'Blog Component';
    };
    attributes: {};
}

export interface CorpDynamicBlogFilter extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_blog_filters';
    info: {
        description: '';
        displayName: 'Blog Filter';
    };
    attributes: {
        blog_category: Schema.Attribute.Relation<
            'oneToOne',
            'api::blog-category.blog-category'
        >;
        cta: Schema.Attribute.Component<'common.cta', false>;
        displayFormat: Schema.Attribute.Enumeration<
            ['default', 'slider_with_trending', 'slider_with_category']
        >;
        filter: Schema.Attribute.Boolean;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.blog-filter-label-pack',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicBranchAmenity extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_branch_amenities';
    info: {
        description: '';
        displayName: '[Branch] amenity';
    };
    attributes: {
        text: Schema.Attribute.Text & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<['included', 'excluded']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'included'>;
    };
}

export interface CorpDynamicBranchBanner extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_branch_banners';
    info: {
        description: '';
        displayName: '[Branch] banner';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        subTitle: Schema.Attribute.Text;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicBranchCoordinates extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_branch_coordinates';
    info: {
        description: '';
        displayName: '[Branch] coordinates';
    };
    attributes: {
        latitude: Schema.Attribute.String & Schema.Attribute.Required;
        longitude: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicBranchDetail extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_branch_details';
    info: {
        displayName: '[Branch] detail';
    };
    attributes: {};
}

export interface CorpDynamicBusinessPartner extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_business_partners';
    info: {
        description: '';
        displayName: '[Form] Business Partner';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        disclaimer: Schema.Attribute.Text;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.business-partner-label-pack',
            true
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC100 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c100s';
    info: {
        description: '';
        displayName: '[C100] - Simple Banner';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        navigationId: Schema.Attribute.String;
        rating: Schema.Attribute.Integer &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
        subTitle: Schema.Attribute.Text;
        tags: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC101 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c101s';
    info: {
        description: '';
        displayName: '[C101] - Title with pointers (Eligibility)';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        eligibility: Schema.Attribute.Component<
            'corp-subcomponent.c101-eligibility',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        mainTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC102 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c102s';
    info: {
        description: '';
        displayName: '[C102]- Cards with popup';
    };
    attributes: {
        cardItems: Schema.Attribute.Component<
            'corp-subcomponent.c102-cards',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 10;
                },
                number
            >;
        shortDescription: Schema.Attribute.RichText;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC104 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c104s';
    info: {
        description: '';
        displayName: '[C104] - Category Featured Articles';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        blog_category: Schema.Attribute.Relation<
            'oneToOne',
            'api::blog-category.blog-category'
        >;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c104-label-pack',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
    };
}

export interface CorpDynamicC105FundNav extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c105_fund_navs';
    info: {
        description: '';
        displayName: '[C105] Fund Nav';
    };
    attributes: {
        displayCategory: Schema.Attribute.Boolean;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.fund-nav-labelpacks',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        type: Schema.Attribute.Enumeration<['General', 'NRI']>;
    };
}

export interface CorpDynamicC106 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c106s';
    info: {
        description: '';
        displayName: '[C106] - Banner with placeholders';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        leftImage: Schema.Attribute.Component<'common.media-img', false>;
        leftText: Schema.Attribute.String;
        rightImage: Schema.Attribute.Component<'common.media-img', false>;
        rightText: Schema.Attribute.String;
        shortDescription: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC107 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c107s';
    info: {
        description: '';
        displayName: '[C107] - Video Slider';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        shortDescription: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        videoItems: Schema.Attribute.Component<
            'corp-subcomponent.c107-video-item',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 10;
                },
                number
            >;
    };
}

export interface CorpDynamicC108 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c108s';
    info: {
        description: '';
        displayName: '[C108] - Text with overlap cards';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c108-cards',
            true
        > &
            Schema.Attribute.Required;
        description: Schema.Attribute.String;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC109 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c109s';
    info: {
        description: '';
        displayName: '[C109] - Tabbed menus';
    };
    attributes: {
        tabs: Schema.Attribute.Component<
            'corp-subcomponent.c109-l1-tab',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
    };
}

export interface CorpDynamicC11 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c11s';
    info: {
        description: '';
        displayName: '[C11] - Tab + Slider';
    };
    attributes: {
        bgimage: Schema.Attribute.Component<'common.media-img', false>;
        navigationId: Schema.Attribute.String;
        tab: Schema.Attribute.Component<'corp-subcomponent.c11-tab', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                    min: 2;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC111 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c111s';
    info: {
        displayName: '[C111] - Meet the team';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        people: Schema.Attribute.Relation<'oneToMany', 'api::people.people'>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC112 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c112s';
    info: {
        description: '';
        displayName: '[C112] - Investors Factsheet';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c112-label-pack',
            true
        >;
        subTitle: Schema.Attribute.RichText;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC113 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c113s';
    info: {
        description: '';
        displayName: '[C113] - Careers search module';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c113-l1-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC114 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c114s';
    info: {
        displayName: '[C114][CMS] - Video with pointers';
    };
    attributes: {
        navigationId: Schema.Attribute.String;
        pointers: Schema.Attribute.Component<
            'corp-subcomponent.c114-l1-item',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC115 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c115s';
    info: {
        description: '';
        displayName: '[C115] - Social posts';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        iconList: Schema.Attribute.Component<
            'corp-subcomponent.c115-icon-list',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
        navigationId: Schema.Attribute.String;
        subTitle: Schema.Attribute.RichText;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC116 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c116s';
    info: {
        description: '';
        displayName: '[C116] - Employee Speak';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        employeeList: Schema.Attribute.Component<
            'corp-subcomponent.c116-employee-list',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC117 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c117s';
    info: {
        description: '';
        displayName: '[C117] - Images with quotes';
    };
    attributes: {
        imagesWithQuotes: Schema.Attribute.Component<
            'corp-subcomponent.c117-images-with-quotes',
            true
        >;
    };
}

export interface CorpDynamicC118 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c118s';
    info: {
        description: '';
        displayName: '[C118] - Navigation';
    };
    attributes: {
        navigationItems: Schema.Attribute.Component<
            'corp-subcomponent.c118-l1-item',
            true
        >;
    };
}

export interface CorpDynamicC119 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c119s';
    info: {
        description: '';
        displayName: '[C119] - Learning Module banner';
    };
    attributes: {
        btnText: Schema.Attribute.String & Schema.Attribute.Required;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        topics: Schema.Attribute.Relation<
            'oneToMany',
            'api::learning-module.learning-module'
        >;
    };
}

export interface CorpDynamicC12 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c12s';
    info: {
        description: '';
        displayName: '[C12] - FAQ module';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        faq: Schema.Attribute.Component<'corp-subcomponent.faq', true>;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC12Faq extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c12_faqs';
    info: {
        description: '';
        displayName: '[C12] - FAQ With Tab';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        navigationId: Schema.Attribute.String;
        tabList: Schema.Attribute.Component<
            'corp-subcomponent.c12-faq-tab',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 15;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC12Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c12_tabs';
    info: {
        description: '';
        displayName: '[C12] - FAQ With Vertical Tab';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        horizontalTab: Schema.Attribute.Component<
            'corp-subcomponent.c12-horizontal-tab',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC120SingleLongCard extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c120_single_long_cards';
    info: {
        displayName: '[C120] - Single long card';
    };
    attributes: {
        BackgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        Title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC121CardsListing extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c121_cards_listings';
    info: {
        description: '';
        displayName: '[C121] - Cards listing';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c121-cards',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 18;
                },
                number
            >;
        description: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC122 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c122s';
    info: {
        displayName: '[Form] COI Download';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.coi-download-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC123 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c123s';
    info: {
        description: '';
        displayName: '[C123] - Nested Tabs';
    };
    attributes: {
        tabs: Schema.Attribute.Relation<
            'oneToMany',
            'api::nested-topic.nested-topic'
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC124 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c124s';
    info: {
        displayName: '[C124] - Global search';
    };
    attributes: {
        buttonLabel: Schema.Attribute.String;
        navigationId: Schema.Attribute.String;
        searchPlaceholder: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC125 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c125s';
    info: {
        description: '';
        displayName: 'c125';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c125-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        variation: Schema.Attribute.Enumeration<
            ['Birthdays', 'Work Anniversaries', 'New Joinees']
        >;
    };
}

export interface CorpDynamicC128SettlementRatio extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c128_settlement_ratios';
    info: {
        displayName: '[C128] - Settlement ratio';
    };
    attributes: {
        description: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        years: Schema.Attribute.Component<
            'corp-subcomponent.c128-year-value',
            true
        >;
    };
}

export interface CorpDynamicC13 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c13s';
    info: {
        description: '';
        displayName: '[C13] Goals';
    };
    attributes: {
        bgcolor: Schema.Attribute.String;
        bgimage: Schema.Attribute.Component<'common.media-img', false>;
        description: Schema.Attribute.RichText;
        goalCard: Schema.Attribute.Component<
            'corp-subcomponent.c13-goal-card',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC14 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c14s';
    info: {
        displayName: '[C14] Introduction';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        introcard: Schema.Attribute.Component<
            'corp-subcomponent.c14-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC15 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c15s';
    info: {
        description: '';
        displayName: '[C15] - Text + Image';
    };
    attributes: {
        ad_text: Schema.Attribute.Component<
            'corp-subcomponent.c15-ad-text',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        boldSubtitleText: Schema.Attribute.Boolean &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<false>;
        button: Schema.Attribute.Component<'common.cta', false>;
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        icons: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios',
            true
        >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        navigationButton: Schema.Attribute.Component<
            'corp-subcomponent.c15-navigation-button',
            false
        >;
        navigationId: Schema.Attribute.String;
        subtitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
    };
}

export interface CorpDynamicC17 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c17s';
    info: {
        description: '';
        displayName: '[Form] - Become an Agent';
    };
    attributes: {
        agents: Schema.Attribute.Relation<'oneToMany', 'api::agent.agent'>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        feature: Schema.Attribute.Component<
            'corp-subcomponent.c17-feature',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        hideAgent: Schema.Attribute.Boolean &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<false>;
        image: Schema.Attribute.Component<'common.media-img', false>;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-become-an-agent',
            true
        >;
        subtitle: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC18 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c18s';
    info: {
        description: '';
        displayName: '[C18] - Accordion (benefits)';
    };
    attributes: {
        accordion: Schema.Attribute.Component<
            'corp-subcomponent.c18-accordion',
            true
        >;
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.c18-l1-points',
            true
        >;
        description: Schema.Attribute.Text;
        shortDescription: Schema.Attribute.Text;
        shortText: Schema.Attribute.Text;
        title: Schema.Attribute.String;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC19 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c19s';
    info: {
        description: '';
        displayName: '[C19] Vertical Tabs';
    };
    attributes: {
        bottomText: Schema.Attribute.RichText;
        description: Schema.Attribute.RichText;
        tabs: Schema.Attribute.Component<'corp-subcomponent.c19-tab', true>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC20 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c20s';
    info: {
        description: '';
        displayName: '[C20] - Steps to Buy';
    };
    attributes: {
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.c20-bullet-points',
            true
        >;
        bulletPointTitle: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        overlapBackgroundImage: Schema.Attribute.Component<
            'common.media-img',
            false
        >;
        overlapTitle: Schema.Attribute.String;
        stepToBuy: Schema.Attribute.Component<
            'corp-subcomponent.step-to-pay',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        subTitle: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC21 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c21s';
    info: {
        description: '';
        displayName: '[C21] - Inclusion & Exclusions';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        subtitle: Schema.Attribute.Text;
        tab: Schema.Attribute.Component<'corp-subcomponent.c21-l1-tab', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                    min: 2;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC22 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c22s';
    info: {
        displayName: '[C22] - Card Slider';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        card: Schema.Attribute.Component<'corp-subcomponent.c22-card', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 12;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC23 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c23s';
    info: {
        description: '';
        displayName: '[C23] - Document Downloads';
    };
    attributes: {
        clainType: Schema.Attribute.Component<
            'corp-subcomponent.c23claim-type',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC24 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c24s';
    info: {
        description: '';
        displayName: '[C24] - Text and Image (How to avoid claim Rejection)';
    };
    attributes: {
        avoidRejection: Schema.Attribute.Component<
            'corp-subcomponent.c24-avoid-rejection',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 6;
                    min: 3;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        titleTags: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC25 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c25s';
    info: {
        displayName: '[C25] - Icon + Text Slider';
    };
    attributes: {
        card: Schema.Attribute.Component<
            'corp-subcomponent.c25-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        disclaimer: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC26 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c26s';
    info: {
        description: '';
        displayName: '[C26] - Text and Icons (When to buy Plan)';
    };
    attributes: {
        backgroundColor: Schema.Attribute.String;
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        disclaimerText: Schema.Attribute.RichText;
        iconList: Schema.Attribute.Component<
            'corp-subcomponent.c26-icon-list',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC27 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c27s';
    info: {
        description: '';
        displayName: '[C27] - Plan features';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        feature: Schema.Attribute.Component<
            'corp-subcomponent.c27-l1-feature',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        subtitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC28 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c28s';
    info: {
        description: '';
        displayName: '[C28] - Aspects to selecting plan';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false>;
        selectPlan: Schema.Attribute.Component<
            'corp-subcomponent.c28select-plan',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        subTitle: Schema.Attribute.Text;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC29 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c29s';
    info: {
        description: '';
        displayName: '[C29] - Glossary';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        description: Schema.Attribute.RichText;
        plan: Schema.Attribute.Relation<
            'oneToOne',
            'api::plan-sub-category.plan-sub-category'
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC3 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c3s';
    info: {
        description: '';
        displayName: 'Standard Text';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC30 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c30s';
    info: {
        description: '';
        displayName: '[C30] - Key reasons to buy plan';
    };
    attributes: {
        keyReasons: Schema.Attribute.Component<
            'corp-subcomponent.c30-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC31 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c31s';
    info: {
        displayName: '[C31] - Eligibility';
    };
    attributes: {
        eligibility: Schema.Attribute.Component<
            'corp-subcomponent.c31-eligibility',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC32 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c32s';
    info: {
        description: '';
        displayName: '[C32] - How it works';
    };
    attributes: {
        tab: Schema.Attribute.Component<'corp-subcomponent.c32-l1-tab', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC33 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c33s';
    info: {
        description: '';
        displayName: '[C33] - Learn about plan';
    };
    attributes: {
        media: Schema.Attribute.Component<
            'corp-subcomponent.c33-l1-media',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC34 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c34s';
    info: {
        displayName: '[C34] - Steps for How it works';
    };
    attributes: {
        stepToWork: Schema.Attribute.Component<
            'corp-subcomponent.c34-step-to-work',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 6;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC35 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c35s';
    info: {
        description: '';
        displayName: '[C35] - Text + Image for Plans';
    };
    attributes: {
        backgroundColor: Schema.Attribute.String;
        bgimage: Schema.Attribute.Component<'common.media-img', false>;
        button: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.RichText;
        image: Schema.Attribute.Component<'common.media-img', false>;
        link: Schema.Attribute.Component<'common.cta', false>;
        planList: Schema.Attribute.Component<
            'corp-subcomponent.c35planlist',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                    min: 2;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC36 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c36s';
    info: {
        description: '';
        displayName: '[C36] - Full width banner';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpDynamicC37 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c37s';
    info: {
        description: '';
        displayName: '[C37]- About SUD Life';
    };
    attributes: {
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        items: Schema.Attribute.Component<
            'corp-subcomponent.c37-l1-item',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC38 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c38s';
    info: {
        description: '';
        displayName: '[C38] - Logo Component';
    };
    attributes: {
        logos: Schema.Attribute.Component<
            'corp-subcomponent.c38-l1-logo',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC39 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c39s';
    info: {
        displayName: '[C39] - Our Promoters';
    };
    attributes: {
        promoters: Schema.Attribute.Component<
            'corp-subcomponent.c39-l1-item',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC4 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c4s';
    info: {
        description: '';
        displayName: 'Standard Image';
    };
    attributes: {
        media_img: Schema.Attribute.Component<'common.media-img', false>;
    };
}

export interface CorpDynamicC40 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c40s';
    info: {
        description: '';
        displayName: '[C40] - People listing';
    };
    attributes: {
        people: Schema.Attribute.Relation<'oneToMany', 'api::people.people'>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        variation: Schema.Attribute.Enumeration<
            ['management', 'directors', 'committee', 'fund', 'awards']
        > &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'management'>;
    };
}

export interface CorpDynamicC41 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c41s';
    info: {
        displayName: '[C41] - Error & Maintenance';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.Text;
        errorCode: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC42 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c42s';
    info: {
        description: '';
        displayName: '[C42] - Card Slider';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c42-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 9;
                },
                number
            >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC43 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c43s';
    info: {
        displayName: '[C43] - Branch Locator';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c43-l1-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC44 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c44s';
    info: {
        description: '';
        displayName: '[C44] - Horizontal Tabs';
    };
    attributes: {
        shortDescription: Schema.Attribute.RichText;
        tabs: Schema.Attribute.Component<'corp-subcomponent.c44-l1-tab', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC45 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c45s';
    info: {
        displayName: '[C45] - Tenders';
    };
    attributes: {
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC46 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c46s';
    info: {
        description: '';
        displayName: '[C46]- Image & text with pointers';
    };
    attributes: {
        description: Schema.Attribute.Text;
        descriptionWithPoints: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        image: Schema.Attribute.Media<'images'>;
        points: Schema.Attribute.Component<
            'corp-subcomponent.c46-l1-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        type: Schema.Attribute.Enumeration<
            ['Usage', 'Mistakes', 'Tips', 'Questions']
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC47 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c47s';
    info: {
        description: '';
        displayName: '[C47] - Simple Introduction';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false>;
        introductionDetails: Schema.Attribute.Component<
            'corp-subcomponent.c47-description',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC48 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c48s';
    info: {
        description: '';
        displayName: '[C48] - Text Blocks';
    };
    attributes: {
        blockTitle: Schema.Attribute.String;
        importantPointHeading: Schema.Attribute.String;
        importantPoints: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        textBlocks: Schema.Attribute.Component<
            'corp-subcomponent.c48-l1-text-blocks',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC49 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c49s';
    info: {
        description: '';
        displayName: '[C49] - Scrolling Cards';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c49-l1-card',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC5 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c5s';
    info: {
        description: '';
        displayName: '[C5] - Testimonials';
    };
    attributes: {
        authors: Schema.Attribute.Relation<'oneToMany', 'api::author.author'>;
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        bgColor: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', false>;
        navigationId: Schema.Attribute.String;
        quoteImage: Schema.Attribute.Media<'images'>;
        subtitle: Schema.Attribute.String;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        transparentText: Schema.Attribute.String;
    };
}

export interface CorpDynamicC50 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c50s';
    info: {
        description: '';
        displayName: '[C50] - Column cards with CTA';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c50-l1-card',
            true
        >;
        importantPointHeading: Schema.Attribute.String;
        importantPoints: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC51 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c51s';
    info: {
        displayName: '[C51] - Steps to buy online';
    };
    attributes: {
        description: Schema.Attribute.Text;
        subTitle: Schema.Attribute.String;
        tabs: Schema.Attribute.Component<'corp-subcomponent.c51-l1-tab', true>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC53 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c53s';
    info: {
        displayName: '[C53] - Guide component';
    };
    attributes: {
        description: Schema.Attribute.Text;
        tabs: Schema.Attribute.Component<'corp-subcomponent.c53-l1-tab', true>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC54 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c54s';
    info: {
        displayName: '[C54] - Withdrawn products';
    };
    attributes: {
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC55 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c55s';
    info: {
        description: '';
        displayName: '[C55] - Two column icon & text';
    };
    attributes: {
        description: Schema.Attribute.Text;
        items: Schema.Attribute.Component<
            'corp-subcomponent.c55-l1-item',
            true
        >;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC56 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c56s';
    info: {
        description: '';
        displayName: '[C56] - Two cards with CTA';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c56-l1-card',
            true
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
        variation: Schema.Attribute.Enumeration<['default', 'pointers']> &
            Schema.Attribute.DefaultTo<'default'>;
    };
}

export interface CorpDynamicC57 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c57s';
    info: {
        description: '';
        displayName: '[C57] - Cards with Icon & CTA';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cardWithIcon: Schema.Attribute.Component<
            'corp-subcomponent.c57-card-with-icon',
            true
        >;
        Show_4: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        subTitle: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC58 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c58s';
    info: {
        displayName: '[C58] - Standard Image & Text';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        image: Schema.Attribute.Component<'common.media-img', false>;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC59 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c59s';
    info: {
        displayName: '[C59] - Banner Carousel';
    };
    attributes: {
        slides: Schema.Attribute.Component<
            'corp-subcomponent.c59-l1-slide',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC6 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c6s';
    info: {
        description: '';
        displayName: '[C6] - Card Components';
    };
    attributes: {
        card: Schema.Attribute.Component<'corp-subcomponent.c6card', true>;
        description: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC60 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c60s';
    info: {
        description: '';
        displayName: '[C60] - Media Template';
    };
    attributes: {
        tabs: Schema.Attribute.Component<'corp-subcomponent.c60-l1-tab', true>;
    };
}

export interface CorpDynamicC61 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c61s';
    info: {
        description: '';
        displayName: '[Form] Have an Idea';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c61-l1-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC62 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c62s';
    info: {
        description: '';
        displayName: '[C62] - Blogs';
    };
    attributes: {
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC64 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c64s';
    info: {
        description: '';
        displayName: '[C64] - Video Carousel Component';
    };
    attributes: {
        slides: Schema.Attribute.Component<
            'corp-subcomponent.c64-l1-item',
            true
        >;
    };
}

export interface CorpDynamicC65 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c65s';
    info: {
        displayName: '[C65] - Product Cards';
    };
    attributes: {
        blockTitle: Schema.Attribute.String;
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.c65-l1-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        disclaimerText: Schema.Attribute.String;
        products: Schema.Attribute.Relation<'oneToMany', 'api::plan.plan'>;
        subtitle: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC66 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c66s';
    info: {
        description: '';
        displayName: '[C66] - Investors landing';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c66-label-pack',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 7;
                },
                number
            >;
        subTitle: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC67 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c67s';
    info: {
        description: '';
        displayName: '[C67] - Table component';
    };
    attributes: {
        collapseTable: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<true>;
        table: Schema.Attribute.Relation<
            'oneToOne',
            'api::assorted-table.assorted-table'
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC68Rating extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c68_ratings';
    info: {
        description: '';
        displayName: '[C68] Rating';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC69 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c69s';
    info: {
        displayName: '[C69] - Pure Text Component';
    };
    attributes: {
        description: Schema.Attribute.Text & Schema.Attribute.Required;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC7 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c7s';
    info: {
        description: '';
        displayName: '[C7] Icon And Text';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        icon: Schema.Attribute.Component<'corp-subcomponent.icon', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC70 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c70s';
    info: {
        description: '';
        displayName: '[C70] - Overview Component';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c70-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                    min: 1;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        text: Schema.Attribute.Component<
            'corp-subcomponent.c70-l1-text',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                    min: 1;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC71 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c71s';
    info: {
        displayName: '[C71] - Center aligned Text & Image banner';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        description: Schema.Attribute.Text;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC72 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c72s';
    info: {
        displayName: '[C72] - Pointers with Text';
    };
    attributes: {
        subTitle: Schema.Attribute.String;
        texts: Schema.Attribute.Component<
            'corp-subcomponent.c72-l1-text',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC73 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c73s';
    info: {
        description: '';
        displayName: '[C73] - Product Card display banner';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        products: Schema.Attribute.Relation<'oneToMany', 'api::plan.plan'>;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpDynamicC74 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c74s';
    info: {
        description: '';
        displayName: '[C74] - Accordion with image';
    };
    attributes: {
        accordion: Schema.Attribute.Component<
            'corp-subcomponent.c74-l1-items',
            true
        >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        type: Schema.Attribute.Enumeration<['Myth', 'Mistake']> &
            Schema.Attribute.DefaultTo<'Myth'>;
    };
}

export interface CorpDynamicC75 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c75s';
    info: {
        description: '';
        displayName: '[C75] - Text with product card';
    };
    attributes: {
        disclaimer: Schema.Attribute.Text;
        product: Schema.Attribute.Relation<'oneToOne', 'api::plan.plan'>;
        secondProduct: Schema.Attribute.Relation<'oneToOne', 'api::plan.plan'>;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC76Disclaimers extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c76_disclaimers';
    info: {
        description: '';
        displayName: '[C76] - Disclaimers';
    };
    attributes: {
        disclaimerPoints: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        disclaimerTitle: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC77 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c77s';
    info: {
        displayName: '[C77] - Rotating Scrollable Cards';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c77-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 10;
                },
                number
            >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC78 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c78s';
    info: {
        description: '';
        displayName: '[C78] - Promoters in tab format';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        promoters: Schema.Attribute.Component<
            'corp-subcomponent.c78-promoters',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC79 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c79s';
    info: {
        description: '';
        displayName: '[C79] - Text with vertical cards (About SUD insurance)';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cards: Schema.Attribute.Component<'corp-subcomponent.c79-cards', true>;
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC8 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c8s';
    info: {
        description: '';
        displayName: '[C8] - Connect With Us';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        minicard: Schema.Attribute.Component<
            'corp-subcomponent.c8-mini-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        officeAddress: Schema.Attribute.RichText;
        officeSubTitle: Schema.Attribute.String;
        officeTitle: Schema.Attribute.String;
        officeWorkHour: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC81 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c81s';
    info: {
        displayName: '[C81] - Must read articles';
    };
    attributes: {
        articles: Schema.Attribute.Component<
            'corp-subcomponent.c81-l1-articles',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 6;
                },
                number
            >;
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicC83 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c83s';
    info: {
        displayName: '[C83] - Related Articles';
    };
    attributes: {
        articles: Schema.Attribute.Component<
            'corp-subcomponent.c83-l1-blogs',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 6;
                },
                number
            >;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.c83-l1-label-pack',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC84 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c84s';
    info: {
        description: '';
        displayName: '[C84] - Policy & Discolsures';
    };
    attributes: {
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.84-label-pack',
            true
        >;
        policiesAndDisclosure: Schema.Attribute.Component<
            'corp-subcomponent.c84-policies-disclosure',
            true
        >;
        subTitle: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC85 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c85s';
    info: {
        description: '';
        displayName: '[C85] - Horizontal tabs with numbering & icons';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        label: Schema.Attribute.String;
        tabItems: Schema.Attribute.Component<
            'corp-subcomponent.c85-tab',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 12;
                },
                number
            >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC86 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c86s';
    info: {
        displayName: '[C86] - Three background cards';
    };
    attributes: {
        card: Schema.Attribute.Component<
            'corp-subcomponent.c86-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC87 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c87s';
    info: {
        description: '';
        displayName: '[C87] - Tabs with text & image';
    };
    attributes: {
        tabs: Schema.Attribute.Component<'corp-subcomponent.c87-tabs', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
    };
}

export interface CorpDynamicC88 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c88s';
    info: {
        description: '';
        displayName: '[C88] - Help Component';
    };
    attributes: {
        contactUsList: Schema.Attribute.Component<
            'corp-subcomponent.c88-contact-us-list',
            true
        >;
        subTitle: Schema.Attribute.RichText;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC89 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c89s';
    info: {
        description: '';
        displayName: '[C89] - Gallery Component';
    };
    attributes: {
        navigationId: Schema.Attribute.String;
        tag: Schema.Attribute.Relation<
            'oneToOne',
            'api::image-gallery-tag.image-gallery-tag'
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        variation: Schema.Attribute.Enumeration<['default', 'careers_page']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'default'>;
    };
}

export interface CorpDynamicC9 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c9s';
    info: {
        description: '';
        displayName: '[C9] Text and Media';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        description: Schema.Attribute.RichText;
        logos: Schema.Attribute.Component<'corp-subcomponent.c9-logo', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        media: Schema.Attribute.Component<'common.media-img', false>;
        mediaType: Schema.Attribute.Enumeration<['GIF', 'Video']>;
        scanner: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
        scannerText: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC90CardsWithIconAndText
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c90_cards_with_icon_and_texts';
    info: {
        displayName: '[C90] - Cards with icon & text';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c90-icon-text',
            true
        >;
        description: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC91ColumnsWithIconsAndCta
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c91_columns_with_icons_and_ctas';
    info: {
        displayName: '[C91] - Columns with Icons and CTA';
    };
    attributes: {
        cardWithIcon: Schema.Attribute.Component<
            'corp-subcomponent.c57-card-with-icon',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 21;
                },
                number
            >;
        description: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC92 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c92s';
    info: {
        description: '';
        displayName: '[C92] - Cards with background text';
    };
    attributes: {
        cards: Schema.Attribute.Component<'corp-subcomponent.c92-cards', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        navigationId: Schema.Attribute.String;
        subTitle: Schema.Attribute.RichText;
        subtitleBold: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC93OnlyIconAndText extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c93_only_icon_and_texts';
    info: {
        displayName: '[C93] - Only Icon & Text';
    };
    attributes: {
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c93-icon-text',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC94 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c94s';
    info: {
        description: '';
        displayName: '[C94] - Leadership Speaks';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        cards: Schema.Attribute.Component<
            'corp-subcomponent.c94-l1-card',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC95PublicDisclosures
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c95_public_disclosures';
    info: {
        description: '';
        displayName: '[C95] - Public Disclosures';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false>;
        tabs: Schema.Attribute.Component<'corp-subcomponent.c95-tabs', true>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC96 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c96s';
    info: {
        description: '';
        displayName: '[C96] - Claims horizontal tabs with icons & text';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        tabList: Schema.Attribute.Component<'corp-subcomponent.c96-tabs', true>;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC97 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c97s';
    info: {
        description: '';
        displayName: '[C97] - Claims perquisite';
    };
    attributes: {
        getDirection: Schema.Attribute.Component<'common.cta', false>;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.label-pack',
            true
        >;
        leftText: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        rightText: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        scheduleCall: Schema.Attribute.Component<'common.cta', false>;
        tabList: Schema.Attribute.Component<'corp-subcomponent.c97-tabs', true>;
    };
}

export interface CorpDynamicC98 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c98s';
    info: {
        description: '';
        displayName: '[C98] - Downloads';
    };
    attributes: {
        btnOneLabel: Schema.Attribute.String;
        btnTwoLabel: Schema.Attribute.String;
        documents: Schema.Attribute.Component<
            'corp-subcomponent.c98-l1-card',
            true
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicC99 extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_c99s';
    info: {
        description: '';
        displayName: '[C99] - Media Queries';
    };
    attributes: {
        mediaQueries: Schema.Attribute.Component<
            'corp-subcomponent.c99-media-query',
            true
        >;
        titleTags: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicCollapsableStandardText
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_collapsable_standard_texts';
    info: {
        displayName: 'Collapsable Text';
    };
    attributes: {
        column: Schema.Attribute.Component<
            'corp-subcomponent.c90-l1-standard-text-column',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        text: Schema.Attribute.String;
    };
}

export interface CorpDynamicCollapsableTable extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_collapsable_tables';
    info: {
        displayName: 'Collapsable Table';
    };
    attributes: {
        column: Schema.Attribute.Component<
            'corp-subcomponent.c90-l1-table-column',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        text: Schema.Attribute.String;
    };
}

export interface CorpDynamicContactUs extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_contactuses';
    info: {
        description: '';
        displayName: '[Form] Contact Us';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-contactus',
            true
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicDnd extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_dnds';
    info: {
        description: '';
        displayName: '[Form] Do Not Disturb';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-dnd',
            true
        >;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicFormFatcaupdate extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_form_fatcaupdates';
    info: {
        displayName: '[Form] FATCA Update';
    };
    attributes: {
        labelpack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-fatcaupdate',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicFormGrievance extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_form_grievances';
    info: {
        description: '';
        displayName: '[Form] Grievance';
    };
    attributes: {
        info_cards: Schema.Attribute.Component<
            'corp-subcomponent.grievance-other-info',
            true
        >;
        labelpack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-grievance',
            true
        >;
        tab2_title: Schema.Attribute.Component<'common.title-tags', false>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicFormPanupdate extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_form_panupdates';
    info: {
        description: '';
        displayName: '[Form] PAN Update';
    };
    attributes: {
        label_pack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-panupdate',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicFormPayment extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_form_payments';
    info: {
        description: '';
        displayName: '[Form] Payment';
    };
    attributes: {
        labelpack: Schema.Attribute.Component<
            'corp-subcomponent.labelpack-payment',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicGiftCity extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_gift_cities';
    info: {
        description: '';
        displayName: '[Form] Gift city';
    };
    attributes: {
        accepted_countries: Schema.Attribute.Relation<
            'oneToMany',
            'api::country.country'
        >;
        bgColour: Schema.Attribute.String;
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.giftcity-bullet-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        bulletPointsOverlayColour: Schema.Attribute.String;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.giftcity-label-pack',
            true
        >;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicJoinOurTeam extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_join_our_teams';
    info: {
        description: '';
        displayName: '[Form] Join our team';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.join-our-team-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        redirectUrl: Schema.Attribute.String;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicJoinUs extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_join_uses';
    info: {
        description: '';
        displayName: '[Form] Join Us';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.joinus-bullet-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        bulletPointsOverlayColour: Schema.Attribute.String;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.joinus-label-pack',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicJoinUsProfessional extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_join_us_professionals';
    info: {
        description: '';
        displayName: '[Form] Join Us Professional';
    };
    attributes: {
        formList: Schema.Attribute.Component<
            'corp-subcomponent.join-us-professional',
            true
        >;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.join-us-prof-label-pack',
            true
        >;
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicLmCards extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_lm_cards';
    info: {
        description: '';
        displayName: '[LM] Cards';
    };
    attributes: {
        cards: Schema.Attribute.Component<'corp-subcomponent.lm-cards', true>;
    };
}

export interface CorpDynamicLmComponent extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_lm_components';
    info: {
        displayName: '[LM] Detail Component';
    };
    attributes: {};
}

export interface CorpDynamicLmListing extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_lm_listings';
    info: {
        description: '';
        displayName: '[LM] Listing';
    };
    attributes: {
        modules: Schema.Attribute.Relation<
            'oneToMany',
            'api::learning-module-tag.learning-module-tag'
        >;
        theme: Schema.Attribute.Enumeration<['modules', 'video', 'finz']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'modules'>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicLmMoreTopics extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_lm_more_topics';
    info: {
        description: '';
        displayName: '[LM] More Topics';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicLmVideo extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_lm_videos';
    info: {
        displayName: '[LM] Video';
    };
    attributes: {
        description: Schema.Attribute.Text;
        video: Schema.Attribute.Media<'videos'>;
    };
}

export interface CorpDynamicMediaImageType extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_media_image_types';
    info: {
        description: '';
        displayName: '[Media] image';
    };
    attributes: {
        displayDate: Schema.Attribute.Date & Schema.Attribute.Required;
        gallery: Schema.Attribute.Component<
            'corp-subcomponent.media-image-gallery',
            true
        >;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        thumbnail: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpDynamicMediaTypeAudio extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_media_type_audios';
    info: {
        description: '';
        displayName: '[Media] Audio';
    };
    attributes: {
        audioLink: Schema.Attribute.String & Schema.Attribute.Required;
        displayDate: Schema.Attribute.Date & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicMediaTypeDocument extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_media_type_documents';
    info: {
        description: '';
        displayName: '[Media] document';
    };
    attributes: {
        displayDate: Schema.Attribute.Date & Schema.Attribute.Required;
        document: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicMediaTypeLink extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_media_type_links';
    info: {
        description: '';
        displayName: '[Media] link';
    };
    attributes: {
        displayDate: Schema.Attribute.Date & Schema.Attribute.Required;
        link: Schema.Attribute.String & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicMediaTypeVideo extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_media_type_videos';
    info: {
        description: '';
        displayName: '[Media] Video';
    };
    attributes: {
        displayDate: Schema.Attribute.Date & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        youtubeLink: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpDynamicNestedTabDocument extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_nested_tab_documents';
    info: {
        displayName: 'Document';
    };
    attributes: {
        document: Schema.Attribute.Media<'files'>;
    };
}

export interface CorpDynamicNestedTabLink extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_nested_tab_links';
    info: {
        displayName: 'Link';
    };
    attributes: {
        link: Schema.Attribute.String;
    };
}

export interface CorpDynamicNewsletter extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_newsletters';
    info: {
        description: '';
        displayName: '[Form] Newsletter';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        btnText: Schema.Attribute.String;
        inputPlaceholder: Schema.Attribute.String;
        subtitle: Schema.Attribute.Text;
        successMessage: Schema.Attribute.String;
        title: Schema.Attribute.Text;
    };
}

export interface CorpDynamicProductForm extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_product_forms';
    info: {
        description: '';
        displayName: '[Form] Product Form';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        disableBlopRedirection: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        disableCcLeads: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        disclaimer: Schema.Attribute.Component<
            'corp-subcomponent.product-form-disclaimer',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        formTitle: Schema.Attribute.String;
        labelPack: Schema.Attribute.Component<
            'corp-subcomponent.product-form-label-pack',
            true
        >;
        pointers: Schema.Attribute.Component<
            'corp-subcomponent.product-form-pointers',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 10;
                },
                number
            >;
        product: Schema.Attribute.Relation<'oneToOne', 'api::plan.plan'>;
        shortDescription: Schema.Attribute.Text;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpDynamicSharedComponent extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_shared_components';
    info: {
        description: '';
        displayName: 'Shared Component';
    };
    attributes: {
        content: Schema.Attribute.Relation<
            'oneToOne',
            'api::shared-component.shared-component'
        >;
    };
}

export interface CorpDynamicTableColumnName extends Struct.ComponentSchema {
    collectionName: 'components_corp_dynamic_table_column_names';
    info: {
        displayName: '[Table] Header';
    };
    attributes: {
        columnNames: Schema.Attribute.Component<
            'corp-subcomponent.c90-l1-title',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
    };
}

export interface CorpFooterC2 extends Struct.ComponentSchema {
    collectionName: 'components_corp_footer_c2s';
    info: {
        description: '';
        displayName: '[Footer] Corp Site';
    };
    attributes: {
        copyright: Schema.Attribute.Text;
        disclaimer: Schema.Attribute.Component<
            'corp-subcomponent.c2-text',
            false
        >;
        followUs: Schema.Attribute.Component<
            'corp-subcomponent.c2-follow-us',
            false
        >;
        importantLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-menu',
            false
        >;
        infoSection: Schema.Attribute.Component<
            'corp-subcomponent.c2-info-section',
            false
        >;
        logo: Schema.Attribute.Component<'common.media-img', false>;
        otherLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-other-links',
            false
        >;
        productMenu: Schema.Attribute.Component<
            'corp-subcomponent.c2-product-menu',
            false
        >;
        quickLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-quick-links',
            false
        >;
        stickyModule: Schema.Attribute.Component<
            'corp-subcomponent.sticky-module-l1',
            true
        >;
    };
}

export interface CorpHeaderC1 extends Struct.ComponentSchema {
    collectionName: 'components_corp_header_c1s';
    info: {
        description: '';
        displayName: '[Header] Corp Site';
    };
    attributes: {
        additional_logo: Schema.Attribute.Media<'images'>;
        additional_logo_link: Schema.Attribute.String;
        logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        main_menu: Schema.Attribute.Component<
            'corp-subcomponent.c1-l1',
            false
        > &
            Schema.Attribute.Required;
        options: Schema.Attribute.JSON &
            Schema.Attribute.CustomField<
                'plugin::multi-select.multi-select',
                [
                    'Show Language Selector:language',
                    'Show Search Bar:search',
                    'Show Profile Button:profile',
                ]
            >;
        profile: Schema.Attribute.Component<'common.cta', false>;
        top_menu: Schema.Attribute.Component<
            'corp-subcomponent.c1-top',
            false
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponent84LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_84_label_packs';
    info: {
        displayName: '84-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['Document Name', 'View Link', 'Download Link', 'View', 'Download']
        >;
    };
}

export interface CorpSubcomponentAwards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_awards';
    info: {
        description: '';
        displayName: 'Awards';
    };
    attributes: {
        award: Schema.Attribute.Relation<'oneToOne', 'api::award.award'>;
        description: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentBlogFilterLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_blog_filter_label_packs';
    info: {
        displayName: 'BlogFilter-LabelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'trendingFilter',
                'titleByAscOrder',
                'titleByDescOrder',
                'dateByAscOrder',
                'dateByDescOrder',
                'searchTitle',
                'detailsLink',
                'viewText',
                'durationText',
                'loadButton',
                'noResult',
            ]
        >;
    };
}

export interface CorpSubcomponentBlogListComponent
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_blog_list_components';
    info: {
        displayName: 'Blog List Component';
    };
    attributes: {
        list: Schema.Attribute.Component<
            'corp-subcomponent.c20-bullet-points',
            true
        >;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpSubcomponentBlogTextComponent
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_blog_text_components';
    info: {
        description: '';
        displayName: 'Blog Text Component';
    };
    attributes: {
        text: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
    };
}

export interface CorpSubcomponentBlogTextImage extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_blog_text_images';
    info: {
        description: '';
        displayName: 'Blog Text Image';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false>;
        text: Schema.Attribute.Text;
        title: Schema.Attribute.Component<'common.title-tags', false>;
        variation: Schema.Attribute.Enumeration<['left', 'top', 'bottom']>;
    };
}

export interface CorpSubcomponentBusinessPartnerLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_business_partner_label_packs';
    info: {
        description: '';
        displayName: 'businessPartner-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['name', 'mobile', 'email', 'city', 'button', 'success']
        >;
    };
}

export interface CorpSubcomponentC1Benefit extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_benefits';
    info: {
        description: '';
        displayName: 'c1-benefit';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        list: Schema.Attribute.Component<'common.mutli-text', true>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC1L1 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l1s';
    info: {
        displayName: 'c1-l1';
    };
    attributes: {
        menu: Schema.Attribute.Component<'corp-subcomponent.c1-l1-link', true>;
    };
}

export interface CorpSubcomponentC1L1Link extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l1_links';
    info: {
        displayName: 'c1-l1-link';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        link: Schema.Attribute.Component<'corp-subcomponent.c1-l2', true>;
        tabbed: Schema.Attribute.Boolean;
    };
}

export interface CorpSubcomponentC1L2 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l2s';
    info: {
        displayName: 'c1-l2';
    };
    attributes: {
        menu: Schema.Attribute.Component<'corp-subcomponent.c1-l2-link', true>;
    };
}

export interface CorpSubcomponentC1L2Link extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l2_links';
    info: {
        displayName: 'c1-l2-link';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        link: Schema.Attribute.Component<'corp-subcomponent.c1-l3', true>;
    };
}

export interface CorpSubcomponentC1L3 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l3s';
    info: {
        displayName: 'c1-l3';
    };
    attributes: {
        menu: Schema.Attribute.Component<'corp-subcomponent.c1-l3-link', true>;
    };
}

export interface CorpSubcomponentC1L3Link extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l3_links';
    info: {
        displayName: 'c1-l3-link';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        icon: Schema.Attribute.Enumeration<
            [
                'Icon Money Bag',
                'Icon Piggy Bank',
                'Icon Hand Holding',
                'Icon Earnings',
                'Icon Insurance',
                'Icon Shield Plus',
                'Icon Health',
                'Icon Credit',
                'Icon Group',
                'Icon Briefcase',
            ]
        > &
            Schema.Attribute.Required;
        link: Schema.Attribute.Component<'corp-subcomponent.c1-l4', true>;
    };
}

export interface CorpSubcomponentC1L4 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l4s';
    info: {
        displayName: 'c1-l4';
    };
    attributes: {
        menu: Schema.Attribute.Component<'corp-subcomponent.c1-l4-link', true>;
    };
}

export interface CorpSubcomponentC1L4Link extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_l4_links';
    info: {
        description: '';
        displayName: 'c1-l4-link';
    };
    attributes: {
        benefit: Schema.Attribute.Component<
            'corp-subcomponent.c1-benefit',
            false
        >;
        cta: Schema.Attribute.Component<'common.cta', false>;
    };
}

export interface CorpSubcomponentC1Top extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c1_tops';
    info: {
        displayName: 'c1-top';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true>;
    };
}

export interface CorpSubcomponentC101Eligibility
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c101_eligibilities';
    info: {
        displayName: 'c101-eligibility';
    };
    attributes: {
        boldText: Schema.Attribute.String;
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC102Cards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c102_cards';
    info: {
        displayName: 'c102-cards';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        popupContent: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC104LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c104_label_packs';
    info: {
        displayName: 'c104-label-pack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['Read Article', 'Min Read']>;
    };
}

export interface CorpSubcomponentC107VideoItem extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c107_video_items';
    info: {
        description: '';
        displayName: 'c107-video-item';
    };
    attributes: {
        image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
        videoTitle: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC108Cards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c108_cards';
    info: {
        displayName: 'c108-cards';
    };
    attributes: {
        cardTitle: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    };
}

export interface CorpSubcomponentC109L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c109_l1_tabs';
    info: {
        displayName: 'C109-l1-tab';
    };
    attributes: {
        active: Schema.Attribute.Boolean &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<false>;
        link: Schema.Attribute.String;
        name: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC11Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c11_tabs';
    info: {
        description: '';
        displayName: 'C11-Tab';
    };
    attributes: {
        description: Schema.Attribute.Text;
        images: Schema.Attribute.Component<'common.media-img', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
        title: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['image', 'video']> &
            Schema.Attribute.Required;
        videoids: Schema.Attribute.Component<
            'corp-subcomponent.c11-video-ids',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 16;
                },
                number
            >;
    };
}

export interface CorpSubcomponentC11VideoIds extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c11_video_ids';
    info: {
        displayName: 'C11-videoIds';
    };
    attributes: {
        videoid: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC112LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c112_label_packs';
    info: {
        displayName: 'c112-label-pack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'Select Year',
                'Select Month',
                'View Link',
                'Download Link',
                'View',
                'Download',
            ]
        >;
    };
}

export interface CorpSubcomponentC113L1LabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c113_l1_label_packs';
    info: {
        description: '';
        displayName: 'C113-l1-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<
            [
                'Business Unit',
                'Location',
                'Find Best Opportunity Button',
                'Apply Button',
                'Show More Button',
            ]
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC114L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c114_l1_items';
    info: {
        description: '';
        displayName: 'C114-l1-item';
    };
    attributes: {
        benefits: Schema.Attribute.Component<
            'corp-subcomponent.c114-l2-benefit',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        video: Schema.Attribute.Media<'videos'>;
        videoThumbnail: Schema.Attribute.Media<'images'> &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC114L2Benefit extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c114_l2_benefits';
    info: {
        displayName: 'C114-l2-benefit';
    };
    attributes: {
        benefit: Schema.Attribute.String & Schema.Attribute.Required;
        icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC115IconList extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c115_icon_lists';
    info: {
        description: '';
        displayName: 'c115-icon-list';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images'>;
        link: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC116EmployeeList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c116_employee_lists';
    info: {
        description: '';
        displayName: 'c116-employee-list';
    };
    attributes: {
        image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        location: Schema.Attribute.String;
        name: Schema.Attribute.String;
        thumbnail: Schema.Attribute.Component<'common.media-img', false>;
        video: Schema.Attribute.Media<'videos'>;
        videoTitle: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC117ImagesWithQuotes
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c117_images_with_quotes';
    info: {
        displayName: 'c117-images-with-quotes';
    };
    attributes: {
        designation: Schema.Attribute.String;
        mainImage: Schema.Attribute.Media<'images'>;
        name: Schema.Attribute.String;
        overlapImage: Schema.Attribute.Component<'common.media-img', false>;
        quote: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
    };
}

export interface CorpSubcomponentC118L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c118_l1_items';
    info: {
        displayName: 'C118-l1-item';
    };
    attributes: {
        navigationId: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC12FaqList extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c12_faq_lists';
    info: {
        description: '';
        displayName: 'c12-faq-list';
    };
    attributes: {
        answer: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        question: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC12FaqTab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c12_faq_tabs';
    info: {
        displayName: 'c12-faq-tab';
    };
    attributes: {
        faqList: Schema.Attribute.Component<
            'corp-subcomponent.c12-faq-list',
            true
        >;
        tabText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC12HorizontalTab
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c12_horizontal_tabs';
    info: {
        displayName: 'c12-horizontal-tab';
    };
    attributes: {
        tabText: Schema.Attribute.String;
        verticalTab: Schema.Attribute.Component<
            'corp-subcomponent.c12-vertical-tab',
            true
        >;
    };
}

export interface CorpSubcomponentC12QuestionList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c12_question_lists';
    info: {
        description: '';
        displayName: 'c12-question-list';
    };
    attributes: {
        answer: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        question: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC12VerticalTab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c12_vertical_tabs';
    info: {
        displayName: 'c12-vertical-tab';
    };
    attributes: {
        faqList: Schema.Attribute.Component<
            'corp-subcomponent.c12-question-list',
            true
        >;
        tabText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC121Cards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c121_cards';
    info: {
        description: '';
        displayName: '[C121] - Cards';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC125LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c125_label_packs';
    info: {
        displayName: 'C125-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['name', 'date', 'designation', 'department']
        >;
    };
}

export interface CorpSubcomponentC128YearValue extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c128_year_values';
    info: {
        displayName: '[C128] - year value';
    };
    attributes: {
        FY: Schema.Attribute.String;
        value: Schema.Attribute.Decimal;
    };
}

export interface CorpSubcomponentC13GoalCard extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c13_goal_cards';
    info: {
        displayName: 'C13-goal-card';
    };
    attributes: {
        bgcolor: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', false>;
        image: Schema.Attribute.Component<'common.media-img', false>;
        text: Schema.Attribute.RichText;
    };
}

export interface CorpSubcomponentC14Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c14_cards';
    info: {
        displayName: 'c14-card';
    };
    attributes: {
        bgcolor: Schema.Attribute.String;
        bgimage: Schema.Attribute.Component<'common.media-img', false>;
        sub_title: Schema.Attribute.RichText;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC15AdText extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c15_ad_texts';
    info: {
        description: '';
        displayName: 'C15-ad-text';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC15NavigationButton
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c15_navigation_buttons';
    info: {
        displayName: 'C15-navigation-button';
    };
    attributes: {
        navigationId: Schema.Attribute.String & Schema.Attribute.Required;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC15Titles extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c15_titles';
    info: {
        displayName: 'C15-titles';
    };
    attributes: {
        title: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC17Cform extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c17_cforms';
    info: {
        displayName: 'C17-cform';
    };
    attributes: {
        mobile: Schema.Attribute.String;
        name: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC17Feature extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c17_features';
    info: {
        displayName: 'C17-feature';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC18Accordion extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c18_accordions';
    info: {
        description: '';
        displayName: 'c18-accordion';
    };
    attributes: {
        description: Schema.Attribute.Component<
            'corp-subcomponent.c18-l2-description',
            true
        >;
        title: Schema.Attribute.String;
        variation: Schema.Attribute.Enumeration<
            ['Single column', 'Two column']
        > &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'Single column'>;
    };
}

export interface CorpSubcomponentC18L1Points extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c18_l1_points';
    info: {
        displayName: 'C18-l1-points';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC18L2Description
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c18_l2_descriptions';
    info: {
        displayName: 'C18-l2-description';
    };
    attributes: {
        description: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC19Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c19_tabs';
    info: {
        description: '';
        displayName: 'c19-tab';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        image: Schema.Attribute.Media<'images'>;
        isImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2Column extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_columns';
    info: {
        displayName: 'C2-Column';
    };
    attributes: {
        menu: Schema.Attribute.Component<'corp-subcomponent.c2-menu', true>;
    };
}

export interface CorpSubcomponentC2FollowUs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_followuses';
    info: {
        description: '';
        displayName: 'C2-FollowUs';
    };
    attributes: {
        portalLogo: Schema.Attribute.Media<'images'>;
        portalLogoLink: Schema.Attribute.String;
        socialIcons: Schema.Attribute.Component<
            'corp-subcomponent.c2-social',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2InfoSection extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_info_sections';
    info: {
        displayName: 'C2-InfoSection';
    };
    attributes: {
        description: Schema.Attribute.Text;
        sectionColumn: Schema.Attribute.Component<
            'corp-subcomponent.c2-text',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                },
                number
            >;
    };
}

export interface CorpSubcomponentC2Menu extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_menus';
    info: {
        description: '';
        displayName: 'C2-Menu';
    };
    attributes: {
        link: Schema.Attribute.String;
        menuItem: Schema.Attribute.Component<'common.cta', true>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2OtherLinks extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_other_links';
    info: {
        displayName: 'C2-OtherLinks';
    };
    attributes: {
        links: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 20;
                },
                number
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2ProductMenu extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_product_menus';
    info: {
        displayName: 'C2-ProductMenu';
    };
    attributes: {
        column: Schema.Attribute.Component<
            'corp-subcomponent.c2-column',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2QuickLinks extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_quick_links';
    info: {
        displayName: 'C2-QuickLinks';
    };
    attributes: {
        column: Schema.Attribute.Component<
            'corp-subcomponent.c2-column',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC2Social extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_socials';
    info: {
        description: '';
        displayName: 'C2-Social';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        link: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['facebook', 'linkedin', 'twitter', 'instagram', 'youtube']
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC2Text extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c2_texts';
    info: {
        displayName: 'C2-Text';
    };
    attributes: {
        description: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC20BulletPoints
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c20_bullet_points';
    info: {
        description: '';
        displayName: 'Bullet Points';
    };
    attributes: {
        text: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
    };
}

export interface CorpSubcomponentC21L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c21_l1_tabs';
    info: {
        description: '';
        displayName: 'C21-l1-tab';
    };
    attributes: {
        description: Schema.Attribute.Text;
        disclaimer: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images'>;
        tabItem: Schema.Attribute.Component<'corp-subcomponent.c2-text', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 12;
                },
                number
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC22Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c22_cards';
    info: {
        description: '';
        displayName: 'C22-l1-Card';
    };
    attributes: {
        bulletPoint: Schema.Attribute.Component<
            'corp-subcomponent.c22-l2-bullet-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 6;
                },
                number
            >;
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Component<'common.media-img', false>;
        subTitle: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC22L2BulletPoints
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c22_l2_bullet_points';
    info: {
        displayName: 'C22-l2-bullet-points';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC23ClaimType extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c23claim_types';
    info: {
        description: '';
        displayName: 'C23 Claim Type';
    };
    attributes: {
        documentList: Schema.Attribute.Component<
            'corp-subcomponent.c23document-list',
            true
        >;
        title: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC23DocumentList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c23document_lists';
    info: {
        description: '';
        displayName: 'C23 Document List';
    };
    attributes: {
        document: Schema.Attribute.Media<'files'>;
        documentName: Schema.Attribute.String;
        info: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC24AvoidRejection
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c24_avoid_rejections';
    info: {
        description: '';
        displayName: 'c24-Avoid Claim Rejection';
    };
    attributes: {
        description: Schema.Attribute.RichText & Schema.Attribute.Required;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC25L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c25_l1_cards';
    info: {
        displayName: 'C25-l1-Card';
    };
    attributes: {
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC26IconList extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c26_icon_lists';
    info: {
        description: '';
        displayName: 'c26IconList';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC27L1Feature extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c27_l1_features';
    info: {
        description: '';
        displayName: 'C27-l1-feature';
    };
    attributes: {
        firstColumn: Schema.Attribute.Component<
            'corp-subcomponent.c27-l2-item',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
        secondColumn: Schema.Attribute.Component<
            'corp-subcomponent.c27-l2-item',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 8;
                },
                number
            >;
    };
}

export interface CorpSubcomponentC27L2Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c27_l2_items';
    info: {
        description: '';
        displayName: 'C27-l2-item';
    };
    attributes: {
        bulletPoints: Schema.Attribute.Component<
            'corp-subcomponent.c27-l3-bullet-points',
            true
        >;
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC27L3BulletPoints
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c27_l3_bullet_points';
    info: {
        displayName: ' C27-l3-bulletPoints';
    };
    attributes: {
        bulletPoint: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC28SelectPlan extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c28select_plans';
    info: {
        displayName: 'c28 Select Plan';
    };
    attributes: {
        description: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC30L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c30_l1_cards';
    info: {
        displayName: 'C30-l1-Card';
    };
    attributes: {
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images'>;
    };
}

export interface CorpSubcomponentC31Eligibility extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c31_eligibilities';
    info: {
        description: '';
        displayName: 'c31-Eligibility';
    };
    attributes: {
        eligibilityList: Schema.Attribute.Component<
            'corp-subcomponent.c31-eligibility-list',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC31EligibilityList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c31_eligibility_lists';
    info: {
        description: '';
        displayName: 'C31 Eligibility List';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC32L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c32_l1_tabs';
    info: {
        description: '';
        displayName: 'C32-l1-tab';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        tabTitle: Schema.Attribute.String;
        video: Schema.Attribute.Media<'videos'>;
        youtubeVideoId: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC33L1Media extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c33_l1_medias';
    info: {
        description: '';
        displayName: 'C33-l1-Media';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        media: Schema.Attribute.Media<'videos' | 'files'>;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC34StepToWork extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c34_step_to_works';
    info: {
        displayName: 'c34-step-to-work';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC35Planlist extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c35planlists';
    info: {
        description: '';
        displayName: 'c35-Plan list';
    };
    attributes: {
        description: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC37L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c37_l1_items';
    info: {
        displayName: 'C37-l1-item';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC38L1Logo extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c38_l1_logos';
    info: {
        displayName: 'C38-l1-logo';
    };
    attributes: {
        logo: Schema.Attribute.Media<'images'>;
    };
}

export interface CorpSubcomponentC39L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c39_l1_items';
    info: {
        displayName: 'C39-l1-item';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.Text;
        logo: Schema.Attribute.Media<'images'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC42L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c42_li_cards';
    info: {
        description: '';
        displayName: 'C42-l1-card';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC43L1LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c43_l1_label_packs';
    info: {
        displayName: 'C43-l1-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'State Label',
                'District Label',
                'Locality Label',
                'Reset Button',
                'Get Direction Button',
                'Branch Details Button',
            ]
        >;
    };
}

export interface CorpSubcomponentC44L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c44_l1_tabs';
    info: {
        description: '';
        displayName: 'C44-l1-tab';
    };
    attributes: {
        bulletPoint: Schema.Attribute.Component<
            'corp-subcomponent.c20-bullet-points',
            true
        >;
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        isRightSideImage: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        tabTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC46L1Points extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c46_l1_points';
    info: {
        displayName: 'C46-l1-points';
    };
    attributes: {
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC47Description extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c47_descriptions';
    info: {
        description: '';
        displayName: 'c47-introductionDetails';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        introductionList: Schema.Attribute.Component<
            'corp-subcomponent.c47-introduction',
            true
        >;
    };
}

export interface CorpSubcomponentC47Introduction
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c47_introductions';
    info: {
        displayName: 'c47-introduction';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC48L1TextBlocks
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c48_l1_text_blocks';
    info: {
        description: '';
        displayName: 'C48-l1-text-blocks';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC49L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c49_l1_cards';
    info: {
        description: '';
        displayName: 'C49-l1-card';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC50L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c50_l1_cards';
    info: {
        description: '';
        displayName: 'C50-l1-card';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', false>;
        expandText: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        fontColour: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC51L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c51_l1_tabs';
    info: {
        description: '';
        displayName: 'C51-l1-tab';
    };
    attributes: {
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images' | 'files'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC53L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c53_l1_tabs';
    info: {
        description: '';
        displayName: 'C53-l1-tab';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC55L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c55_l1_items';
    info: {
        description: '';
        displayName: 'C55-l1-item';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC56L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c56_l1_cards';
    info: {
        description: '';
        displayName: 'C56-l1-card';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        cta: Schema.Attribute.Component<'common.cta', false>;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        pointers: Schema.Attribute.Component<
            'corp-subcomponent.c56-l2-pointers',
            true
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
        titleBottom: Schema.Attribute.Boolean &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<true>;
    };
}

export interface CorpSubcomponentC56L2Pointers extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c56_l2_pointers';
    info: {
        displayName: 'C56-l2-pointers';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC57CardWithIcon
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c57_card_with_icons';
    info: {
        displayName: 'c57-cardWithIcon';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 2;
                },
                number
            >;
        description: Schema.Attribute.RichText;
        icon: Schema.Attribute.Media<'images'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC59L1Slide extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c59_l1_slides';
    info: {
        displayName: 'c59-l1-slide';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', true> &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC60L1Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c60_l1_tabs';
    info: {
        description: '';
        displayName: 'C60-l1-tab';
    };
    attributes: {
        tags: Schema.Attribute.Relation<
            'oneToMany',
            'api::media-tag.media-tag'
        >;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC61L1LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c61_l1_label_packs';
    info: {
        displayName: 'C61-l1-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'department',
                'employee_id',
                'subject',
                'idea',
                'button',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentC64L1Item extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c64_l1_items';
    info: {
        description: '';
        displayName: 'C64-l1-item';
    };
    attributes: {
        thumbnail: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['Campaign', 'In News', 'Video']>;
        youtubeLink: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC65L1Points extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c65_l1_points';
    info: {
        displayName: 'c65-l1-points';
    };
    attributes: {
        text: Schema.Attribute.Text & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC66LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c66_label_packs';
    info: {
        description: '';
        displayName: 'c66-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'Select Year',
                'Select Quarter',
                'Document Name',
                'View Link',
                'Download Link',
                'View',
                'Download',
            ]
        >;
    };
}

export interface CorpSubcomponentC6Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c6cards';
    info: {
        displayName: 'C6 Card';
    };
    attributes: {
        backgroundColor: Schema.Attribute.String;
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.RichText;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC70L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c70_l1_cards';
    info: {
        displayName: 'C70-l1-card';
    };
    attributes: {
        description: Schema.Attribute.Text & Schema.Attribute.Required;
        icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC70L1Text extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c70_l1_texts';
    info: {
        displayName: 'C70-l1-text';
    };
    attributes: {
        description: Schema.Attribute.Text & Schema.Attribute.Required;
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC72L1Text extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c72_l1_texts';
    info: {
        displayName: 'C72-l1-text';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC74L1Items extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c74_l1_items';
    info: {
        displayName: 'C74-l1-items';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC77L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c77_l1_cards';
    info: {
        displayName: 'C77-l1-card';
    };
    attributes: {
        bgColour: Schema.Attribute.String;
        description: Schema.Attribute.Text;
        fontColour: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC78FeatureLabel
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c78_feature_labels';
    info: {
        description: '';
        displayName: 'c78-feature-label';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        isLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        label: Schema.Attribute.String;
        number: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC78PromoterFeatures
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c78_promoter_features';
    info: {
        displayName: 'c78-promoter-features';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        shortDescription: Schema.Attribute.RichText;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC78Promoters extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c78_promoters';
    info: {
        description: '';
        displayName: 'c78-promoters';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        featureLabel: Schema.Attribute.Component<
            'corp-subcomponent.c78-feature-label',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 4;
                },
                number
            >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        promoterFeature: Schema.Attribute.Component<
            'corp-subcomponent.c78-promoter-features',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        tabIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC79Cards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c79_cards';
    info: {
        displayName: 'c79-cards';
    };
    attributes: {
        highlightText: Schema.Attribute.String;
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC8MiniCard extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c8_mini_cards';
    info: {
        displayName: 'c8-mini-card';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        iconImage: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC81L1Articles extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c81_l1_articles';
    info: {
        displayName: 'C81-l1-articles';
    };
    attributes: {
        article: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    };
}

export interface CorpSubcomponentC83L1Blogs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c83_l1_blogs';
    info: {
        displayName: 'C83-l1-blogs';
    };
    attributes: {
        blog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    };
}

export interface CorpSubcomponentC83L1LabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c83_l1_label_packs';
    info: {
        displayName: 'C83-l1-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['detailsLink', 'viewText', 'durationText', 'loadButton']
        >;
    };
}

export interface CorpSubcomponentC84DocumentList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c84_document_lists';
    info: {
        displayName: 'c84-document-list';
    };
    attributes: {
        document: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
        documentName: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC84PoliciesDisclosure
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c84_policies_disclosures';
    info: {
        displayName: 'c84-policies-disclosure';
    };
    attributes: {
        documentList: Schema.Attribute.Component<
            'corp-subcomponent.c84-document-list',
            true
        >;
        tabText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC85Tab extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c85_tabs';
    info: {
        displayName: 'c85-tab';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        tabText: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC86L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c86_l1_cards';
    info: {
        displayName: 'C86-l1-card';
    };
    attributes: {
        description: Schema.Attribute.Text;
        title: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    maxLengthCharacters: 50;
                    preset: 'defaultHtml';
                }
            >;
    };
}

export interface CorpSubcomponentC87Points extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c87_points';
    info: {
        displayName: 'c87-points';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC87Tabs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c87_tabs';
    info: {
        description: '';
        displayName: 'c87-tabs';
    };
    attributes: {
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        image: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        pointerTitle: Schema.Attribute.String;
        points: Schema.Attribute.Component<
            'corp-subcomponent.c87-points',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 12;
                },
                number
            >;
        tabText: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC88ContactUsList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c88_contact_us_lists';
    info: {
        displayName: 'c88-contact-us-list';
    };
    attributes: {
        address: Schema.Attribute.RichText;
        contactNumber: Schema.Attribute.String;
        designation: Schema.Attribute.String;
        email: Schema.Attribute.String;
        logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        name: Schema.Attribute.String;
        website: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC9Logo extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c9_logos';
    info: {
        displayName: 'c9-logo';
    };
    attributes: {
        link: Schema.Attribute.String;
        logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    };
}

export interface CorpSubcomponentC9Media extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c9_medias';
    info: {
        displayName: 'c9Media';
    };
    attributes: {
        image: Schema.Attribute.Component<'common.media-img', false>;
    };
}

export interface CorpSubcomponentC90IconText extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_icon_texts';
    info: {
        description: '';
        displayName: 'c90-icon-text';
    };
    attributes: {
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC90L1StandardTextColumn
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l1_standard_text_columns';
    info: {
        displayName: 'c90-l1-standard-text-column';
    };
    attributes: {
        row: Schema.Attribute.Component<
            'corp-subcomponent.c90-l2-standard-text',
            true
        >;
    };
}

export interface CorpSubcomponentC90L1TableColumn
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l1_table_columns';
    info: {
        displayName: 'c90-l1-table-column';
    };
    attributes: {
        table: Schema.Attribute.Component<
            'corp-subcomponent.c90-l2-table',
            true
        >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC90L1Title extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l1_titles';
    info: {
        displayName: 'C90-l1-title';
    };
    attributes: {
        title: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC90L2StandardText
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l2_standard_texts';
    info: {
        displayName: 'c90-l2-standard-text';
    };
    attributes: {
        boldText: Schema.Attribute.String;
        normalText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC90L2Table extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l2_tables';
    info: {
        displayName: 'C90-l2-table';
    };
    attributes: {
        rowData: Schema.Attribute.Component<
            'corp-subcomponent.c90-l3-table-data',
            true
        >;
        tableHeader: Schema.Attribute.Component<
            'corp-subcomponent.c90-l3-table-heading',
            false
        >;
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC90L3TableData extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l3_table_data';
    info: {
        displayName: 'c90-l3-table-data';
    };
    attributes: {
        columnOne: Schema.Attribute.String;
        columnTwo: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC90L3TableHeading
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c90_l3_table_headings';
    info: {
        displayName: 'c90-l3-table-heading';
    };
    attributes: {
        columnOne: Schema.Attribute.String & Schema.Attribute.Required;
        columnTwo: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC92Cards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c92_cards';
    info: {
        description: '';
        displayName: 'c92-cards';
    };
    attributes: {
        backgroundColor: Schema.Attribute.String;
        backgroundImage: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
        cardTitle: Schema.Attribute.String;
        fontColour: Schema.Attribute.String;
        link: Schema.Attribute.String;
        subTitle: Schema.Attribute.RichText;
    };
}

export interface CorpSubcomponentC93IconText extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c93_icon_texts';
    info: {
        displayName: 'c93-icon-text';
    };
    attributes: {
        description: Schema.Attribute.Text;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    };
}

export interface CorpSubcomponentC94L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c94_l1_cards';
    info: {
        description: '';
        displayName: 'C94-l1-Card';
    };
    attributes: {
        bgImage: Schema.Attribute.Component<'common.media-img', false>;
        designation: Schema.Attribute.String;
        name: Schema.Attribute.String;
        quote: Schema.Attribute.Text;
        transparentImage: Schema.Attribute.Component<'common.media-img', false>;
    };
}

export interface CorpSubcomponentC95BoxTitleList
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_box_title_lists';
    info: {
        description: '';
        displayName: 'c95-box-title-list';
    };
    attributes: {
        points: Schema.Attribute.Component<
            'corp-subcomponent.c20-bullet-points',
            true
        >;
        title: Schema.Attribute.Text;
        type: Schema.Attribute.Enumeration<['Ordered', 'Unordered']>;
    };
}

export interface CorpSubcomponentC95Collection extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_collections';
    info: {
        displayName: 'c95-collection';
    };
    attributes: {
        title: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['Public', 'Voting']>;
    };
}

export interface CorpSubcomponentC95Documents extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_documents';
    info: {
        displayName: 'c95-documents';
    };
    attributes: {
        title: Schema.Attribute.String;
        upload: Schema.Attribute.Media<'files'>;
    };
}

export interface CorpSubcomponentC95Governance extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_governances';
    info: {
        displayName: 'c95-governance';
    };
    attributes: {
        documents: Schema.Attribute.Component<
            'corp-subcomponent.c95-documents',
            true
        >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC95Tabs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_tabs';
    info: {
        displayName: 'c95-tabs';
    };
    attributes: {
        financial_year: Schema.Attribute.Component<
            'corp-subcomponent.c95-collection',
            false
        >;
        governance: Schema.Attribute.Component<
            'corp-subcomponent.c95-governance',
            false
        >;
        title: Schema.Attribute.String;
        uncliamed: Schema.Attribute.Component<
            'corp-subcomponent.c95-uncliamed',
            false
        >;
    };
}

export interface CorpSubcomponentC95Uncliamed extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c95_uncliameds';
    info: {
        description: '';
        displayName: 'c95-uncliamed';
    };
    attributes: {
        disclaimer: Schema.Attribute.Text;
        documents: Schema.Attribute.Component<
            'corp-subcomponent.c95-box-title-list',
            true
        >;
        list: Schema.Attribute.Component<
            'corp-subcomponent.c95-box-title-list',
            true
        >;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC96 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c96s';
    info: {
        displayName: 'c96';
    };
    attributes: {
        columnOneText: Schema.Attribute.String;
        columnTwoText: Schema.Attribute.RichText;
    };
}

export interface CorpSubcomponentC96IconList extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c96_icon_lists';
    info: {
        description: '';
        displayName: 'c96-icon-list';
    };
    attributes: {
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        iconText: Schema.Attribute.String;
        points: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        textPosition: Schema.Attribute.Enumeration<['bottom', 'top']>;
    };
}

export interface CorpSubcomponentC96TableContent
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c94_table_contents';
    info: {
        description: '';
        displayName: 'c94-table-content';
    };
    attributes: {
        columnOneHeader: Schema.Attribute.String;
        columnTwoHeader: Schema.Attribute.String;
        description: Schema.Attribute.RichText;
        header: Schema.Attribute.String;
        importantPointHeader: Schema.Attribute.String;
        importantPoints: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        rowData: Schema.Attribute.Component<'corp-subcomponent.c96', true>;
    };
}

export interface CorpSubcomponentC96Tabs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c96_tabs';
    info: {
        description: '';
        displayName: 'c96-tabs';
    };
    attributes: {
        description: Schema.Attribute.Text;
        iconList: Schema.Attribute.Component<
            'corp-subcomponent.c96-icon-list',
            true
        >;
        tableContent: Schema.Attribute.Component<
            'corp-subcomponent.c96-table-content',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        tabText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC97Documents extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_documents';
    info: {
        displayName: 'c97-documents';
    };
    attributes: {};
}

export interface CorpSubcomponentC97Faq extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_faqs';
    info: {
        displayName: 'c97-faq';
    };
    attributes: {
        answer: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        question: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentC97FormDownload
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_form_downloads';
    info: {
        displayName: 'c97-formDownload';
    };
    attributes: {
        formName: Schema.Attribute.String;
        formUpload: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentC97Rows extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_rows';
    info: {
        description: '';
        displayName: 'c97-rows';
    };
    attributes: {
        columnData1: Schema.Attribute.Text;
        columnData2: Schema.Attribute.Enumeration<['Yes', 'No']>;
        columnData3: Schema.Attribute.Enumeration<['Yes', 'No']>;
        columnData4: Schema.Attribute.Enumeration<['Yes', 'No']>;
        columnData5: Schema.Attribute.Enumeration<['Yes', 'No']>;
        columnData6: Schema.Attribute.Enumeration<['Yes', 'No']>;
        columnData7: Schema.Attribute.Enumeration<['Yes', 'No']>;
    };
}

export interface CorpSubcomponentC97TableContent
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_table_contents';
    info: {
        description: '';
        displayName: 'c97-tableContent';
    };
    attributes: {
        columnHeader1: Schema.Attribute.String;
        columnHeader2: Schema.Attribute.String;
        columnHeader3: Schema.Attribute.String;
        columnHeader4: Schema.Attribute.String;
        columnHeader5: Schema.Attribute.String;
        columnHeader6: Schema.Attribute.String;
        columnHeader7: Schema.Attribute.String;
        disclaimerText: Schema.Attribute.Text;
        rows: Schema.Attribute.Component<'corp-subcomponent.c97-rows', true>;
        tableHeader: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC97Tabs extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c97_tabs';
    info: {
        description: '';
        displayName: 'c97-tabs';
    };
    attributes: {
        backgroundImage: Schema.Attribute.Component<'common.media-img', false>;
        faqList: Schema.Attribute.Component<'corp-subcomponent.c97-faq', true>;
        formDownload: Schema.Attribute.Component<
            'corp-subcomponent.c97-form-download',
            true
        >;
        header: Schema.Attribute.String;
        tableContent: Schema.Attribute.Component<
            'corp-subcomponent.c97-table-content',
            true
        >;
        tabText: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC98L1Card extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c98_l1_cards';
    info: {
        displayName: 'C98-l1-card';
    };
    attributes: {
        document: Schema.Attribute.Media<'files'>;
        documentTitle: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentC99MediaQuery extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_c99_media_queries';
    info: {
        description: '';
        displayName: 'c99-media-query';
    };
    attributes: {
        boxText: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        boxTitle: Schema.Attribute.String;
        boxType: Schema.Attribute.Enumeration<
            ['Phone Number', 'Email', 'Text']
        > &
            Schema.Attribute.Required;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentCoiDownloadLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_coi_download_label_packs';
    info: {
        displayName: 'coiDownload-LabelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'form_name',
                'dob_label',
                'dob_placeholder',
                'mobile_label',
                'mobile_placeholder',
                'lan_label',
                'lan_placeholder',
                'otpScreen_title',
                'otpScreen_subtitle',
                'otpScreen_helpText',
                'otpVerify_btn',
                'otpSuccess_message',
                'downloadScreen_title',
                'downloadScreen_subtitle',
                'downloadScreen_lan',
                'downloadScreen_viewLinkText',
                'downloadScreen_backbtn',
                'backBtn_label',
                'proceedBtn_label',
                'error_message',
            ]
        >;
    };
}

export interface CorpSubcomponentFaq extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_faqs';
    info: {
        description: '';
        displayName: 'faq';
    };
    attributes: {
        answer: Schema.Attribute.RichText & Schema.Attribute.Required;
        category: Schema.Attribute.Enumeration<
            [
                'Life Insurance',
                'Insurance Parlance',
                'Product',
                'Policy Servicing',
                'GST Waiver',
                'Tax Benefits',
            ]
        >;
        question: Schema.Attribute.String & Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentFundNavLabelpacks
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_fund_nav_labelpacks';
    info: {
        description: '';
        displayName: 'fund-nav-labelpacks';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'lblNetAssetValue',
                'lblNAV',
                'lblHighest',
                'lblLowest',
                'lblViewDetails',
                'lblBalancedFund',
                'lblLatest',
                'lblSelectProduct',
                'lblSelect',
                'lblStartDate',
                'lblEndDate',
                'lblSubmit',
                'lblPerformance',
                'lblFundHistory',
                'lblDate',
                'lblFundName',
                'lblPlanName',
                'lblSFIN',
            ]
        >;
    };
}

export interface CorpSubcomponentGiftcityBulletPoints
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_giftcity_bullet_points';
    info: {
        displayName: 'giftcity-bulletPoints';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentGiftcityLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_giftcity_label_packs';
    info: {
        description: '';
        displayName: 'giftcity-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'first_name',
                'last_name',
                'mobile',
                'email',
                'country',
                'button',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentGrievanceOtherInfo
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_grievance_other_infos';
    info: {
        description: '';
        displayName: 'grievance-other-info';
    };
    attributes: {
        info: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultMarkdown';
                }
            >;
        text: Schema.Attribute.Text;
        title: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentIcon extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_icons';
    info: {
        description: '';
        displayName: 'icon';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        IconImage: Schema.Attribute.Media<
            'images' | 'files' | 'videos' | 'audios'
        >;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentJoinOurTeamLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_our_team_label_packs';
    info: {
        description: '';
        displayName: 'joinOurTeam-LabelPack';
    };
    attributes: {
        text: Schema.Attribute.String & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<
            [
                'full_name',
                'mobile',
                'email',
                'department',
                'message',
                'resume',
                'formats',
                'size',
                'button_text',
                'success',
            ]
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentJoinUsProLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_us_pro_label_packs';
    info: {
        description: '';
        displayName: 'join-us-pro-label-pack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['submit']>;
    };
}

export interface CorpSubcomponentJoinUsProfBulletPoint
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_us_prof_bullet_points';
    info: {
        displayName: 'join-us-prof-bullet-point';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentJoinUsProfLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_us_prof_label_packs';
    info: {
        description: '';
        displayName: 'join-us-prof-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'button_text',
                'first_name',
                'last_name',
                'mobile',
                'size',
                'format',
                'resume',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentJoinUsProfessional
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_us_professionals';
    info: {
        description: '';
        displayName: 'join-us-professional';
    };
    attributes: {
        bgColor: Schema.Attribute.String;
        bulletPointList: Schema.Attribute.Component<
            'corp-subcomponent.join-us-prof-bullet-point',
            true
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 10;
                },
                number
            >;
        cta: Schema.Attribute.Component<'common.cta', false>;
        formType: Schema.Attribute.Enumeration<
            ['Professional', 'Advisor', 'Intern']
        >;
        image: Schema.Attribute.Component<'common.media-img', false>;
        subTitle: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentJoinUsProfesssionalPointers
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_join_us_professsional_pointers';
    info: {
        displayName: 'join-us-professsional-pointers';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentJoinusBulletPoints
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_joinus_bullet_points';
    info: {
        displayName: 'joinus-bulletPoints';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentJoinusLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_joinus_label_packs';
    info: {
        description: '';
        displayName: 'joinus-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'first_name',
                'last_name',
                'mobile',
                'email',
                'city',
                'button',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelPack extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_label_packs';
    info: {
        displayName: 'labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['View', 'Download']>;
    };
}

export interface CorpSubcomponentLabelpackBecomeAnAgent
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_become_an_agents';
    info: {
        description: '';
        displayName: 'Labelpack-becomeAnAgent';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            ['name', 'mobile', 'spam', 'button', 'success']
        >;
    };
}

export interface CorpSubcomponentLabelpackContactus
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_contactuses';
    info: {
        description: '';
        displayName: 'labelpack-contactus';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'name',
                'email',
                'mobile',
                'subject',
                'message',
                'spam',
                'button',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelpackDnd extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_dnds';
    info: {
        description: '';
        displayName: 'labelpack-dnd';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'firstname',
                'lastname',
                'mobile',
                'email',
                'landline',
                'pincode',
                'state',
                'city',
                'button',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelpackFatcaupdate
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_fatcaupdates';
    info: {
        description: '';
        displayName: 'Label Pack';
    };
    attributes: {
        text: Schema.Attribute.Text;
        type: Schema.Attribute.Enumeration<
            [
                'Screen 1 Info Text',
                'Option Policy Text',
                'Option Mobile Text',
                'Option Email Text',
                'Option Field Title',
                'Date of Birth Field Label',
                'Application Number Field Label',
                'Name Field Label',
                'Resident Field Label',
                'Tax Resident Field Label',
                'Father Name Field Label',
                'Birth Place Field Label',
                'Birth Country Field Label',
                'Current Address Field Label',
                'Permanent Address Field Label',
                'Permanent Address Field Label',
                'Phone Field Label',
                'Authority Field Label',
                'Authority Effective Field Label',
                'Effective Date Field Label',
                'Standing Instruction Field Label',
                'Privacy Policy Field Label',
                'Policy Placeholder',
                'Mobile Placeholder',
                'Email Placeholder',
                'Application Number Placeholder',
                'Name Placeholder',
                'Father Name Placeholder',
                'Birth Place Placeholder',
                'Birth Country Placeholder',
                'Effective Date Placeholder',
                'Submit Button Text',
                'Back Button text',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelpackGrievance
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_grievances';
    info: {
        displayName: 'labelpack-grievance';
    };
    attributes: {
        text: Schema.Attribute.Text;
        type: Schema.Attribute.Enumeration<
            [
                'First Name Field Label',
                'Last Name Field Label',
                'Policy Number Field Label',
                'Date of Birth Field Label',
                'Mobile Field Label',
                'Contact Number Country Field Label',
                'Message Field Label',
                'Customer Type Field Label',
                'Submit Button Text',
                'Cancel Button text',
                'OTP Button text',
                'OTP Window Heading',
                'OTP Window Info',
                'OTP Window Help',
                'OTP Window Change No',
                'OTP Window Resend',
                'OTP Window Button text',
                'OTP Button text',
                'First Name Place Holder',
                'Last Name Place Holder',
                'Policy Number Place Holder',
                'Date of Birth Place Holder',
                'Mobile Place Holder',
                'Contact Number Place Holder',
                'Form Info Text',
                'Tab Online Portal Text',
                'Tab Other Ways Text',
                'Tab Online Portal Sub Title',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelpackPanupdate
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_panupdates';
    info: {
        description: '';
        displayName: 'Label Pack';
    };
    attributes: {
        text: Schema.Attribute.Text;
        type: Schema.Attribute.Enumeration<
            [
                'Screen 1 Info Text',
                'Screen 2 Info Text',
                'Option Policy Text',
                'Option Mobile Text',
                'Option Email Text',
                'Option Field Label',
                'Date of Birth Field Label',
                'Payer Name Field Label',
                'Pan Number Field Label',
                'Date of Birth Field Placeholder',
                'Policy Placeholder',
                'Mobile Placeholder',
                'Email Placeholder',
                'Pan Number Placeholder',
                'Submit Button Text',
                'Back Button text',
                'Success Title',
                'Success text',
                'Success Info',
                'Success Email Label',
                'Success Phone Label',
            ]
        >;
    };
}

export interface CorpSubcomponentLabelpackPayment
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_labelpack_payments';
    info: {
        displayName: 'labelpack-payment';
    };
    attributes: {
        text: Schema.Attribute.Text & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<
            [
                'Screen 1 Info Text',
                'Screen 2 Info Text',
                'Option Policy Text',
                'Option Mobile Text',
                'Option Email Text',
                'Option Field Label',
                'Date of Birth Field Label',
                'Submit Button1 Text',
                'Submit Button2 Text',
                'Back Button text',
                'Date of Birth Field Placeholder',
                'Policy Placeholder',
                'Mobile Placeholder',
                'Email Placeholder',
                'Policy Status Label',
                'Payment Frequency Label',
                'Due Date Label',
                'Installment Label',
                'Deposit Label',
                'Amount Label',
                'Sum Label',
                'Success Title',
                'Success text',
                'Success Info',
            ]
        > &
            Schema.Attribute.Required;
    };
}

export interface CorpSubcomponentLmCards extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_lm_cards';
    info: {
        description: '';
        displayName: 'lm-l1-cards';
    };
    attributes: {
        cardColour: Schema.Attribute.String;
        cardVariation: Schema.Attribute.Enumeration<
            [
                'simple_text',
                'simple_text_with_image',
                'image',
                'quote_on_image',
                'full_width',
            ]
        >;
        description: Schema.Attribute.RichText &
            Schema.Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'defaultHtml';
                }
            >;
        fontColour: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
        imagePosition: Schema.Attribute.Enumeration<['left', 'bottom']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'left'>;
        number: Schema.Attribute.String;
        numberBgColour: Schema.Attribute.String;
        quote: Schema.Attribute.String;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentMediaImageGallery
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_media_image_galleries';
    info: {
        displayName: 'Media-image-gallery';
    };
    attributes: {
        caption: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
    };
}

export interface CorpSubcomponentPeopleDesignation
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_designations';
    info: {
        displayName: 'Designation';
    };
    attributes: {
        designation: Schema.Attribute.Relation<
            'oneToOne',
            'api::people-designation.people-designation'
        >;
        role: Schema.Attribute.Enumeration<
            ['management', 'directors', 'committee']
        >;
    };
}

export interface CorpSubcomponentPlanFeatures extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_plan_features';
    info: {
        displayName: 'planFeatures';
    };
    attributes: {
        feature: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentProductFormDisclaimer
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_product_form_disclaimers';
    info: {
        displayName: 'productForm-disclaimer';
    };
    attributes: {
        text: Schema.Attribute.Text;
    };
}

export interface CorpSubcomponentProductFormLabelPack
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_product_form_label_packs';
    info: {
        description: '';
        displayName: 'productForm-labelPack';
    };
    attributes: {
        text: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<
            [
                'first_name',
                'last_name',
                'gender',
                'dob',
                'email',
                'mobile',
                'spam',
                'button_text',
                'success',
            ]
        >;
    };
}

export interface CorpSubcomponentProductFormPointers
    extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_product_form_pointers';
    info: {
        displayName: 'productForm-pointers';
    };
    attributes: {
        text: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentStepToPay extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_step_to_pays';
    info: {
        displayName: 'step-to-pay';
    };
    attributes: {
        description: Schema.Attribute.RichText;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        title: Schema.Attribute.String;
    };
}

export interface CorpSubcomponentStickyModuleL1 extends Struct.ComponentSchema {
    collectionName: 'components_corp_subcomponent_sticky_module_l1s';
    info: {
        displayName: 'stickyModule-l1';
    };
    attributes: {
        cta: Schema.Attribute.Component<'common.cta', false>;
        icon: Schema.Attribute.Media<'images'>;
    };
}

export interface IntranetFooterFooter extends Struct.ComponentSchema {
    collectionName: 'components_intranet_footer_footers';
    info: {
        displayName: '[Footer] Intranet Site';
    };
    attributes: {
        copyright: Schema.Attribute.Text;
        disclaimer: Schema.Attribute.Component<
            'corp-subcomponent.c2-text',
            false
        >;
        followUs: Schema.Attribute.Component<
            'corp-subcomponent.c2-follow-us',
            false
        >;
        importantLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-menu',
            false
        >;
        infoSection: Schema.Attribute.Component<
            'corp-subcomponent.c2-info-section',
            false
        >;
        logo: Schema.Attribute.Component<'common.media-img', false>;
        otherLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-other-links',
            false
        >;
        productMenu: Schema.Attribute.Component<
            'corp-subcomponent.c2-product-menu',
            false
        >;
        quickLinks: Schema.Attribute.Component<
            'corp-subcomponent.c2-quick-links',
            false
        >;
        stickyModule: Schema.Attribute.Component<
            'corp-subcomponent.sticky-module-l1',
            true
        >;
    };
}

export interface IntranetHeaderHeader extends Struct.ComponentSchema {
    collectionName: 'components_intranet_header_headers';
    info: {
        displayName: '[Header] Intranet Site';
    };
    attributes: {
        additional_logo: Schema.Attribute.Media<'images'>;
        additional_logo_link: Schema.Attribute.String;
        logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
        main_menu: Schema.Attribute.Component<
            'corp-subcomponent.c1-l1',
            false
        > &
            Schema.Attribute.Required;
        options: Schema.Attribute.JSON &
            Schema.Attribute.CustomField<
                'plugin::multi-select.multi-select',
                [
                    'Show Language Selector:language',
                    'Show Search Bar:search',
                    'Show Profile Button:profile',
                ]
            >;
        profile: Schema.Attribute.Component<'common.cta', false>;
        top_menu: Schema.Attribute.Component<
            'corp-subcomponent.c1-top',
            false
        > &
            Schema.Attribute.Required;
    };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
    collectionName: 'components_shared_meta_socials';
    info: {
        displayName: 'metaSocial';
        icon: 'project-diagram';
    };
    attributes: {
        description: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 65;
            }>;
        image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
        socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
            Schema.Attribute.Required;
        title: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 60;
            }>;
    };
}

export interface SharedOpengraph extends Struct.ComponentSchema {
    collectionName: 'components_shared_opengraphs';
    info: {
        description: '';
        displayName: 'opengraph';
    };
    attributes: {
        description: Schema.Attribute.Text;
        image: Schema.Attribute.Media<'images' | 'files'>;
        title: Schema.Attribute.String;
    };
}

export interface SharedSeo extends Struct.ComponentSchema {
    collectionName: 'components_shared_seos';
    info: {
        description: '';
        displayName: 'SEO';
        icon: 'search';
    };
    attributes: {
        canonicalURL: Schema.Attribute.String;
        keywords: Schema.Attribute.Text;
        metaDescription: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 160;
                minLength: 50;
            }>;
        metaRobots: Schema.Attribute.String;
        metaTitle: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                maxLength: 60;
            }>;
        metaViewport: Schema.Attribute.String;
        opengraph: Schema.Attribute.Component<'shared.opengraph', false>;
        shortlink: Schema.Attribute.String;
        structuredData: Schema.Attribute.JSON;
    };
}

declare module '@strapi/strapi' {
    export module Public {
        export interface ComponentSchemas {
            'common.cta': CommonCta;
            'common.media-img': CommonMediaImg;
            'common.mutli-text': CommonMutliText;
            'common.title-tags': CommonTitleTags;
            'corp-dynamic.blog-component': CorpDynamicBlogComponent;
            'corp-dynamic.blog-filter': CorpDynamicBlogFilter;
            'corp-dynamic.branch-amenity': CorpDynamicBranchAmenity;
            'corp-dynamic.branch-banner': CorpDynamicBranchBanner;
            'corp-dynamic.branch-coordinates': CorpDynamicBranchCoordinates;
            'corp-dynamic.branch-detail': CorpDynamicBranchDetail;
            'corp-dynamic.business-partner': CorpDynamicBusinessPartner;
            'corp-dynamic.c100': CorpDynamicC100;
            'corp-dynamic.c101': CorpDynamicC101;
            'corp-dynamic.c102': CorpDynamicC102;
            'corp-dynamic.c104': CorpDynamicC104;
            'corp-dynamic.c105-fund-nav': CorpDynamicC105FundNav;
            'corp-dynamic.c106': CorpDynamicC106;
            'corp-dynamic.c107': CorpDynamicC107;
            'corp-dynamic.c108': CorpDynamicC108;
            'corp-dynamic.c109': CorpDynamicC109;
            'corp-dynamic.c11': CorpDynamicC11;
            'corp-dynamic.c111': CorpDynamicC111;
            'corp-dynamic.c112': CorpDynamicC112;
            'corp-dynamic.c113': CorpDynamicC113;
            'corp-dynamic.c114': CorpDynamicC114;
            'corp-dynamic.c115': CorpDynamicC115;
            'corp-dynamic.c116': CorpDynamicC116;
            'corp-dynamic.c117': CorpDynamicC117;
            'corp-dynamic.c118': CorpDynamicC118;
            'corp-dynamic.c119': CorpDynamicC119;
            'corp-dynamic.c12': CorpDynamicC12;
            'corp-dynamic.c12-faq': CorpDynamicC12Faq;
            'corp-dynamic.c12-tab': CorpDynamicC12Tab;
            'corp-dynamic.c120-single-long-card': CorpDynamicC120SingleLongCard;
            'corp-dynamic.c121-cards-listing': CorpDynamicC121CardsListing;
            'corp-dynamic.c122': CorpDynamicC122;
            'corp-dynamic.c123': CorpDynamicC123;
            'corp-dynamic.c124': CorpDynamicC124;
            'corp-dynamic.c125': CorpDynamicC125;
            'corp-dynamic.c128-settlement-ratio': CorpDynamicC128SettlementRatio;
            'corp-dynamic.c13': CorpDynamicC13;
            'corp-dynamic.c14': CorpDynamicC14;
            'corp-dynamic.c15': CorpDynamicC15;
            'corp-dynamic.c17': CorpDynamicC17;
            'corp-dynamic.c18': CorpDynamicC18;
            'corp-dynamic.c19': CorpDynamicC19;
            'corp-dynamic.c20': CorpDynamicC20;
            'corp-dynamic.c21': CorpDynamicC21;
            'corp-dynamic.c22': CorpDynamicC22;
            'corp-dynamic.c23': CorpDynamicC23;
            'corp-dynamic.c24': CorpDynamicC24;
            'corp-dynamic.c25': CorpDynamicC25;
            'corp-dynamic.c26': CorpDynamicC26;
            'corp-dynamic.c27': CorpDynamicC27;
            'corp-dynamic.c28': CorpDynamicC28;
            'corp-dynamic.c29': CorpDynamicC29;
            'corp-dynamic.c3': CorpDynamicC3;
            'corp-dynamic.c30': CorpDynamicC30;
            'corp-dynamic.c31': CorpDynamicC31;
            'corp-dynamic.c32': CorpDynamicC32;
            'corp-dynamic.c33': CorpDynamicC33;
            'corp-dynamic.c34': CorpDynamicC34;
            'corp-dynamic.c35': CorpDynamicC35;
            'corp-dynamic.c36': CorpDynamicC36;
            'corp-dynamic.c37': CorpDynamicC37;
            'corp-dynamic.c38': CorpDynamicC38;
            'corp-dynamic.c39': CorpDynamicC39;
            'corp-dynamic.c4': CorpDynamicC4;
            'corp-dynamic.c40': CorpDynamicC40;
            'corp-dynamic.c41': CorpDynamicC41;
            'corp-dynamic.c42': CorpDynamicC42;
            'corp-dynamic.c43': CorpDynamicC43;
            'corp-dynamic.c44': CorpDynamicC44;
            'corp-dynamic.c45': CorpDynamicC45;
            'corp-dynamic.c46': CorpDynamicC46;
            'corp-dynamic.c47': CorpDynamicC47;
            'corp-dynamic.c48': CorpDynamicC48;
            'corp-dynamic.c49': CorpDynamicC49;
            'corp-dynamic.c5': CorpDynamicC5;
            'corp-dynamic.c50': CorpDynamicC50;
            'corp-dynamic.c51': CorpDynamicC51;
            'corp-dynamic.c53': CorpDynamicC53;
            'corp-dynamic.c54': CorpDynamicC54;
            'corp-dynamic.c55': CorpDynamicC55;
            'corp-dynamic.c56': CorpDynamicC56;
            'corp-dynamic.c57': CorpDynamicC57;
            'corp-dynamic.c58': CorpDynamicC58;
            'corp-dynamic.c59': CorpDynamicC59;
            'corp-dynamic.c6': CorpDynamicC6;
            'corp-dynamic.c60': CorpDynamicC60;
            'corp-dynamic.c61': CorpDynamicC61;
            'corp-dynamic.c62': CorpDynamicC62;
            'corp-dynamic.c64': CorpDynamicC64;
            'corp-dynamic.c65': CorpDynamicC65;
            'corp-dynamic.c66': CorpDynamicC66;
            'corp-dynamic.c67': CorpDynamicC67;
            'corp-dynamic.c68-rating': CorpDynamicC68Rating;
            'corp-dynamic.c69': CorpDynamicC69;
            'corp-dynamic.c7': CorpDynamicC7;
            'corp-dynamic.c70': CorpDynamicC70;
            'corp-dynamic.c71': CorpDynamicC71;
            'corp-dynamic.c72': CorpDynamicC72;
            'corp-dynamic.c73': CorpDynamicC73;
            'corp-dynamic.c74': CorpDynamicC74;
            'corp-dynamic.c75': CorpDynamicC75;
            'corp-dynamic.c76-disclaimers': CorpDynamicC76Disclaimers;
            'corp-dynamic.c77': CorpDynamicC77;
            'corp-dynamic.c78': CorpDynamicC78;
            'corp-dynamic.c79': CorpDynamicC79;
            'corp-dynamic.c8': CorpDynamicC8;
            'corp-dynamic.c81': CorpDynamicC81;
            'corp-dynamic.c83': CorpDynamicC83;
            'corp-dynamic.c84': CorpDynamicC84;
            'corp-dynamic.c85': CorpDynamicC85;
            'corp-dynamic.c86': CorpDynamicC86;
            'corp-dynamic.c87': CorpDynamicC87;
            'corp-dynamic.c88': CorpDynamicC88;
            'corp-dynamic.c89': CorpDynamicC89;
            'corp-dynamic.c9': CorpDynamicC9;
            'corp-dynamic.c90-cards-with-icon-and-text': CorpDynamicC90CardsWithIconAndText;
            'corp-dynamic.c91-columns-with-icons-and-cta': CorpDynamicC91ColumnsWithIconsAndCta;
            'corp-dynamic.c92': CorpDynamicC92;
            'corp-dynamic.c93-only-icon-and-text': CorpDynamicC93OnlyIconAndText;
            'corp-dynamic.c94': CorpDynamicC94;
            'corp-dynamic.c95-public-disclosures': CorpDynamicC95PublicDisclosures;
            'corp-dynamic.c96': CorpDynamicC96;
            'corp-dynamic.c97': CorpDynamicC97;
            'corp-dynamic.c98': CorpDynamicC98;
            'corp-dynamic.c99': CorpDynamicC99;
            'corp-dynamic.collapsable-standard-text': CorpDynamicCollapsableStandardText;
            'corp-dynamic.collapsable-table': CorpDynamicCollapsableTable;
            'corp-dynamic.contact-us': CorpDynamicContactUs;
            'corp-dynamic.dnd': CorpDynamicDnd;
            'corp-dynamic.form-fatcaupdate': CorpDynamicFormFatcaupdate;
            'corp-dynamic.form-grievance': CorpDynamicFormGrievance;
            'corp-dynamic.form-panupdate': CorpDynamicFormPanupdate;
            'corp-dynamic.form-payment': CorpDynamicFormPayment;
            'corp-dynamic.gift-city': CorpDynamicGiftCity;
            'corp-dynamic.join-our-team': CorpDynamicJoinOurTeam;
            'corp-dynamic.join-us': CorpDynamicJoinUs;
            'corp-dynamic.join-us-professional': CorpDynamicJoinUsProfessional;
            'corp-dynamic.lm-cards': CorpDynamicLmCards;
            'corp-dynamic.lm-component': CorpDynamicLmComponent;
            'corp-dynamic.lm-listing': CorpDynamicLmListing;
            'corp-dynamic.lm-more-topics': CorpDynamicLmMoreTopics;
            'corp-dynamic.lm-video': CorpDynamicLmVideo;
            'corp-dynamic.media-image-type': CorpDynamicMediaImageType;
            'corp-dynamic.media-type-audio': CorpDynamicMediaTypeAudio;
            'corp-dynamic.media-type-document': CorpDynamicMediaTypeDocument;
            'corp-dynamic.media-type-link': CorpDynamicMediaTypeLink;
            'corp-dynamic.media-type-video': CorpDynamicMediaTypeVideo;
            'corp-dynamic.nested-tab-document': CorpDynamicNestedTabDocument;
            'corp-dynamic.nested-tab-link': CorpDynamicNestedTabLink;
            'corp-dynamic.newsletter': CorpDynamicNewsletter;
            'corp-dynamic.product-form': CorpDynamicProductForm;
            'corp-dynamic.shared-component': CorpDynamicSharedComponent;
            'corp-dynamic.table-column-name': CorpDynamicTableColumnName;
            'corp-footer.c2': CorpFooterC2;
            'corp-header.c1': CorpHeaderC1;
            'corp-subcomponent.84-label-pack': CorpSubcomponent84LabelPack;
            'corp-subcomponent.awards': CorpSubcomponentAwards;
            'corp-subcomponent.blog-filter-label-pack': CorpSubcomponentBlogFilterLabelPack;
            'corp-subcomponent.blog-list-component': CorpSubcomponentBlogListComponent;
            'corp-subcomponent.blog-text-component': CorpSubcomponentBlogTextComponent;
            'corp-subcomponent.blog-text-image': CorpSubcomponentBlogTextImage;
            'corp-subcomponent.business-partner-label-pack': CorpSubcomponentBusinessPartnerLabelPack;
            'corp-subcomponent.c1-benefit': CorpSubcomponentC1Benefit;
            'corp-subcomponent.c1-l1': CorpSubcomponentC1L1;
            'corp-subcomponent.c1-l1-link': CorpSubcomponentC1L1Link;
            'corp-subcomponent.c1-l2': CorpSubcomponentC1L2;
            'corp-subcomponent.c1-l2-link': CorpSubcomponentC1L2Link;
            'corp-subcomponent.c1-l3': CorpSubcomponentC1L3;
            'corp-subcomponent.c1-l3-link': CorpSubcomponentC1L3Link;
            'corp-subcomponent.c1-l4': CorpSubcomponentC1L4;
            'corp-subcomponent.c1-l4-link': CorpSubcomponentC1L4Link;
            'corp-subcomponent.c1-top': CorpSubcomponentC1Top;
            'corp-subcomponent.c101-eligibility': CorpSubcomponentC101Eligibility;
            'corp-subcomponent.c102-cards': CorpSubcomponentC102Cards;
            'corp-subcomponent.c104-label-pack': CorpSubcomponentC104LabelPack;
            'corp-subcomponent.c107-video-item': CorpSubcomponentC107VideoItem;
            'corp-subcomponent.c108-cards': CorpSubcomponentC108Cards;
            'corp-subcomponent.c109-l1-tab': CorpSubcomponentC109L1Tab;
            'corp-subcomponent.c11-tab': CorpSubcomponentC11Tab;
            'corp-subcomponent.c11-video-ids': CorpSubcomponentC11VideoIds;
            'corp-subcomponent.c112-label-pack': CorpSubcomponentC112LabelPack;
            'corp-subcomponent.c113-l1-label-pack': CorpSubcomponentC113L1LabelPack;
            'corp-subcomponent.c114-l1-item': CorpSubcomponentC114L1Item;
            'corp-subcomponent.c114-l2-benefit': CorpSubcomponentC114L2Benefit;
            'corp-subcomponent.c115-icon-list': CorpSubcomponentC115IconList;
            'corp-subcomponent.c116-employee-list': CorpSubcomponentC116EmployeeList;
            'corp-subcomponent.c117-images-with-quotes': CorpSubcomponentC117ImagesWithQuotes;
            'corp-subcomponent.c118-l1-item': CorpSubcomponentC118L1Item;
            'corp-subcomponent.c12-faq-list': CorpSubcomponentC12FaqList;
            'corp-subcomponent.c12-faq-tab': CorpSubcomponentC12FaqTab;
            'corp-subcomponent.c12-horizontal-tab': CorpSubcomponentC12HorizontalTab;
            'corp-subcomponent.c12-question-list': CorpSubcomponentC12QuestionList;
            'corp-subcomponent.c12-vertical-tab': CorpSubcomponentC12VerticalTab;
            'corp-subcomponent.c121-cards': CorpSubcomponentC121Cards;
            'corp-subcomponent.c125-label-pack': CorpSubcomponentC125LabelPack;
            'corp-subcomponent.c128-year-value': CorpSubcomponentC128YearValue;
            'corp-subcomponent.c13-goal-card': CorpSubcomponentC13GoalCard;
            'corp-subcomponent.c14-card': CorpSubcomponentC14Card;
            'corp-subcomponent.c15-ad-text': CorpSubcomponentC15AdText;
            'corp-subcomponent.c15-navigation-button': CorpSubcomponentC15NavigationButton;
            'corp-subcomponent.c15-titles': CorpSubcomponentC15Titles;
            'corp-subcomponent.c17-cform': CorpSubcomponentC17Cform;
            'corp-subcomponent.c17-feature': CorpSubcomponentC17Feature;
            'corp-subcomponent.c18-accordion': CorpSubcomponentC18Accordion;
            'corp-subcomponent.c18-l1-points': CorpSubcomponentC18L1Points;
            'corp-subcomponent.c18-l2-description': CorpSubcomponentC18L2Description;
            'corp-subcomponent.c19-tab': CorpSubcomponentC19Tab;
            'corp-subcomponent.c2-column': CorpSubcomponentC2Column;
            'corp-subcomponent.c2-follow-us': CorpSubcomponentC2FollowUs;
            'corp-subcomponent.c2-info-section': CorpSubcomponentC2InfoSection;
            'corp-subcomponent.c2-menu': CorpSubcomponentC2Menu;
            'corp-subcomponent.c2-other-links': CorpSubcomponentC2OtherLinks;
            'corp-subcomponent.c2-product-menu': CorpSubcomponentC2ProductMenu;
            'corp-subcomponent.c2-quick-links': CorpSubcomponentC2QuickLinks;
            'corp-subcomponent.c2-social': CorpSubcomponentC2Social;
            'corp-subcomponent.c2-text': CorpSubcomponentC2Text;
            'corp-subcomponent.c20-bullet-points': CorpSubcomponentC20BulletPoints;
            'corp-subcomponent.c21-l1-tab': CorpSubcomponentC21L1Tab;
            'corp-subcomponent.c22-card': CorpSubcomponentC22Card;
            'corp-subcomponent.c22-l2-bullet-points': CorpSubcomponentC22L2BulletPoints;
            'corp-subcomponent.c23claim-type': CorpSubcomponentC23ClaimType;
            'corp-subcomponent.c23document-list': CorpSubcomponentC23DocumentList;
            'corp-subcomponent.c24-avoid-rejection': CorpSubcomponentC24AvoidRejection;
            'corp-subcomponent.c25-l1-card': CorpSubcomponentC25L1Card;
            'corp-subcomponent.c26-icon-list': CorpSubcomponentC26IconList;
            'corp-subcomponent.c27-l1-feature': CorpSubcomponentC27L1Feature;
            'corp-subcomponent.c27-l2-item': CorpSubcomponentC27L2Item;
            'corp-subcomponent.c27-l3-bullet-points': CorpSubcomponentC27L3BulletPoints;
            'corp-subcomponent.c28select-plan': CorpSubcomponentC28SelectPlan;
            'corp-subcomponent.c30-l1-card': CorpSubcomponentC30L1Card;
            'corp-subcomponent.c31-eligibility': CorpSubcomponentC31Eligibility;
            'corp-subcomponent.c31-eligibility-list': CorpSubcomponentC31EligibilityList;
            'corp-subcomponent.c32-l1-tab': CorpSubcomponentC32L1Tab;
            'corp-subcomponent.c33-l1-media': CorpSubcomponentC33L1Media;
            'corp-subcomponent.c34-step-to-work': CorpSubcomponentC34StepToWork;
            'corp-subcomponent.c35planlist': CorpSubcomponentC35Planlist;
            'corp-subcomponent.c37-l1-item': CorpSubcomponentC37L1Item;
            'corp-subcomponent.c38-l1-logo': CorpSubcomponentC38L1Logo;
            'corp-subcomponent.c39-l1-item': CorpSubcomponentC39L1Item;
            'corp-subcomponent.c42-l1-card': CorpSubcomponentC42L1Card;
            'corp-subcomponent.c43-l1-label-pack': CorpSubcomponentC43L1LabelPack;
            'corp-subcomponent.c44-l1-tab': CorpSubcomponentC44L1Tab;
            'corp-subcomponent.c46-l1-points': CorpSubcomponentC46L1Points;
            'corp-subcomponent.c47-description': CorpSubcomponentC47Description;
            'corp-subcomponent.c47-introduction': CorpSubcomponentC47Introduction;
            'corp-subcomponent.c48-l1-text-blocks': CorpSubcomponentC48L1TextBlocks;
            'corp-subcomponent.c49-l1-card': CorpSubcomponentC49L1Card;
            'corp-subcomponent.c50-l1-card': CorpSubcomponentC50L1Card;
            'corp-subcomponent.c51-l1-tab': CorpSubcomponentC51L1Tab;
            'corp-subcomponent.c53-l1-tab': CorpSubcomponentC53L1Tab;
            'corp-subcomponent.c55-l1-item': CorpSubcomponentC55L1Item;
            'corp-subcomponent.c56-l1-card': CorpSubcomponentC56L1Card;
            'corp-subcomponent.c56-l2-pointers': CorpSubcomponentC56L2Pointers;
            'corp-subcomponent.c57-card-with-icon': CorpSubcomponentC57CardWithIcon;
            'corp-subcomponent.c59-l1-slide': CorpSubcomponentC59L1Slide;
            'corp-subcomponent.c60-l1-tab': CorpSubcomponentC60L1Tab;
            'corp-subcomponent.c61-l1-label-pack': CorpSubcomponentC61L1LabelPack;
            'corp-subcomponent.c64-l1-item': CorpSubcomponentC64L1Item;
            'corp-subcomponent.c65-l1-points': CorpSubcomponentC65L1Points;
            'corp-subcomponent.c66-label-pack': CorpSubcomponentC66LabelPack;
            'corp-subcomponent.c6card': CorpSubcomponentC6Card;
            'corp-subcomponent.c70-l1-card': CorpSubcomponentC70L1Card;
            'corp-subcomponent.c70-l1-text': CorpSubcomponentC70L1Text;
            'corp-subcomponent.c72-l1-text': CorpSubcomponentC72L1Text;
            'corp-subcomponent.c74-l1-items': CorpSubcomponentC74L1Items;
            'corp-subcomponent.c77-l1-card': CorpSubcomponentC77L1Card;
            'corp-subcomponent.c78-feature-label': CorpSubcomponentC78FeatureLabel;
            'corp-subcomponent.c78-promoter-features': CorpSubcomponentC78PromoterFeatures;
            'corp-subcomponent.c78-promoters': CorpSubcomponentC78Promoters;
            'corp-subcomponent.c79-cards': CorpSubcomponentC79Cards;
            'corp-subcomponent.c8-mini-card': CorpSubcomponentC8MiniCard;
            'corp-subcomponent.c81-l1-articles': CorpSubcomponentC81L1Articles;
            'corp-subcomponent.c83-l1-blogs': CorpSubcomponentC83L1Blogs;
            'corp-subcomponent.c83-l1-label-pack': CorpSubcomponentC83L1LabelPack;
            'corp-subcomponent.c84-document-list': CorpSubcomponentC84DocumentList;
            'corp-subcomponent.c84-policies-disclosure': CorpSubcomponentC84PoliciesDisclosure;
            'corp-subcomponent.c85-tab': CorpSubcomponentC85Tab;
            'corp-subcomponent.c86-l1-card': CorpSubcomponentC86L1Card;
            'corp-subcomponent.c87-points': CorpSubcomponentC87Points;
            'corp-subcomponent.c87-tabs': CorpSubcomponentC87Tabs;
            'corp-subcomponent.c88-contact-us-list': CorpSubcomponentC88ContactUsList;
            'corp-subcomponent.c9-logo': CorpSubcomponentC9Logo;
            'corp-subcomponent.c9-media': CorpSubcomponentC9Media;
            'corp-subcomponent.c90-icon-text': CorpSubcomponentC90IconText;
            'corp-subcomponent.c90-l1-standard-text-column': CorpSubcomponentC90L1StandardTextColumn;
            'corp-subcomponent.c90-l1-table-column': CorpSubcomponentC90L1TableColumn;
            'corp-subcomponent.c90-l1-title': CorpSubcomponentC90L1Title;
            'corp-subcomponent.c90-l2-standard-text': CorpSubcomponentC90L2StandardText;
            'corp-subcomponent.c90-l2-table': CorpSubcomponentC90L2Table;
            'corp-subcomponent.c90-l3-table-data': CorpSubcomponentC90L3TableData;
            'corp-subcomponent.c90-l3-table-heading': CorpSubcomponentC90L3TableHeading;
            'corp-subcomponent.c92-cards': CorpSubcomponentC92Cards;
            'corp-subcomponent.c93-icon-text': CorpSubcomponentC93IconText;
            'corp-subcomponent.c94-l1-card': CorpSubcomponentC94L1Card;
            'corp-subcomponent.c95-box-title-list': CorpSubcomponentC95BoxTitleList;
            'corp-subcomponent.c95-collection': CorpSubcomponentC95Collection;
            'corp-subcomponent.c95-documents': CorpSubcomponentC95Documents;
            'corp-subcomponent.c95-governance': CorpSubcomponentC95Governance;
            'corp-subcomponent.c95-tabs': CorpSubcomponentC95Tabs;
            'corp-subcomponent.c95-uncliamed': CorpSubcomponentC95Uncliamed;
            'corp-subcomponent.c96': CorpSubcomponentC96;
            'corp-subcomponent.c96-icon-list': CorpSubcomponentC96IconList;
            'corp-subcomponent.c96-table-content': CorpSubcomponentC96TableContent;
            'corp-subcomponent.c96-tabs': CorpSubcomponentC96Tabs;
            'corp-subcomponent.c97-documents': CorpSubcomponentC97Documents;
            'corp-subcomponent.c97-faq': CorpSubcomponentC97Faq;
            'corp-subcomponent.c97-form-download': CorpSubcomponentC97FormDownload;
            'corp-subcomponent.c97-rows': CorpSubcomponentC97Rows;
            'corp-subcomponent.c97-table-content': CorpSubcomponentC97TableContent;
            'corp-subcomponent.c97-tabs': CorpSubcomponentC97Tabs;
            'corp-subcomponent.c98-l1-card': CorpSubcomponentC98L1Card;
            'corp-subcomponent.c99-media-query': CorpSubcomponentC99MediaQuery;
            'corp-subcomponent.coi-download-label-pack': CorpSubcomponentCoiDownloadLabelPack;
            'corp-subcomponent.faq': CorpSubcomponentFaq;
            'corp-subcomponent.fund-nav-labelpacks': CorpSubcomponentFundNavLabelpacks;
            'corp-subcomponent.giftcity-bullet-points': CorpSubcomponentGiftcityBulletPoints;
            'corp-subcomponent.giftcity-label-pack': CorpSubcomponentGiftcityLabelPack;
            'corp-subcomponent.grievance-other-info': CorpSubcomponentGrievanceOtherInfo;
            'corp-subcomponent.icon': CorpSubcomponentIcon;
            'corp-subcomponent.join-our-team-label-pack': CorpSubcomponentJoinOurTeamLabelPack;
            'corp-subcomponent.join-us-pro-label-pack': CorpSubcomponentJoinUsProLabelPack;
            'corp-subcomponent.join-us-prof-bullet-point': CorpSubcomponentJoinUsProfBulletPoint;
            'corp-subcomponent.join-us-prof-label-pack': CorpSubcomponentJoinUsProfLabelPack;
            'corp-subcomponent.join-us-professional': CorpSubcomponentJoinUsProfessional;
            'corp-subcomponent.join-us-professsional-pointers': CorpSubcomponentJoinUsProfesssionalPointers;
            'corp-subcomponent.joinus-bullet-points': CorpSubcomponentJoinusBulletPoints;
            'corp-subcomponent.joinus-label-pack': CorpSubcomponentJoinusLabelPack;
            'corp-subcomponent.label-pack': CorpSubcomponentLabelPack;
            'corp-subcomponent.labelpack-become-an-agent': CorpSubcomponentLabelpackBecomeAnAgent;
            'corp-subcomponent.labelpack-contactus': CorpSubcomponentLabelpackContactus;
            'corp-subcomponent.labelpack-dnd': CorpSubcomponentLabelpackDnd;
            'corp-subcomponent.labelpack-fatcaupdate': CorpSubcomponentLabelpackFatcaupdate;
            'corp-subcomponent.labelpack-grievance': CorpSubcomponentLabelpackGrievance;
            'corp-subcomponent.labelpack-panupdate': CorpSubcomponentLabelpackPanupdate;
            'corp-subcomponent.labelpack-payment': CorpSubcomponentLabelpackPayment;
            'corp-subcomponent.lm-cards': CorpSubcomponentLmCards;
            'corp-subcomponent.media-image-gallery': CorpSubcomponentMediaImageGallery;
            'corp-subcomponent.people-designation': CorpSubcomponentPeopleDesignation;
            'corp-subcomponent.plan-features': CorpSubcomponentPlanFeatures;
            'corp-subcomponent.product-form-disclaimer': CorpSubcomponentProductFormDisclaimer;
            'corp-subcomponent.product-form-label-pack': CorpSubcomponentProductFormLabelPack;
            'corp-subcomponent.product-form-pointers': CorpSubcomponentProductFormPointers;
            'corp-subcomponent.step-to-pay': CorpSubcomponentStepToPay;
            'corp-subcomponent.sticky-module-l1': CorpSubcomponentStickyModuleL1;
            'intranet-footer.footer': IntranetFooterFooter;
            'intranet-header.header': IntranetHeaderHeader;
            'shared.meta-social': SharedMetaSocial;
            'shared.opengraph': SharedOpengraph;
            'shared.seo': SharedSeo;
        }
    }
}
