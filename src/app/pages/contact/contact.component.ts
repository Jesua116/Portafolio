import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  formData = {
    name: '',
    lastname: '',
    email: '',
    message: ''
  };

  sendEmail(form: NgForm) {
    if (form.invalid) return;

    const serviceID = 'service_ztxm1os';
    const templateContact = 'template_i6tumeg'; // para ti
    const templateAutoReply = 'template_0a43t19'; // para el usuario
    const publicKey = 'BUBu9VakscomEJQue';

    // Agregamos un título y hora por si la plantilla los necesita
    const fullData = {
      ...this.formData,
      title: 'Nuevo mensaje de contacto',
      time: new Date().toLocaleString()
    };

    // Enviar a ti (Contact Us)
    const sendToMe = emailjs.send(serviceID, templateContact, fullData, publicKey);

    // Enviar Auto-Reply
    const sendToUser = emailjs.send(serviceID, templateAutoReply, fullData, publicKey);

    Promise.all([sendToMe, sendToUser])
      .then(() => {
        alert('¡Tu mensaje fue enviado con éxito y recibirás una confirmación pronto!');
        form.resetForm();
      })
      .catch((error) => {
        console.error('Error al enviar mensajes:', error);
        alert('Hubo un problema al enviar el mensaje. Intenta nuevamente más tarde.');
      });
  }
}

