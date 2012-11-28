
function exists { which $1 &> /dev/null }

function source_if() {
	[[ -s "$1" ]] && source "$1"
}

ZSH_HOME="$HOME/.zsh"

# load config
for config_file ($ZSH_HOME/config/*.zsh)
do
	source $config_file
done


for dir in $HOME/app/*
do
	source_if $dir/zshenv
done

##### z.sh #####
# https://github.com/rupa/z
_z_add() {
	_z --add "$(pwd -P)"
}

_Z_CMD=j
source $ZSH_HOME/plugins/z.sh/z.sh
add-zsh-hook precmd _z_add

##### tmux #####
if whence -p tmux > /dev/null; then
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
<<<<<<< Updated upstream

=======
#
>>>>>>> Stashed changes
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

trap "source ~/.zshrc" USR1
alias source-zshrc-all="pkill -usr1 zsh"

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
