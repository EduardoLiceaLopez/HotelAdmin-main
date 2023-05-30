import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-habitacion',
  templateUrl: './update-habitacion.page.html',
  styleUrls: ['./update-habitacion.page.scss'],
})
export class UpdateHabitacionPage implements OnInit {
  habitacionId: number;
  habitacion: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restService: ConnectionService
  ) {}

  ngOnInit() {
    this.habitacionId = this.route.snapshot.params['id'];
    this.getHabitacion();
  }

  getHabitacion() {
    const query = `
      {
        habitacion(id: ${this.habitacionId}) {
          id
          precio
          ubicacion
          estado
        }
      }
    `;

    this.restService.getAll<any>(query).subscribe(
      (response) => {
        if (response.data && response.data.habitacion) {
          this.habitacion = response.data.habitacion;
        } else {
          console.log('Error en la respuesta del servidor:', response);
        }
      },
      (error: any) => {
        console.log('Error en la solicitud:', error);
      }
    );
  }

  actualizarHabitacion() {
    const mutation = `
      mutation {
        updateHabitacion(id: ${this.habitacionId}, input: {
          precio: "${this.habitacion.precio}",
          ubicacion: "${this.habitacion.ubicacion}",
          estado: "${this.habitacion.estado}"
        }) {
          id
          precio
          ubicacion
          estado
        }
      }
    `;

    this.restService.update<any>(mutation, {}).subscribe(
      (response) => {
        if (response.data && response.data.updateHabitacion) {
          Swal.fire({
            title: 'Habitación actualizada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            width: '100%',
            padding: '2em',
            background: '#f6f6f6',
            position: 'center',
            heightAuto: false
          });
          this.router.navigate(['/rooms']);
        } else {
          Swal.fire({
            title: 'Error al actualizar la habitación',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '100%',
            padding: '2em',
            background: '#f6f6f6',
            position: 'center',
            heightAuto: false
          });
        }
      },
      (error: any) => {
        console.log('Error en la solicitud:', error);
      }
    );
  }
}