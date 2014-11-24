if neobundle#tap('emmet-vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:user_emmet_expandabbr_key = '<c-e>'
  endfunction

  call neobundle#untap()
endif
