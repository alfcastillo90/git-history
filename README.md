
# Time force challenge

this repository includes two folders


## Environment Variables

To run this project, you will need to modify the following environment variables to your .env file
### You have to create your own github classic token it's imposible for me to share my tokens because github detects and revokes it inmidiately
`GITHUB_ACCESS_TOKEN=`


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