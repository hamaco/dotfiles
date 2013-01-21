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
