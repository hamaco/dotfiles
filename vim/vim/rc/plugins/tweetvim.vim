if neobundle#tap('TweetVim')
  nnoremap <F7> :<C-u>TweetVimSay hamaco<CR>

  call neobundle#untap()
endif
