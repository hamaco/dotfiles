(if window-system
	(progn
		(cond
			((eq system-type 'gnu/linux)
			 (set-default-font "DejaVu Sans Mono-8")
			 (set-fontset-font (frame-parameter nil 'font)
												 'japanese-jisx0208
												 '("YukarryAA" . "unicode-bmp"))
		))
))
