
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
