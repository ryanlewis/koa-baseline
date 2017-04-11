# koa-baseline

[![Build Status](https://travis-ci.org/ryanlewis/koa-baseline.svg?branch=master)](https://travis-ci.org/ryanlewis/koa-baseline)

Baseline installation of [Koa][koa].

## What's included

* Babel / ES6
* Mocha, Chai
* ESLint with [Standard][standard] preset

[koa]: http://koajs.com
[standard]: https://standardjs.com

## Installation

1. Clone this repository with `git clone --depth=1 https://github.com/ryanlewis/koa-baseline.git`
2. Install dependencies with `yarn`
3. Setup a new git repository with `yarn setup`
4. Start the server with `yarn start`. If you want to configure a port, set the env `PORT` e.g. `PORT=1337 yarn start`
