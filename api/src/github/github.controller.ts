import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/:username')
  async getUserInfo(@Param() param: { username: string }) {
    return await this.githubService.getUserInfo(param.username);
  }
}
