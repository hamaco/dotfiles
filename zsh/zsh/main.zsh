
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
# @TODO tmuxのコマンド存在チェックする
if [ -z "$TMUX" ]; then
	tmux
fi
