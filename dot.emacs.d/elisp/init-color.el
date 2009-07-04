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
