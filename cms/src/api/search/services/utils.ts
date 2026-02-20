import client from './connection';

interface DocumentRequest {
    id: string;
    documentId: string;
    path: string;
    title: string;
    description?: string;
    shortDescription?: string;
    short_desc?: string;
    keywords: string;
    updatedAt: string;
    createdAt: string;
    publishedAt: string;
}

interface Document {
    title: string;
    description: string;
    path: string;
    keywords: string[];
    updated_at: string;
    created_at: string;
    published_at: string;
}

const IndexCollectionMap = {
    'corp-page': 'api::corp-page.corp-page',
    'learning-module': 'api::learning-module.learning-module',
    blog: 'api::blog.blog',
};

const globalSearchMapping = {
    mappings: {
        properties: {
            title: {
                type: 'text',
            },
            keyword: {
                type: 'text',
            },
        },
    },
};

const createIndexIfNotExists = async (index: string): Promise<void> => {
    const exists = await client.indices.exists({ index });
    if (!exists.body) {
        await client.indices.create({
            index,
            body: globalSearchMapping,
        });
    } else {
        console.log(`Index "${index}" already exists.`);
    }
};

const deleteDocument = async (index: string, id: string): Promise<void> => {
    try {
        await client.delete({
            index,
            id,
        });
    } catch (error) {
        console.error('Unexpected Error:', error);
    }
};

const indexDocument = async (
    index: string,
    document: DocumentRequest
): Promise<void> => {
    try {
        const doc = await prepareDocument(index, document);

        await client.index({
            index,
            id: document.documentId,
            body: doc,
        });
    } catch (error) {
        console.error('Unexpected Error:', error);
    }
};

const prepareDocument = async (
    index: string,
    doc: DocumentRequest
): Promise<Document> => {
    const keywords = doc.keywords
        ? doc.keywords
              .split(',')
              .map((k) => k.trim())
              .filter(Boolean)
        : [];

    let description = '';
    switch (index) {
        case 'corp-page':
            description = doc.shortDescription ?? '';
            break;
        case 'learning-module':
            description = doc.shortDescription ?? '';
            break;
        case 'blog':
            description = doc.short_desc ?? '';
            break;
        default:
            description = '';
    }

    return {
        title: doc.title,
        description,
        path: doc.path,
        keywords,
        updated_at: doc.updatedAt,
        created_at: doc.createdAt,
        published_at: doc.publishedAt,
    };
};

const bulkImport = async (index: string): Promise<any> => {
    if (!(index in IndexCollectionMap)) {
        console.log('wrong index passed');
        return;
    }

    const collection = IndexCollectionMap[index];
    const documents = await strapi.db.query(collection).findMany({
        where: { publishedAt: { $notNull: true } },
    });
    await createIndexIfNotExists(index);
    documents.map(async (document: DocumentRequest): Promise<void> => {
        await indexDocument(index, document);
    });
};

const deleteIndex = async (index: string): Promise<void> => {
    try {
        const exists = await client.indices.exists({ index });
        if (exists.body) {
            await client.indices.delete({
                index,
            });
        } else {
            console.log(`Index "${index}" does NOT exist.`);
        }
    } catch (error) {
        console.error('Unexpected Error:', error);
    }
};

export default {
    bulkImport,
    deleteIndex,
    indexDocument,
    deleteDocument,
};
