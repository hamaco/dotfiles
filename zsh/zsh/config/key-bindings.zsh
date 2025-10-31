# Ctrl+左右で単語単位のカーソル移動
bindkey '^[[5C' forward-word
bindkey '^[[5D' backward-word

# Ctrl+]で直前に実行したコマンドの最後の単語を挿入
# http://d.hatena.ne.jp/mollifier/20091220 {{{
autoload -Uz smart-insert-last-word
zle -N insert-last-word smart-insert-last-word
zstyle :insert-last-word match '*([^[:space:]][[:alpha:]/\\]|[[:alpha:]/\\][^[:space:]])*'
bindkey '^]' insert-last-word

