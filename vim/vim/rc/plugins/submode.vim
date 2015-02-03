if neobundle#tap('vim-submode')
  let g:submode_keep_leaving_key = 1

  " タブの切り替え
  call submode#enter_with('tabpage', 'n', '', 'gt', 'gt')
  call submode#enter_with('tabpage', 'n', '', 'gT', 'gT')
  call submode#map('tabpage', 'n', '', 't', 'gt')
  call submode#map('tabpage', 'n', '', 'T', 'gT')

  " ウィンドウのリサイズ
  call submode#enter_with('winsize', 'n', '', '<C-w>>', '<C-w>>')
  call submode#enter_with('winsize', 'n', '', '<C-w><', '<C-w><')
  call submode#enter_with('winsize', 'n', '', '<C-w>+', '<C-w>+')
  call submode#enter_with('winsize', 'n', '', '<C-w>-', '<C-w>-')
  call submode#map('winsize', 'n', '', '>', '<C-w>>')
  call submode#map('winsize', 'n', '', '<', '<C-w><')
  call submode#map('winsize', 'n', '', '+', '<C-w>+')
  call submode#map('winsize', 'n', '', '-', '<C-w>-')

  call neobundle#untap()
endif
