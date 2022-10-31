autoload -Uz colors; colors
autoload -Uz add-zsh-hook
autoload -Uz vcs_info
autoload -Uz is-at-least

zstyle ":vcs_info:*" enable git svn hg bzr
zstyle ":vcs_info:*" max-exports 3
zstyle ":vcs_info:*" formats "(%s)-[%b]"
zstyle ":vcs_info:*" actionformats "(%s)-[%b|%a]"
zstyle ":vcs_info:(svn|bzr):*" branchformat "%b:r%r"
zstyle ":vcs_info:bzr:*" use-simple true
zstyle ":vcs_info:git:*" formats "(%s)-[%b] %c%u" "%r" "%R"
zstyle ":vcs_info:git:*" actionformats "(%s)-[%b|%a] %c%u"
zstyle ":vcs_info:git:*" check-for-changes true # commitしていないのをチェック
zstyle ":vcs_info:git:*" stagedstr "<S> "
zstyle ":vcs_info:git:*" unstagedstr "<U> "

if [ ${$(hostname)##*.} = "local" ]; then
  HOSTCOLOR="green"
else
  HOSTCOLOR="yellow"
fi
if [ $(whoami) = 'root' ]; then
  HOSTCOLOR="red"
fi


FACE_OK="ζ*'ヮ'%)ζ <"
FACE_NG="ζ*#ﾟДﾟ%)ζ <"

# FACE_OK="OK>"
# FACE_NG="NG>"

function _prompt_github_commit_status() {
  if exists github-commit-status-mark; then
    if [[ $(git rev-parse --is-inside-work-tree 2> /dev/null) == 'true' ]]; then
      # github-commit-status-mark >/dev/null &!
      echo $(github-commit-status-mark -cached)
    fi
  fi
}
function _precmd_vcs_info() {
  LANG=en_US.UTF-8 vcs_info
  psvar=()

  [[ -n "$vcs_info_msg_0_" ]] && psvar[1]=" on $vcs_info_msg_0_"

  if [[ -n "$vcs_info_msg_1_" ]] && [[ -n "$vcs_info_msg_2_" ]];then
    psvar[2]=$(echo $vcs_info_msg_2_ | sed -e "s/$vcs_info_msg_1_$//" | sed -e "s#^$HOME#~#")
    psvar[3]="$vcs_info_msg_1_"
    psvar[4]=$(echo $(pwd -P) | sed -e "s#^$vcs_info_msg_2_##")
  else
    psvar[2]=$(echo $(pwd -P) | sed -e "s#^$HOME#~#")
  fi
}
add-zsh-hook precmd _precmd_vcs_info

PROMPT="%F{$HOSTCOLOR}%n@%m%f "
PROMPT+="[%F{magenta}%2v%F{cyan}%3v%F{magenta}%4v%f]"
[[ $ARCHI != "cygwin" ]] && PROMPT+="%{$fg[yellow]%}%1v%f"
PROMPT+="\$(_prompt_github_commit_status)"
PROMPT+=$'\n'
PROMPT+="%(?.%F{blue}$FACE_OK%f.%F{red}$FACE_NG%f) "

PROMPT2="%_%% "
RPROMPT="[%*]"
SPROMPT="从*ﾟ?ﾟ) < もしかして %F{yellow}%r%f かしら? あ、あんたのために修正したんじゃないんだからね、勘違いしないでよね! [n,y,a,e]:"

export LSCOLORS=gxfxcxdxbxegedabagacad
export LS_COLORS='di=36:ln=35:so=32:pi=33:ex=31:bd=46;34:cd=43;34:su=41;30:sg=46;30:tw=42;30:ow=43;30'

# https://github.com/sona-tar/sona_ls_colors
if type dircolors > /dev/null; then
  eval `dircolors -b $ZDOTDIR/dir_colors`
fi
