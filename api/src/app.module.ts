import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.dev`,
    }),
    GithubModule,
  ],
})
export class AppModule {}
