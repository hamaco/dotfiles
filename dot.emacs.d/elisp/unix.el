(if window-system
	(progn
		(cond
			((eq system-type 'gnu/linux)
			 (set-default-font "DejaVu Sans Mono-8")
			 (set-fontset-font (frame-parameter nil 'font)
												 'japanese-jisx0208
												 '("KugimmyAA" . "unicode-bmp"))
		))
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
		; リージョン(選択範囲)を色付け表示
		(setq transient-mark-mode t)
		; フォントロック
		(global-font-lock-mode 1)
		(setq font-lock-support-mode 'jit-lock-mode)
		; 色付け
		(setq font-lock-maximum-decoration t)
		(add-hook 'font-lock-mode-hook
							'(lambda ()
								 (set-face-foreground 'font-lock-builtin-face "spring green")
								 (set-face-foreground 'font-lock-comment-face "slate gray")
								 (set-face-foreground 'font-lock-string-face  "spring green")
								 (set-face-foreground 'font-lock-keyword-face "khaki")
								 (set-face-foreground 'font-lock-constant-face "violet")
								 (set-face-foreground 'font-lock-function-name-face "hot pink")
								 (set-face-foreground 'font-lock-variable-name-face "hot pink")
								 (set-face-foreground 'font-lock-type-face "cyan")
								 (set-face-foreground 'font-lock-warning-face "magenta")
								 (set-face-bold-p 'font-lock-function-name-face t)
								 (set-face-bold-p 'font-lock-warning-face nil)
		))
))
