import {
    Title,
    MediaImage,
    Cta,
    PeopleResponse,
} from '../../../../types/custom/common-type';

/**
 * people-listing service
 */
interface ComponentResponse {
    variation: string;
    title: Title;
    people?: PeopleResponse[];
    awards?: { [awardName: string]: PeopleResponse[] };
}

interface AwardsResponse {
    name: string;
    list: PeopleResponse[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c40').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                people: {
                    populate: {
                        image: { populate: true },
                        designation: {
                            populate: {
                                designation: { populate: true },
                            },
                        },
                        cta: { populate: true },
                    },
                },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const response: ComponentResponse = {
            variation: componentData.variation,
            title: titleData,
        };

        if (componentData.variation !== 'awards') {
            response.people = componentData.people
                ? strapi
                      .service('api::content.people')
                      .getPeople(componentData.people)
                : null;
        } else {
            let peopleWithAwards = await strapi.db
                .query('api::people.people')
                .findMany({
                    where: {
                        awards: {
                            $notNull: true,
                        },
                        publishedAt: { $notNull: true },
                    },
                    populate: {
                        image: { populate: true },
                        designation: {
                            populate: {
                                designation: { populate: true },
                            },
                        },
                        awards: {
                            populate: {
                                award: { populate: true },
                            },
                        },
                        cta: { populate: true },
                    },
                });

            peopleWithAwards = peopleWithAwards
                ? strapi
                      .service('api::content.people')
                      .getPeople(peopleWithAwards)
                : [];

            const groupedByAward: { [awardName: string]: PeopleResponse[] } =
                {};
            peopleWithAwards.forEach((person: any) => {
                if (person.awards && Array.isArray(person.awards)) {
                    person.awards.forEach((award: any) => {
                        const awardName = award.award || 'Unknown';
                        if (!groupedByAward[awardName]) {
                            groupedByAward[awardName] = [];
                        }
                        groupedByAward[awardName].push(person);
                    });
                }
            });

            response.awards = groupedByAward;
        }

        return response;
    },
};
