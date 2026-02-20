import client from './connection';

export default {
    async suggest({ q = '', type }): Promise<string[]> {
        if (!q || q.length < 2) {
            return [];
        }

        const allIndexes = 'corp-page,learning-module,blog';
        const indexes =
            type && allIndexes.indexOf(type) !== -1 ? [type] : allIndexes;

        try {
            const response = await client.search({
                index: indexes,
                ignore_unavailable: true,
                allow_no_indices: true,
                size: 0,
                body: {
                    aggs: {
                        keyword_suggestions: {
                            terms: {
                                field: 'keywords.keyword', // assumes keyword type for exact matching
                                include: `${q}.*`, // prefix matching
                                size: 10,
                            },
                        },
                    },
                },
            });

            const suggestions =
                response.body.aggregations?.keyword_suggestions?.buckets || [];

            return suggestions.map((suggestion) => suggestion.key);
        } catch (err) {
            console.error('Autocomplete error:', err);
            return [];
        }
    },
};
