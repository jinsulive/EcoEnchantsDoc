#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:jinsulive/eco-enchants-guide.git
git push -f origin master

cd -
rm -rf ./.vitepress/dist
