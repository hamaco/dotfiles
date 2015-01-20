if neobundle#tap('TweetVim')
  nnoremap <F7> :<C-u>TweetVimSay hamaco<CR>

  Autocmd FileType tweetvim_say inoremap <C-CR> <Plug>(tweetvim_say_post_buffer)

  let g:tweetvim_display_source = 1
  " let g:tweetvim_display_icon = 1
  " let g:tweetvim_async_post = 1

  call neobundle#untap()
endif
