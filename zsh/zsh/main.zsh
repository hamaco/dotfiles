ZSH_HOME="$HOME/.zsh"

function source_if() {
	[[ -s "$1" ]] && source "$1"
}


umask 022

fpath=($ZSH_HOME/completions $fpath)
cdpath=($HOME /var/www/*(N-/))

# load plugins
for plugin_config ($ZSH_HOME/plugins/*/zshrc(N-.))
do
  source $plugin_config
done

# load config
for config_file ($ZSH_HOME/config/*.zsh(N-.))
do
	source $config_file
done


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


autoload -Uz add-zsh-hook



# History: ============================================================= {{{
# rootは履歴を保存しない
if [ $UID = 0 ]; then
	unset HISTFILE
	SAVEHIST=0
else
	HISTFILE=~/.zsh_histfile
	HISTSIZE=250000
	SAVEHIST=250000
fi

# C-pとC-nでコマンド履歴検索
autoload history-search-end
zle -N history-beginning-search-backward-end history-search-end
zle -N history-beginning-search-forward-end history-search-end
bindkey "^P" history-beginning-search-backward-end
bindkey "^N" history-beginning-search-forward-end










# Prompt: 画面回りの設定 ================================================== {{{1
setopt promptsubst
autoload -U promptinit; promptinit




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


function do_enter() {
    if [ -n "$BUFFER" ]; then
        zle accept-line
        return 0
    fi
    echo
    echo -e "\e[0;33m--- ls ---\e[0m"
    # ls
    # ↓おすすめ
    ls_abbrev
    if [ "$(git rev-parse --is-inside-work-tree 2> /dev/null)" = 'true' ]; then
        echo
        echo -e "\e[0;33m--- git status ---\e[0m"
        git status -sb
        echo
    fi
    zle reset-prompt
    return 0
}
zle -N do_enter
# bindkey '^m' do_enter


# gitのトップレベルに移動
function u()
{
	if [ $# = 1 ]; then
		cd ./$(git rev-parse --show-cdup)/$1
	else
		cd ./$(git rev-parse --show-cdup)
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


# Alias: === {{{1
# cho45 ~/
expand-to-home-or-insert () {
	if [ "$LBUFFER" = "" -o "$LBUFFER[-1]" = " " ]; then
		LBUFFER+="~/"
	else
		zle self-insert
	fi
}
zle -N expand-to-home-or-insert
#bindkey "\\"  expand-to-home-or-insert

autoload zmv
alias zmv="noglob zmv -W"



# Include: マシン・OSごとの設定 ====================================== {{{1



# Terminal: ターミナル毎の設定 ============================================ {{{1
case "${TERM}" in
	xterm*|kterm*)
		precmd() {
			echo -ne "\033]0;${USER}@${HOST%%.*}:${PWD}\007"
		}
		;;
	screen*)
		function ssh_tmux() {
			eval server=\${$#}
			tmux new-window -n s:$server "ssh $*"
		}
		alias ssh=ssh_tmux
		;;
esac




# 外部ファイル読み込み {{{1
#source ~/.zsh/rpwd

# Tmp: 一時的な設定 ======================================================= {{{1

# kana's nice tool
function git-gol() {
  for i in $(git log --pretty=oneline | head -n 10 | tail -r | cut -d ' ' -f 1); do git show $i --color-words; done | less
}
function git-gol-full() {
  for i in $(git log --pretty=oneline | tail -r | cut -d ' ' -f 1); do git show $i --color-words; done | less
}


# kana's prompt git branch {{{
function prompt-git-head-name() {
  local git_dir="$(git rev-parse --git-dir 2>/dev/null)"
  if [ -z "$git_dir" ]; then
    return 1
  fi
  local head_name=''
  local additional_info=''
  if [ -d "$git_dir/rebase-apply" ]; then
    if [ -f "$git_dir/rebase-apply/rebasing" ]; then
      additional_info="REBASE"
    elif [ -f "$git_dir/rebase-apply/applying" ]; then
      additional_info="AM"
    else
      additional_info="AM/REBASE"
    fi
    head_name="$(git symbolic-ref HEAD 2>/dev/null)"
  elif [ -f "$git_dir/rebase-merge/interactive" ]; then
    additional_info="REBASE-i"
    head_name="$(< "$git_dir/rebase-merge/head-name")"
  elif [ -d "$git_dir/rebase-merge" ]; then
    additional_info="REBASE-m"
    head_name="$(< "$git_dir/rebase-merge/head-name")"
  elif [ -f "$git_dir/MERGE_HEAD" ]; then
    additional_info="MERGING"
    head_name="$(git symbolic-ref HEAD 2>/dev/null)"
  fi
  if [ -z "$head_name" ]; then
    head_name="$(git branch | sed -e 's/^\* //;t;d')"
    if [ "$head_name" = '(no branch)' ]; then
      # "git branch" doesn't show the correct name of a branch after
      # "git checkout {commitish-and-not-the-head-of-a-branch}",
      # so we have to use another method to get the name of {commitish}.
      head_name="($(
        {
          fgrep 'checkout: moving from ' .git/logs/HEAD |
          sed '$s/^.* to \([^ ]*\)$/\1/;t;d'
        } 2>/dev/null
      ))"
    elif [ "$head_name" = '' ]; then
      head_name='(just initialized; nothing commited)'
    fi
  else
    head_name="${head_name##refs/heads/}"
  fi
  if [ -n "$additional_info" ]; then
    additional_info="|$additional_info"
  fi

  echo " [$head_name$additional_info]"
  return 0
} # }}}

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

# http://d.hatena.ne.jp/hchbaw/20100526/1274886125 {{{
#source $HOME/.zsh/auto-fu.zsh; zle-line-init () { auto-fu-init; }; zle -N zle-line-init
# }}}

# SSHのagent forward
# # http://www.cuspy.org/blog/archives/297
# if [ "$SSH_AUTH_SOCK" -a "$SSH_AUTH_SOCK" != "$HOME/.ssh/auth_sock" ]; then
#   ln -fs $SSH_AUTH_SOCK $HOME/.ssh/auth_sock
#   export SSH_AUTH_SOCK=$HOME/.ssh/auth_sock
# fi
# http://www.funtoo.org/wiki/Keychain
exists keychain && eval `keychain --eval --agents ssh id_dsa`


# function chpwd() { ls }
function chpwd() { ls_abbrev }
typeset -ga chpwd_functions

function _naverc_check() {
if [[ -f '.naverc' ]] ; then
	source '.naverc'
	fi
}
chpwd_functions+=_naverc_check

#eval "$(rbenv init -)"




##### tmux #####
if exists tmux; then
	tmuxx() {
		if [[ ( $OSTYPE == darwin* ) && ( -x $(which reattach-to-user-namespace 2>/dev/null) ) ]]; then
			# on OS X force tmux's default command to spawn a shell in the user's namespace
			tmux_config=$(cat $HOME/.tmux.conf <(echo 'set-option -g default-command "reattach-to-user-namespace -l zsh"'))
			tmux -f <(echo "$tmux_config") new-session -d && echo "tmux created new session supported OS X"
		else
			tmux new-session && echo "tmux created new session"
		fi
	}

	if [ -z "$TMUX" -a "$TERM" != "screen" ]; then
		tmuxx
	fi
fi

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

if exists percol; then
    function percol_select_history() {
        local tac
        exists gtac && tac="gtac" || { exists tac && tac="tac" || { tac="tail -r" } }
        BUFFER=$(history -n 1 | eval $tac | percol --query "$LBUFFER")
        CURSOR=$#BUFFER         # move cursor
        zle -R -c               # refresh
    }

    zle -N percol_select_history
    bindkey '^R' percol_select_history
fi

#######

temp() {
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

function tenki() {
  local spot=$1

  if [ "$spot" = "" ]; then
    spot="東京"
  fi

  weather-report "東京"
}

#######

REPORTTIME=3 # 3秒以上掛かるコマンドは詳細表示する

#######

