setlocal tabstop=2
setlocal softtabstop=2
setlocal shiftwidth=2

inoremap <buffer> <expr> = smartchr#one_of(" = ", " == ", "=")
inoremap <buffer> <expr> > smartchr#one_of(">",   " => ", " >= ")
