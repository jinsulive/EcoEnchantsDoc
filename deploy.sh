#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件（GitHub Pages 部署：带 base=/eco-enchants-guide/）
npm run docs:build:gh

# 进入生成的文件夹
cd ./docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:jinsulive/eco-enchants-guide.git
git push -f origin master

cd -
rm -rf ./docs/.vitepress/dist
