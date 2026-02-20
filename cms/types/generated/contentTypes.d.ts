import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_api_tokens';
    info: {
        description: '';
        displayName: 'Api Token';
        name: 'Api Token';
        pluralName: 'api-tokens';
        singularName: 'api-token';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        accessKey: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Schema.Attribute.DefaultTo<''>;
        expiresAt: Schema.Attribute.DateTime;
        lastUsedAt: Schema.Attribute.DateTime;
        lifespan: Schema.Attribute.BigInteger;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'admin::api-token'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<
            'oneToMany',
            'admin::api-token-permission'
        >;
        publishedAt: Schema.Attribute.DateTime;
        type: Schema.Attribute.Enumeration<
            ['read-only', 'full-access', 'custom']
        > &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'read-only'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_api_token_permissions';
    info: {
        description: '';
        displayName: 'API Token Permission';
        name: 'API Token Permission';
        pluralName: 'api-token-permissions';
        singularName: 'api-token-permission';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'admin::api-token-permission'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
    collectionName: 'admin_permissions';
    info: {
        description: '';
        displayName: 'Permission';
        name: 'Permission';
        pluralName: 'permissions';
        singularName: 'permission';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        actionParameters: Schema.Attribute.JSON &
            Schema.Attribute.DefaultTo<{}>;
        conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'admin::permission'
        > &
            Schema.Attribute.Private;
        properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
        publishedAt: Schema.Attribute.DateTime;
        role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
        subject: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
    collectionName: 'admin_roles';
    info: {
        description: '';
        displayName: 'Role';
        name: 'Role';
        pluralName: 'roles';
        singularName: 'role';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        code: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<
            'oneToMany',
            'admin::permission'
        >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_transfer_tokens';
    info: {
        description: '';
        displayName: 'Transfer Token';
        name: 'Transfer Token';
        pluralName: 'transfer-tokens';
        singularName: 'transfer-token';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        accessKey: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Schema.Attribute.DefaultTo<''>;
        expiresAt: Schema.Attribute.DateTime;
        lastUsedAt: Schema.Attribute.DateTime;
        lifespan: Schema.Attribute.BigInteger;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'admin::transfer-token'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        permissions: Schema.Attribute.Relation<
            'oneToMany',
            'admin::transfer-token-permission'
        >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface AdminTransferTokenPermission
    extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_transfer_token_permissions';
    info: {
        description: '';
        displayName: 'Transfer Token Permission';
        name: 'Transfer Token Permission';
        pluralName: 'transfer-token-permissions';
        singularName: 'transfer-token-permission';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'admin::transfer-token-permission'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
    collectionName: 'admin_users';
    info: {
        description: '';
        displayName: 'User';
        name: 'User';
        pluralName: 'users';
        singularName: 'user';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        blocked: Schema.Attribute.Boolean &
            Schema.Attribute.Private &
            Schema.Attribute.DefaultTo<false>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email &
            Schema.Attribute.Required &
            Schema.Attribute.Private &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        firstname: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        isActive: Schema.Attribute.Boolean &
            Schema.Attribute.Private &
            Schema.Attribute.DefaultTo<false>;
        lastname: Schema.Attribute.String &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
            Schema.Attribute.Private;
        password: Schema.Attribute.Password &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        preferedLanguage: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
        resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
        roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
            Schema.Attribute.Private;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        username: Schema.Attribute.String;
    };
}

export interface ApiAgentAgent extends Struct.CollectionTypeSchema {
    collectionName: 'agents';
    info: {
        description: '';
        displayName: 'Agent';
        pluralName: 'agents';
        singularName: 'agent';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        clients: Schema.Attribute.Integer;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.Text & Schema.Attribute.Required;
        image: Schema.Attribute.Media<'images'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::agent.agent'
        > &
            Schema.Attribute.Private;
        location: Schema.Attribute.String;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiAssortedTableAssortedTable
    extends Struct.CollectionTypeSchema {
    collectionName: 'assorted_tables';
    info: {
        description: '';
        displayName: 'Assorted Table';
        pluralName: 'assorted-tables';
        singularName: 'assorted-table';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        header: Schema.Attribute.Component<
            'corp-subcomponent.c90-l1-title',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                },
                number
            >;
        hideHeader: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::assorted-table.assorted-table'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        table: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.collapsable-standard-text',
                'corp-dynamic.collapsable-table',
            ]
        >;
        tableName: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
    collectionName: 'authors';
    info: {
        displayName: 'Author';
        pluralName: 'authors';
        singularName: 'author';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.Text & Schema.Attribute.Required;
        image: Schema.Attribute.Media<'images'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::author.author'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        rating: Schema.Attribute.Decimal &
            Schema.Attribute.SetMinMax<
                {
                    max: 5;
                    min: 0;
                },
                number
            >;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiAwardAward extends Struct.CollectionTypeSchema {
    collectionName: 'awards';
    info: {
        description: '';
        displayName: 'Award';
        pluralName: 'awards';
        singularName: 'award';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::award.award'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiBecomeAnAgentBecomeAnAgent
    extends Struct.CollectionTypeSchema {
    collectionName: 'become_an_agents';
    info: {
        description: '';
        displayName: '[Form] Become an agent';
        pluralName: 'become-an-agents';
        singularName: 'become-an-agent';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        campaign: Schema.Attribute.String;
        content: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::become-an-agent.become-an-agent'
        > &
            Schema.Attribute.Private;
        medium: Schema.Attribute.String;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        source: Schema.Attribute.String;
        term: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiBlogCategoryBlogCategory
    extends Struct.CollectionTypeSchema {
    collectionName: 'blog_categories';
    info: {
        description: '';
        displayName: 'Blog Category';
        pluralName: 'blog-categories';
        singularName: 'blog-category';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        categoryPage: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::blog-category.blog-category'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
    collectionName: 'blogs';
    info: {
        description: '';
        displayName: 'Blog';
        pluralName: 'blogs';
        singularName: 'blog';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        additionalCTA: Schema.Attribute.Component<'common.cta', false>;
        blog_categories: Schema.Attribute.Relation<
            'oneToMany',
            'api::blog-category.blog-category'
        >;
        blog_content: Schema.Attribute.DynamicZone<
            [
                'corp-subcomponent.blog-text-image',
                'corp-subcomponent.blog-text-component',
                'corp-subcomponent.blog-list-component',
            ]
        >;
        category_featured_articles: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        cmp_dynamic: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.blog-component',
                'corp-dynamic.c3',
                'corp-dynamic.c4',
                'corp-dynamic.c5',
                'corp-dynamic.c6',
                'corp-dynamic.c7',
                'corp-dynamic.c8',
                'corp-dynamic.c9',
                'corp-dynamic.c11',
                'corp-dynamic.c12',
                'corp-dynamic.c12-faq',
                'corp-dynamic.c12-tab',
                'corp-dynamic.c13',
                'corp-dynamic.c14',
                'corp-dynamic.c15',
                'corp-dynamic.c17',
                'corp-dynamic.c19',
                'corp-dynamic.c18',
                'corp-dynamic.c20',
                'corp-dynamic.c21',
                'corp-dynamic.c22',
                'corp-dynamic.c23',
                'corp-dynamic.c24',
                'corp-dynamic.c25',
                'corp-dynamic.c26',
                'corp-dynamic.c27',
                'corp-dynamic.c28',
                'corp-dynamic.c29',
                'corp-dynamic.c30',
                'corp-dynamic.c31',
                'corp-dynamic.c32',
                'corp-dynamic.c33',
                'corp-dynamic.c34',
                'corp-dynamic.c35',
                'corp-dynamic.c36',
                'corp-dynamic.c37',
                'corp-dynamic.c38',
                'corp-dynamic.c39',
                'corp-dynamic.c40',
                'corp-dynamic.c41',
                'corp-dynamic.c42',
                'corp-dynamic.c43',
                'corp-dynamic.c44',
                'corp-dynamic.c45',
                'corp-dynamic.c46',
                'corp-dynamic.c47',
                'corp-dynamic.c48',
                'corp-dynamic.c49',
                'corp-dynamic.c50',
                'corp-dynamic.c51',
                'corp-dynamic.c53',
                'corp-dynamic.c54',
                'corp-dynamic.c55',
                'corp-dynamic.c56',
                'corp-dynamic.c57',
                'corp-dynamic.c58',
                'corp-dynamic.c59',
                'corp-dynamic.c60',
                'corp-dynamic.c62',
                'corp-dynamic.c64',
                'corp-dynamic.c65',
                'corp-dynamic.c66',
                'corp-dynamic.c67',
                'corp-dynamic.c69',
                'corp-dynamic.c70',
                'corp-dynamic.c71',
                'corp-dynamic.c72',
                'corp-dynamic.c73',
                'corp-dynamic.c74',
                'corp-dynamic.c75',
                'corp-dynamic.c76-disclaimers',
                'corp-dynamic.c77',
                'corp-dynamic.c78',
                'corp-dynamic.c79',
                'corp-dynamic.c81',
                'corp-dynamic.c83',
                'corp-dynamic.c84',
                'corp-dynamic.c85',
                'corp-dynamic.c86',
                'corp-dynamic.c87',
                'corp-dynamic.c88',
                'corp-dynamic.c89',
                'corp-dynamic.c90-cards-with-icon-and-text',
                'corp-dynamic.c91-columns-with-icons-and-cta',
                'corp-dynamic.c92',
                'corp-dynamic.c93-only-icon-and-text',
                'corp-dynamic.c94',
                'corp-dynamic.c95-public-disclosures',
                'corp-dynamic.c96',
                'corp-dynamic.c97',
                'corp-dynamic.c98',
                'corp-dynamic.c99',
                'corp-dynamic.c100',
                'corp-dynamic.c101',
                'corp-dynamic.contact-us',
                'corp-dynamic.dnd',
                'corp-dynamic.join-us',
                'corp-dynamic.business-partner',
                'corp-dynamic.product-form',
                'corp-dynamic.newsletter',
                'corp-dynamic.join-our-team',
                'corp-dynamic.form-panupdate',
                'corp-dynamic.form-fatcaupdate',
                'corp-dynamic.form-payment',
                'corp-dynamic.blog-filter',
            ]
        >;
        cmp_meta: Schema.Attribute.DynamicZone<['shared.seo']>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        image: Schema.Attribute.Component<'common.media-img', false>;
        keywords: Schema.Attribute.Text;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::blog.blog'
        > &
            Schema.Attribute.Private;
        path: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publish_date: Schema.Attribute.Date;
        publishedAt: Schema.Attribute.DateTime;
        read_time: Schema.Attribute.Integer;
        short_desc: Schema.Attribute.Text;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        trending: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiBranchBranch extends Struct.CollectionTypeSchema {
    collectionName: 'branches';
    info: {
        description: '';
        displayName: 'Branch';
        pluralName: 'branches';
        singularName: 'branch';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        address: Schema.Attribute.Text & Schema.Attribute.Required;
        amenities: Schema.Attribute.Component<
            'corp-dynamic.branch-amenity',
            true
        >;
        amenitiesBgImage: Schema.Attribute.Component<'common.media-img', false>;
        amenitiesTitle: Schema.Attribute.String;
        banner: Schema.Attribute.Component<'corp-dynamic.branch-banner', false>;
        coordinates: Schema.Attribute.Component<
            'corp-dynamic.branch-coordinates',
            false
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        district: Schema.Attribute.Relation<
            'oneToOne',
            'api::district.district'
        >;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        locality: Schema.Attribute.String & Schema.Attribute.Required;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::branch.branch'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        slug: Schema.Attribute.String & Schema.Attribute.Unique;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiBusinessPartnerBusinessPartner
    extends Struct.CollectionTypeSchema {
    collectionName: 'business_partners';
    info: {
        displayName: '[Form] Business partner';
        pluralName: 'business-partners';
        singularName: 'business-partner';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        city: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        full_name: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::business-partner.business-partner'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiCorpCommonCorpCommon extends Struct.SingleTypeSchema {
    collectionName: 'corp_commons';
    info: {
        description: '';
        displayName: 'Corp Site Common Contents';
        pluralName: 'corp-commons';
        singularName: 'corp-common';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        cmp_footer: Schema.Attribute.DynamicZone<
            ['corp-footer.c2', 'intranet-footer.footer']
        >;
        cmp_header: Schema.Attribute.DynamicZone<
            ['corp-header.c1', 'intranet-header.header']
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::corp-common.corp-common'
        > &
            Schema.Attribute.Private;
        most_searched_keywords: Schema.Attribute.Text;
        page_404: Schema.Attribute.String;
        page_global_search: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiCorpPageCorpPage extends Struct.CollectionTypeSchema {
    collectionName: 'corp_pages';
    info: {
        description: '';
        displayName: '[Pages] Corp Site';
        pluralName: 'corp-pages';
        singularName: 'corp-page';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        breadcrumbTheme: Schema.Attribute.Enumeration<['light', 'dark']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'dark'>;
        cmp_dynamic: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.shared-component',
                'corp-dynamic.c3',
                'corp-dynamic.c4',
                'corp-dynamic.c7',
                'corp-dynamic.c12',
                'corp-dynamic.c8',
                'corp-dynamic.c6',
                'corp-dynamic.c13',
                'corp-dynamic.c9',
                'corp-dynamic.c14',
                'corp-dynamic.c15',
                'corp-dynamic.c5',
                'corp-dynamic.c11',
                'corp-dynamic.c17',
                'corp-dynamic.c19',
                'corp-dynamic.c18',
                'corp-dynamic.c21',
                'corp-dynamic.c22',
                'corp-dynamic.c25',
                'corp-dynamic.c26',
                'corp-dynamic.c27',
                'corp-dynamic.c23',
                'corp-dynamic.c24',
                'corp-dynamic.c20',
                'corp-dynamic.c30',
                'corp-dynamic.c28',
                'corp-dynamic.c32',
                'corp-dynamic.c31',
                'corp-dynamic.c33',
                'corp-dynamic.c34',
                'corp-dynamic.c36',
                'corp-dynamic.c37',
                'corp-dynamic.c35',
                'corp-dynamic.c38',
                'corp-dynamic.c39',
                'corp-dynamic.c40',
                'corp-dynamic.c42',
                'corp-dynamic.c29',
                'corp-dynamic.c44',
                'corp-dynamic.c45',
                'corp-dynamic.c47',
                'corp-dynamic.c46',
                'corp-dynamic.c48',
                'corp-dynamic.c49',
                'corp-dynamic.c50',
                'corp-dynamic.c51',
                'corp-dynamic.c41',
                'corp-dynamic.c53',
                'corp-dynamic.c54',
                'corp-dynamic.c55',
                'corp-dynamic.c56',
                'corp-dynamic.c57',
                'corp-dynamic.c58',
                'corp-dynamic.c64',
                'corp-dynamic.c69',
                'corp-dynamic.c70',
                'corp-dynamic.c71',
                'corp-dynamic.c59',
                'corp-dynamic.c60',
                'corp-dynamic.c65',
                'corp-dynamic.c72',
                'corp-dynamic.c73',
                'corp-dynamic.c74',
                'corp-dynamic.c75',
                'corp-dynamic.contact-us',
                'corp-dynamic.dnd',
                'corp-dynamic.join-us',
                'corp-dynamic.business-partner',
                'corp-dynamic.c76-disclaimers',
                'corp-dynamic.c62',
                'corp-dynamic.c78',
                'corp-dynamic.c79',
                'corp-dynamic.c12-faq',
                'corp-dynamic.c12-tab',
                'corp-dynamic.c85',
                'corp-dynamic.c87',
                'corp-dynamic.product-form',
                'corp-dynamic.c86',
                'corp-dynamic.blog-filter',
                'corp-dynamic.c77',
                'corp-dynamic.branch-detail',
                'corp-dynamic.c43',
                'corp-dynamic.c88',
                'corp-dynamic.c66',
                'corp-dynamic.newsletter',
                'corp-dynamic.c81',
                'corp-dynamic.c91-columns-with-icons-and-cta',
                'corp-dynamic.c90-cards-with-icon-and-text',
                'corp-dynamic.c67',
                'corp-dynamic.c92',
                'corp-dynamic.c89',
                'corp-dynamic.c93-only-icon-and-text',
                'corp-dynamic.c94',
                'corp-dynamic.c84',
                'corp-dynamic.form-panupdate',
                'corp-dynamic.c96',
                'corp-dynamic.form-fatcaupdate',
                'corp-dynamic.join-our-team',
                'corp-dynamic.c95-public-disclosures',
                'corp-dynamic.form-payment',
                'corp-dynamic.c97',
                'corp-dynamic.c99',
                'corp-dynamic.c98',
                'corp-dynamic.c101',
                'corp-dynamic.c100',
                'corp-dynamic.c68-rating',
                'corp-dynamic.c102',
                'corp-dynamic.c104',
                'corp-dynamic.c106',
                'corp-dynamic.c107',
                'corp-dynamic.c108',
                'corp-dynamic.c109',
                'corp-dynamic.c111',
                'corp-dynamic.c105-fund-nav',
                'corp-dynamic.c112',
                'corp-dynamic.form-grievance',
                'corp-dynamic.c113',
                'corp-dynamic.lm-listing',
                'corp-dynamic.c114',
                'corp-dynamic.c116',
                'corp-dynamic.c117',
                'corp-dynamic.c115',
                'corp-dynamic.join-us-professional',
                'corp-dynamic.c118',
                'corp-dynamic.c119',
                'corp-dynamic.c120-single-long-card',
                'corp-dynamic.gift-city',
                'corp-dynamic.c121-cards-listing',
                'corp-dynamic.c61',
                'corp-dynamic.c123',
                'corp-dynamic.c122',
                'corp-dynamic.c125',
                'corp-dynamic.c124',
                'corp-dynamic.c128-settlement-ratio',
            ]
        >;
        cmp_meta: Schema.Attribute.DynamicZone<['shared.seo']> &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        keywords: Schema.Attribute.Text;
        linkedProduct: Schema.Attribute.Relation<'oneToOne', 'api::plan.plan'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::corp-page.corp-page'
        > &
            Schema.Attribute.Private;
        parent: Schema.Attribute.Relation<
            'oneToOne',
            'api::corp-page.corp-page'
        >;
        path: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        shortDescription: Schema.Attribute.Text;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
    collectionName: 'countries';
    info: {
        description: '';
        displayName: 'Country';
        pluralName: 'countries';
        singularName: 'country';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        country_code: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        dialing_code: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::country.country'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiDistrictDistrict extends Struct.CollectionTypeSchema {
    collectionName: 'districts';
    info: {
        description: '';
        displayName: 'District';
        pluralName: 'districts';
        singularName: 'district';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::district.district'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        state: Schema.Attribute.Relation<'manyToOne', 'api::state.state'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiDoNotDisturbDoNotDisturb
    extends Struct.CollectionTypeSchema {
    collectionName: 'do_not_disturbs';
    info: {
        description: '';
        displayName: '[Form] Do not disturb';
        pluralName: 'do-not-disturbs';
        singularName: 'do-not-disturb';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        city: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        first_name: Schema.Attribute.String & Schema.Attribute.Required;
        landline_number: Schema.Attribute.String;
        last_name: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::do-not-disturb.do-not-disturb'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        pincode: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        state: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiFormContactusFormContactus
    extends Struct.CollectionTypeSchema {
    collectionName: 'form_contactuses';
    info: {
        description: '';
        displayName: '[Form] Contact us';
        pluralName: 'form-contactuses';
        singularName: 'form-contactus';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::form-contactus.form-contactus'
        > &
            Schema.Attribute.Private;
        message: Schema.Attribute.Text;
        mobile: Schema.Attribute.String;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        subject: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiFundNavUploadFundNavUpload
    extends Struct.CollectionTypeSchema {
    collectionName: 'fund_nav_uploads';
    info: {
        description: '';
        displayName: 'Fund Nav Upload';
        pluralName: 'fund-nav-uploads';
        singularName: 'fund-nav-upload';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        date: Schema.Attribute.Date;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::fund-nav-upload.fund-nav-upload'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        upload: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    };
}

export interface ApiFundNavFundNav extends Struct.CollectionTypeSchema {
    collectionName: 'fund_navs';
    info: {
        displayName: 'Fund Nav';
        pluralName: 'fund-navs';
        singularName: 'fund-nav';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        date: Schema.Attribute.Date;
        fund: Schema.Attribute.Relation<'oneToOne', 'api::fund.fund'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::fund-nav.fund-nav'
        > &
            Schema.Attribute.Private;
        nav: Schema.Attribute.Decimal;
        publishedAt: Schema.Attribute.DateTime;
        title: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiFundFund extends Struct.CollectionTypeSchema {
    collectionName: 'funds';
    info: {
        description: '';
        displayName: 'Fund';
        pluralName: 'funds';
        singularName: 'fund';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        code: Schema.Attribute.String;
        color: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        display_name: Schema.Attribute.String;
        fund_db: Schema.Attribute.String;
        fund_sud: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::fund.fund'
        > &
            Schema.Attribute.Private;
        nav_products: Schema.Attribute.Relation<
            'oneToMany',
            'api::nav-product.nav-product'
        >;
        pdf: Schema.Attribute.Media<'files'>;
        publishedAt: Schema.Attribute.DateTime;
        SFIN: Schema.Attribute.String;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<['General', 'NRI']>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiGiftCityGiftCity extends Struct.CollectionTypeSchema {
    collectionName: 'gift_cities';
    info: {
        displayName: '[Form] Gift city';
        pluralName: 'gift-cities';
        singularName: 'gift-city';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        country: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        first_name: Schema.Attribute.String & Schema.Attribute.Required;
        last_name: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::gift-city.gift-city'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiGlossaryGlossary extends Struct.CollectionTypeSchema {
    collectionName: 'glossaries';
    info: {
        displayName: 'Glossary';
        pluralName: 'glossaries';
        singularName: 'glossary';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        categories: Schema.Attribute.Relation<
            'oneToMany',
            'api::plan-sub-category.plan-sub-category'
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.Text;
        keyword: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::glossary.glossary'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiHaveAnIdeaHaveAnIdea extends Struct.CollectionTypeSchema {
    collectionName: 'have_an_ideas';
    info: {
        displayName: '[Form] Have an idea';
        pluralName: 'have-an-ideas';
        singularName: 'have-an-idea';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        department: Schema.Attribute.String;
        employee_id: Schema.Attribute.String;
        idea: Schema.Attribute.Text;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::have-an-idea.have-an-idea'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        subject: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiImageGalleryTagImageGalleryTag
    extends Struct.CollectionTypeSchema {
    collectionName: 'image_gallery_tags';
    info: {
        description: '';
        displayName: 'Image Gallery Tags';
        pluralName: 'image-gallery-tags';
        singularName: 'image-gallery-tag';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::image-gallery-tag.image-gallery-tag'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiImageGalleryImageGallery
    extends Struct.CollectionTypeSchema {
    collectionName: 'image_galleries';
    info: {
        description: '';
        displayName: 'Image Gallery';
        pluralName: 'image-galleries';
        singularName: 'image-gallery';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        imageGallery: Schema.Attribute.Component<
            'corp-dynamic.media-image-type',
            false
        >;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::image-gallery.image-gallery'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        tag: Schema.Attribute.Relation<
            'oneToOne',
            'api::image-gallery-tag.image-gallery-tag'
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiInvestorsCategoryInvestorsCategory
    extends Struct.CollectionTypeSchema {
    collectionName: 'investors_categories';
    info: {
        description: '';
        displayName: 'Investors Category';
        pluralName: 'investors-categories';
        singularName: 'investors-category';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        display_format: Schema.Attribute.Enumeration<['Table', 'Icon']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'Table'>;
        investor_category: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::investors-category.investors-category'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        show_filter_quarterly: Schema.Attribute.Boolean &
            Schema.Attribute.DefaultTo<false>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiInvestorsDocumentInvestorsDocument
    extends Struct.CollectionTypeSchema {
    collectionName: 'investors_documents';
    info: {
        description: '';
        displayName: 'Investors Documents';
        pluralName: 'investors-documents';
        singularName: 'investors-document';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        document: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
        document_date: Schema.Attribute.Date;
        document_name: Schema.Attribute.String;
        investors_category: Schema.Attribute.Relation<
            'oneToOne',
            'api::investors-category.investors-category'
        >;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::investors-document.investors-document'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiInvestorsFactsheetInvestorsFactsheet
    extends Struct.CollectionTypeSchema {
    collectionName: 'investors_factsheets';
    info: {
        displayName: 'Investors Factsheet';
        pluralName: 'investors-factsheets';
        singularName: 'investors-factsheet';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        dacument_date: Schema.Attribute.Date;
        document: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
        document_name: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::investors-factsheet.investors-factsheet'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiJoinOurTeamJoinOurTeam extends Struct.CollectionTypeSchema {
    collectionName: 'join_our_teams';
    info: {
        description: '';
        displayName: '[Form] Join our team';
        pluralName: 'join-our-teams';
        singularName: 'join-our-team';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        department: Schema.Attribute.String & Schema.Attribute.Required;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        fullName: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::join-our-team.join-our-team'
        > &
            Schema.Attribute.Private;
        message: Schema.Attribute.Text;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        resume: Schema.Attribute.Media<'files'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiJoinUsProfessionalJoinUsProfessional
    extends Struct.CollectionTypeSchema {
    collectionName: 'join_us_professionals';
    info: {
        description: '';
        displayName: '[Form] Join Us - Professional';
        pluralName: 'join-us-professionals';
        singularName: 'join-us-professional';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        first_name: Schema.Attribute.String;
        formType: Schema.Attribute.Enumeration<
            ['Professional', 'Advisor', 'Intern']
        >;
        last_name: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::join-us-professional.join-us-professional'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        resume: Schema.Attribute.Media<'files'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiJoinUsJoinUs extends Struct.CollectionTypeSchema {
    collectionName: 'join_uses';
    info: {
        displayName: '[Form] Join us';
        pluralName: 'join-uses';
        singularName: 'join-us';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        city: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        first_name: Schema.Attribute.String & Schema.Attribute.Required;
        last_name: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::join-us.join-us'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiLearningModuleTagLearningModuleTag
    extends Struct.CollectionTypeSchema {
    collectionName: 'learning_module_tags';
    info: {
        description: '';
        displayName: '[LM] Modules';
        pluralName: 'learning-module-tags';
        singularName: 'learning-module-tag';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::learning-module-tag.learning-module-tag'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        number: Schema.Attribute.Integer & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiLearningModuleLearningModule
    extends Struct.CollectionTypeSchema {
    collectionName: 'learning_modules';
    info: {
        description: '';
        displayName: '[LM] Topics';
        pluralName: 'learning-modules';
        singularName: 'learning-module';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        bannerImage: Schema.Attribute.Component<'common.media-img', false>;
        cmp_dynamic: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.lm-component',
                'corp-dynamic.c3',
                'corp-dynamic.c4',
                'corp-dynamic.c5',
                'corp-dynamic.c6',
                'corp-dynamic.c7',
                'corp-dynamic.c8',
                'corp-dynamic.c9',
                'corp-dynamic.c11',
                'corp-dynamic.c12',
                'corp-dynamic.c12-faq',
                'corp-dynamic.c12-tab',
                'corp-dynamic.c13',
                'corp-dynamic.c14',
                'corp-dynamic.c15',
                'corp-dynamic.c19',
                'corp-dynamic.c18',
                'corp-dynamic.c20',
                'corp-dynamic.c21',
                'corp-dynamic.c22',
                'corp-dynamic.c23',
                'corp-dynamic.c24',
                'corp-dynamic.c25',
                'corp-dynamic.c26',
                'corp-dynamic.c27',
                'corp-dynamic.c28',
                'corp-dynamic.c29',
                'corp-dynamic.c30',
                'corp-dynamic.c31',
                'corp-dynamic.c32',
                'corp-dynamic.c33',
                'corp-dynamic.c34',
                'corp-dynamic.c35',
                'corp-dynamic.c36',
                'corp-dynamic.c37',
                'corp-dynamic.c38',
                'corp-dynamic.c39',
                'corp-dynamic.c40',
                'corp-dynamic.c41',
                'corp-dynamic.c42',
                'corp-dynamic.c43',
                'corp-dynamic.c44',
                'corp-dynamic.c45',
                'corp-dynamic.c46',
                'corp-dynamic.c47',
                'corp-dynamic.c48',
                'corp-dynamic.c49',
                'corp-dynamic.c50',
                'corp-dynamic.c51',
                'corp-dynamic.c53',
                'corp-dynamic.c54',
                'corp-dynamic.c55',
                'corp-dynamic.c56',
                'corp-dynamic.c57',
                'corp-dynamic.c58',
                'corp-dynamic.c59',
                'corp-dynamic.c60',
                'corp-dynamic.c62',
                'corp-dynamic.c64',
                'corp-dynamic.c65',
                'corp-dynamic.c66',
                'corp-dynamic.c67',
                'corp-dynamic.c69',
                'corp-dynamic.c70',
                'corp-dynamic.c71',
                'corp-dynamic.c72',
                'corp-dynamic.c73',
                'corp-dynamic.c74',
                'corp-dynamic.c75',
                'corp-dynamic.c76-disclaimers',
                'corp-dynamic.c77',
                'corp-dynamic.c78',
                'corp-dynamic.c79',
                'corp-dynamic.c81',
                'corp-dynamic.c83',
                'corp-dynamic.c84',
                'corp-dynamic.c85',
                'corp-dynamic.c86',
                'corp-dynamic.c87',
                'corp-dynamic.c88',
                'corp-dynamic.c89',
                'corp-dynamic.c90-cards-with-icon-and-text',
                'corp-dynamic.c91-columns-with-icons-and-cta',
                'corp-dynamic.c92',
                'corp-dynamic.c93-only-icon-and-text',
                'corp-dynamic.c94',
                'corp-dynamic.c95-public-disclosures',
                'corp-dynamic.c96',
                'corp-dynamic.c97',
                'corp-dynamic.c98',
                'corp-dynamic.c99',
                'corp-dynamic.c100',
                'corp-dynamic.c101',
                'corp-dynamic.contact-us',
                'corp-dynamic.dnd',
                'corp-dynamic.c17',
                'corp-dynamic.join-us',
                'corp-dynamic.business-partner',
                'corp-dynamic.product-form',
                'corp-dynamic.newsletter',
                'corp-dynamic.join-our-team',
                'corp-dynamic.form-panupdate',
                'corp-dynamic.form-fatcaupdate',
                'corp-dynamic.form-payment',
                'corp-dynamic.lm-more-topics',
            ]
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        detailComponent: Schema.Attribute.DynamicZone<
            ['corp-dynamic.lm-cards', 'corp-dynamic.lm-video']
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        keywords: Schema.Attribute.Text;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::learning-module.learning-module'
        > &
            Schema.Attribute.Private;
        module: Schema.Attribute.Relation<
            'oneToOne',
            'api::learning-module-tag.learning-module-tag'
        >;
        number: Schema.Attribute.Integer & Schema.Attribute.Required;
        parent: Schema.Attribute.Relation<
            'oneToOne',
            'api::corp-page.corp-page'
        >;
        path: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        shortDescription: Schema.Attribute.Text;
        thumbnail: Schema.Attribute.Component<'common.media-img', false>;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        type: Schema.Attribute.Enumeration<['modules', 'video', 'finz']> &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'modules'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiMediaTagMediaTag extends Struct.CollectionTypeSchema {
    collectionName: 'media_tags';
    info: {
        displayName: 'Media Tags';
        pluralName: 'media-tags';
        singularName: 'media-tag';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::media-tag.media-tag'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiMediaMedia extends Struct.CollectionTypeSchema {
    collectionName: 'medias';
    info: {
        description: '';
        displayName: 'Media';
        pluralName: 'medias';
        singularName: 'media';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::media.media'
        > &
            Schema.Attribute.Private;
        media: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.media-type-video',
                'corp-dynamic.media-type-document',
                'corp-dynamic.media-type-audio',
                'corp-dynamic.media-image-type',
                'corp-dynamic.media-type-link',
            ]
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        publishedAt: Schema.Attribute.DateTime;
        tag: Schema.Attribute.Relation<'oneToOne', 'api::media-tag.media-tag'>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiNavProductNavProduct extends Struct.CollectionTypeSchema {
    collectionName: 'nav_products';
    info: {
        description: '';
        displayName: 'Nav Product';
        pluralName: 'nav-products';
        singularName: 'nav-product';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::nav-product.nav-product'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        title: Schema.Attribute.String;
        type: Schema.Attribute.Enumeration<['General', 'NRI']>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiNestedTopicNestedTopic extends Struct.CollectionTypeSchema {
    collectionName: 'nested_topics';
    info: {
        description: '';
        displayName: 'Nested topics';
        pluralName: 'nested-topics';
        singularName: 'nested-topic';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        action: Schema.Attribute.DynamicZone<
            ['corp-dynamic.nested-tab-document', 'corp-dynamic.nested-tab-link']
        > &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        children: Schema.Attribute.Relation<
            'oneToMany',
            'api::nested-topic.nested-topic'
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::nested-topic.nested-topic'
        > &
            Schema.Attribute.Private;
        parent: Schema.Attribute.Relation<
            'manyToOne',
            'api::nested-topic.nested-topic'
        >;
        publishedAt: Schema.Attribute.DateTime;
        text: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiNewsletterNewsletter extends Struct.CollectionTypeSchema {
    collectionName: 'newsletters';
    info: {
        description: '';
        displayName: '[Form] Newsletter';
        pluralName: 'newsletters';
        singularName: 'newsletter';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::newsletter.newsletter'
        > &
            Schema.Attribute.Private;
        page: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPeopleDesignationPeopleDesignation
    extends Struct.CollectionTypeSchema {
    collectionName: 'people_designations';
    info: {
        displayName: 'People Designation';
        pluralName: 'people-designations';
        singularName: 'people-designation';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::people-designation.people-designation'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        text: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPeoplePeople extends Struct.CollectionTypeSchema {
    collectionName: 'peoples';
    info: {
        description: '';
        displayName: 'People';
        pluralName: 'peoples';
        singularName: 'people';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        awards: Schema.Attribute.Component<'corp-subcomponent.awards', true>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        cta: Schema.Attribute.Component<'common.cta', false>;
        description: Schema.Attribute.RichText;
        designation: Schema.Attribute.Component<
            'corp-subcomponent.people-designation',
            true
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 3;
                    min: 1;
                },
                number
            >;
        experience: Schema.Attribute.String;
        image: Schema.Attribute.Component<'common.media-img', false>;
        linkedIn: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::people.people'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        qualifications: Schema.Attribute.String;
        quote: Schema.Attribute.Text;
        role: Schema.Attribute.JSON &
            Schema.Attribute.CustomField<
                'plugin::multi-select.multi-select',
                [
                    'Management:management',
                    'Board of directors:directors',
                    'CSR Committee:committee',
                ]
            >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPlanCategoryPlanCategory
    extends Struct.CollectionTypeSchema {
    collectionName: 'plan_categories';
    info: {
        description: '';
        displayName: 'Plan Category';
        pluralName: 'plan-categories';
        singularName: 'plan-category';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::plan-category.plan-category'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPlanSubCategoryPlanSubCategory
    extends Struct.CollectionTypeSchema {
    collectionName: 'plan_sub_categories';
    info: {
        description: '';
        displayName: 'Plan Sub Category';
        pluralName: 'plan-sub-categories';
        singularName: 'plan-sub-category';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::plan-sub-category.plan-sub-category'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        parent: Schema.Attribute.Relation<
            'oneToOne',
            'api::plan-category.plan-category'
        >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPlanPlan extends Struct.CollectionTypeSchema {
    collectionName: 'plans';
    info: {
        description: '';
        displayName: 'Product';
        pluralName: 'plans';
        singularName: 'plan';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        category: Schema.Attribute.Relation<
            'oneToOne',
            'api::plan-sub-category.plan-sub-category'
        >;
        code: Schema.Attribute.String;
        codeDescription: Schema.Attribute.Text;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.Text;
        dropdownText: Schema.Attribute.String;
        features: Schema.Attribute.Component<
            'corp-subcomponent.plan-features',
            true
        >;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::plan.plan'
        > &
            Schema.Attribute.Private;
        max: Schema.Attribute.Decimal;
        min: Schema.Attribute.Decimal;
        premiumLink: Schema.Attribute.String;
        productId: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        soldOffline: Schema.Attribute.Boolean &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<false>;
        thumbnail: Schema.Attribute.Component<'common.media-img', false> &
            Schema.Attribute.Required;
        title: Schema.Attribute.String & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        withdrawn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        withdrawnProductDate: Schema.Attribute.Date;
        withdrawnProductLink: Schema.Attribute.String;
    };
}

export interface ApiProductFormProductForm extends Struct.CollectionTypeSchema {
    collectionName: 'product_forms';
    info: {
        description: '';
        displayName: '[Form] Product';
        pluralName: 'product-forms';
        singularName: 'product-form';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        dob: Schema.Attribute.String;
        email: Schema.Attribute.String & Schema.Attribute.Required;
        first_name: Schema.Attribute.String & Schema.Attribute.Required;
        gender: Schema.Attribute.String;
        last_name: Schema.Attribute.String & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::product-form.product-form'
        > &
            Schema.Attribute.Private;
        mobile: Schema.Attribute.String & Schema.Attribute.Required;
        product_id: Schema.Attribute.String;
        product_name: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        source: Schema.Attribute.Text;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiPublicDisclosurePublicDisclosure
    extends Struct.CollectionTypeSchema {
    collectionName: 'public_disclosures';
    info: {
        description: '';
        displayName: 'Public Disclosure';
        pluralName: 'public-disclosures';
        singularName: 'public-disclosure';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        financial_year: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::public-disclosure.public-disclosure'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        q1: Schema.Attribute.Media<'files'>;
        q2: Schema.Attribute.Media<'files'>;
        q3: Schema.Attribute.Media<'files'>;
        q4: Schema.Attribute.Media<'files'>;
        type: Schema.Attribute.Enumeration<['Public', 'Voting']>;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        year: Schema.Attribute.String;
    };
}

export interface ApiSharedComponentSharedComponent
    extends Struct.CollectionTypeSchema {
    collectionName: 'shared_components';
    info: {
        description: '';
        displayName: 'Shared Component';
        pluralName: 'shared-components';
        singularName: 'shared-component';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        components: Schema.Attribute.DynamicZone<
            [
                'corp-dynamic.table-column-name',
                'corp-dynamic.shared-component',
                'corp-dynamic.product-form',
                'corp-dynamic.newsletter',
                'corp-dynamic.media-type-video',
                'corp-dynamic.media-type-link',
                'corp-dynamic.media-type-document',
                'corp-dynamic.media-type-audio',
                'corp-dynamic.media-image-type',
                'corp-dynamic.join-us',
                'corp-dynamic.join-our-team',
                'corp-dynamic.form-payment',
                'corp-dynamic.form-panupdate',
                'corp-dynamic.form-grievance',
                'corp-dynamic.form-fatcaupdate',
                'corp-dynamic.dnd',
                'corp-dynamic.contact-us',
                'corp-dynamic.collapsable-table',
                'corp-dynamic.collapsable-standard-text',
                'corp-dynamic.c99',
                'corp-dynamic.c98',
                'corp-dynamic.c97',
                'corp-dynamic.c96',
                'corp-dynamic.c95-public-disclosures',
                'corp-dynamic.c94',
                'corp-dynamic.c93-only-icon-and-text',
                'corp-dynamic.c92',
                'corp-dynamic.c91-columns-with-icons-and-cta',
                'corp-dynamic.c90-cards-with-icon-and-text',
                'corp-dynamic.c9',
                'corp-dynamic.c89',
                'corp-dynamic.c88',
                'corp-dynamic.c87',
                'corp-dynamic.c86',
                'corp-dynamic.c85',
                'corp-dynamic.c84',
                'corp-dynamic.c83',
                'corp-dynamic.c81',
                'corp-dynamic.c8',
                'corp-dynamic.c79',
                'corp-dynamic.c78',
                'corp-dynamic.c77',
                'corp-dynamic.c76-disclaimers',
                'corp-dynamic.c75',
                'corp-dynamic.c74',
                'corp-dynamic.c73',
                'corp-dynamic.c72',
                'corp-dynamic.c71',
                'corp-dynamic.c70',
                'corp-dynamic.c7',
                'corp-dynamic.c69',
                'corp-dynamic.c68-rating',
                'corp-dynamic.c67',
                'corp-dynamic.c66',
                'corp-dynamic.c65',
                'corp-dynamic.c64',
                'corp-dynamic.c62',
                'corp-dynamic.c60',
                'corp-dynamic.c6',
                'corp-dynamic.c59',
                'corp-dynamic.c58',
                'corp-dynamic.c57',
                'corp-dynamic.c56',
                'corp-dynamic.c55',
                'corp-dynamic.c54',
                'corp-dynamic.c53',
                'corp-dynamic.c51',
                'corp-dynamic.c50',
                'corp-dynamic.c5',
                'corp-dynamic.c49',
                'corp-dynamic.c48',
                'corp-dynamic.c47',
                'corp-dynamic.c46',
                'corp-dynamic.c45',
                'corp-dynamic.c44',
                'corp-dynamic.c43',
                'corp-dynamic.c42',
                'corp-dynamic.c41',
                'corp-dynamic.c40',
                'corp-dynamic.c4',
                'corp-dynamic.c39',
                'corp-dynamic.c38',
                'corp-dynamic.c37',
                'corp-dynamic.c36',
                'corp-dynamic.c35',
                'corp-dynamic.c34',
                'corp-dynamic.c33',
                'corp-dynamic.c32',
                'corp-dynamic.c31',
                'corp-dynamic.c30',
                'corp-dynamic.c3',
                'corp-dynamic.c29',
                'corp-dynamic.c28',
                'corp-dynamic.c27',
                'corp-dynamic.c26',
                'corp-dynamic.c25',
                'corp-dynamic.c24',
                'corp-dynamic.c23',
                'corp-dynamic.c22',
                'corp-dynamic.c21',
                'corp-dynamic.c20',
                'corp-dynamic.c19',
                'corp-dynamic.c18',
                'corp-dynamic.c17',
                'corp-dynamic.c15',
                'corp-dynamic.c14',
                'corp-dynamic.c13',
                'corp-dynamic.c12',
                'corp-dynamic.c12-tab',
                'corp-dynamic.c12-faq',
                'corp-dynamic.c112',
                'corp-dynamic.c111',
                'corp-dynamic.c11',
                'corp-dynamic.c109',
                'corp-dynamic.c108',
                'corp-dynamic.c107',
                'corp-dynamic.c106',
                'corp-dynamic.c105-fund-nav',
                'corp-dynamic.c104',
                'corp-dynamic.c102',
                'corp-dynamic.c101',
                'corp-dynamic.c100',
                'corp-dynamic.business-partner',
                'corp-dynamic.branch-detail',
                'corp-dynamic.branch-coordinates',
                'corp-dynamic.branch-banner',
                'corp-dynamic.branch-amenity',
                'corp-dynamic.blog-filter',
                'corp-dynamic.blog-component',
            ]
        > &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMax<
                {
                    max: 1;
                },
                number
            >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::shared-component.shared-component'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiStateState extends Struct.CollectionTypeSchema {
    collectionName: 'states';
    info: {
        description: '';
        displayName: 'State';
        pluralName: 'states';
        singularName: 'state';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        districts: Schema.Attribute.Relation<
            'oneToMany',
            'api::district.district'
        >;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::state.state'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface ApiTenderTender extends Struct.CollectionTypeSchema {
    collectionName: 'tenders';
    info: {
        description: '';
        displayName: 'Tender';
        pluralName: 'tenders';
        singularName: 'tender';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.Text;
        document: Schema.Attribute.Media<'files'>;
        issueDate: Schema.Attribute.Date & Schema.Attribute.Required;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'api::tender.tender'
        > &
            Schema.Attribute.Private;
        order: Schema.Attribute.Integer;
        publishedAt: Schema.Attribute.DateTime;
        rfpNumber: Schema.Attribute.String & Schema.Attribute.Required;
        submissionDate: Schema.Attribute.Date;
        tenderStatus: Schema.Attribute.Enumeration<
            ['Upcoming', 'Closing soon', 'Active', 'Closed']
        > &
            Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginContentReleasesRelease
    extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_releases';
    info: {
        displayName: 'Release';
        pluralName: 'releases';
        singularName: 'release';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        actions: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::content-releases.release-action'
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::content-releases.release'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        publishedAt: Schema.Attribute.DateTime;
        releasedAt: Schema.Attribute.DateTime;
        scheduledAt: Schema.Attribute.DateTime;
        status: Schema.Attribute.Enumeration<
            ['ready', 'blocked', 'failed', 'done', 'empty']
        > &
            Schema.Attribute.Required;
        timezone: Schema.Attribute.String;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginContentReleasesReleaseAction
    extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_release_actions';
    info: {
        displayName: 'Release Action';
        pluralName: 'release-actions';
        singularName: 'release-action';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        contentType: Schema.Attribute.String & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        entryDocumentId: Schema.Attribute.String;
        isEntryValid: Schema.Attribute.Boolean;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::content-releases.release-action'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        release: Schema.Attribute.Relation<
            'manyToOne',
            'plugin::content-releases.release'
        >;
        type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
            Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
    collectionName: 'i18n_locale';
    info: {
        collectionName: 'locales';
        description: '';
        displayName: 'Locale';
        pluralName: 'locales';
        singularName: 'locale';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        code: Schema.Attribute.String & Schema.Attribute.Unique;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::i18n.locale'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.SetMinMax<
                {
                    max: 50;
                    min: 1;
                },
                number
            >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginReviewWorkflowsWorkflow
    extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_workflows';
    info: {
        description: '';
        displayName: 'Workflow';
        name: 'Workflow';
        pluralName: 'workflows';
        singularName: 'workflow';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        contentTypes: Schema.Attribute.JSON &
            Schema.Attribute.Required &
            Schema.Attribute.DefaultTo<'[]'>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::review-workflows.workflow'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        stageRequiredToPublish: Schema.Attribute.Relation<
            'oneToOne',
            'plugin::review-workflows.workflow-stage'
        >;
        stages: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::review-workflows.workflow-stage'
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginReviewWorkflowsWorkflowStage
    extends Struct.CollectionTypeSchema {
    collectionName: 'strapi_workflows_stages';
    info: {
        description: '';
        displayName: 'Stages';
        name: 'Workflow Stage';
        pluralName: 'workflow-stages';
        singularName: 'workflow-stage';
    };
    options: {
        draftAndPublish: false;
        version: '1.1.0';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::review-workflows.workflow-stage'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String;
        permissions: Schema.Attribute.Relation<
            'manyToMany',
            'admin::permission'
        >;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        workflow: Schema.Attribute.Relation<
            'manyToOne',
            'plugin::review-workflows.workflow'
        >;
    };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
    collectionName: 'files';
    info: {
        description: '';
        displayName: 'File';
        pluralName: 'files';
        singularName: 'file';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        alternativeText: Schema.Attribute.String;
        caption: Schema.Attribute.String;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        ext: Schema.Attribute.String;
        folder: Schema.Attribute.Relation<
            'manyToOne',
            'plugin::upload.folder'
        > &
            Schema.Attribute.Private;
        folderPath: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        formats: Schema.Attribute.JSON;
        hash: Schema.Attribute.String & Schema.Attribute.Required;
        height: Schema.Attribute.Integer;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::upload.file'
        > &
            Schema.Attribute.Private;
        mime: Schema.Attribute.String & Schema.Attribute.Required;
        name: Schema.Attribute.String & Schema.Attribute.Required;
        previewUrl: Schema.Attribute.String;
        provider: Schema.Attribute.String & Schema.Attribute.Required;
        provider_metadata: Schema.Attribute.JSON;
        publishedAt: Schema.Attribute.DateTime;
        related: Schema.Attribute.Relation<'morphToMany'>;
        size: Schema.Attribute.Decimal & Schema.Attribute.Required;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        url: Schema.Attribute.String & Schema.Attribute.Required;
        width: Schema.Attribute.Integer;
    };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
    collectionName: 'upload_folders';
    info: {
        displayName: 'Folder';
        pluralName: 'folders';
        singularName: 'folder';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        children: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::upload.folder'
        >;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::upload.folder'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
        path: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        pathId: Schema.Attribute.Integer &
            Schema.Attribute.Required &
            Schema.Attribute.Unique;
        publishedAt: Schema.Attribute.DateTime;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginUsersPermissionsPermission
    extends Struct.CollectionTypeSchema {
    collectionName: 'up_permissions';
    info: {
        description: '';
        displayName: 'Permission';
        name: 'permission';
        pluralName: 'permissions';
        singularName: 'permission';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: Schema.Attribute.String & Schema.Attribute.Required;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::users-permissions.permission'
        > &
            Schema.Attribute.Private;
        publishedAt: Schema.Attribute.DateTime;
        role: Schema.Attribute.Relation<
            'manyToOne',
            'plugin::users-permissions.role'
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
    };
}

export interface PluginUsersPermissionsRole
    extends Struct.CollectionTypeSchema {
    collectionName: 'up_roles';
    info: {
        description: '';
        displayName: 'Role';
        name: 'role';
        pluralName: 'roles';
        singularName: 'role';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        description: Schema.Attribute.String;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::users-permissions.role'
        > &
            Schema.Attribute.Private;
        name: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
        permissions: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::users-permissions.permission'
        >;
        publishedAt: Schema.Attribute.DateTime;
        type: Schema.Attribute.String & Schema.Attribute.Unique;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        users: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::users-permissions.user'
        >;
    };
}

export interface PluginUsersPermissionsUser
    extends Struct.CollectionTypeSchema {
    collectionName: 'up_users';
    info: {
        description: '';
        displayName: 'User';
        name: 'user';
        pluralName: 'users';
        singularName: 'user';
    };
    options: {
        draftAndPublish: false;
        timestamps: true;
    };
    attributes: {
        blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
        confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
        createdAt: Schema.Attribute.DateTime;
        createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        email: Schema.Attribute.Email &
            Schema.Attribute.Required &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        locale: Schema.Attribute.String & Schema.Attribute.Private;
        localizations: Schema.Attribute.Relation<
            'oneToMany',
            'plugin::users-permissions.user'
        > &
            Schema.Attribute.Private;
        password: Schema.Attribute.Password &
            Schema.Attribute.Private &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        provider: Schema.Attribute.String;
        publishedAt: Schema.Attribute.DateTime;
        resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
        role: Schema.Attribute.Relation<
            'manyToOne',
            'plugin::users-permissions.role'
        >;
        updatedAt: Schema.Attribute.DateTime;
        updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
            Schema.Attribute.Private;
        username: Schema.Attribute.String &
            Schema.Attribute.Required &
            Schema.Attribute.Unique &
            Schema.Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
    };
}

declare module '@strapi/strapi' {
    export module Public {
        export interface ContentTypeSchemas {
            'admin::api-token': AdminApiToken;
            'admin::api-token-permission': AdminApiTokenPermission;
            'admin::permission': AdminPermission;
            'admin::role': AdminRole;
            'admin::transfer-token': AdminTransferToken;
            'admin::transfer-token-permission': AdminTransferTokenPermission;
            'admin::user': AdminUser;
            'api::agent.agent': ApiAgentAgent;
            'api::assorted-table.assorted-table': ApiAssortedTableAssortedTable;
            'api::author.author': ApiAuthorAuthor;
            'api::award.award': ApiAwardAward;
            'api::become-an-agent.become-an-agent': ApiBecomeAnAgentBecomeAnAgent;
            'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
            'api::blog.blog': ApiBlogBlog;
            'api::branch.branch': ApiBranchBranch;
            'api::business-partner.business-partner': ApiBusinessPartnerBusinessPartner;
            'api::corp-common.corp-common': ApiCorpCommonCorpCommon;
            'api::corp-page.corp-page': ApiCorpPageCorpPage;
            'api::country.country': ApiCountryCountry;
            'api::district.district': ApiDistrictDistrict;
            'api::do-not-disturb.do-not-disturb': ApiDoNotDisturbDoNotDisturb;
            'api::form-contactus.form-contactus': ApiFormContactusFormContactus;
            'api::fund-nav-upload.fund-nav-upload': ApiFundNavUploadFundNavUpload;
            'api::fund-nav.fund-nav': ApiFundNavFundNav;
            'api::fund.fund': ApiFundFund;
            'api::gift-city.gift-city': ApiGiftCityGiftCity;
            'api::glossary.glossary': ApiGlossaryGlossary;
            'api::have-an-idea.have-an-idea': ApiHaveAnIdeaHaveAnIdea;
            'api::image-gallery-tag.image-gallery-tag': ApiImageGalleryTagImageGalleryTag;
            'api::image-gallery.image-gallery': ApiImageGalleryImageGallery;
            'api::investors-category.investors-category': ApiInvestorsCategoryInvestorsCategory;
            'api::investors-document.investors-document': ApiInvestorsDocumentInvestorsDocument;
            'api::investors-factsheet.investors-factsheet': ApiInvestorsFactsheetInvestorsFactsheet;
            'api::join-our-team.join-our-team': ApiJoinOurTeamJoinOurTeam;
            'api::join-us-professional.join-us-professional': ApiJoinUsProfessionalJoinUsProfessional;
            'api::join-us.join-us': ApiJoinUsJoinUs;
            'api::learning-module-tag.learning-module-tag': ApiLearningModuleTagLearningModuleTag;
            'api::learning-module.learning-module': ApiLearningModuleLearningModule;
            'api::media-tag.media-tag': ApiMediaTagMediaTag;
            'api::media.media': ApiMediaMedia;
            'api::nav-product.nav-product': ApiNavProductNavProduct;
            'api::nested-topic.nested-topic': ApiNestedTopicNestedTopic;
            'api::newsletter.newsletter': ApiNewsletterNewsletter;
            'api::people-designation.people-designation': ApiPeopleDesignationPeopleDesignation;
            'api::people.people': ApiPeoplePeople;
            'api::plan-category.plan-category': ApiPlanCategoryPlanCategory;
            'api::plan-sub-category.plan-sub-category': ApiPlanSubCategoryPlanSubCategory;
            'api::plan.plan': ApiPlanPlan;
            'api::product-form.product-form': ApiProductFormProductForm;
            'api::public-disclosure.public-disclosure': ApiPublicDisclosurePublicDisclosure;
            'api::shared-component.shared-component': ApiSharedComponentSharedComponent;
            'api::state.state': ApiStateState;
            'api::tender.tender': ApiTenderTender;
            'plugin::content-releases.release': PluginContentReleasesRelease;
            'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
            'plugin::i18n.locale': PluginI18NLocale;
            'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
            'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
            'plugin::upload.file': PluginUploadFile;
            'plugin::upload.folder': PluginUploadFolder;
            'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
            'plugin::users-permissions.role': PluginUsersPermissionsRole;
            'plugin::users-permissions.user': PluginUsersPermissionsUser;
        }
    }
}
