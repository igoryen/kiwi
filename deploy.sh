#!/usr/bin/env sh

# abort on errors
set -e

git checkout --orphan gh-pages

git --work-tree . add --all

git --work-tree . commit -m 'Deploy'


# git push origin HEAD:gh-pages --force
git push -f git@github.com:igoryen/kiwi.git master:gh-pages

git checkout -f master

git branch -D gh-pages



#cd -