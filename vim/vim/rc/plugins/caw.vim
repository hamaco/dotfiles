if neobundle#tap('caw.vim')
  nmap gc <Plug>(caw:prefix)
  vmap gc <Plug>(caw:prefix)

  call neobundle#untap()
endif
