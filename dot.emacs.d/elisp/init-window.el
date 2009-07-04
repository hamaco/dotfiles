(if window-system
	(progn
		; フレーム設定
		(setq default-frame-alist
					(append (list '(top . 0)
												'(left . 0)
												'(width . 100)
												'(height . 40)
												'(foreground-color . "#00FF00")
												'(background-color . "Black")
												'(border-color. "#000000")
												'(cursor-color. "#FF0000")
												'(mouse-color. "#00FFFF")
												'(frame-parameter nil 'alpha 90)
									)
									default-frame-alist))
))
