if neobundle#tap('autochmodx.vim')
  let g:autochmodx_ignore_scriptish_file_patterns = [
  \   '\c.*\.rb$',
  \ ]

  call neobundle#untap()
endif
