import * as graphql from "@nestjs/graphql";
import { StatusResolverBase } from "./base/status.resolver.base";
import { Status } from "./base/Status";
import { StatusService } from "./status.service";

@graphql.Resolver(() => Status)
export class StatusResolver extends StatusResolverBase {
  constructor(protected readonly service: StatusService) {
    super(service);
  }
}
