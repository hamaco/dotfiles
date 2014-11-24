if neobundle#tap('indenthtml.vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:html_indent_inctags = 'html,body,head,tbody,p,li,dt'
  endfunction

  call neobundle#untap()
endif
