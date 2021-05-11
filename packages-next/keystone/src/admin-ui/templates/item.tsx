export const itemTemplate = (listKey: string) =>
  `import { getItemPage } from '@keystone-next/keystone/admin-ui/pages/ItemPage';

export default getItemPage(${JSON.stringify({ listKey })})
`;
