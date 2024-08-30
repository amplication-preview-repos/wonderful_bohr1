import { Complaint as TComplaint } from "../api/complaint/Complaint";

export const COMPLAINT_TITLE_FIELD = "id";

export const ComplaintTitle = (record: TComplaint): string => {
  return record.id?.toString() || String(record.id);
};
