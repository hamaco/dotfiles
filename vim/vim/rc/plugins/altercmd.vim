if neobundle#tap('vim-altercmd')
  call altercmd#load()
  command! -bar -nargs=+ MapAlterCommand CAlterCommand <args> | AlterCommand <cmdwin> <args>

  MapAlterCommand t[abedit]  tabedit
  MapAlterCommand to         tabonly

  MapAlterCommand sl setl
  MapAlterCommand sf setf

  MapAlterCommand imp[ort] Import
  MapAlterCommand fmt      Fmt

  call neobundle#untap()
endif
