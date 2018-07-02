#!/bin/sh

set -ex
git reset --hard
git checkout master
git fetch origin
git merge origin/master
npm install
npm run release
sudo systemctl stop forever.service
sudo systemctl start forever.service