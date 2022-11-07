umask 022
autoload -Uz add-zsh-hook

fpath=($ZDOTDIR/completions $fpath)
cdpath=($HOME /var/www/*(N-/))

bindkey -e

# load plugins
source_files $ZDOTDIR/plugins/*/zshrc(N-.)
source_files $ZDOTDIR/config/*.zsh(N-.)

## 分割待ち ##

case "${OSTYPE}" in
    linux*)
        alias ls="ls -F --color=auto"
        ;;
    freebsd*|darwin*)
        alias ls="ls -G"
        ;;
esac

# コアダンプサイズを制限
limit coredumpsize 102400
ulimit -c 0  # Don't create core dumps

# Tmp: 一時的な設定 ======================================================= {{{1

# http://d.hatena.ne.jp/mollifier/20091220 {{{
autoload smart-insert-last-word
zle -N insert-last-word smart-insert-last-word
zstyle :insert-last-word match '*([^[:space:]][[:alpha:]/\\]|[[:alpha:]/\\][^[:space:]])*'
bindkey '^]' insert-last-word

autoload -U modify-current-argument
# シングルクォート用
_quote-previous-word-in-single() {
    modify-current-argument '${(qq)${(Q)ARG}}'
    zle vi-forward-blank-word
}
zle -N _quote-previous-word-in-single
bindkey '^[s' _quote-previous-word-in-single

# ダブルクォート用
_quote-previous-word-in-double() {
    modify-current-argument '${(qqq)${(Q)ARG}}'
    zle vi-forward-blank-word
}
zle -N _quote-previous-word-in-double
bindkey '^[d' _quote-previous-word-in-double

# }}}

#######

REPORTTIME=3 # 3秒以上掛かるコマンドは詳細表示する

#######

# ESC hでmanを見れるようにする
# http://qiita.com/mollifier/items/81a9daf716d94b63f94f
alias run-help >/dev/null 2>&1 && unalias run-help
autoload -Uz run-help
autoload -Uz run-help-git
autoload -Uz run-help-svn

# zeno
export ZENO_HOME=$XDG_CONFIG_HOME/zeno
export ZENO_ENABLE_FZF_TMUX=1
if [[ -n $ZENO_LOADED ]]; then
    bindkey ' ' zeno-auto-snippet
    bindkey '^m' zeno-auto-snippet-and-accept-line
    bindkey '^i' zeno-completion
    # bindkey '^d' zeno-completion

    bindkey '^s' zeno-ghq-cd
fi
