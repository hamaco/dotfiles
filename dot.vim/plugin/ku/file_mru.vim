" ku source: file_mru
" Version: 0.1.3
" Author : thinca <http://d.hatena.ne.jp/thinca/>
" License: Creative Commons Attribution 2.1 Japan License
"          <http://creativecommons.org/licenses/by/2.1/jp/deed.en>

if exists('g:loaded_ku_file_mru') || v:version < 700
  finish
endif
let g:loaded_ku_file_mru = 1




augroup plugin-ku-file_mru
  autocmd!
  autocmd BufEnter,BufWritePost,BufFilePost * call ku#file_mru#_append()
augroup END



command! -bar KuFilemruSweep call ku#file_mru#_sweep()



" __END__
" vim: foldmethod=marker
