ZSH_HOME="$HOME/.zsh"

umask 022
autoload -Uz add-zsh-hook

fpath=($ZSH_HOME/completions $fpath)
cdpath=($HOME /var/www/*(N-/))

bindkey -e


# plugin より先にやらないとダメなのでとりあえずここで……
alias ssh="cat ~/.ssh/conf.d/**/*.conf ~/.ssh/conf.d/config > ~/.ssh/config; ssh"
alias scp="cat ~/.ssh/conf.d/**/*.conf ~/.ssh/conf.d/config > ~/.ssh/config; scp"
alias git="cat ~/.ssh/conf.d/**/*.conf ~/.ssh/conf.d/config > ~/.ssh/config; git"

# load plugins
source_files $ZSH_HOME/plugins/*/zshrc(N-.)
source_files $ZSH_HOME/config/*.zsh(N-.)


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


#色の定義
# local DEFAULT=$'%{[m%}'$
# local RED=$'%{[1;31m%}'$
# local GREEN=$'%{[1;32m%}'$
# local YELLOW=$'%{[1;33m%}'$
# local BLUE=$'%{[1;34m%}'$
# local PURPLE=$'%{[1;35m%}'$
# local LIGHT_BLUE=$'%{[1;36m%}'$
# local WHITE=$'%{[1;37m%}'$





# History: ============================================================= {{{
# rootは履歴を保存しない
if [ $UID = 0 ]; then
	unset HISTFILE
	SAVEHIST=0
else
	HISTFILE=~/.zsh_histfile
	HISTSIZE=500000
	SAVEHIST=500000
fi

# C-pとC-nでコマンド履歴検索
autoload history-search-end
zle -N history-beginning-search-backward-end history-search-end
zle -N history-beginning-search-forward-end history-search-end
bindkey "^P" history-beginning-search-backward-end
bindkey "^N" history-beginning-search-forward-end










# Functions: ============================================================== {{{1
function rationalise-dot() {
	if [[ $LBUFFER = *.. ]]; then
		LBUFFER+=/..
	else
		LBUFFER+=.
	fi
}
zle -N rationalise-dot
bindkey . rationalise-dot


function ls_abbrev() {
    # -a : Do not ignore entries starting with ..
    # -C : Force multi-column output.
    # -F : Append indicator (one of */=>@|) to entries.
    local cmd_ls='ls'
    local -a opt_ls
    opt_ls=('-aCF' '--color=always')
    case "${OSTYPE}" in
        freebsd*|darwin*)
            if type gls > /dev/null 2>&1; then
                cmd_ls='gls'
            else
                # -G : Enable colorized output.
                opt_ls=('-aCFG')
            fi
            ;;
    esac

    local ls_result
    ls_result=$(CLICOLOR_FORCE=1 COLUMNS=$COLUMNS command $cmd_ls ${opt_ls[@]} | sed $'/^\e\[[0-9;]*m$/d')

    local ls_lines=$(echo "$ls_result" | wc -l | tr -d ' ')

    if [ $ls_lines -gt 6 ]; then
        echo "$ls_result" | head -n 3
        echo '...'
        echo "$ls_result" | tail -n 3
        echo "$(command ls -1 -A | wc -l | tr -d ' ') files exist"
    else
        echo "$ls_result"
    fi
}


# 上位ディレクトリを指定するcd
up() {
	if [ "$1" = "" ]; then
		cd ../
		return 1
	fi

	to=$(perl -le '$p=$ENV{PWD}."/";$d="/".$ARGV[0]."/";$r=rindex($p,$d);\
		$r>=0 && print substr($p, 0, $r+length($d))' $1)

	if [ "$to" = "" ]; then
		echo "no such file or directory: $1" 1>&2
		return 1
	fi

	cd $to
}


# Tmp: 一時的な設定 ======================================================= {{{1

# kana's nice tool
function git-gol() {
  for i in $(git log --pretty=oneline | head -n 10 | tail -r | cut -d ' ' -f 1); do git show $i --color-words; done | less
}
function git-gol-full() {
  for i in $(git log --pretty=oneline | tail -r | cut -d ' ' -f 1); do git show $i --color-words; done | less
}

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

# SSHのagent forward
# http://www.funtoo.org/wiki/Keychain
exists keychain && eval `keychain --eval --agents ssh id_dsa`


function chpwd() { ls_abbrev }
typeset -ga chpwd_functions


#######

function _delete-char-or-list-expand() {
    if [[ -z "${RBUFFER}" ]]; then
        zle list-expand
    else
        zle delete-char
    fi
}
zle -N _delete-char-or-list-expand
bindkey '^D' _delete-char-or-list-expand

#######

trap "source ~/.zshrc && rehash" USR1
alias source-zshrc-all="pkill -usr1 -u `id -u` zsh"


#######

function calc(){ awk "BEGIN{ print $* }" ;}


#######

function temp() {
  case "${OSTYPE}" in
    linux*)
      cd $(mktemp -d --tmpdir=$HOME/tmp "$(date +'%Y%m%d').$1${1:+.}XXXXXX")
      ;;
    freebsd*|darwin*)
      cd $(mktemp -d "$HOME/tmp/$(date +'%Y%m%d').$1${1:+.}XXXXXX")
      ;;
  esac

  git first
}

#######

function mcd() {
  mkdir -p "$1" && cd "$1"
}
compdef mcd=cd

#######

REPORTTIME=3 # 3秒以上掛かるコマンドは詳細表示する

#######

# http://qiita.com/mollifier/items/81a9daf716d94b63f94f
alias run-help >/dev/null 2>&1 && unalias run-help
autoload -Uz run-help
autoload -Uz run-help-git
autoload -Uz run-help-svn

#######

# iTerm2のタブ名を変更する
function title {
    echo -ne "\033]0;"$*"\007"
}

#######

# scpコマンドそのままfswatch化
function fwscp() {
    SOURCE=$1
    DEST=$2

    echo fswatch ./$(dirname $SOURCE) \"scp $SOURCE $DEST\"
    fswatch ./$(dirname $SOURCE) "scp $SOURCE $DEST"
}
