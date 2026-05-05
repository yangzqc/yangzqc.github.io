#!/bin/bash

# 推送脚本：推送代码到所有配置的远程仓库

BRANCH=${1:-dev}  # 默认分支为 dev，可通过参数指定

# 推送前显示远程仓库信息
echo "当前远程仓库配置："
git remote -v
echo ""

# 获取所有远程名称
remotes=$(git remote)

for remote in $remotes; do
    echo "推送 $BRANCH 分支到 $remote"
    git push "$remote" "$BRANCH"
done

echo "所有推送完成"