setlocal iskeyword& iskeyword-=:

" smartchar.vim
inoremap <buffer> <expr> = smartchr#one_of(" = ", " == ", "=")
inoremap <buffer> <expr> ! smartchr#one_of("!",   " != ", " !== ")
inoremap <buffer> <expr> > smartchr#one_of(">",   " => ", " >= ")
inoremap <buffer> <expr> < smartchr#one_of("<",   " <= ", "<<")
