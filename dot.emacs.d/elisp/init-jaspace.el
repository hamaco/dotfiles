;; スペース,TABを可視化
(when (require 'jaspace nil t)
	;; 有効にするmode追加
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
