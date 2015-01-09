if neobundle#tap('incsearch.vim')
  let g:incsearch#auto_nohlsearch = 1

  function! neobundle#tapped.hooks.on_source(bundle)
    map /  <Plug>(incsearch-forward)
    map ?  <Plug>(incsearch-backward)
    map g/ <Plug>(incsearch-stay)

    map  n  <Plug>(incsearch-nohl-n)
    map  N  <Plug>(incsearch-nohl-N)
    nmap n  <Plug>(incsearch-nohl)<Plug>(anzu-n)
    nmap N  <Plug>(incsearch-nohl)<Plug>(anzu-N)

    map *  <Plug>(incsearch-nohl-*)
    map #  <Plug>(incsearch-nohl-#)
  endfunction
  call neobundle#untap()
endif
