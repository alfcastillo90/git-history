import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { map, catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getUserInfo(username: string) {
    const request = this.httpService
      .get(`${process.env.GITHUB_API_URL}users/${username}`, {
        headers: {
          Authorization: process.env.GITHUB_ACCESS_TOKEN,
        },
      })
      .pipe(map((response) => response.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
    return await lastValueFrom(request);
  }
}
