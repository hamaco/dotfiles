if neobundle#tap('neosnippet')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:neosnippet#snippets_directory = "~/.vim/snippets"

    smap <C-k> <Plug>(neosnippet_expand_or_jump)

    imap <expr> <C-k> neosnippet#expandable_or_jumpable() ?
    \ "\<Plug>(neosnippet_expand_or_jump)" : "\<C-n>\<Plug>(neosnippet_expand_or_jump)"

    imap <expr> <TAB> neosnippet#expandable_or_jumpable() ?
    \ "\<Plug>(neosnippet_expand_or_jump)" :
    \ pumvisible() ? "\<C-n>" : "\<TAB>"
  endfunction

  call neobundle#untap()
endif
