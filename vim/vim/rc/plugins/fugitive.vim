if neobundle#tap('vim-fugitive')
  nnoremap <Leader>gd :<C-u>Gdiff<Enter>
  nnoremap <Leader>gs :<C-u>Gstatus<Enter>
    nnoremap <Leader>gl :<C-u>Glog<Enter>
  nnoremap <Leader>ga :<C-u>Gwrite<Enter>
  nnoremap <Leader>gc :<C-u>Gcommit<Enter>
    nnoremap <Leader>gC :<C-u>Git commit --amend<Enter>
    nnoremap <Leader>gb :<C-u>Gblame<Enter>
endif
