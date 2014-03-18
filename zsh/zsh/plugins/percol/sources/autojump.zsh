# percol で z / autojump のようにディレクトリ高速ジャンプ - Slip Ahead Logging <http://stillpedant.hatenablog.com/entry/percol-cd-history>
# cd 履歴を記録
typeset -ga chpwd_functions
CD_HISTORY_FILE=${HOME}/.cd_history_file # cd 履歴の記録先ファイル
function chpwd_record_history() {
    echo $PWD >> ${CD_HISTORY_FILE}
}
chpwd_functions+=chpwd_record_history

# percol を使って cd 履歴の中からディレクトリを選択
# 過去の訪問回数が多いほど選択候補の上に来る
function percol_get_destination_from_history() {
    sort ${CD_HISTORY_FILE} | uniq -c | sort -r | \
        sed -e 's/^[ ]*[0-9]*[ ]*//' | \
        sed -e s"/^${HOME//\//\\/}/~/" | \
        percol | xargs echo
}

# percol を使って cd 履歴の中からディレクトリを選択し cd するウィジェット
function percol_cd_history() {
    local destination=$(percol_get_destination_from_history)
    if [ -n "$destination" ]; then
        echo
        cd ${destination/#\~/${HOME}}
        echo "\033[31m=>\033[0m \033[036m$destination\033[0m"
    fi
    zle reset-prompt
}
zle -N percol_cd_history

# percol を使って cd 履歴の中からディレクトリを選択し，現在のカーソル位置に挿入するウィジェット
function percol_insert_history() {
    local destination=$(percol_get_destination_from_history)
    if [ $? -eq 0 ]; then
        local new_left="${LBUFFER} ${destination} "
        BUFFER=${new_left}${RBUFFER}
        CURSOR=${#new_left}
    fi
    zle reset-prompt
}
zle -N percol_insert_history

# C-x ; でディレクトリに cd
# C-x i でディレクトリを挿入
bindkey '^x;' percol_cd_history
bindkey '^xi' percol_insert_history
