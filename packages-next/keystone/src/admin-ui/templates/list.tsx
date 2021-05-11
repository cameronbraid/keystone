export const listTemplate = (listKey: string) =>
  `import { getListPage } from '@keystone-next/keystone/admin-ui/pages/ListPage';

export default getListPage(${JSON.stringify({ listKey })});
`;
