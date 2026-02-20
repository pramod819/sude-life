/**
 * about-sud-life service
 */
import { HTTP_STATUS_SUCCESS } from '../../../../types/custom/common-type';

export interface ValidationMessage {
    message: string[];
    status: number;
    form: object;
    success: boolean;
}

export interface captchaResponse {
    success: boolean;
    action?: string;
}

export default {
    paramValidation: async (
        formInput: object,
        formRequest: object
    ): Promise<Boolean> => {
        const formKeys = Object.keys(formInput);
        let flag = true;
        for (const [key, value] of Object.entries(formRequest)) {
            if (formKeys.includes(key) === false) {
                flag = false;
                break;
            }
        }

        return flag;
    },
    fillParams: async (
        formInput: object,
        formRequest: object
    ): Promise<object> => {
        const formKeys = Object.keys(formInput);
        for (const [key, value] of Object.entries(formRequest)) {
            if (formKeys.includes(key) === true) {
                formInput[key] = value;
            }
        }

        return formInput;
    },
    validateEmail: (email: string): boolean => {
        const exp =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return exp.test(email);
    },
    validateCaptcha: async (token: string): Promise<boolean> => {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

        const response = await fetch(url);

        // @ts-ignore
        const data: captchaResponse = await response.json();

        return (
            data.success === true &&
            data.action === process.env.RECAPTCHA_ACTION_NAME
        );
    },
};
