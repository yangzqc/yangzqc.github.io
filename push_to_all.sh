#!/bin/bash

# 推送脚本：推送代码到所有配置的远程仓库

BRANCH=${1:-dev}  # 默认分支为 dev，可通过参数指定

# 输出消息，first 参数表示是否显示 --------，type 可传 TIP/SUCCESS/ERROR/END
print_msg() {
    local with_prefix="$1"
    local type="$2"
    local text="$3"
    if [ "$with_prefix" = true ]; then
        echo "--------[${type}]: ${text}"
    else
        echo "[${type}]: ${text}"
    fi
}

# 推送前显示远程仓库信息
print_msg true TIP "当前远程仓库配置"
git remote -v
echo ""

# 获取所有远程名称
remotes=$(git remote)
results=()

for remote in $remotes; do
    print_msg true TIP "推送 $BRANCH 分支到 $remote"
    if git push "$remote" "$BRANCH"; then
        results+=("$(print_msg false SUCCESS "推送 $remote 平台 $BRANCH 分支成功")")
        echo ""
    else
        results+=("$(print_msg false ERROR "推送 $remote 平台 $BRANCH 分支失败")")
        echo ""
    fi
done

# 推送结果汇总
echo ""
print_msg true TIP "推送结果汇总"
for result in "${results[@]}"; do
    echo "$result"
done

echo ""
print_msg true END "所有推送操作完成, 请检查推送结果是否符合预期!"