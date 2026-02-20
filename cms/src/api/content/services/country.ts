import {
    CountryRequest,
    CountryResponse,
} from '../../../../types/custom/common-type';

export default {
    getCountry: (country: CountryRequest): CountryResponse => {
        return {
            name: country.name,
            countryCode: country.country_code,
            dialingCode: country.dialing_code,
        };
    },
    getCountries: (countryData: CountryRequest[]): CountryResponse[] => {
        return countryData.map((country: CountryRequest): CountryResponse => {
            return strapi.service('api::content.country').getCountry(country);
        });
    },
};
