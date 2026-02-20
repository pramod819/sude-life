import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * Blog component service
 */
interface ComponentResponse {
    title: string;
    image: MediaImage;
    short_desc: string;
    read_time: string;
    publish_date: string;
    blog_category: string[];
    likeCount: string[];
    viewCount: string[];
    content: string[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface BulletPointData {
    text: string;
}

const asyncForEach = async (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
};

const processItems = async (items) => {
    const content = [];
    await asyncForEach(items, async (item) => {
        const result = await strapi.query(item.__component).findOne({
            where: { id: item.id },
            populate: {
                title: { populate: true },
                text: { populate: true },
                list: { populate: true },
                image: { populate: true },
            },
        });
        const contentObj = {};

        const title = await strapi
            .service('api::content.field-render')
            .getTitle(result.title);
        if (item.__component == 'corp-subcomponent.blog-text-image') {
            const image = strapi
                .service('api::content.field-render')
                .getMediaImage(result.image);
            const emptyArray = {
                title: title,
                text: result.text,
                variation: result.variation,
                image: image,
            };
            contentObj['blog-text-image_' + item.id] = emptyArray;
            content.push(contentObj);
        } else if (
            item.__component == 'corp-subcomponent.blog-text-component'
        ) {
            const emptyArray = { title: title, text: result.text };
            contentObj['blog-text_' + item.id] = emptyArray;
            content.push(contentObj);
        } else {
            const bulletPointInfo = result.list.map((data): string => {
                return data.text;
            });
            const emptyArray = {
                title: title,
                bulletPoint: bulletPointInfo,
            };
            contentObj['blog-bullet-points_' + item.id] = emptyArray;
            content.push(contentObj);
        }
    });
    return content;
};
export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const blog = await strapi.db.query('blogs_cmps').findOne({
            where: {
                cmp_id: component.id,
                field: 'cmp_dynamic',
                component_type: 'corp-dynamic.blog-component',
            },
        });
        const blogDetails = await strapi.db.query('api::blog.blog').findOne({
            where: {
                id: blog.entity_id,
            },
            populate: {
                blog_content: { populate: true },
                blog_categories: { populate: true },
                image: { populate: true },
                publish_date: { populate: true },
                read_time: { populate: true },
                title: { populate: true },
                short_desc: { populate: true },
            },
        });
        const blogCategories = [];
        blogDetails.blog_categories.forEach(function (value) {
            const contentObj = {};
            const emptyArray = {
                id: value.id,
                name: value.name,
            };
            contentObj['blog-catogy' + value.id] = emptyArray;
            blogCategories.push(contentObj);
        });
        const image = strapi
            .service('api::content.field-render')
            .getMediaImage(blogDetails.image);

        const content = await processItems(blogDetails.blog_content);

        const likeCount = await strapi
            .service('api::content.blog-api-view')
            .getBlogCount({ blogId: blog.entity_id, type: 'like' });

        const viewCount = await strapi
            .service('api::content.blog-api-view')
            .getBlogCount({ blogId: blog.entity_id, type: 'view' });

        return {
            title: blogDetails.title,
            image: image,
            short_desc: blogDetails.short_desc,
            read_time: blogDetails.read_time,
            publish_date: blogDetails.publish_date,
            blog_category: blogCategories,
            likeCount,
            viewCount,
            content,
        };
    },
};
