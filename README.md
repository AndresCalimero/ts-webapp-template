# ts-webapp-template

[![CI/CD](https://github.com/AndresCalimero/ts-webapp-template/workflows/CI/CD/badge.svg)](https://github.com/AndresCalimero/ts-webapp-template/actions)
[![Coverage Status](https://coveralls.io/repos/github/AndresCalimero/ts-webapp-template/badge.svg?branch=master)](https://coveralls.io/github/AndresCalimero/ts-webapp-template?branch=master)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![typedoc](https://img.shields.io/badge/docs-typedoc-green.svg)](https://typedoc.org/)
[![parcel](https://img.shields.io/badge/bundler-Parcel-green.svg)](https://parceljs.org/)
[![Depfu](https://badges.depfu.com/badges/544dd714be584a864fbf9fc8de411e1c/overview.svg)](https://depfu.com/github/AndresCalimero/ts-webapp-template?project_id=11433)

This is an example of scaffolding for a web app using TypeScript and Parcel.

*IMPORTANT*: The placeholders must be replaced with their actual values, please change occurrences of:

* `AndresCalimero` (GitHub user) and `ts-webapp-template` (repo name) in **README.md**
* `ts-webapp-template` with the name of the library in **package.json**
* `@andrescalimero` with the GitHub username in lowercase in **package.json**
* `AndresCalimero` (GitHub user), `ts-webapp-template` (repo name), `Andres Calimero` (author name) and `andrescalimero@hotmail.es` (author email) in **package.json**
* `Andres Calimero` (author name) and `2020` (year) in **LICENSE**
* `AndresCalimero` (GitHub user) and `ts-webapp-template` (repo name) in **CONTRIBUTING.md**

## Configuration

### Auto deployment

Due to limitations in GitHub Actions you have to provide a GitHub PAT (Personal Access Token) if you want to publish your app automatically on every release, to provide the PAT you have to set the variable `ACCESS_TOKEN` in your repository's secrets with the token as the value. The token should have access to the `repo` scope.
