;-------------------------------------------------------------------------------
; 外部ファイルのロード
;-------------------------------------------------------------------------------

;; auto-complete
(require 'auto-complete)
(global-auto-complete-mode t)

(setq ac-modes
			(append ac-modes
							(list 'js2-mode)))

; auto-save-buffers
; 自動で保存を行う
(require 'auto-save-buffers)
(run-with-idle-timer 0.5 t 'auto-save-buffers)

; jaspace
(when (require 'jaspace nil t)
	(setq jaspace-modes (append jaspace-modes
															(list
																'c-mode
																'javascript-mode
																'js2-mode
																'php-mode)))
	(setq jaspace-alternate-jaspace-string "□")
	;(setq jaspace-alternate-eol-string "↓\n")
	(setq jaspace-highlight-tabs ?^)
	(add-hook 'jaspace-mode-off-hook
						(lambda()
							(when (boundp 'show-trailing-whitespace)
								(setq show-trailing-whitespace nil))))
	(add-hook 'jaspace-mode-hook
						(lambda()
							(progn
								(when (boundp 'show-trailing-whitespace)
									(setq show-trailing-whitespace t))
								(face-spec-set 'jaspace-highlight-jaspace-face
															 '((((class color) (background light))
																	(:foreground "blue"))
																 (t (:foreground "green"))))
								(face-spec-set 'jaspace-highlight-tab-face
															 '((((class color) (background light))
																	(:foreground "red"
																							 :background "unspecified"
																							 :strike-through nil
																							 :underline t))
																 (t (:foreground "purple"
																								 :background "unspecified"
																								 :strike-through nil
																								 :underline t))))
								(face-spec-set 'trailing-whitespace
															 '((((class color) (background light))
																	(:foreground "red"
																							 :background "unspecified"
																							 :strike-through nil
																							 :underline t))
																 (t (:foreground "purple"
																								 :background "unspecified"
																								 :strike-through nil
																								 :underline t))))))))

;; magit
(require 'magit)

;; ky-indent [http://gist.github.com/133159]
(require 'ky-indent)
(ky-indent-init)

;; php-mode
(autoload 'php-mode "php-mode")
(add-to-list 'auto-mode-alist '("\\.php$" . php-mode))

(add-hook 'php-mode-hook
					(lambda ()
						(c-set-style "stroustrup")
						(c-set-offset 'arglist-cont 0)
						(c-set-offset 'arglist-intro '+)
						(c-set-offset 'arglist-close 0)
						(c-set-offset 'case-label '+)
						; TABじゃなくスペースでインデント
						(setq indent-tabs-mode nil)
						(setq fill-column 78)
						; インデントは4文字
						(setq c-basic-offset 4)
))

;; js2-mode
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


(load "unix")
(load "mac")
(load "configs")
