import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  habitaciones: any[];

  constructor(private router: Router, private restService: ConnectionService) {}

  ngOnInit() {
    this.getHabitaciones();
  }

  getHabitaciones() {
    const query = `
      {
        habitaciones {
          id
          precio
          ubicacion
          estado
          tipohabitacion{
            tipo
          }
        }
      }
    `;

    this.restService.getAll<any>(query).subscribe(
      (response) => {
        if (response.data && response.data.habitaciones) {
          this.habitaciones = response.data.habitaciones;
        } else {
          console.log('Error en la respuesta del servidor:', response);
        }
      },
      (error: any) => {
        console.log('Error en la solicitud:', error);
      }
    );
  }

  crearHabitacion() {
    this.router.navigate(['/create-habitacion']);
  }

  eliminarHabitacion(id: number) {
    const mutation = `
      mutation {
        removeHabitacion(id: ${id}) {
          id
        }
      }
    `;
  
    this.restService.delete<any>(mutation, {}).subscribe(
      (response) => {
        if (response.data && response.data.removeHabitacion) {
          this.habitaciones = this.habitaciones.filter(habitacion => habitacion.id !== id);
          Swal.fire({
            title: 'Habitación eliminada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            width: '100%',
            padding: '2em',
            background: '#f6f6f6',
            position: 'center',
            heightAuto: false
          });
        } else {
          Swal.fire({
            title: 'Habitación eliminada',
            icon: 'success',
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

  actualizarHabitacion(id: number) {
    // Redirigir a la página de actualización de habitación con el ID como parámetro
    this.router.navigate(['/update-habitacion', id]);
  }
}
