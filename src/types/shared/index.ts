export type ResponseModel<T> = {
  loading: boolean;
  refresh: () => void;
  data?: T;
};

export type ResponseTotalListModel<T> = {
  total: number;
  list: T[];
};

export type ResponseToGetListModel<T> = {
  loading: boolean;
  hasMore?: boolean;
  data?: T[];
};
