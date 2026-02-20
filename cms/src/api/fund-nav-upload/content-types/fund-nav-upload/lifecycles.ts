import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import axios from 'axios';
import { env } from '@strapi/utils';

export default {
    async beforeCreate(event) {
        const { data } = event.params;
        const upload = data.upload;

        const ext = upload.name
            .split('.')
            .filter(Boolean) // removes empty extensions (e.g. `filename...txt`)
            .slice(1)
            .join('.');

        if (ext !== 'csv') {
            throw new Error('Invalid file extensions');
        }
    },

    async afterCreate(event) {
        const Data = event.result;
        const upload = Data.upload;
        const date = Data.date;
        const results = [];
        const URL = upload.url;
        const filePath = URL.replace(env('IMAGE_REPLACE'), env('CDN_URL'));
        const response = await axios.get(filePath, { responseType: 'stream' });
        response.data
            .pipe(csv())
            .on('data', (row) => {
                results.push(row);
            })
            .on('end', async () => {
                for (const row of results) {
                    const today = date; // Format: YYYY-MM-DD

                    const products = await strapi.entityService.findMany(
                        'api::fund.fund',
                        {
                            filters: {
                                code: row.Code,
                            },
                            fields: ['id'],
                            limit: 1,
                        }
                    );

                    if (products.length > 0) {
                        await strapi.entityService.create(
                            'api::fund-nav.fund-nav',
                            {
                                data: {
                                    title: row.Code + ' ' + today,
                                    nav: parseFloat(row.NAV),
                                    date: today,
                                    fund: products[0].id,
                                },
                            }
                        );
                    }
                }
            });
    },
};
