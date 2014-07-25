function peco-snippets() {
    local line
    local snippet

    if [ ! -e ~/.snippets ]; then
        echo "~/.snippets is not found." >&2
        return 1
    fi

    line=$(grep -v "^#" ~/.snippets | peco --query "$LBUFFER")
    if [ -z "$line" ]; then
        return 1
    fi

    snippet=$(echo "$line" | sed "s/^\[[^]]*\] *//g")
    if [ -z "$snippet" ]; then
        return 1
    fi

    BUFFER=$snippet
    CURSOR=$#BUFFER
    zle clear-screen
}

zle -N peco-snippets
