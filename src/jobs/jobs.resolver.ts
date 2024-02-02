import { Query, Args, Resolver, ID, Mutation } from '@nestjs/graphql';
import { Jobs } from 'src/models/jobs.model';
import { JobsService } from './jobs.service';
import { of } from 'rxjs';
import { JobsInput } from './jobs.input';

@Resolver(() => Jobs)
export class JobsResolver {
  constructor(private service: JobsService) {}

  @Query(() => [Jobs])
  async getAllJobs(): Promise<Jobs[]> {
    return this.service.getAllJobs();
  }

  @Query(() => Jobs)
  async getById(@Args('id', { type: () => ID }) id: string): Promise<Jobs> {
    return this.service.getById(id);
  }
  @Mutation(() => Jobs)
  async create(@Args('input') input: JobsInput): Promise<Jobs> {
    return this.service.create(input);
  }
}
