
A small demo program to check out the JavaScript ecosystem.


## Set up environment

### Install node and npm (node package manager)

```bash
# from: https://nodejs.org/en/download/package-manager
# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash
# activate fnm
source ~/.bashrc
# download and install Node.js
fnm use --install-if-missing 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`
# verifies the right npm version is in the environment
npm -v # should print `10.9.0`
```


### Set up the project

```
mkdir backend
mkdir frontend
cd backend
npm init -y
npm install express
```

## License

MIT License.