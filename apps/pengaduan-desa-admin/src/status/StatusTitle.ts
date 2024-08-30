import { Status as TStatus } from "../api/status/Status";

export const STATUS_TITLE_FIELD = "id";

export const StatusTitle = (record: TStatus): string => {
  return record.id?.toString() || String(record.id);
};
