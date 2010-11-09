setlocal shiftwidth=2
setlocal softtabstop=2
setlocal tabstop=2
setlocal expandtab

" smartchr.vim
inoremap <buffer> <expr> = smartchr#one_of(" = ", " == ", " === ", "=")
inoremap <buffer> <expr> + smartchr#one_of(" + ", "++",   " += ",  "+")
inoremap <buffer> <expr> - smartchr#one_of("-",   "--",   " -= ",  " - ")
inoremap <buffer> <expr> ! smartchr#one_of("!",   " != ", " !== ")
inoremap <buffer> <expr> > smartchr#one_of(">",   " => ", " >= ")
inoremap <buffer> <expr> < smartchr#one_of("<",   " <= ", "<<<EOM")
inoremap <buffer> <expr> . smartchr#one_of(".", " .= ", " . ", "..")
inoremap <buffer> <expr> & smartchr#one_of("&", "&&", " =& ")

nnoremap <buffer> ,l :<C-u>execute "!" &l:filetype "-l" shellescape(expand("%"))<Return>
