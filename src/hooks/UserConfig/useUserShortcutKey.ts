import { useGetListShortcutKeyQuery } from '@/api/shortcutKey';

export const useUserShortcutKey = () => {
  const { data, isFetching } = useGetListShortcutKeyQuery({ filter: {} });
  const listShortcutKey = data?.list ?? [];

  return {
    listShortcutKey,
    isFetching,
  };
};
