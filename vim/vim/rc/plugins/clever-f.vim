if neobundle#tap('clever-f.vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    let g:clever_f_smart_case = 1
    " fhでbとかfとかにマッチしちゃったのでmigemoはOFF
    let g:clever_f_use_migemo = 0
    let g:clever_f_chars_match_any_signs = ';'
  endfunction

  call neobundle#untap()
endif
