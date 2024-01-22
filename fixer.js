function isVisible(entries, observer) {
	entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (typeof init !== 'undefined') {
			console.log('init is defined:', init);
			} else {
			console.log('init is undefined');
		}
          observer.disconnect();
        }
      });
    }
    const observer = new IntersectionObserver(isVisible, { threshold: 0.5 });
    const chead = document.getElementById('chead');

    observer.observe(chead);
