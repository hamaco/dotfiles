function peco-snippets() {
    local line
    local snippet
    local cwd
    local local_snippet

    if [ ! -e "$HOME/.snippets" ]; then
        echo "$HOME/.snippets is not found." >&2
        return 1
    fi

    # Get snippets in the current directory if it exists.
    cwd=`pwd`
    if [ -e "$cwd/.snippets" ]; then
      local_snippet="$cwd/.snippets"
    else
      local_snippet=""
    fi

    line=$(cat $local_snippet ~/.snippets | grep -v "^\s*#" | grep -v '^\s*$' | peco --query "$LBUFFER")
    if [ -z "$line" ]; then
        return 1
    fi

    snippet=$(echo "$line" | sed "s/^[ |\*]*\[[^]]*\] *//g")
    if [ -z "$snippet" ]; then
        return 1
    fi

    BUFFER="$snippet"
    zle clear-screen
}

zle -N peco-snippets
