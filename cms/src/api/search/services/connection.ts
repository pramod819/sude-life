import { Client } from '@opensearch-project/opensearch';

const client = new Client({
    node: process.env.OPENSEARCH_HOST || 'http://localhost:9200',
});

export default client;
