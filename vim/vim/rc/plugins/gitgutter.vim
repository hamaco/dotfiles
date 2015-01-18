if neobundle#tap('vim-gitgutter')
  function! neobundle#tapped.hooks.on_source(bundle)
  endfunction

  function! neobundle#tapped.hooks.on_post_source(bundle)
  endfunction

  let g:gitgutter_sign_added = '✚'
  let g:gitgutter_sign_modified = '⚡'
  let g:gitgutter_sign_removed = '✖'
  let g:gitgutter_sign_modified_removed = '⊜'

  call neobundle#untap()
endif
