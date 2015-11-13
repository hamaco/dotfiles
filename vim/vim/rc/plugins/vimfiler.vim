if neobundle#tap('vimfiler')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    call vimfiler#custom#profile('default', 'context', {
    \   'safe': 0,
    \   'auto_expand': 1,
    \   'parent': 1,
    \ })

    function! s:set_vimfiler_mappings()
      nnoremap <silent><buffer><expr> <C-t> vimfiler#do_action('tabopen')
      nmap <buffer> p <Plug>(vimfiler_quick_look)
    endfunction
  endfunction

  let g:vimfiler_as_default_explorer  = 1
  let g:vimfiler_enable_clipboard     = 0

  " Like Textmate icons.
  let g:vimfiler_tree_leaf_icon = ' '
  let g:vimfiler_tree_opened_icon = '▾'
  let g:vimfiler_tree_closed_icon = '▸'
  let g:vimfiler_file_icon = ' '
  let g:vimfiler_readonly_file_icon = '✗'
  let g:vimfiler_marked_file_icon = '✓'

  autocmd vimrc FileType vimfiler call s:set_vimfiler_mappings()

  nnoremap <F5> :<C-u>VimFilerExplorer<CR>

  call neobundle#untap()
endif
