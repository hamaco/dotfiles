setlocal shiftwidth=2
setlocal softtabstop=2
setlocal tabstop=2
setlocal expandtab

" smartchr.vim
inoremap <buffer> <expr> = smartchr#loop(" = ", " == ", " === ", "=")
inoremap <buffer> <expr> + smartchr#loop(" + ", "++",   " += ",  "+")
inoremap <buffer> <expr> - smartchr#loop("-",   "--",   " -= ",  " - ")
inoremap <buffer> <expr> ! smartchr#loop("!",   " != ", " !== ")
inoremap <buffer> <expr> > smartchr#loop(">",   " => ", " >= ")
inoremap <buffer> <expr> < smartchr#loop("<",   " <= ", "<<<EOM")
inoremap <buffer> <expr> . smartchr#loop(".", " .= ", " . ", "..")
inoremap <buffer> <expr> & smartchr#loop("&", "&&", " =& ")

nnoremap <buffer> ,l :<C-u>execute "!" &l:filetype "-l" shellescape(expand("%"))<Return>
