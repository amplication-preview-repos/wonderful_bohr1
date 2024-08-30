import { StatusWhereInput } from "./StatusWhereInput";
import { StatusOrderByInput } from "./StatusOrderByInput";

export type StatusFindManyArgs = {
  where?: StatusWhereInput;
  orderBy?: Array<StatusOrderByInput>;
  skip?: number;
  take?: number;
};
