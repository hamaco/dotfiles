function ppgrep() {
    if [[ $1 == "" ]]; then
        PECO=peco
    else
        PECO="peco --query $1"
    fi
    ps aux | eval $PECO | awk '{ print $2 }'
}

function ppkill() {
    if [[ $1 =~ "^-" ]]; then
        QUERY="" # options only
    else
        QUERY=$1 # with a query
        [[ $# > 0 ]] && shift
    fi
    ppgrep $QUERY | xargs kill $*
}
