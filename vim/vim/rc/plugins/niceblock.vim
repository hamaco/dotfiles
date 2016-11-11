if neobundle#tap('vim-niceblock')
  xmap I <Plug>(niceblock-I)
  xmap A <Plug>(niceblock-A)

  " xnoremap <expr> r niceblock#force_blockwise('r')

  call neobundle#untap()
endif
