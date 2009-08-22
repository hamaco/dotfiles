# PATH: ================== {{{1
# 重複する要素を自動的に削除
typeset -U path cdpath fpath manpath

path=($path /usr/bin(N-/) /usr/*/bin(N-/) /usr/local/*/bin(N-/))
path=($path /usr/sbin(N-/) /usr/*/sbin(N-/) /usr/local/*/sbin(N-/))
path=($path /opt/bin(N-/) /opt/*/bin(N-/) /opt/local/*/bin(N-/))
path=($path /opt/sbin(N-/) /opt/*/sbin(N-/) /opt/local/*/sbin(N-/))
path=($path ${HOME}/bin(N-/) /var/lib/gems/*/bin(N-/))




# Export: ================ {{{1
export TZ="Asia/Tokyo"
export LANG="ja_JP.UTF-8"
#export LANG="en_US.UTF-8"

export PAGER="less"
export LESS="--tabs=4 --no-init --LONG-PROMPT --ignore-case"

export EDITOR=vim
export SVN_EDITOR=vim

#export SCREENDIR="${HOME}/.screen"

export SABEL_HOME="/sabel"




# END {{{1
# vim: foldmethod=marker
