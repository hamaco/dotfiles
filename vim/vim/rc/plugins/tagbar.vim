if neobundle#tap('tagbar')
  nnoremap <F8> :<C-u>TagbarToggle<CR>

  call neobundle#untap()
endif
