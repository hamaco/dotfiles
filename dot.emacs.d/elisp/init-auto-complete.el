(require 'auto-complete)
(global-auto-complete-mode t)

(setq ac-sources '(ac-source-abbrev
										ac-source-words-in-buffer
										ac-source-files-in-current-dir))

;; 有効にするmodeを追加
(setq ac-modes
			(append ac-modes
							(list 'js2-mode)))

;; C-n / C-pで選択
(defun ac-next-or-next-line (arg)
	(interactive "p")
	(if (/= (length ac-candidates) 1)
		(ac-next)
		(ac-abort)
		(next-line arg)))
(defun ac-previous-or-previous-line (arg)
	(interactive "p")
	(if (/= (length ac-candidates) 1)
		(ac-previous)
		(ac-abort)
		(previous-line arg)))

(define-key ac-complete-mode-map "\C-n" 'ac-next-or-next-line)
(define-key ac-complete-mode-map "\C-p" 'ac-previous-or-previous-line)
(define-key ac-complete-mode-map "\C-m" nil)
