autoload -Uz chpwd_recent_dirs cdr add-zsh-hook
add-zsh-hook chpwd chpwd_recent_dirs
zstyle ':chpwd:*' recent-dirs-max 5000
zstyle ':chpwd:*' recent-dirs-default yes
zstyle ':completion:*' recent-dirs-insert both

### search a destination from cdr list
function percol-get-destination-from-cdr() {
    cdr -l | \
        sed -e 's/^[[:digit:]]*[[:blank:]]*//' | \
        percol --query "$LBUFFER"
        #percol --match-method migemo --query "$LBUFFER"
}

### search a destination from cdr list and cd the destination
function percol-cdr() {
    local destination="$(percol-get-destination-from-cdr)"
    if [ -n "$destination" ]; then
        BUFFER="cd $destination"
        zle accept-line
    else
        zle reset-prompt
    fi
}
zle -N percol-cdr
