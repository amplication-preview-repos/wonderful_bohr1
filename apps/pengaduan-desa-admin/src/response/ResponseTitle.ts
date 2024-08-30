import { Response as TResponse } from "../api/response/Response";

export const RESPONSE_TITLE_FIELD = "id";

export const ResponseTitle = (record: TResponse): string => {
  return record.id?.toString() || String(record.id);
};
