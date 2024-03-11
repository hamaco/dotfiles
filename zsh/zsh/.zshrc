source $XDG_CONFIG_HOME/zsh/main.zsh
source_if $HOME/.zshrc.local

function ssh() { # tmux起動時
    if [[ -n $(printenv TMUX) ]] ; then
        local pane_id=$(tmux display -p '#{pane_id}')

        command tmux select-pane -P 'bg=colour52,fg=white'
        command ssh $@
        command tmux select-pane -t $pane_id -P 'default'
    else
        command ssh $@
    fi
}

function mssh() {
    if [ $# -lt 1 ]; then
        echo "Usage: mssh {remote_ip} [mysql_ip:127.0.0.1] [local_port:13306]"
        return 1
    fi

    REMOTE_SERVER=$1
    MYSQL_IP=${2:-127.0.0.1}
    LOCAL_PORT=${3:-13306}

    ssh -o ControlMaster=no -N -L 0.0.0.0:${LOCAL_PORT}:${MYSQL_IP}:3306 $REMOTE_SERVER
}
compdef mssh=ssh

alias remove-zone-identifier="rm ./*:Zone.Identifier"

function random-string-make() {
    STRLEN=${1:-20}

    if [ "$(uname)" != "Darwin" ]; then
        # これ mac では動かない
        echo -n $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w $STRLEN | head -n 1) | pbcopy
        # こっちでいける？
        # LC_CTYPE=C tr -dc A-Za-z0-9 < /dev/urandom | head -c $STRLEN
    else
        openssl rand -base64 256 | tr -d '\n+/=' | head -c $STRLEN | pbcopy
    fi
}

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

if [[ "$(uname -r)" == *microsoft* ]]; then
    interop="/run/WSL/interop"
    if [[ -S "$WSL_INTEROP" ]]; then
        case $WSL_INTEROP in
            /run/WSL/interop)
                export WSL_INTEROP=$interop
                ;;
            /run/WSL/*_interop)
                ln -snf "$WSL_INTEROP" $interop && export WSL_INTEROP=$interop
                ;;
        esac
    fi
    fix-wsl2-interop() {
        export WSL_INTEROP=
        for socket in /run/WSL/*_interop; do
            if ss -elx | grep -q "$socket"; then
                export WSL_INTEROP=$socket
            else
                rm $socket
            fi
        done

        if [[ -z $WSL_INTEROP ]]; then
            echo -e "\033[31mNo working WSL_INTEROP socket found !\033[0m" 
        fi
    }
fi

function ssl-info() {
    if [[ $1 == "" ]]; then
        echo 'Usage ssl-info {domain}'
        return
    fi

    if [ "$(uname)" != "Darwin" ]; then
        echo | openssl s_client -connect $1:${2:-443} 2> /dev/null | openssl x509 -noout -issuer -subject -dates
    else
        echo | openssl s_client -connect $1:${2:-443} 2> /dev/null | openssl x509 -noout -issuer -subject -dates -ext subjectAltName
    fi
}
autoload -U +X bashcompinit && bashcompinit
complete -o nospace -C /opt/homebrew/bin/bit bit
