;; anything
(require 'anything-config)
(require 'anything-match-plugin)
(setq anything-sources
			(list anything-c-source-buffers
						anything-c-source-emacs-commands
						anything-c-source-file-name-history
						anything-c-source-files-in-current-dir
						anything-c-source-recentf
						anything-c-source-locate))
(define-key anything-map (kbd "C-p") 'anything-previous-line)
(define-key anything-map (kbd "C-n") 'anything-next-line)
(define-key anything-map (kbd "C-v") 'anything-next-source)
(define-key anything-map (kbd "M-v") 'anything-previous-source)
(global-set-key (kbd "C-;") 'anything)
