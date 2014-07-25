function percol-ghq-look() {
  local selected_dir=$(ghq list | percol --query "$LBUFFER")

  if [ -n "$selected_dir" ]; then
    BUFFER="ghq look $selected_dir"
    zle accept-line
  else
    zle reset-prompt
  fi
}
zle -N percol-ghq-look
