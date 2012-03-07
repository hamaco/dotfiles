# PATH: ================== {{{1
# 重複する要素を自動的に削除
typeset -U path cdpath fpath manpath

path=(
$HOME/bin(N-/)
$HOME/app/*/bin(N-/)
$HOME/app/*/*/bin(N-/)

/bin(N-/)
/sbin(N-/)

/opt/bin(N-/)
/opt/*/bin(N-/)
/opt/local/*/bin(N-/)

/opt/sbin(N-/)
/opt/*/sbin(N-/)
/opt/local/*/sbin(N-/)

/usr/bin(N-/)
/usr/*/bin(N-/)
/usr/local/*/bin(N-/)

/usr/sbin(N-/)
/usr/*/sbin(N-/)
/usr/local/*/sbin(N-/)

$HOME/.gem/ruby/*/bin(N-/)
/var/lib/gems/*/bin(N-/)

$HOME/.rbenv/bin(N-/)
$HOME/.cabal/bin(N-/)
$HOME/.autojump/bin(N-/)

$path)
# }}}


# Export: ================ {{{1
export TZ="Asia/Tokyo"
export LANG="ja_JP.UTF-8"
#export LANG="en_US.UTF-8"

export PAGER="less"
export LESS="-er --tabs=4 --no-init --LONG-PROMPT --ignore-case"

export EDITOR=vim
export SVN_EDITOR=vim

export MYSQL_PS1="\\u@\\h:\\d>\\_"
#export SCREENDIR="${HOME}/.screen"

export SABEL_HOME="/sabel"
# }}}



# END {{{1
# vim: foldmethod=marker
