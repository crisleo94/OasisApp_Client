import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  user = new UsuarioModel();
  habilitado = false;
  longitud;
  latitud;
  map: GoogleMap;
  // map2: GoogleMap;

  constructor(private menu: MenuController,
              private router: Router,
              private alert: AlertController,
              private locate: Geolocation) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    this.cargarMapa();
  }

  register2(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl('/home-store');
    } else {
      this.errorRegister2();
    }
  }

  async errorRegister2() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Debe llenar todos los campos para poder continuar.',
      buttons: ['OK']
    });

    await alert.present();
  }

  getPosition() {
    // Con esta función se obtienen las coordenadas y se envian a cargarMapa
    this.locate.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
    }).catch((error) => {
      // En caso se registre un error
      console.error('Error obteniendo la ubicación', error);
    });
  }

  cargarMapa() {
    // Se pasan las coordenadas obtenidas con el getposition
    console.log(this.latitud, this.longitud);

    Environment.setEnv({
      // API_KEY_FOR_BROWSER_RELEASE: '(https://maps.googleapis.com/maps/api/js?key=AIzaSyB9MVUJdvr1kNfn5goUrxxN3lRbvMVq40I)',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCt7WPEfZCJFecvCoQb24L3IJejmFznsZk'
    });

    // Crear el mapa
    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitud,
          lng: this.longitud
        },
        zoom: 12,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('mapa', mapOptions);

    const marker: Marker = this.map.addMarkerSync({
      title: 'Addres Location',
      icon: 'Red',
      animation: 'DROP',
      position: {
        lat: this.latitud,
        lng: this.longitud
      }
    });
    marker.showInfoWindow();
  }

}
