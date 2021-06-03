# Alias: エイリアス ========= {{{1

alias pt="pt --global-gitignore"

alias %=" " # webにあるコマンドをコピペで実行出来るようにする

alias df="df -hl"
alias wget="noglob wget --no-check-certificate"
alias calc="noglob calc"

alias sudo="sudo -E " # sudoでもaliasが使えるようにする

# for ls
alias sl="ls"
alias l="ls -a"
alias ll="ls -l"
alias la="ls -la"

alias less="less --no-init --quit-if-one-screen -g -R"

# for vim
alias v="vim"
alias gv="gvim"
alias pvim="vim -u NONE -i NONE -N"
alias pgvim="gvim -u NONE -i NONE -N"

# for emacs
alias e="emacsclient"

alias crontab="crontab -i"

# for dstat
alias dstat-full="dstat -Tclmdrn"
alias dstat-mem="dstat -Tclm"
alias dstat-cpu="dstat -Tclr"
alias dstat-net="dstat -Tclnd"
alias dstat-disk="dstat -Tcldr"

alias delete-empty-dir="find . -type d -empty -delete"

alias be="bundle exec"
alias vag="vagrant"
alias c="composer"
alias a="php artisan"
alias oil="noglob oil"

alias d="docker"
alias dc="docker-compose"
alias phpstan='docker run --rm -it -v $(pwd):/app phpstan/phpstan'
alias psalm='docker run --rm -it -v $(pwd):/app crewbit/psalm'
# alias phan="docker run --rm -it -v $(pwd):/app crewbit/phan"
phan() { docker run -v $PWD:/mnt/src --rm -u "$(id -u):$(id -g)" cloudflare/phan:latest $@; return $?; }
alias php7cc='docker run --rm -it -v $(pwd):/app crewbit/php7cc'
alias phpinsights='docker run --rm -it -v $(pwd):/app crewbit/phpinsights'
alias d-ridgepole='docker run --rm -it -v $(pwd):/provision crewbit/ridgepole'
alias d-npm='docker run --rm -it -v $(pwd):/app -w /app node npm'
alias d-npm10='docker run --rm -it -v $(pwd):/app -w /app node:10 npm'
alias d-yarn='docker run --rm -it -v $(pwd):/app -w /app node yarn'
alias d-yarn10='docker run --rm -it -v $(pwd):/app -w /app node:10 yarn'

alias weather="curl http://wttr.in/東京"

for command in nautilus caja thunar nemo
do
    if exists $command; then
        alias open=$command
    fi
done
if exists explorer.exe; then
    open () {
        explorer.exe ${1//\//\\}
    }
fi

case "${OSTYPE}" in
linux*)
    ;;
darwin*)
    if [ -f "/Applications/Emacs.app/Contents/MacOS/Emacs" ]; then
        alias emacs="/Applications/Emacs.app/Contents/MacOS/Emacs"
    fi

    fmount () {
        echo "mounting $1"
        osascript -e "tell application \"Finder\" to mount volume \"$1\""
    }

    dic () {
        open dict://"$@" ; say "$@"
    }

    alias hiddenDesktop="chflags hidden ~/Desktop/*"
    alias nohiddenDesktop="chflags nohidden ~/Desktop/*"

    ;;
esac

# }}}

# Suffix: 接尾辞エイリアス ========= {{{1

alias -s txt=cat
alias -s php="php -F"
alias -s log=less
alias -s jar="java -jar"
function extract() {
  case $1 in
    *.tar.gz|*.tgz) tar xzvf $1;;
    *.tar.xz) tar Jxvf $1;;
    *.zip) unzip $1;;
    *.lzh) lha e $1;;
    *.tar.bz2|*.tbz) tar xjvf $1;;
    *.tar.Z) tar zxvf $1;;
    *.gz) gzip -dc $1;;
    *.bz2) bzip2 -dc $1;;
    *.Z) uncompress $1;;
    *.tar) tar xvf $1;;
    *.arj) unarj $1;;
  esac
}
alias -s {gz,tgz,zip,lzh,bz2,tbz,Z,tar,arj,xz}=extract

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

bindkey -s '5~' 'f5\n' # F5
bindkey -s '7~' 'f6\n' # F6
bindkey -s '8~' 'f7\n' # F7
bindkey -s '9~' 'f8\n' # F8

# }}}

# END {{{1
# vim: foldmethod=marker
# }}}
