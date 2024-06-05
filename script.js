function openResume() {
  open("./Eric_Zhong_Resume.pdf");
}

function isMobile(){
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) 
      confirm("Visit this on a Computer for Better View");             
}
