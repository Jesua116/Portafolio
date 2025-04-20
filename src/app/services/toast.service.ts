import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  
  toasts: { message: string; type: 'success' | 'error'; out: boolean }[] = [];

  private lastMessage = '';
  private lastShownAt = 0;

  showToast(message: string, type: 'success' | 'error' = 'success') {

    const now = Date.now();

    // Evita repetir el mismo mensaje muy seguido
    if (message === this.lastMessage && now - this.lastShownAt < 2000) return;

    // Evita más de 3 toasts visibles al mismo tiempo
    if (this.toasts.length >= 3) return;

    this.lastMessage = message;
    this.lastShownAt = now;

    const toast = { message, type, out: false };
    this.toasts.push(toast); // ✅ Mismo objeto

    // Después de 3s, marcamos como saliendo
    setTimeout(() => {
      toast.out = true;

      // Después de animación (ej: 400ms), se elimina del array
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t !== toast);
      }, 400);
    }, 3000);
  }

  getToasts() {
    return this.toasts;
  }
}
