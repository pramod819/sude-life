import { errors } from '@strapi/utils';

const { ApplicationError } = errors;

export default {
    async beforeCreate(event: any): Promise<any> {
        const { data } = event.params;
        const isUniquePath = await strapi
            .service('api::content.content')
            .isUniquePath(data.path, true);
        if (!isUniquePath) {
            throw new ApplicationError(
                'This path is already taken. Please choose another one.'
            );
        }
    },
    async beforeUpdate(event: any): Promise<any> {
        const { where, data } = event.params;
        const isUniquePath = await strapi
            .service('api::content.content')
            .isUniquePath(data.path, false, where.id);
        if (!isUniquePath) {
            throw new ApplicationError(
                'This path is already taken. Please choose another one.'
            );
        }
    },
};
