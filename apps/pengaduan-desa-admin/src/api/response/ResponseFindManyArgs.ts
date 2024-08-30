import { ResponseWhereInput } from "./ResponseWhereInput";
import { ResponseOrderByInput } from "./ResponseOrderByInput";

export type ResponseFindManyArgs = {
  where?: ResponseWhereInput;
  orderBy?: Array<ResponseOrderByInput>;
  skip?: number;
  take?: number;
};
