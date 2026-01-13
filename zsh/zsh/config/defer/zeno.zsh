# zeno
export ZENO_HOME=$XDG_CONFIG_HOME/zeno
export ZENO_ENABLE_FZF_TMUX=1

if [[ -n $ZENO_LOADED ]]; then
    bindkey ' ' zeno-auto-snippet
    bindkey '^m' zeno-auto-snippet-and-accept-line
    # TODO: fzf周りの設定弄ったらエラーでるようになっちゃったので後で調べる
    # bindkey '^i' zeno-completion

    # 遅くて若干微妙なのでOFF
    # bindkey '^s' zeno-ghq-cd
fi
