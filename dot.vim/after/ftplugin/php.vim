setlocal noexpandtab

" smartchr.vim
inoremap <buffer> <expr> = smartchr#one_of(" = ", " == ", " === ", "=")
inoremap <buffer> <expr> + smartchr#one_of("+",   " += ", " + ")
inoremap <buffer> <expr> - smartchr#one_of("-",   " -= ", " - ")
inoremap <buffer> <expr> ! smartchr#one_of("!",   " != ", " !== ")
inoremap <buffer> <expr> > smartchr#one_of(">",   " >= ", " => ")
inoremap <buffer> <expr> < smartchr#one_of("<",   " <= ", " =< ")

nnoremap <buffer> ,l :<C-u>execute "!" &l:filetype "-l" shellescape(expand("%"))<Return>
