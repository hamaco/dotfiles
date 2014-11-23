if neobundle#tap('octoeditor.vim')
  function! neobundle#tapped.hooks.on_source(bundle)
    let g:octopress_path = '~/works/private/blog.hamaco.org'
  endfunction

  call neobundle#untap()
endif
