if neobundle#tap('editorconfig-vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:EditorConfig_verbose = 0
  endfunction

  call neobundle#untap()
endif
