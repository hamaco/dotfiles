if neobundle#tap('vim-easy-align')
  vmap <Enter> <Plug>(EasyAlign)
  " nmap <Leader>a <Plug>(EasyAlign)

  call neobundle#untap()
endif
