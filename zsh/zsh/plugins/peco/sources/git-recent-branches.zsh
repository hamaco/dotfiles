function peco-git-recent-branches () {
    local selected_branch=$(git for-each-ref --format='%(refname:short) | %(committerdate:relative) | %(committername) | %(subject)' --sort=-committerdate refs/heads \
        | column -t -s '|' \
        | peco \
        | head -n 1 \
        | awk '{print $1}')
    if [ -n "$selected_branch" ]; then
        BUFFER="git checkout ${selected_branch}"
        # BUFFER="git switch -d ${selected_branch}"
        zle accept-line
    fi
    zle clear-screen
}
zle -N peco-git-recent-branches

function peco-git-recent-all-branches () {
    local selected_branch=$(git for-each-ref --format='%(refname:short) | %(committerdate:relative) | %(committername) | %(subject)' --sort=-committerdate refs/heads refs/remotes \
        | column -t -s '|' \
        | peco \
        | head -n 1 \
        | awk '{print $1}')
    if [ -n "$selected_branch" ]; then
        BUFFER="git checkout ${selected_branch}"
        # BUFFER="git switch -d ${selected_branch}"
        zle accept-line
    fi
    zle clear-screen
}
zle -N peco-git-recent-all-branches
