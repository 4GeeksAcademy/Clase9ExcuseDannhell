/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["Mi jefe", "Mi mascota", "Mi pareja", "Un  ladron"];
  let accion = [" se  llevo ", " ha cambiado", " ha pintado", " ha  dañado"];
  let que = [" mi coche ", " mis llaves", " mis vacaciones", " la  laptop"];
  let cuando = [
    " en la noche",
    " durante mis vacaciones ",
    " al atardecer ",
    " a la hora de la siesta "
  ];
  let QuienNuevo = Math.floor(Math.random() * quien.length);
  let AccionNuevo = Math.floor(Math.random() * accion.length);
  let Quenuevo = Math.floor(Math.random() * que.length);
  let CuandoNuevo = Math.floor(Math.random() * cuando.length);
  let excusaNueva =
    quien[QuienNuevo] +
    accion[AccionNuevo] +
    que[Quenuevo] +
    cuando[CuandoNuevo];
  console.log(excusaNueva);
  document.getElementById("excusa").innerHTML = excusaNueva;
};
