import slugify from 'slugify';

export default {
    async beforeCreate(event: any): Promise<void> {
        const { data } = event.params;
        event.params.data.slug = await generateSlug(data.name, true);
    },
    async beforeUpdate(event: any): Promise<void> {
        const { where, data } = event.params;
        event.params.data.slug = await generateSlug(data.name, false, where.id);
    },
};

async function generateSlug(
    slug: string,
    isPublished: boolean,
    updateId = 0,
    number = 0
): Promise<string> {
    let slugItem = slug.toLowerCase();

    if (number > 0) {
        slugItem += ' ' + number;
    }

    slugItem = slugify(slugItem);

    const isUniquePath = await strapi
        .service('api::content.content')
        .isUniquePath('/' + slugItem, isPublished, updateId);

    if (!isUniquePath) {
        return generateSlug(slug, isPublished, updateId, ++number);
    }

    return slugItem;
}
