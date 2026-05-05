#!/bin/bash

# 推送脚本：推送代码到所有配置的远程仓库

BRANCH=${1:-dev}  # 默认分支为 dev，可通过参数指定

# 输出消息，type 可传 TIP/SUCCESS/ERROR/END
print_msg() {
    local type="$1"
    local text="$2"
    echo "--------[${type}]: ${text}"
}

# 推送前显示远程仓库信息
print_msg TIP "当前远程仓库配置"
git remote -v
echo ""

# 获取所有远程名称
remotes=$(git remote)

for remote in $remotes; do
    print_msg TIP "推送 $BRANCH 分支到 $remote"
    if git push "$remote" "$BRANCH"; then
        print_msg SUCCESS "推送 $remote 成功"
        echo ""
    else
        print_msg ERROR "推送 $remote 失败"
        echo ""
    fi
done

print_msg END "所有推送完成"