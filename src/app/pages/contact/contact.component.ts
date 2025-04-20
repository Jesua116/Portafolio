import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import Typed from 'typed.js';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  constructor(public toast: ToastService) { }
  @ViewChild('typedGato') typedGato!: ElementRef;

  private typedInstance: Typed | null = null;

  iniciarTyped() {
    if (!this.typedGato) return;
  
    console.log('[TYPED] Iniciando en:', this.typedGato.nativeElement);
  
    // Si ya existe uno, destruirlo y limpiarlo
    if (this.typedInstance) {
      this.typedInstance.destroy();
      this.typedInstance = null;
      this.typedGato.nativeElement.innerHTML = ''; // Limpia el texto anterior
    }
  
    // Crear uno nuevo
    this.typedInstance = new Typed(this.typedGato.nativeElement, {
      strings: ['¡No dudes en escribir!','Digo...','Miau  🐈‍⬛',],
      typeSpeed: 45,
      backSpeed: 15,
      loop: false,
      showCursor: true,
    });
  }
  
  

  detenerTyped() {
    if (this.typedInstance) {
      console.log('[TYPED] Deteniendo...');
      this.typedInstance.destroy();
      this.typedInstance = null;
      this.typedGato.nativeElement.innerHTML = '';
    }
  }

  @ViewChild('nameRef') nameRef!: NgModel;
  @ViewChild('lastnameRef') lastnameRef!: NgModel;
  @ViewChild('emailRef') emailRef!: NgModel;
  @ViewChild('messageRef') messageRef!: NgModel;


  isSending: boolean = false;
  attemptedSubmit = false;
  wasSent = false;

  // ✅ Modo prueba: pon esto en false para hacer el envío real
  modoPrueba = false;

  formData = {
    name: '',
    lastname: '',
    email: '',
    message: ''
  };

  shakeFields: { [key in 'name' | 'lastname' | 'email' | 'message']: boolean } = {
    name: false,
    lastname: false,
    email: false,
    message: false
  };

  triggerShakeIfInvalid() {
    const refs: { [key in 'name' | 'lastname' | 'email' | 'message']: NgModel } = {
      name: this.nameRef,
      lastname: this.lastnameRef,
      email: this.emailRef,
      message: this.messageRef
    };

    for (const key in refs) {
      const field = key as keyof typeof refs;
      if (refs[field].invalid) {
        this.shakeFields[field] = true;
        setTimeout(() => {
          this.shakeFields[field] = false;
        }, 500);
      }
    }
  }

  onInputChange(field: keyof typeof this.shakeFields) {
    if (this.shakeFields[field]) {
      this.shakeFields[field] = false;
    }
  }




  sendEmail(form: NgForm) {
    this.attemptedSubmit = true;

    const { name, lastname, email, message } = this.formData;

if (name.trim().length < 2) {
  this.toast.showToast('El nombre debe tener al menos 2 letras', 'error');
  return;
}

if (lastname.trim().length < 2) {
  this.toast.showToast('El apellido debe tener al menos 2 letras', 'error');
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  this.toast.showToast('El correo no es válido', 'error');
  return;
}

if (message.trim().length < 10 || message.trim().length > 500) {
  this.toast.showToast('El mensaje debe tener entre 10 y 500 caracteres', 'error');
  return;
}


    if (form.invalid) {
      this.triggerShakeIfInvalid();
      return;
    }

    this.isSending = true;

    const serviceID = 'service_ztxm1os';
    const templateContact = 'template_i6tumeg';
    const templateAutoReply = 'template_0a43t19';
    const publicKey = 'BUBu9VakscomEJQue';

    const fullData = {
      ...this.formData,
      title: 'Nuevo mensaje de contacto',
      time: new Date().toLocaleString()
    };

    // ✅ Si está en modo prueba, no se envían correos
    if (this.modoPrueba) {
      console.log('🔧 MODO PRUEBA ACTIVADO - No se enviará ningún correo');
      console.log('Datos simulados:', fullData);

      setTimeout(() => {
        form.resetForm();
        this.attemptedSubmit = false;
        this.wasSent = true;

        setTimeout(() => {
          this.wasSent = false;
        }, 3000);

        this.isSending = false;
      }, 1500);

      return;
    }

    // ✅ ENVÍO REAL
    const sendToMe = emailjs.send(serviceID, templateContact, fullData, publicKey);
    const sendToUser = emailjs.send(serviceID, templateAutoReply, fullData, publicKey);

    Promise.all([sendToMe, sendToUser])
      .then(() => {
        this.toast.showToast('¡Tu mensaje fue enviado con éxito! 📩', 'success');
        form.resetForm();
        this.attemptedSubmit = false;
        this.wasSent = true;

        setTimeout(() => {
          this.wasSent = false;
        }, 3000);
      })
      .catch((error) => {
        console.error('Error al enviar mensajes:', error);
        this.toast.showToast('Error al enviar el mensaje 😥 Inténtalo más tarde.', 'error');
      })
      .finally(() => {
        this.isSending = false;
      });

  }

  // probarToast() {
  //   console.log('[CONTACT] Botón clickeado');

  //   this.toast.showToast('Hola desde ContactComponent 🎉', 'success');
  // }


}
