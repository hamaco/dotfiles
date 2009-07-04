(autoload 'js2-mode "js2" nil t)
(add-to-list 'auto-mode-alist '("\\.js$" . js2-mode))
(add-hook 'js2-mode-hook
					'(lambda ()
						 (setq js2-basic-offset 2)))

(when (load "js2" t)
	(setq js2-bounce-indent-flag nil) ; TAB押下時にHaskell風にインデントを変えない

	; インデント時のカーソル移動を他のmajor-modeに合わせる
	(defun indent-and-back-to-indentation ()
		(interactive)
		(indent-for-tab-command)
		(let ((point-of-indentation
						(save-excursion
							(back-to-indentation)
							(point))))
			(skip-chars-forward "\s " point-of-indentation)))
	(define-key js2-mode-map "\C-i" 'indent-and-back-to-indentation)
)
