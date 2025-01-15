user_name=$(git config user.name)
fmt="\
%(if:equals=$user_name)%(authorname)%(then)%(color:default)%(else)%(color:brightred)%(end)%(refname:short)|\
%(committerdate:relative)|\
%(committername)|\
%(subject)"

function fzf-git-recent-branches () {
    local selected_branch=$(git for-each-ref --format=$fmt --sort=-committerdate --color=always refs/heads \
        | column -t -s '|' \
        | fzf-tmux -p80% \
        | head -n 1 \
        | awk '{print $1}')
    if [ -n "$selected_branch" ]; then
        BUFFER="git checkout ${selected_branch}"
        # BUFFER="git switch -d ${selected_branch}"
        zle accept-line
    fi
    zle clear-screen
}
zle -N fzf-git-recent-branches

function fzf-git-recent-all-branches () {
    local selected_branch=$(git for-each-ref --format=$fmt --sort=-committerdate --color=always refs/heads refs/remotes \
        | column -t -s '|' \
        | fzf-tmux -p80% \
        | head -n 1 \
        | awk '{print $1}')
    if [ -n "$selected_branch" ]; then
        BUFFER="git checkout ${selected_branch}"
        # BUFFER="git switch -d ${selected_branch}"
        zle accept-line
    fi
    zle clear-screen
}
zle -N fzf-git-recent-all-branches
