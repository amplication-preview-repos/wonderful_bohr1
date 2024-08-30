import * as graphql from "@nestjs/graphql";
import { ComplaintResolverBase } from "./base/complaint.resolver.base";
import { Complaint } from "./base/Complaint";
import { ComplaintService } from "./complaint.service";

@graphql.Resolver(() => Complaint)
export class ComplaintResolver extends ComplaintResolverBase {
  constructor(protected readonly service: ComplaintService) {
    super(service);
  }
}
