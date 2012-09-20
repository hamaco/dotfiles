function! s:last_char()
	return matchstr(getline('.'), '.', col('.')-2)
endfunction

function! s:php_smart_bracket(last_char)
	if a:last_char == '['
		return "\<BS>("
	elseif a:last_char =~ '\w\|]'
		return '['
	else
		return 'array('
	endif
endfunction

inoremap <buffer><expr> [ <SID>php_smart_bracket(<SID>last_char())
inoremap <buffer><expr> ] smartchr#one_of(']', ')')
