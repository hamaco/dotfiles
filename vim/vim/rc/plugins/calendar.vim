if neobundle#tap('calendar.vim')
  let g:calendar_google_calendar = 1

  " TODO: q で閉じたくない
  " TODO: indentLine 無効化したい

  call neobundle#untap()
endif
