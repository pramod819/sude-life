interface TopicResponse {
    id?: string;
    text: string;
    children?: TopicResponse[];
    action?: ActionResponse;
}

interface ActionRequest {
    __component: string;
    id: string;
    link?: string;
}

interface ActionResponse {
    type: string;
    link?: string;
}

export default {
    getNestedTree: async (parentId: string) => {
        // Find all children where parent.id = parentId
        const entity = await strapi
            .query('api::nested-topic.nested-topic')
            .findOne({
                where: { id: parentId },
                populate: {
                    children: {
                        populate: {
                            action: {
                                populate: {
                                    document: true,
                                },
                            },
                        },
                    },
                    action: true,
                },
            });

        return await Promise.all(
            entity.children.map(async (child: TopicResponse) => {
                const children = await strapi
                    .service('api::content.nested-tabs')
                    .getNestedTree(String(child.id));

                const action = await strapi
                    .service('api::content.nested-tabs')
                    .getAction(child.action);

                return {
                    text: child.text,
                    children,
                    action,
                };
            })
        );
    },
    getAction: async (action: ActionRequest): Promise<ActionResponse | []> => {
        const component = action[0]?.__component;
        if (component === 'corp-dynamic.nested-tab-document') {
            return {
                type: 'document',
                link: await strapi
                    .service('api::content.field-render')
                    .getPdfPath(action[0].document),
            };
        } else if (component === 'corp-dynamic.nested-tab-link') {
            return {
                type: 'link',
                link: action[0].link,
            };
        }

        return [];
    },
};
