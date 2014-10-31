if neobundle#tap('indentLine')
  let g:indentLine_faster = 1
  nnoremap <silent><Leader>i :<C-u>IndentLinesToggle<CR>

  call neobundle#untap()
endif
