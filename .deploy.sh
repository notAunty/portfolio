#! /bin/bash

cd public
rm -rf *
cd ..
source ~/.profile
webpack
JEKYLL_ENV=production
jekyll build
cp -r _site/. public
cd public
git add .
git commit -m 'new deploy'
git push -u origin master

