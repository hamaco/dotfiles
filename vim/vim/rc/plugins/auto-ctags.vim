if neobundle#tap('auto-ctags.vim')
  let g:auto_ctags = 1
  let g:auto_ctags_directory_list = ['.git', '.svn']
  let g:auto_ctags_tags_name = 'tags'
  let g:auto_ctags_tags_args = '--tag-relative --recurse --sort=yes --php-kinds=cfd'

  call neobundle#untap()
endif
