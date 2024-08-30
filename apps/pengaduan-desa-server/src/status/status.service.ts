import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusServiceBase } from "./base/status.service.base";

@Injectable()
export class StatusService extends StatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
