(when (eq window-system 'mac)
	; フルスクリーン
	(defun my-mac-toggle-max-window ()
		(interactive)
		(if (frame-parameter nil 'fullscreen)
			(set-frame-parameter nil 'fullscreen nil)
			(set-frame-parameter nil 'fullscreen 'fullboth)))
	(global-set-key "\C-cm" 'my-mac-toggle-max-window)

	;; Carbon Emacsの設定で入れられた. メニューを隠したり．
	(custom-set-variables
		'(display-time-mode t)
		'(tool-bar-mode nil)
		'(transient-mark-mode t))
	(custom-set-faces)

	; 透明化
	(set-frame-parameter nil 'alpha 90)
)
