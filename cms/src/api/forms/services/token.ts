/**
 * about-sud-life service
 */
import * as crypto from 'crypto';
import { env } from '@strapi/utils';
import { FormResponse } from '../../../../types/custom/common-type';

interface KeyData {
    key: Buffer;
    IV: Buffer;
}

export default {
    createHmac: async (data: string): Promise<string> => {
        return crypto
            .createHmac('sha256', env('CSAPI_PARTNER_KEY'))
            .update(data)
            .digest('base64');
    },
    getCSKeys: async (): Promise<KeyData> => {
        const hash = crypto.createHash('sha256');
        const key = hash.update(env('CSAPI_AES_KEY')).digest();
        const IVKey: string = env('CSAPI_AES_IV');
        const IV = Buffer.from(IVKey);

        return { key, IV };
    },
    encryptCS: async (data: string): Promise<string> => {
        const { key, IV } = await strapi
            .service('api::forms.token')
            .getCSKeys();
        const cipher = crypto.createCipheriv('aes-256-cbc', key, IV);
        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');

        return encrypted;
    },
    decryptCS: async (data: string): Promise<string> => {
        const { key, IV } = await strapi
            .service('api::forms.token')
            .getCSKeys();
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, IV);
        let decrypted = decipher.update(data, 'base64', 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
    },
};
