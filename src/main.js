import './stylesheets/style.scss';
import '../node_modules/leaflet/dist/leaflet.css';

import L from 'leaflet';

/* -- code -- */
document.title = "SIG Persampahan Kota Tegal";
var topNavbar = `<nav class='navbar is-fixed-top is-dark' role='navigation' aria-label='main navigation'>
    <div class='navbar-brand'>
      <a class='navbar-item' href='./'><h1>SIG Persampahan Kota Tegal</h1></a>
      <a role='button' class='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarMainMenu'><span aria-hidden='true'></span><span aria-hidden='true'></span><span aria-hidden='true'></span></a></div><div id='navbarMainMenu' class='navbar-menu'><div class='navbar-start'><a id='menu_beranda' class='navbar-item'>Beranda</a><a id='menu_data' class='navbar-item'>Data</a><div class='navbar-item has-dropdown is-hoverable'><a class='navbar-link'>Peta</a><div class='navbar-dropdown'><a id='menu_peta_bataswilayah' class='navbar-item'>Batas Wilayah Administrasi</a><a id='menu_peta_tpstpa' class='navbar-item'>TPS/TPA</a></div></div></div><div class='navbar-end'><div class='navbar-item'><div class='buttons'><a id='loginbutton' class='button has-background-dark has-text-light is-outlined is-radiusless is-fullwidth-mobile'><span class='icon' style='margin-right:1px;'><i class='fa fa-lock'></i></span>Login</a></div></div></div></div>
  </nav>`;
var penanda = document.getElementById('app');
penanda.insertAdjacentHTML('beforebegin', topNavbar);

var halamanawal = `<section class='section'>
<div class='container'>
  <div class='columns'>
    <div class='column'>
      <div class='box'>
        <article class='media'>
          <div class='media-left'>
            <figure class='image is-64x64'>
              <h1 class='is-danger'>25</h1>
            </figure>
          </div>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>TPS</strong>
                <br>
                Tempat Pembuangan Sementara
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class='column'>
      <div class='box'>
        <article class='media'>
          <div class='media-left'>
            <figure class='image is-64x64'>
              <h1 class='is-danger'>15</h1>
            </figure>
          </div>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>Alat</strong>
                <br>
                Alat pendukung persampahan Kota Tegal
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class='column'>
      <div class='box'>
        <article class='media'>
          <div class='media-left'>
            <figure class='image is-64x64'>
              <h1 class='is-danger'>27</h1>
            </figure>
          </div>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>Kelurahan</strong>
                <br>
                Wilayah kelurahan di Kota Tegal
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class='column'>
      <div class='box'>
        <article class='media'>
          <div class='media-left'>
            <figure class='image is-64x64'>
              <h1 class='is-danger'>4</h1>
            </figure>
          </div>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>Kecamatan</strong>
                <br>
                Wilayah Kecamatan di Kota Tegal
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>
</section>`;
penanda.innerHTML = halamanawal;
var loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', function(e){
  e.preventDefault();
  var loginBox = `<section class='hero is-light is-fullheight-with-navbar'>
      <div class='hero-body'>
        <div class='container has-text-centered'>
          <div class='column is-4 is-offset-4'>
            <h3 class='title has-text-black'>Login</h3>
            <hr class='login-hr'>
            <p id='loginnotice' class='subtitle has-text-black'>Masukkan <span class='is-italic'>Username</span> dan <span class='is-italic'>Password</span> Anda.</p>
                <div class='box is-radiusless'>
                  <div class='field'>
                    <label for='username' class='label'>Username</label>
                    <div class='control has-icons-left'>
                        <input id='username' name='username' type='text' placeholder='Username' class='input' required>
                        <span class='icon is-mall is-left'>
                          <i class='fa fa-envelope'></i>
                        </span>
                       </div>
                  </div>
                  <div class='field'>
                  <label for='password' class='label'>Password</label>
                    <div class='control has-icons-left'>
                      <input id='password' name='password' type='password' placeholder='Password' class='input' required>
                      <span class='icon is-small is-left'>
                        <i class='fa fa-lock'></i>
                      </span>
                    </div>
                </div>
                <button type='submit' class='button is-success is-info is-large is-fullwidth is-radiusless'>Login <i class='fa fa-sign-in' aria-hidden='true'></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  document.getElementById('app').innerHTML = "";
  document.getElementById('app').innerHTML = loginBox;
  return false;
});
/* -- /code -- */
var menuBeranda = document.getElementById('menu_beranda');
var menuData = document.getElementById('menu_data');
var menuPetaA = document.getElementById('menu_peta_bataswilayah');
var menuPetaB = document.getElementById('menu_peta_tpstpa');
menuBeranda.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('app').innerHTML = "";
  var konten = `<section class='section'>
  <div class='container'>
    <div class='columns'>
      <div class='column'>
        <div class='box'>
          <article class='media'>
            <div class='media-left'>
              <figure class='image is-64x64'>
                <h1 class='is-danger'>25</h1>
              </figure>
            </div>
            <div class='media-content'>
              <div class='content'>
                <p>
                  <strong>TPS</strong>
                  <br>
                  Tempat Pembuangan Sementara
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class='column'>
        <div class='box'>
          <article class='media'>
            <div class='media-left'>
              <figure class='image is-64x64'>
                <h1 class='is-danger'>15</h1>
              </figure>
            </div>
            <div class='media-content'>
              <div class='content'>
                <p>
                  <strong>Alat</strong>
                  <br>
                  Alat pendukung persampahan Kota Tegal
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class='column'>
        <div class='box'>
          <article class='media'>
            <div class='media-left'>
              <figure class='image is-64x64'>
                <h1 class='is-danger'>27</h1>
              </figure>
            </div>
            <div class='media-content'>
              <div class='content'>
                <p>
                  <strong>Kelurahan</strong>
                  <br>
                  Wilayah kelurahan di Kota Tegal
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class='column'>
        <div class='box'>
          <article class='media'>
            <div class='media-left'>
              <figure class='image is-64x64'>
                <h1 class='is-danger'>4</h1>
              </figure>
            </div>
            <div class='media-content'>
              <div class='content'>
                <p>
                  <strong>Kecamatan</strong>
                  <br>
                  Wilayah Kecamatan di Kota Tegal
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>`;
  document.getElementById('app').innerHTML = konten;
  return false;
});
menuData.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('app').innerHTML = "";
  var konten = `<section>
  <div class='section'>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <div class='box'>
            <article class='media'>
              <div class='media-left'>
                <figure class='image is-64x64'>
                  <h1 class='is-danger'>2A</h1>
                </figure>
              </div>
              <div class='media-content'>
                <div class='content'>
                  <p>
                    <strong>KSHI</strong>
                    <br>
                    Kubikasi Sampah Hari Ini
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class='column'>
          <div class='box'>
            <article class='media'>
              <div class='media-left'>
                <figure class='image is-64x64'>
                  <h1 class='is-danger'>2B</h1>
                </figure>
              </div>
              <div class='media-content'>
                <div class='content'>
                  <p>
                    <strong>KSBI</strong>
                    <br>
                    Kubikasi Sampah Bulan Ini
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
</section>

