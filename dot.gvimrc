if has("mac")
	set columns=135
	set lines=55
	"set guifont=DejaVu\ Sans\ Mono:h14
	set guifont=Menlo:h14
	set transparency=20
	"colorscheme h2u_black
	colorscheme mrkn256

	set fuoptions=maxvert,maxhorz
	" au GUIEnter * set fullscreen
elseif has("unix")
	set columns=90
	set lines=45
	set guifont=MeiryoKe_Console\ 10
	colorscheme ir_black
elseif has("win32")
	set columns=100
	set lines=35
	set guifont=あずきフォント:h14:cSHIFTJIS
	colorscheme h2u_black

	" fullscreen
	"-----------------------------------------------------------
	nnoremap <F11> :call ToggleFullScreen()<CR>
	function! ToggleFullScreen()
		if &guioptions =~# 'C'
			set guioptions-=C
			if exists('s:go_temp')
				if s:go_temp =~# 'm'
					set guioptions+=m
				endif
				if s:go_temp =~# 'T'
					set guioptions+=T
				endif
			endif
			simalt ~r
		else
			let s:go_temp = &guioptions
			set guioptions+=C
			set guioptions-=m
			set guioptions-=T
			simalt ~x
		endif
	endfunction
endif

set splitbelow " 横分割したら新しいウィンドウは下に
set splitright " 縦分割したら新しいウィンドウは右に
