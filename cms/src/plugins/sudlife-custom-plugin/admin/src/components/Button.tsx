import type {
  BulkActionComponent,
  BulkActionComponentProps,
} from '@strapi/content-manager/strapi-admin';
import { ConvertToCsv, HandleDownload } from '../utils/fileHelper';
import { Upload } from '@strapi/icons';
import { useMatch } from 'react-router-dom';

const BulkAction: BulkActionComponent = ({
  collectionType = 'collection-types',
  documents,
  model,
}: BulkActionComponentProps) => {
  const allowedPaths = [
    'api::join-us.join-us',
    'api::become-an-agent.become-an-agent',
    'api::form-contactus.form-contactus',
    'api::do-not-disturb.do-not-disturb',
    'api::business-partner.business-partner',
    'api::product-form.product-form',
  ];

  const urlParts = useMatch(`/content-manager/collection-types/:type`);
  const path = urlParts?.params?.type;

  if (path && allowedPaths.indexOf(path) === -1) {
    return null;
  }

  return {
    icon: <Upload />,
    label: 'Export to csv',
    onClick: (event: React.SyntheticEvent) => {
      const data = ConvertToCsv(documents);
      HandleDownload(data);
    },
    variant: 'secondary',
  };
};

export default BulkAction;
