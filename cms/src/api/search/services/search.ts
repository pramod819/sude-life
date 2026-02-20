import client from './connection';

export default {
    async query({
        q = '',
        page = '1',
        pageSize = '10',
        type, // optional: blog, corp-page, etc.
    }): Promise<any> {
        const pageNum = parseInt(page as string, 10);
        const size = parseInt(pageSize as string, 10);
        const from = (pageNum - 1) * size;

        const allIndexes = 'corp-page,learning-module,blog';
        const indexes =
            type && allIndexes.indexOf(type) !== -1 ? [type] : allIndexes;

        const response = await client.search({
            index: indexes,
            ignore_unavailable: true,
            allow_no_indices: true,
            from,
            size,
            body: {
                query: {
                    bool: {
                        should: [
                            {
                                match: {
                                    title: {
                                        query: q,
                                        fuzziness: 'auto',
                                        boost: 1,
                                    },
                                },
                            },
                            {
                                match: {
                                    keywords: {
                                        query: q,
                                        fuzziness: 'auto',
                                        boost: 2,
                                    },
                                },
                            },
                        ],
                        minimum_should_match: 1,
                    },
                },
            },
        });

        const hits = response.body.hits.hits;

        const data = hits.map((hit: any) => ({
            title: hit._source.title,
            description: hit._source.description,
            path: hit._source.path,
            createdAt: hit._source.created_at,
            updatedAt: hit._source.updated_at,
            publishedAt: hit._source.published_at,
        }));

        const total = response.body.hits.total.value;

        return {
            list: data,
            pagination: {
                page: pageNum,
                pageSize: size,
                total,
                pageCount: Math.ceil(total / size),
            },
        };
    },
};
