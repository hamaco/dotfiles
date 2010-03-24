" ku source: cmd_mru
" Version: 0.1.0
" Author : thinca <http://d.hatena.ne.jp/thinca/>
" License: Creative Commons Attribution 2.1 Japan License
"          <http://creativecommons.org/licenses/by/2.1/jp/deed.en>


" Interface  "{{{1
function! ku#cmd_mru#available_sources()
  return ['cmd_mru/cmd', 'cmd_mru/search']
endfunction




function! ku#cmd_mru#action_table(ext)  "{{{2
  return {
  \ 'default': 'ku#cmd_mru#action_execute',
  \ 'execute': 'ku#cmd_mru#action_execute',
  \ 'input': 'ku#cmd_mru#action_input',
  \ 'delete': 'ku#cmd_mru#action_delete',
  \}
endfunction




function! ku#cmd_mru#key_table(ext)  "{{{2
  return {
  \ "\<C-e>": 'execute', 'e': 'execute',
  \ "\<C-i>": 'input', 'i': 'input',
  \ "\<C-d>": 'delete', 'd': 'delete',
  \}
endfunction




function! ku#cmd_mru#gather_items(ext, pattern)  "{{{2
  let _ = []
  let type = a:ext
  let prefix = {'cmd' : ':', 'search' : '/'}[type]
  let max = histnr(type)
  let max_digit = strlen(max)
  for i in range(1, max)
    let cmd = histget(type, i)
    if cmd != ''
      call add(_, {
      \ 'word': prefix . cmd,
      \ 'menu': printf('%' . max_digit . 'd%s%s', i, prefix, type),
      \ 'ku__sort_priority': -i
      \ })
    endif
  endfor

  return _
endfunction








" Misc  "{{{1
function! ku#cmd_mru#action_execute(item) "{{{3
  let word = a:item.word
  call histadd(word[0], word[1:])
  call feedkeys(word . "\<CR>", 'n')
endfunction




function! ku#cmd_mru#action_input(item) "{{{3
  call feedkeys(a:item.word, 'n')
endfunction




function! ku#cmd_mru#action_delete(item)
  call histdel(a:item.word[0], -a:item.ku__sort_priority)
endfunction








" __END__  "{{{1
" vim: foldmethod=marker
