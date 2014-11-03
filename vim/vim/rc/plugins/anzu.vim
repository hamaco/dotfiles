if neobundle#tap('vim-anzu')
  let g:anzu_search_limit = 250

  nmap n <Plug>(anzu-n)
  nmap N <Plug>(anzu-N)
  nmap * <Plug>(anzu-star)
  nmap # <Plug>(anzu-sharp)

  call neobundle#untap()
endif
