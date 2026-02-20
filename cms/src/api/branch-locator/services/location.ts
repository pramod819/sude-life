import { API_RESULT_FORMAT } from '../../../../types/custom/common-type';

export default {
    getLocalitiesByDistrict: async (district: string) => {
        const contents = API_RESULT_FORMAT;

        const items = await strapi.query('api::branch.branch').findMany({
            select: ['locality'],
            where: {
                district: {
                    name: district,
                },
                published_at: {
                    $notNull: true,
                },
            },
            orderBy: { locality: 'asc' },
        });

        contents.data = items.map((item) => {
            return item.locality;
        });

        return contents;
    },
    getBranchesByLocality: async (locality: string) => {
        const contents = API_RESULT_FORMAT;
        const res = [];
        const branches = await strapi.query('api::branch.branch').findMany({
            where: {
                locality,
                published_at: {
                    $notNull: true,
                },
            },
            populate: {
                coordinates: { populate: true },
                banner: {
                    populate: {
                        image: { populate: true },
                    },
                },
                amenities: { populate: true },
            },
        });

        for (const branch of branches) {
            res.push(
                await strapi.service('api::content.branch').formatBranch(branch)
            );
        }
        contents.data = res;

        return contents;
    },
    getStateDistrictHierarchy: async () => {
        const stateDistricts = await strapi.query('api::state.state').findMany({
            select: ['id', 'name'],
            populate: {
                districts: {
                    select: ['name'],
                },
            },
            orderBy: { name: 'asc' },
        });

        const res = await stateDistricts.map((state) => {
            const districts = state.districts
                .map((district) => {
                    return district.name;
                })
                .sort();

            return {
                name: state.name,
                districts,
            };
        });

        return res;
    },
};
