setlocal makeprg=gjslint\ %
setlocal errorformat=%-P%>-----\ FILE\ \ :\ \ %f\ -----,Line\ %l\\,\ %t:%n:\ %m,%-Q
setlocal shellpipe=2>&1\ >
au BufWritePost *.js silent make