<section>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <div class='box'>
            <article class='media'>
              <div class='media-left'>
                <figure class='image is-64x64'>
                  <h1 class='is-danger'>2C</h1>
                </figure>
              </div>
              <div class='media-content'>
                <div class='content'>
                  <p>
                    <strong>Grafik</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>   
</section>

<section>
  <div class='section'>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <div class='box'>
            <article class='media'>
              <div class='media-left'>
                <figure class='image is-64x64'>
                  <h1 class='is-danger'>2D</h1>
                </figure>
              </div>
              <div class='media-content'>
                <div class='content'>
                  <p>
                    <strong>Daftar Kecamatan</strong>
                    <br>
                    <table class="table">
                      <thead>
                        <tr>
                          <th><abbr title="Position">No</abbr></th>
                          <th>Kode</th>
                          <th><abbr title="Played">Kelurahan</abbr></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>123456 </td>
                          <td>Tunon</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
</section>

<section>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
          <div class='box'>
            <article class='media'>
              <div class='media-left'>
                <figure class='image is-64x64'>
                  <h1 class='is-danger'>2D</h1>
                </figure>
              </div>
              <div class='media-content'>
                <div class='content'>
                  <p>
                    <strong>Daftar Kelurahan</strong>
                    <br>
                    <table class="table">
                      <thead>
                        <tr>
                          <th><abbr title="Position">No</abbr></th>
                          <th>Kode</th>
                          <th><abbr title="Played">Kecamatan</abbr></th>
                          <th><abbr title="Played">Kelurahan</abbr></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td><a>52341</a> </td>
                          <td>Tegal Selatan</td>
                          <td>Tunon</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
</section>

<section>
  <div class='container'>
    <div class='columns'>
      <div class='column'>
        <div class='box'>
          <article class='media'>
            <div class='media-left'>
              <figure class='image is-64x64'>
                <h1 class='is-danger'>2E</h1>
              </figure>
            </div>
            <div class='media-content'>
              <div class='content'>
                <p>
                  <strong>ALAT</strong>
                  <br>
                  <table class="table">
                    <thead>
                      <tr>
                        <th><abbr title="Position">No</abbr></th>
                        <th>Kode</th>
                        <th><abbr title="Played">Jenis</abbr></th>
                        <th><abbr title="Played">Deskripsi</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td><a>G-5473-DH</a> </td>
                        <td>Pt</td>
                        <td>Alat Bantu Di TPA</td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>>    
