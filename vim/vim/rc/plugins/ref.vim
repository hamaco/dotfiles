if neobundle#tap('vim-ref')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:ref_use_vimproc = 1
    let g:ref_phpmanual_path = $HOME . '/share/phpmanual'

    let g:ref_source_webdict_sites = {
    \   'default': 'alc',
    \   'alc': {
    \     'url': 'http://eow.alc.co.jp/search?q=%s',
    \   },
    \   'wikipedia:ja': 'http://ja.wikipedia.org/wiki/%s',
    \ }
    function! g:ref_source_webdict_sites.alc.filter(output)
      return join(split(a:output, "\n")[38 :], "\n")
    endfunction

    call ref#register_detection('rst', 'webdict', 'overwrite')
  endfunction

  noremap <Space>ra :<C-u>Ref webdict alc<Space>
  noremap <Space>rm :<C-u>Ref man<Space>

  call neobundle#untap()
endif
