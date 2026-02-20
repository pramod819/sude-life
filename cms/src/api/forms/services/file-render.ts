/**
 * sud-life upload service
 */
import { env } from '@strapi/utils';
import axios from 'axios';

export default {
    uploadFile: async (base64Data: string, token: string) => {
        try {
            const fileTypes = {
                '@file/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    'docx',
                'image/jpeg': 'jpeg',
                'image/jpg': 'jpg',
                'imag/png': 'png',
                'application/pdf': 'pdf',
            };

            const file = await strapi
                .service('api::forms.file-render')
                .createBinary(base64Data);
            const extension =
                'undefined' !== fileTypes[file.type]
                    ? fileTypes[file.type]
                    : null;

            if (null === extension) {
                return null;
            }

            const formData = new FormData();
            formData.append(
                'files',
                file,
                'application_' + Date.now() + '.' + extension
            );

            const { data, status } = await axios.post(
                env('BASE_PATH') + '/api/v1/upload',
                formData,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );

            if (Array.isArray(data)) {
                const id: string = data[0]?.id;
                return id;
            }

            return null;
        } catch (err) {
            return null;
        }
    },
    createBinary: async (dataURI: string) => {
        const splitDataURI = dataURI.split(',');
        const byteString =
            splitDataURI[0].indexOf('base64') >= 0
                ? atob(splitDataURI[1])
                : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);

        return new Blob([ia], {
            type: mimeString,
        });
    },
};
