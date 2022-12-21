
# Time force challenge

this repository includes two folders


## Environment Variables

To run this project, you will need to modify the following environment variables to your .env file

`GITHUB_ACCESS_TOKEN=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`
important!: this token expires on

## Run Locally

Clone the project, you could choose between https, ssh or GitHubCLI

https
```bash
  git clone https://github.com/alfcastillo90/git-history.git
```

ssh
```bash
  git clone git@github.com:alfcastillo90/git-history.git
```

github cli
```bash
  gh repo clone alfcastillo90/git-history
```

Go to the projects directories, install dependencies and run

backend
```bash
  cd api
  npm install
  npm run start:dev
```

frontend
```bash
  cd app
  npm install
  npm run start
```


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, NestJS