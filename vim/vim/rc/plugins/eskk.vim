if neobundle#tap('eskk.vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:eskk#dictionary = '~/.skk-jisyo'

    let dictionaries = [
    \    expand('~/Library/Application\ Support/AquaSKK/SKK-JISYO.L'),
    \    expand('/usr/share/skk/SKK-JISYO.L'),
    \    expand('~/SKK-JISYO.L'),
    \ ]

    for dictionary in dictionaries
      if filereadable(dictionary)
        let g:eskk#large_dictionary = dictionary
      endif
    endfor
  endfunction

  " なんかあんまり辞書登録ちゃんとされてる気がしないので毎回書き込んでみる
  let g:eskk#dictinary_save_count = 1
  let g:eskk#egg_like_newline = 1
  let g:eskk#egg_like_newline_completion = 1

  let g:eskk#server = {
  \    'host': 'localhost',
  \    'port': '55100',
  \    'type': 'notfound',
  \ }

  call neobundle#untap()
endif
