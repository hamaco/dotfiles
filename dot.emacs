(byte-recompile-directory "~/.emacs.d/elisp")
(load "~/.emacs.d/elisp/startup")

(require 'cake2)
(global-cake2 t)
(cake2-set-default-keymap)
(partial-completion-mode t)
