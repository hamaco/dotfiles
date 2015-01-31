if neobundle#tap('neocomplete')
  let g:neocomplete#enable_at_startup = 1
  let g:neocomplete#enable_ignore_case = 0
  let g:neocomplete#enable_smart_case = 1

  let g:neocomplete#sources#buffer#disabled_pattern = '\.log'

  let g:neocomplete#sources#syntax#min_keyword_length = 2

  let g:neobomplete#sources#dictionary#dictionaries = {
  \   'default': '',
  \   'vimshell': $HOME.'/.vimshell/command-history',
  \ }

  if !exists('g:neocomplete#keyword_patterns')
    let g:neocomplete#keyword_patterns = {}
  endif
  let g:neocomplete#keyword_patterns['default'] = '\h\w*'

  if !exists('g:neocomplete#sources#omni#input_patterns')
    let g:neocomplete#sources#omni#input_patterns = {}
  endif
  " let g:neocomplete#sources#omni#input_patterns.php = '[^. \t]->\h\w*\|\h\w*::'

    imap <expr> <CR> !pumvisible() ? "\<CR>" :
    \    neosnippet#expandable() ? "\<Plug>(neosnippet_expand)" :
    \    neocomplete#smart_close_popup() . "\<CR>"

  call neobundle#untap()
endif
