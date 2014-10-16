if neobundle#tap('unite.vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:unite_source_history_yank_enable = 1

    let g:unite_source_grep_command = 'ag'
    let g:unite_source_grep_default_opts = '--nocolor --nogroup --column'
    let g:unite_source_grep_recursive_opt = ''
    let g:unite_source_grep_max_candidates = 200

    let g:neomru#time_format = "(%Y/%m/%d %H:%M:%S) "

    call unite#custom#profile('action', 'context', {'start_insert': 1})

    call unite#custom#alias('directory', 'tabopen', 'tabvimfiler')

    augroup Unite
      autocmd!
      autocmd FileType unite call s:unite_my_settings()
    augroup END
    function! s:unite_my_settings()
      nmap <buffer> <ESC> <Plug>(unite_exit)
      imap <buffer> jj <Plug>(unite_insert_leave)
      nmap <buffer> ' <Plug>(unite_quick_match_default_action)
      imap <buffer> ' <Plug>(unite_quick_match_default_action)
      nmap <buffer> x <Plug>(unite_toggle_mark_current_candidate)
      imap <buffer> <C-BS> <Plug>(unite_delete_backward_path)
    endfunction
  endfunction

  nnoremap [unite] <Nop>
  nmap ,f [unite]

  noremap <silent> [unite]b :<C-u>UniteWithBufferDir -buffer-name=files -start-insert file file/new<CR>
  noremap <silent> [unite]c :<C-u>Unite -auto-preview colorscheme<CR>
  noremap <silent> [unite]g :<C-u>Unite grep:. -buffer-name=search -auto-preview -no-quit<CR>
  noremap <silent> [unite]G :<C-u>Unite ghq<CR>
  noremap <silent> [unite]* :<C-u>Unite grep:. -buffer-name=search<CR><C-r><C-w><CR>
  noremap <silent> [unite]I :<C-u>Unite -auto-quit neobundle/update<CR>
  noremap <silent> [unite]j :<C-u>Unite -default-action=vimfiler bookmark<CR>
  noremap <silent> [unite]o :<C-u>Unite outline<CR>
  noremap <silent> [unite]u :<C-u>Unite -buffer-name=files -start-insert buffer file_rec/async:! file file_mru<CR>
  noremap <silent> [unite]U :<C-u>Unite neobundle/update<CR>

  call neobundle#untap()
endif
