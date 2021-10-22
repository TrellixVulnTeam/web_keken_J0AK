import { Injectable } from '@angular/core';
import { SERVER_API } from 'src/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

    constructor(
        public http: HttpClient
    ) { }

    obtenerEmpresas(){
        let url = SERVER_API+"empresa/obtenerEmpresas";
        return this.http.get(url);
    }
}