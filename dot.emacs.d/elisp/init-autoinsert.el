(auto-insert-mode t)
(setq auto-insert-directory "~/.emacs.d/template/")
(setq auto-insert-query nil)

(setq auto-insert-alist
			(nconc '(
							 ("\\.php$" . ["template.php" my-template])
							 ) auto-insert-alist))

(defvar template-replacements-alists
	'(("%file%"             . (lambda () (file-name-nondirectory (buffer-file-name))))
		("%file-without-ext%" . (lambda () (file-name-sans-extension (file-name-nondirectory (buffer-file-name)))))
))

(defun my-template ()
	(time-stamp)
	(mapc #'(lambda(c)
						(progn
							(goto-char (point-min))
							(replace-string (car c) (funcall (cdr c)) nil)))
				template-replacements-alists)
	(goto-char (point-max))
	(message "done."))
(add-hook 'find-file-not-found-hooks 'auto-insert)
