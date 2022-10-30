# ディレクトリ移動時に自動的にlsを実行する
ls_abbrev() {
    # -a : Do not ignore entries starting with ..
    # -C : Force multi-column output.
    # -F : Append indicator (one of */=>@|) to entries.
    local cmd_ls='ls'
    local -a opt_ls
    opt_ls=('-aCF' '--color=always')
    case "${OSTYPE}" in
        freebsd*|darwin*)
            if type gls > /dev/null 2>&1; then
                cmd_ls='gls'
            else
                # -G : Enable colorized output.
                opt_ls=('-aCFG')
            fi
            ;;
    esac

    local ls_result
    ls_result=$(CLICOLOR_FORCE=1 COLUMNS=$COLUMNS command $cmd_ls ${opt_ls[@]} | sed $'/^\e\[[0-9;]*m$/d')

    local ls_lines=$(echo "$ls_result" | wc -l | tr -d ' ')

    if [ $ls_lines -gt 6 ]; then
        echo "$ls_result" | head -n 3
        echo '...'
        echo "$ls_result" | tail -n 3
        echo "$(command ls -1 -A | wc -l | tr -d ' ') files exist"
    else
        echo "$ls_result"
    fi
}
chpwd() ls_abbrev
typeset -ga chpwd_functions

# dot repeat
rationalise-dot() {
    if [[ $LBUFFER = *.. ]]; then
        LBUFFER+=/.
    fi
    zle self-insert
}
zle -N rationalise-dot
bindkey . rationalise-dot

# 
_delete-char-or-list-expand() {
    if [[ -z "${RBUFFER}" ]]; then
        zle list-expand
    else
        zle delete-char
    fi
}
zle -N _delete-char-or-list-expand
bindkey '^D' _delete-char-or-list-expand

# 上位ディレクトリを指定するcd
up() {
    if [ "$1" = "" ]; then
        cd ../
        return 1
    fi

    to=$(perl -le '$p=$ENV{PWD}."/";$d="/".$ARGV[0]."/";$r=rindex($p,$d);\
        $r>=0 && print substr($p, 0, $r+length($d))' $1)

    if [ "$to" = "" ]; then
        echo "no such file or directory: $1" 1>&2
        return 1
    fi

    cd $to
}

# mkdir && cd
mcd() {
    mkdir -p "$1" && cd "$1"
}
compdef mcd=cd

# 作業用ディレクトリ作成
temp() {
  case "${OSTYPE}" in
    linux*)
      cd $(mktemp -d --tmpdir=$HOME/tmp "$(date +'%Y%m%d').$1${1:+.}XXXXXX")
      ;;
    freebsd*|darwin*)
      cd $(mktemp -d "$HOME/tmp/$(date +'%Y%m%d').$1${1:+.}XXXXXX")
      ;;
  esac

  git first
}

# 電卓
function calc() {
    awk "BEGIN{ print $* }"
}
