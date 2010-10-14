# Basic: 基本設定 ================================================= {{{1
# キーバインドをEmacs風にする
bindkey -e

bindkey "u" undo
bindkey "r" redo
bindkey "^R" history-incremental-pattern-search-backward
# Ctrl+左右で単語単位のカーソル移動
bindkey "[5C" forward-word
bindkey "[5D" backward-word

umask 022

cdpath=($HOME /web/hamaco /web/bnsi)

# コアダンプサイズを制限
limit coredumpsize 102400
ulimit -c 0  # Don't create core dumps


#色の定義
local DEFAULT=$'%{[m%}'$
local RED=$'%{[1;31m%}'$
local GREEN=$'%{[1;32m%}'$
local YELLOW=$'%{[1;33m%}'$
local BLUE=$'%{[1;34m%}'$
local PURPLE=$'%{[1;35m%}'$
local LIGHT_BLUE=$'%{[1;36m%}'$
local WHITE=$'%{[1;37m%}'$




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
setopt hist_expand          # 補完時にヒストリを自動的に展開
setopt hist_ignore_all_dups # 履歴ファイルに重複して保存しない
setopt hist_ignore_dups     # 直前と同じコマンドは履歴ファイルに保存しない
setopt hist_ignore_space    # スペースで始まるコマンドは履歴ファイルに保存しない
setopt hist_no_store        # historyコマンドは履歴ファイルに保存しない
setopt hist_reduce_blanks   # 余分なスペースを削除して履歴ファイルに保存する
setopt no_hup               # ログアウト時にバックグラウンドジョブをkillしない
setopt ignore_eof           # C-dでexitしない
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
	HISTSIZE=10000
	SAVEHIST=10000
fi

# C-pとC-nでコマンド履歴検索
autoload history-search-end
zle -N history-beginning-search-backward-end history-search-end
zle -N history-beginning-search-forward-end history-search-end
bindkey "^P" history-beginning-search-backward-end
bindkey "^N" history-beginning-search-forward-end




# Completion: 補完設定 ==================================================== {{{1
fpath=($fpath ~/.zsh/functions)

autoload -Uz compinit; compinit -u

WORDCHARS='*?_-.[]~=&;!#$%^(){}<>'
LISTMAX=0

# 補完時に大文字小文字を区別しない
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' '+m:{A-Z}={a-z}'

# 補完結果をキャッシュする(apt-get etc)
zstyle ":completion:*" use-cache true

zstyle ':completion:*' verbose yes
zstyle ':completion:*' completer _expand _complete _match _prefix _approximate _list _history
zstyle ':completion:*:messages' format $YELLOW'%d'$DEFAULT
zstyle ':completion:*:warnings' format $RED'No matches for:'$YELLOW' %d'$DEFAULT
zstyle ':completion:*:descriptions' format $YELLOW'completing %B%d%b'$DEFAULT
zstyle ':completion:*:corrections' format $YELLOW'%B%d '$RED'(errors: %e)%b'$DEFAULT
zstyle ':completion:*:options' description 'yes'

# カレントディレクトリに候補がない場合のみ cdpath 上のディレクトリを候補
zstyle ":completion:*:cd:*" tag-order local-directories path-directories
#cd は親ディレクトリからカレントディレクトリを選択しないので表示させないようにする (例: cd ../<TAB>):
zstyle ':completion:*:cd:*' ignore-parents parent pwd

# 補完候補をカーソルで移動可能にする
zstyle ":completion:*:default" menu select=2
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






# Prompt: 画面回りの設定 ================================================== {{{1
setopt promptsubst
autoload -U promptinit; promptinit

prompt hamaco

case "${OSTYPE}" in
linux*)
	export LS_COLORS='di=36:ln=35:so=32:pi=33:ex=31:bd=46;34:cd=43;34:su=41;30:sg=46;30:tw=42;30:ow=43;30'
	alias ls="ls -F --color=auto"
	;;
freebsd*|darwin*)
	export LSCOLORS=gxfxcxdxbxegedabagacad
	alias ls="ls -G"
	;;
esac



# Functions: ============================================================== {{{1
function chpwd() {
	_reg_pwd_screennum
	ls -G
}

rationalise-dot() {
	if [[ $LBUFFER = *.. ]]; then
		LBUFFER+=/..
	else
		LBUFFER+=.
	fi
}
zle -N rationalise-dot
bindkey . rationalise-dot


function u()
{
	if [ $# = 1 ]; then
		cd ./$(git rev-parse --show-cdup)/$1
	else
		cd ./$(git rev-parse --show-cdup)
	fi
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
alias zmv="noglob zmv"



# Include: マシン・OSごとの設定 ====================================== {{{1
for file in aliases
do
	[ -f ~/.zsh/zsh_$file ] && source ~/.zsh/zsh_$file
done

osconf="$HOME/.zsh/.zshrc.`uname`"
[ -f $osconf ] && source $osconf

localconf="$HOME/.zsh/hosts/${HOST%%.*}.zshrc"
[ -f $localconf ] && source $localconf




# Terminal: ターミナル毎の設定 ============================================ {{{1
case "${TERM}" in
xterm*|kterm*)
	precmd() {
		echo -ne "\033]0;${USER}@${HOST%%.*}:${PWD}\007"
	}
	sc
	;;
screen*) # これtscreenで動かない
	function ssh_screen() {
		eval server=\${$#}
		screen -t s:$server ssh "$@"
	}
	alias ssh=ssh_screen

	# dabbrev
	HARDCOPYFILE=/tmp/screen-hardcopy
	touch $HARDCOPYFILE

	dabbrev-complete () {
		local reply lines=80 # 80行分
		screen -X eval "hardcopy -h $HARDCOPYFILE"
		reply=($(sed '/^$/d' $HARDCOPYFILE | sed '$ d' | tail -$lines))
		compadd - "${reply[@]%[*/=@|]}"
	}

	zle -C dabbrev-complete menu-complete dabbrev-complete
	bindkey '^o' dabbrev-complete
	bindkey '^o^_' reverse-menu-complete
	;;
esac




# keychain {{{1
if [ -f /usr/bin/keychain ]; then
	if [ ${UID} != 0 ]; then
		keychain ~/.ssh/id_dsa
		. ~/.keychain/`hostname`-sh
	fi
fi




# 外部ファイル読み込み {{{1
source ~/.zsh/cdd

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

# END {{{1
# vim: foldmethod=marker
