if has("mac")
	set columns=120
	set lines=45
	set guifont=MeiryoKe_Console\ 14
	set transparency=10
	colorscheme ir_black
elseif has("unix")
	set columns=120
	set lines=45
	set guifont=MeiryoKe_Console\ 12
	colorscheme rdark
endif

set splitbelow " 横分割したら新しいウィンドウは下に
set splitright " 縦分割したら新しいウィンドウは右に

