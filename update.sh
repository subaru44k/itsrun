#!/bin/sh

set -ex
git checkout master
git fetch origin
git merge origin/master
npm run release
sudo systemctl stop forever.service
sudo systemctl start forever.service