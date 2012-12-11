function source_if() {
	[[ -s "$1" ]] && source "$1"
}

ZSH_HOME="$HOME/.zsh"

# load config
for config_file ($ZSH_HOME/config/*.zsh(N-.) $HOME/app/*/zshenv(N-.))
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
if [ -f "$HOME/.zsh/plugin/zaw/zaw.zsh" ]; then
	source "$HOME/.zsh/plugin/zaw/zaw.zsh"
	bindkey "^R" zaw-history
else
	bindkey "^R" history-incremental-pattern-search-backward
fi

umask 022

cdpath=($HOME /web/*(N-/))

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



# Setopts: ================================================================ {{{1
setopt always_last_prompt   # カーソル位置は保持したままファイル名一覧を順次その場で表示
setopt auto_cd              # cdなしでもディレクトリ移動
setopt auto_list            # ^Iで補完可能な一覧を表示する(補完候補が複数ある時に、一覧表示)
setopt auto_menu            # 補完キー連打で順に補完候補を自動で補完
setopt auto_pushd           # cdのタイミングで自動的にpushd
#setopt no_auto_remove_slash # パスの最後のスラッシュを自動で削除しない
setopt auto_resume          # サスペンド中のプロセスと同じコマンド名を実行した場合はリジューム
setopt no_beep              # ビープ音の無効化
setopt brace_ccl            # {a-c}をa b cに展開できるようにする
setopt correct              # コマンド名の自動修正
setopt extended_glob        # 拡張ファイルグロブを有効化
setopt extended_history     # 履歴ファイルに実行時間・経過時間を記録
setopt equals               # =COMMAND を COMMAND のパス名に展開
setopt no_flow_control      # C-s, C-qの無効化
setopt no_hup               # ログアウト時にバックグラウンドジョブをkillしない
setopt ignore_eof           # C-dでexitしない
setopt interactive_comments # コマンドにコメントを付けられるようにする
setopt no_list_beep         # 補完候補表示時にビープ音が鳴らないようにする
setopt list_packed          # 補完候補をつめて表示
setopt list_types           # 保管候補表示時にファイル種別を表示
setopt long_list_jobs       # jobsコマンドのデフォルトを jobs -l にする
setopt magic_equal_subst    # コマンドラインの引数で --PREFIX=/USR などの = 以降でも補完できる
setopt mark_dirs            # ファイル名の展開でディレクトリにマッチした場合 末尾に / を付加
setopt notify               # バックグラウンドジョブが終了したら(プロンプトの表示を待たずに)すぐに知らせる
setopt numeric_glob_sort    # ファイル名を数値としてソート
setopt print_eight_bit      # 補完候補リストの日本語を適正表示
setopt prompt_subst         #
setopt pushd_ignore_dups    # 同じディレクトリをpushdしない
setopt share_history        # 履歴ファイルを共有する
setopt short_loops          # FOR, REPEAT, SELECT, IF, FUNCTION などで簡略文法が使えるようになる
setopt transient_rprompt    # コマンド実行時にRPROMPTを消す




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
rationalise-dot() {
	if [[ $LBUFFER = *.. ]]; then
		LBUFFER+=/..
	else
		LBUFFER+=.
	fi
}
zle -N rationalise-dot
bindkey . rationalise-dot


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
bindkey "\\"  expand-to-home-or-insert

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
# http://www.cuspy.org/blog/archives/297
if [ "$SSH_AUTH_SOCK" -a "$SSH_AUTH_SOCK" != "$HOME/.ssh/auth_sock" ]; then
  ln -fs $SSH_AUTH_SOCK $HOME/.ssh/auth_sock
  export SSH_AUTH_SOCK=$HOME/.ssh/auth_sock
fi


function chpwd() { ls }
typeset -ga chpwd_functions

function _naverc_check() {
if [[ -f '.naverc' ]] ; then
	source '.naverc'
	fi
}
chpwd_functions+=_naverc_check

#eval "$(rbenv init -)"


## z.sh
#_Z_CMD=j
#source ~/.zsh/plugin/z.sh
#_z_add() {
#	_z --add "$(pwd -P)"
#}
#add-zsh-hook precmd _z_add


# END {{{1
# vim: foldmethod=marker




##### z.sh #####
# https://github.com/rupa/z
_z_add() {
	_z --add "$(pwd -P)"
}

_Z_CMD=j
source_if $ZSH_HOME/plugins/z.sh/z.sh
add-zsh-hook precmd _z_add

##### tmux #####
if exists tmux; then
	tmuxx() {
		if [[ ( $OSTYPE == darwin* ) && ( -x $(which reattach-to-user-namespace 2>/dev/null) ) ]]; then
			# on OS X force tmux's default command to spawn a shell in the user's namespace
			tmux_config=$(cat $HOME/.tmux.conf <(echo 'set-option -g default-command "reattach-to-user-namespace -l $SHELL"'))
			tmux -f <(echo "$tmux_config") new-session && echo "tmux created new session supported OS X"
		else
			tmux new-session && echo "tmux created new session"
		fi
	}

	if [ -z "$TMUX" ]; then
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
