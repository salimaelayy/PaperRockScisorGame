
function include() 
{  
    let header=document.querySelector('header');
    header.innerHTML=`<nav class=" navbar navbar-expand-lg bg-body-tertiary">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="index.html">
        <img 
          src="Assets/Logo.png"
          height="50px"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px;"
          
        />
      </a>
  <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav float-left me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-bold" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-bold" href="game.html">Game</a>
          </li>
        </ul>
      
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>`;
}