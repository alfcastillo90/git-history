import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/username/:username')
  async getUserInfo(@Param() param: { username: string }) {
    return await this.githubService.getUserInfo(param.username);
  }

  @Get('/username/:username/repo/:repo')
  async getCommitsByUserAndRepo(
    @Param() param: { username: string; repo: string },
  ) {
    return await this.githubService.getCommitsByUserAndRepo(
      param.username,
      param.repo,
    );
  }
}
