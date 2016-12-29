## Purpose

The purpose of this repo is to re-produce issue [685](https://github.com/apiaryio/dredd/issues/685#issuecomment-269520232) in the [dredd](https://github.com/apiaryio/dredd) project.

## How to replicate

`npm run`:

Scripts available in dredd-express-issue via `npm run-script`:
  dredd
    dredd --config=./dredd.yml
  dredd-es6
    babel-node ./node_modules/.bin/dredd --config=./dredd-es6.yml
  dredd-separate-files
    dredd --config=./dredd-separate-files.yml

Running any of the above scripts will lead to the tests hanging while running the hooks (express server callback never gets called - as described in the [issue](https://github.com/apiaryio/dredd/issues/685#issuecomment-269520232)).


