'use client';

import { useEffect, useRef } from 'react';

/** Trap focus, support Escape, lock background scrolling, and restore focus on close. */
export function useDialogAccessibility(isOpen: boolean, onClose: () => void) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef(onClose);
	useEffect(() => { closeRef.current = onClose; }, [onClose]);
	useEffect(() => {
		if (!isOpen || !dialogRef.current) return;
		const dialog = dialogRef.current;
		const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		/** Only visible, enabled controls participate in the focus cycle. */
		const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],input,select,textarea,[tabindex="0"]')).filter((element) => element.getClientRects().length > 0);
		(focusable()[0] || dialog).focus();
		/** Closing is owned by the caller's URL state. */
		const handleKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); }
			if (event.key !== 'Tab') return;
			const items = focusable();
			const first = items[0];
			const last = items[items.length - 1];
			if (!first) { event.preventDefault(); dialog.focus(); return; }
			if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { event.preventDefault(); last.focus(); }
			else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
		};
		dialog.addEventListener('keydown', handleKey);
		return () => {
			dialog.removeEventListener('keydown', handleKey);
			document.body.style.overflow = previousOverflow;
			if (previous?.isConnected) previous.focus({ preventScroll: true });
		};
	}, [isOpen]);
	return dialogRef;
}
