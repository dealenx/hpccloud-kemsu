@echo off
npm run docs:build&&cd docs/.vuepress/dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/dealenx/hpccloud-kemsu.git master:gh-pages&&cd -
