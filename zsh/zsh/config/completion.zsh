WORDCHARS='*?_-.[]~=&;!#$%^(){}<>'
LISTMAX=0

autoload -Uz compinit; compinit -u

# パスの補完速度が上がるらしい
zstyle ':completion:*' accept-exact '*(N)'

# 補完時に大文字小文字を区別しない
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' '+m:{A-Z}={a-z}'

# 補完結果をキャッシュする(apt-get etc)
if [ -d ~/.zsh/cache ];  then
	zstyle ":completion:*" use-cache yes
	zstyle ":completion:*" cache-path ~/.zsh/cache
fi

# zstyle ':completion:*' verbose yes
# # zstyle ':completion:*' completer _expand _complete _match _prefix _approximate _list _history
# zstyle ':completion:*' completer _expand _complete _match _prefix _approximate _history
# zstyle ':completion:*:messages' format $YELLOW'%d'$DEFAULT
# zstyle ':completion:*:warnings' format $RED'No matches for:'$YELLOW' %d'$DEFAULT
# zstyle ':completion:*:descriptions' format $YELLOW'completing %B%d%b'$DEFAULT
# # zstyle ':completion:*:corrections' format $YELLOW'%B%d '$RED'(errors: %e)%b'$DEFAULT
# zstyle ':completion:*:options' description 'yes'

# カレントディレクトリに候補がない場合のみ cdpath 上のディレクトリを候補
zstyle ":completion:*:cd:*" tag-order local-directories path-directories
#cd は親ディレクトリからカレントディレクトリを選択しないので表示させないようにする (例: cd ../<TAB>):
zstyle ':completion:*:cd:*' ignore-parents parent pwd ..

# select の数字以上補完候補があれば補完候補をカーソルで移動可能にする
zstyle ":completion:*:default" menu select=1
# 補完候補にもLS_COLORSを使う
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}

# オブジェクトファイルとか中間ファイルを補完させない
zstyle ':completion:*:*files' ignored-patterns '*?.o' '*?~' '*\#'

# killの補完を詳細にして色付け
zstyle ':completion:*:processes' command 'ps x -o pid,s,args'
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([%0-9]#)*=0=01;31'

# sudoでもコマンドの補完が動くようにする
zstyle -e ":completion:*:sudo:*" command-path 'reply=($path)'

# グループ名に空文字列を指定すると，マッチ対象のタグ名がグループ名に使われる。
# したがって，すべての マッチ種別を別々に表示させたいなら以下のようにする
zstyle ':completion:*' group-name ''


# tmuxの画面に表示されてる文字列を補完する
# http://secondlife.hatenablog.jp/entry/20060108/1136650653
HARDCOPYFILE=/tmp/tmux-hardcopy
touch $HARDCOPYFILE

dabbrev-complete () {
  local reply lines=80

  =tmux capture-pane && =tmux save-buffer $HARDCOPYFILE && =tmux delete-buffer -b 0
  reply=($(sed '/^$/d' $HARDCOPYFILE | sed '$ d' | tail -$lines))

  compadd -Q - "${reply[@]%[*/=@|]}"
}

zle -C dabbrev-complete menu-complete dabbrev-complete
bindkey '^o' dabbrev-complete
bindkey '^o^_' reverse-menu-complete
