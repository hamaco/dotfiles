"=============================================================================
" File: modelinefenc.vim
" Author: Yasuhiro Matsumoto <mattn.jp@gmail.com>
" Last Change: 01-Jul-2010.
" Version: 0.01
" WebPage: http://github.com/mattn/modelinefenc-vim
" Description: enable to specify 'fenc' in modeline.

if has("kaoriya") && (has("win32") || has("win64"))
  finish
endif

let s:oldlang=v:lang
function! s:DoModelineFileEncoding()
  if &modified == 0 || &fileencoding == '' || v:cmdbang
    return
  endif
  silent lang mes C
  redir => line
  silent verbose set fenc?
  redir END
  exe "lang mes ".s:oldlang
  if split(line, "\n")[-1] =~ "modeline"
    exe "edit! ++bad=keep ++enc=".&fileencoding
    doautocmd BufEnter
  endif
endfunction

augroup ModelineFileEncoding
  autocmd!
  autocmd BufEnter * silent call <SID>DoModelineFileEncoding()
augroup END
