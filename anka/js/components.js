function renderMadeBy(){
    return `
          <!-- Made by -->
            <p>Made with ❤ by <a href="https://yigitsereflioglu.dev" target="_blank"> Yigit S</a></p>
    `;
  }

  function renderNavBar(){
    return `
  <!-- Navbar (sit on top) -->
  <div class="w3-top" style="z-index: 999;">
    <div class="w3-bar w3-white w3-wide w3-card flex">
      <!-- <a href="#home" class="w3-bar-item w3-button"><b>ANKA</b> Mimarlık</a> -->
  
      <div class="nav-bar-left">
        <a href="#home" class="w3-bar-item w3-button h-100">
          <img class="h-100 animate__animated animate__fadeIn" src="img/logo.png" alt="ankaLogo">
        </a>
      </div>
  
      
      <!-- Float links to the right. Hide them on small screens -->
      <div class="w3-right w3-hide-small nav-bar-right flex animate__animated animate__fadeIn">
        <a href="#projects" class="w3-bar-item w3-button">Projeler</a>
        <a href="#about" class="w3-bar-item w3-button">Hakkımızda</a>
        <a href="#contact" class="w3-bar-item w3-button">İletişim</a>
      </div>
    </div>
  </div>
    `
  }
  
  function load(){
        document.getElementById('madeById').innerHTML = renderMadeBy();
        document.getElementById('nav-bar').innerHTML = renderNavBar()
  }
  
  load();