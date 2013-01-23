" http://d.hatena.ne.jp/thinca/20110209/1297178876
autocmd BufReadPost,BufNewFile *.txt call s:structured_text()

function! s:structured_text()
  let line1    = getline(1)
  let line2    = getline(2)
  let filetype = 
        \ line1 =~ '^\([=-`:''"~^_*+#<>]\)\1*$' ? 'rst' :
        \ line1 =~ '^*'      ? 'hatena'   :
        \ line1 =~ '^#' ||
        \ line2 =~ '^=\+$'   ? 'markdown' :
        \                      'text'
  execute 'set ft=' . filetype
endfunction
