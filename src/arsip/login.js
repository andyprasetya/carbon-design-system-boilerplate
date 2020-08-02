<!DOCTYPE html>
<html>
  <head lang='en'>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='icon' href='./img/favicon.ico'>
    <title>Title</title>
    <link rel='stylesheet' href='./bundle.css'>
  </head>
  <body>
    <nav class='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='./'>
          SIG Persampahan Kota Tegal
        </a>
    
        <a role='button' class='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
    
      <div id='navbarBasicExample' class='navbar-menu'>
        <div class='navbar-start'>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <a class='button is-primary'>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <div id='app'>
        <section class="hero has-background-white-ter is-fullheight">
          <div class="hero-body">
            <div class="countainer">
              <div class="colims is-centered">
                <div column is-5-tablet is-4-desktop is-3-widescreen>
                  <from action="POST" class="box">
                    <h3 class="title is-3">Login</h3>
                    
                    <div class="field">
                      <label for="" class="label">Email</label>
                      <div class="control has-icons-left">
                        <input type="email" placeholder="sig.546@gmail.com" class="input" required>
                        <span class="icon is-mall is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
  
                    <div class="filed">
                      <label for="" class="label">Password</label>
                      <div class="control has-icons-left">
                        <input type="password" placeholder="*****************" class="input" required>
                        <span class="icon is-small is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
  
                    <div class="field">
                    <label for="" class="checkbox" id="label-remember-me" onclick="setCheckedState()">
                      <input type="checkbox" id="checkbox-remember-me">
                      Remember me
                    </label>
                    </div>
  
                    <div class="field">
                      <a href="#">Forget Password</a>
                    </div>
                    <div class="field">
                      <button class="button is-success">
                        Login
                      </button>
                    </div>
                  </from>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
    <script src='./bundle.js'></script>
  </body>
   </html>