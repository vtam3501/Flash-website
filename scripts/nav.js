var setActive = () => {
  //this.console.log('this printed');

  var nav = document.getElementById('nav').getElementsByTagName('a');

  for(var index=0; index< nav.length; index++) {
    if(document.location.href.indexOf(nav[index].href)>=0) {
      nav[index].className='active';
    }
  }
};

window.onload = setActive();
