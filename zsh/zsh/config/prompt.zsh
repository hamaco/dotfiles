setopt prompt_subst
autoload -U promptinit; promptinit
autoload -Uz colors; colors
autoload -Uz vcs_info
autoload -Uz is-at-least

zstyle ":vcs_info:*" enable git svn hg bzr
zstyle ":vcs_info:*" formats "(%s)-[%b]"
zstyle ":vcs_info:*" actionformats "(%s)-[%b|%a]"
zstyle ":vcs_info:(svn|bzr):*" branchformat "%b:r%r"
zstyle ":vcs_info:bzr:*" use-simple true

zstyle ":vcs_info:*" max-exports 6

if is-at-least 4.3.10; then
  zstyle ":vcs_info:git:*" check-for-changes true # commitしていないのをチェック
  zstyle ":vcs_info:git:*" stagedstr "<S>"
  zstyle ":vcs_info:git:*" unstagedstr "<U>"
  zstyle ":vcs_info:git:*" formats "(%s)-[%b] %c%u"
  zstyle ":vcs_info:git:*" actionformats "(%s)-[%b|%a] %c%u"
fi

if [ ${$(hostname)##*.} = "local" ]; then
	HOSTCOLOR="green"
else
	HOSTCOLOR="yellow"
fi
if [ $(whoami) = 'root' ]; then
	HOSTCOLOR="red"
fi


OK="ζ*'ヮ'%)ζ <"
NG="ζ*#ﾟДﾟ%)ζ <"

function vcs_prompt_info() {
	LANG=en_US.UTF-8 vcs_info
	[[ -n "$vcs_info_msg_0_" ]] && echo -n " on %{$fg[yellow]%}$vcs_info_msg_0_%f"
}

PROMPT=""
PROMPT+="%F{$HOSTCOLOR}%n@%m%f "
PROMPT+="[%F{magenta}%~%f]"
is-at-least 4.3.7 && PROMPT+="\$(vcs_prompt_info)"
PROMPT+="
"

PROMPT+="%(?.%F{blue}$OK%f.%F{red}$NG%f) "


PROMPT2="%_%% "
RPROMPT="[%*]"
SPROMPT="从*ﾟ?ﾟ) < %F{yellow}%r%f? あ、あんたのために修正したんじゃないんだからね、勘違いしないでよね! [n,y,a,e]:"

export LSCOLORS=gxfxcxdxbxegedabagacad
export LS_COLORS='di=36:ln=35:so=32:pi=33:ex=31:bd=46;34:cd=43;34:su=41;30:sg=46;30:tw=42;30:ow=43;30'
