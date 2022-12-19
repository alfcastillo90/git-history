import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { map, catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getUserInfo(username: string) {
    console.log(process.env.GITHUB_API_URL);
    const request = this.httpService
      .get(`${process.env.GITHUB_API_URL}/users/${username}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      })
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error) => {
          console.log(error);
          throw new ForbiddenException('API not available');
        }),
      );
    return await lastValueFrom(request);
  }

  async getCommitsByUserAndRepo(username: string, repo: string) {
    const request = this.httpService
      .get(
        `${process.env.GITHUB_API_URL}/repos/${username}/${repo}/commits?per_page=100`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
        },
      )
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error) => {
          console.log(error);
          throw new ForbiddenException('API not available');
        }),
      );
    return await lastValueFrom(request);
  }
}
