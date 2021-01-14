HISTFILE=$HOME/.zsh_histfile
HISTSIZE=10000
SAVEHIST=500000

# rootは履歴を保存しない
if [ $UID = 0 ]; then
    unset HISTFILE
    SAVEHIST=0
fi

setopt extended_history     # 履歴ファイルに実行時間・経過時間を記録
setopt hist_expand          # 補完時にヒストリを自動的に展開
setopt hist_ignore_all_dups # 履歴ファイルに重複して保存しない
setopt hist_ignore_dups     # 直前と同じコマンドは履歴ファイルに保存しない
setopt hist_ignore_space    # スペースで始まるコマンドは履歴ファイルに保存しない
setopt hist_no_store        # historyコマンドは履歴ファイルに保存しない
setopt hist_reduce_blanks   # 余分なスペースを削除して履歴ファイルに保存する
setopt share_history        # 履歴ファイルを共有する

# C-pとC-nでコマンド履歴検索
autoload history-search-end
zle -N history-beginning-search-backward-end history-search-end
zle -N history-beginning-search-forward-end history-search-end
bindkey "^P" history-beginning-search-backward-end
bindkey "^N" history-beginning-search-forward-end

function hs () {
    n_hist_default=1000000

    n_hist=${1#-}

    if [ $1 != '' -a $n_hist != $1 ]; then
        shift

        if [ $n_hist -gt 0 ]; then
        else
            n_hist=$n_hist_default
        fi
    else
        n_hist=$n_hist_default
    fi

    words=($*)

    greps=""
    for w in $words; do
        greps="${greps} | =grep ${w}"
    done

    eval "history -i -${n_hist} ${greps}"
}

alias ha="history -i 1"
