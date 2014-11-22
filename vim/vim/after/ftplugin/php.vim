setlocal tabstop=4
setlocal softtabstop=4
setlocal shiftwidth=4

" See :help php
let php_sql_query = 1
let g:sql_type_default = "mysql"
let php_noShortTags = 1
let php_parent_error_close = 1

" switch-caseをインデントする
" TODO: ただこれを有効化すると array() のインデントがおかしくなるので無効化中
let g:PHP_vintage_case_default_indent = 0

" コメント継続しない
let g:PHP_autoformatcomment = 0

" smartchr.vim
inoremap <buffer> <expr> = smartchr#one_of(" = ", " == ", " === ", "=")
inoremap <buffer> <expr> + smartchr#one_of(" + ", "++",   " += ",  "+")
inoremap <buffer> <expr> - smartchr#one_of("-",   "--",   " -= ",  " - ")
inoremap <buffer> <expr> ! smartchr#one_of("!",   " != ", " !== ")
inoremap <buffer> <expr> > smartchr#one_of(">",   " => ", " >= ")
inoremap <buffer> <expr> < smartchr#one_of("<",   " <= ", "<<<EOM")
inoremap <buffer> <expr> . smartchr#one_of(".", " .= ", " . ", "..")
inoremap <buffer> <expr> & smartchr#one_of("&", "&&", " =& ")

" syntax
highlight! link phpDocTags  phpDefine
highlight! link phpDocParam phpType


" @ で $this-> 入力
" http://d.hatena.ne.jp/thinca/20120208/1328676033
function! s:at()
  let syntax = synstack(line('.'), col('.'))
  let name = empty(syntax) ? '' : synIDattr(syntax[-1], "name")
  echomsg name
  return name =~# 'String\|Comment\|phpHereDoc\|phpNowDoc\|None' ? '@' : '$this->'
endfunction
inoremap <expr> <buffer> @ <SID>at()
