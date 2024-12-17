#!/usr/bin/env sh

# 檢查有沒有 dist 資料夾，如果有的話，就移除
DIR="./dist"
if [ -d "$DIR" ]; then
    yes | rm -r ./dist
fi

# 當發生錯誤時終止腳本運行
set -e
# 建立輸出檔案
npm run build

# 移動至到打包後的 dist 目錄 
cd dist

# 初始化 git，將 dist 資料夾進版控
git init
# 切換到 master branch，沒有的話，會自動建立
git checkout -b gh-pages
# 將所有檔案加進版控
git add -A
# 進行 commit
git commit -m 'deploy'
# 加 GitHub 遠端的 repo
git remote add origin git@github.com:shiiinnooo/table.git
# 進行強制 push
git push -f origin gh-pages

# 回到上次的資料夾
cd -

# 執行指令，在終端機輸入 sh deploy.sh