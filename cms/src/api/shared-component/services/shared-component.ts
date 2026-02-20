/**
 * shared-component service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService(
    'api::shared-component.shared-component'
);
