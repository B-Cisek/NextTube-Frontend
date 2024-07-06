export const useSearch = () => useState<boolean>("isSearchOpen", () => false);
export const useAside = () => useState<boolean>("isAsideOpen", () => true);
