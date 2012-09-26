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

nnoremap <buffer> ,l :<C-u>execute "!" &l:filetype "-l" shellescape(expand("%"))<CR>

nnoremap <buffer> ,cp :<C-u>call PhpDocSingle()<CR>




IndentGuidesEnable

" 1インデント目からガイドする
let g:indent_guides_start_level = 1
" 自動カラーを無効にして手動で設定する
let g:indent_guides_auto_colors = 0
" 奇数インデントのガイドカラー
hi IndentGuidesOdd  ctermbg=green guifg=#4b4b4b guibg=#383838
" 偶数インデントのガイドカラー
hi IndentGuidesEven ctermbg=black guifg=#383838 guibg=#4b4b4b



" ハイライト色の変化の幅 (Terminal では未サポート)
"let g:indent_guides_color_change_percent = 20
" ガイドの幅
let g:indent_guides_guide_size = 1
" ガイド幅をインデント幅に合わせる
"let g:indent_guides_guide_size = &tabstop