</section>`;
  document.getElementById('app').innerHTML = konten;
  return false;
});
menuPetaA.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('app').innerHTML = "";
  var konten = `<div id='map'></div>`;
  document.getElementById('app').innerHTML = konten;
  var peta;
  var southWest = L.latLng(107.42689453130005, -9.57977159950005),
      northEast = L.latLng(112.87095703130005, -4.60408625880005),
      maxBoundingBox = L.latLngBounds(southWest, northEast);
  var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Satellite</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Streets</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Hybrid</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Terrain</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var openstreetmap = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 11,
    maxZoom: 19,
    attribution: "Map Data &copy; OSM"
  });
  peta = L.map('map', {
    center: [-6.867624, 109.137811],
    zoom: 14,
    layers: [openstreetmap]
  });

var adminKota = L.geoJson(null);
var adminKecamatan = L.geoJson(null);
var adminKelurahan = L.geoJson(null);

fetch('../../twm-dataservices/getAdminKota')
.then (function (data_ak){
  return data_ak.json();
})
.then(function(geoJesondata_ak) {
  adminKota.addData(geoJesondata_ak);
  fetch('../../twm-dataservices/getAdminKecamatan')
  .then(function(data_kc){
    return data_kc.json();
  })
  .then(function(geoJesondata_kc) {
    adminKecamatan.addData(geoJesondata_kc);
    fetch('../../twm-dataservices/getAdminKelurahan')
    .then(function(data_kl){
        return data_kl.json();
      })
      .then(function(geoJesondata_kl) {
        adminKelurahan.addData(geoJesondata_kl);
        adminKota.addTo(peta);
        adminKecamatan.addTo(peta);
        adminKelurahan.addTo(peta);
      })
      .catch(function (errorkl){
        console.log(errorkl);
      });
    })
  .catch(function (errorkc){
    console.log(errorkc);
  });
})
.catch(function (errorak){
  console.log(errorak);
});

  var petadasar = {
    "Google Satellite": googleSatellite,
    "Google Street":googleStreets,
    "Google Hybrid":googleHybrid,
    "Google Terrain":googleTerrain,
    "OpenStreetMaps": openstreetmap
  };
  var batasadmin = {
    "Batas Administrasi Kota": adminKota,
    "Batas Administrasi Kecamatan": adminKecamatan,
    "Batas Administrasi Kelurahan": adminKelurahan
  }
  var layerControl = L.control.layers(petadasar, batasadmin, {
    collapsed: false
  }).addTo(peta);
  return false;
});
menuPetaB.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('app').innerHTML = "";
  var konten = `<div id='map'></div>`;
  document.getElementById('app').innerHTML = konten;
  var peta;
  var southWest = L.latLng(107.42689453130005, -9.57977159950005),
      northEast = L.latLng(112.87095703130005, -4.60408625880005),
      maxBoundingBox = L.latLngBounds(southWest, northEast);
  var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Satellite</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Streets</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Hybrid</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxBounds: maxBoundingBox,
    minZoom: 9,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: `Layanan <strong>Google Terrain</strong> disediakan oleh <a href='https://www.google.com/maps' target='_blank'>Google, Inc.</a>`
  });
  var openstreetmap = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 11,
    maxZoom: 19,
    attribution: "Map Data &copy; OSM"
  });
  peta = L.map('map', {
    center: [-6.867624, 109.137811],
    zoom: 14,
    layers: [openstreetmap]
  });
var adminKota = L.geoJson(null);
var adminKecamatan = L.geoJson(null);
var adminKelurahan = L.geoJson(null);

fetch('../../twm-dataservices/getAdminKota')
.then (function (data_Tpa){
  return data_Tpa.json();
})
.then(function(geoJesondata_Tpa) {
  adminKota.addData(geoJesondata_Tpa);
  fetch('../../twm-dataservices/getAdminKecamatan')
  .then(function(data_Tps){
    return data_Tps.json();
  })
  .then(function(geoJesondata_Tps) {
    adminKecamatan.addData(geoJesondata_Tps);
    fetch('../../twm-dataservices/getAdminKelurahan')
    .then(function(data_Tps2){
        return data_Tps2.json();
      })
      .then(function(geoJesondata_Tps2) {
        adminKelurahan.addData(geoJesondata_Tps2);
        adminKota.addTo(peta);
        adminKecamatan.addTo(peta);
        adminKelurahan.addTo(peta);
      })
      .catch(function (errorkl){
        console.log(errorkl);
      });
    })
  .catch(function (errorkc){
    console.log(errorkc);
  });
})
.catch(function (errorak){
  console.log(errorak);
});
  var petadasar = {
    "Google Satellite": googleSatellite,
    "Google Street":googleStreets,
    "Google Hybrid":googleHybrid,
    "Google Terrain":googleTerrain,
    "OpenStreetMaps": openstreetmap
  };
  var batasadmin = {
    "Batas Administrasi Kota": adminKota,
    "Batas Administrasi Kecamatan": adminKecamatan,
    "Batas Administrasi Kelurahan": adminKelurahan
  }
  var layerControl = L.control.layers(petadasar, batasadmin, {
    collapsed: false
  }).addTo(peta);
  return false;
});
/* /code */

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
  navbarLink.addEventListener('click', function(){
    navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
  navbarLink.addEventListener('click', function(){
    navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
  });
});
