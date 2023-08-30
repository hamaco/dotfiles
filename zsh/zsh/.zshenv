function exists()       { command -v $1 &> /dev/null  }
function source_if()    { [[ -f $1 ]] && source "$1" } 
function source_files() { for file in $@; do source $file; done }

# EXPORT: ====================
export TZ="Asia/Tokyo"
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

export XDG_CONFIG_HOME=$HOME/.config
export XDG_CACHE_HOME=$HOME/.cache
export XDG_DATA_HOME=$HOME/.local/share
export XDG_STATE_HOME=$HOME/.local/state

export LESS="-er --tabs=4 --no-init --LONG-PROMPT --ignore-case"

export EDITOR=vim
export SVN_EDITOR=vim

export MYSQL_PS1="\\u@\\h:\\d>\\_"

export GOPATH=$HOME
export VOLTA_HOME=${XDG_CACHE_HOME}/volta
export HOMEBREW_CASK_OPTS="--appdir=/Applications" 
export AQUA_GLOBAL_CONFIG=${AQUA_GLOBAL_CONFIG:-}:${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml
export RIPGREP_CONFIG_PATH=${XDG_CONFIG_HOME}/ripgrep/ripgreprc

# PATH: ======================
# 重複する要素を自動的に削除
typeset -U path cdpath fpath manpath

path=(
  $HOME/bin(N-/)
  $HOME/app/*/bin(N-/)
  $HOME/app/*/*/bin(N-/)
  $HOME/.composer/vendor/bin(N-/)
  $HOME/.config/composer/vendor/bin(N-/)

  ${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin(N-/)
  $VOLTA_HOME/bin(N-/)

  /opt/homebrew/bin(N-/)
  /opt/homebrew/opt/git/share/git-core/contrib/diff-highlight(N-/)
  /opt/homebrew/opt/openjdk/bin(N-/)

  /usr/local/heroku/bin(N-/)
  /usr/local/bin(N-/)
  /usr/local/share/git-core/contrib/diff-highlight(N-/)

  /home/linuxbrew/.linuxbrew/bin(N-/)
  /home/linuxbrew/.linuxbrew/sbin(N-/)

  $HOME/Library/Android/sdk/platform-tools(N-/)
  $HOME/Library/Application\ Support/JetBrains/Toolbox/scripts(N-/)

  $path
)
