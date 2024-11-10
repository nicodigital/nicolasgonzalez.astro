function tabs() {
  const tabs = document.querySelectorAll('.tabs');
  
  if (tabs.length > 0) {
    // Detectar si es dispositivo móvil
    const isMobile = () => {
      return window.matchMedia('(max-width: 768px)').matches;
    };

    tabs.forEach(tab => {
      // Función para manejar la activación de tabs
      const handleTabActivation = (e) => {
        const btnTab = e.target;

        if (btnTab.classList.contains('tab-link')) {
          const tabLinks = tab.querySelectorAll('.tab-link');
          const tabContent = tab.querySelectorAll('.tab-content');
          const tabTarget = btnTab.dataset.tab;

          tabLinks.forEach((btn) => {
            btn.classList.remove('active');
          });

          btnTab.classList.add('active');

          tabContent.forEach((content) => {
            const tabData = content.dataset.tab;

            if (tabTarget !== '*') {
              if (tabData === tabTarget) {
                content.classList.add('active');
              } else {
                content.classList.remove('active');
              }
            } else {
              content.classList.add('active');
            }
          });
        }
      };

      // Eventos para desktop (hover)
      if (!isMobile()) {
        const tabLinks = tab.querySelectorAll('.tab-link');
        
        tabLinks.forEach(tabLink => {
          tabLink.addEventListener('mouseenter', handleTabActivation);
        });
      }

      // Eventos para móvil (click)
      if (isMobile()) {
        tab.addEventListener('click', handleTabActivation);
      }

      // Manejar cambios en el tamaño de la ventana
      window.addEventListener('resize', () => {
        const tabLinks = tab.querySelectorAll('.tab-link');
        
        if (isMobile()) {
          tabLinks.forEach(tabLink => {
            tabLink.removeEventListener('mouseenter', handleTabActivation);
          });
          tab.addEventListener('click', handleTabActivation);
        } else {
          tab.removeEventListener('click', handleTabActivation);
          tabLinks.forEach(tabLink => {
            tabLink.addEventListener('mouseenter', handleTabActivation);
          });
        }
      });
    });
  }
}

export default tabs;