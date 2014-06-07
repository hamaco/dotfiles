setlocal tabstop=4
setlocal softtabstop=4
setlocal shiftwidth=4

" switch-caseをインデントする
let g:PHP_vintage_case_default_indent = 1

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

" @ で $this-> 入力
" http://d.hatena.ne.jp/thinca/20120208/1328676033
function! s:at()
  let syntax = synstack(line('.'), col('.'))
  let name = empty(syntax) ? '' : synIDattr(syntax[-1], "name")
  return name =~# 'String\|Comment\|None' ? '@' : '$this->'
endfunction
inoremap <expr> <buffer> @ <SID>at()

if exists(":EditorConfigReload")
  EditorConfigReload
endif
