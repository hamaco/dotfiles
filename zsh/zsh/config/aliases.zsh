# Alias: エイリアス ========= {{{1

# -n 行数表示, -I バイナリファイル無視, svn関係のファイルを無視
alias grep="grep --color -n -I --exclude='*.svn-*' --exclude='entries' --exclude='*/cache/*'"

# Ubuntuとかだとack-grepに変わったのでaliasする
if type ack-grep > /dev/null; then
	alias ack="ack-grep"
fi

alias %=" " # webにあるコマンドをコピペで実行出来るようにする

alias di="diff"
alias df="df -hl"
alias wget="noglob wget --no-check-certificate"
alias rake="noglob rake"

alias sudo="sudo -E " # sudoでもaliasが使えるようにする
alias s="sudo"

# for ls
alias sl="ls"
alias l="ls -a"
alias ll="ls -l"
alias la="ls -la"
alias lrt="ls -lrt"

# for vim
alias v="vim"
alias vi="vim"
alias gv="gvim"
alias pvim="vim -u NONE -i NONE -N"
alias pgvim="gvim -u NONE -i NONE -N"
alias vsh="vim -c VimShell"
alias lingr="vim -c LingrLaunch"

alias tgz="tar cvzf"
alias untar="tar xvf"

alias tmux="tmux a || tmux"

alias crontab="crontab -i"

# for git
if type hub > /dev/null; then
	eval "$(hub alias -s)"
fi
alias g="git"

alias gst="git status -sb"

alias gs="git svn"
alias gsr="git svn rebase"
alias gsd="git svn dcommit"

# for dstat
alias dstat-full="dstat -Tclmdrn"
alias dstat-mem="dstat -Tclm"
alias dstat-cpu="dstat -Tclr"
alias dstat-net="dstat -Tclnd"
alias dstat-disk="dstat -Tcldr"

alias delete-empty-dir="find . -type d -empty -delete"

alias oil="noglob oil"

for command in nautilus caja nemo
do
	if exists $command; then
		alias open=$command
	fi
done

case "${OSTYPE}" in
linux*)
	alias tbz2="tar cvjf"

	if [ -x /usr/local/bin/tscreen ]; then
		alias screen="tscreen"
	fi
	;;
darwin*)
	alias tbz2="tar cvjf"
	alias ql="qlmanage -p $@ >& /dev/null"
	alias eopen="open -a emacs"

	# macports
	#alias mysql="mysql5"

	alias emacs="open -a Emacs"
	alias vim="/Applications/MacVim.app/Contents/MacOS/Vim"
	alias mvim="/Applications/MacVim.app/Contents/MacOS/mvim"
	alias firefox="open -a Shiretoko"
	alias safari="open -a Safari"
	alias prev="open -a Preview"

	fmount () {
		echo "mounting $1"
		osascript -e "tell application \"Finder\" to mount volume \"$1\""
	}

	alias hiddenDesktop="chflags hidden ~/Desktop/*"
	alias nohiddenDesktop="chflags nohidden ~/Desktop/*"

	;;
freebsd*)
	alias tbz2="tar cvyf"
	;;
esac

# }}}

# Suffix: 接尾辞エイリアス ========= {{{1

alias -s txt=cat
#alias -s php=vim
alias -s log=less
alias -s jar="java -jar"
alias -s {gz,tgz,zip,lzh,bz2,tbz,Z,tar,arj,xz}=aunpack # aptitude install atool

case "${OSTYPE}" in
linux*)
	alias -s jpg=eog
	alias -s png=eog
	;;
darwin*)
	alias -s jpg=ql
	alias -s png=ql
	;;
esac

# }}}

# Global: グローバルエイリアス ===== {{{1

if which pbcopy >/dev/null 2>&1 ; then
	# Mac
	alias -g C='| pbcopy'
elif which xsel >/dev/null 2>&1 ; then
	# Linux
	alias -g C='| xsel --input --clipboard'
fi

# }}}

# bindkey {{{1

bindkey -s "vv" "!vim\n"
#bindkey -s P "ps auxw"
#bindkey -s G "| grep "
bindkey -s '5~' 'f5\n' # F5
bindkey -s '7~' 'f6\n' # F6
bindkey -s '8~' 'f7\n' # F7
bindkey -s '9~' 'f8\n' # F8

# }}}

# myabbrev {{{1
typeset -A myabbrev

myabbrev=(
	"px" "ps ax"

	"L"  "| less"
	"G"  "| grep"
	"U"  "--help | head"
	"NL" ">/dev/null"
	"NLL" ">/dev/null 2>&1"
	"UTF" "| nkf -w"
)

my-expand-abbrev() {
	local left prefix
	left=$(echo -nE "$LBUFFER" | sed -e "s/[_a-zA-Z0-9]*$//")
	prefix=$(echo -nE "$LBUFFER" | sed -e "s/.*[^_a-zA-Z0-9]\([_a-zA-Z0-9]*\)$/\1/")
	LBUFFER=$left${myabbrev[$prefix]:-$prefix}" "
}

zle -N my-expand-abbrev

bindkey " " my-expand-abbrev

# }}}

# END {{{1
# vim: foldmethod=marker
# }}}
