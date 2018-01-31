
//Banner Loop Function
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
  bannerLoop();
}

var startBannerLoop = setInterval(function() {
  bannerLoop();
}, bannerTimer);

function bannerLoop() {
  if(bannerStatus === 1) {
    document.getElementById('imgBan2').style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan1').style.right = "0px";
      document.getElementById('imgBan1').style.zIndex = "1000";
      document.getElementById('imgBan2').style.right = "-1200px";
      document.getElementById('imgBan2').style.zIndex = "1500";
      document.getElementById('imgBan3').style.right = "1200px";
      document.getElementById('imgBan3').style.zIndex = "500";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan2').style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  }
  else if(bannerStatus === 2) {
    document.getElementById('imgBan3').style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan2').style.right = "0px";
      document.getElementById('imgBan2').style.zIndex = "1000";
      document.getElementById('imgBan3').style.right = "-1200px";
      document.getElementById('imgBan3').style.zIndex = "1500";
      document.getElementById('imgBan1').style.right = "1200px";
      document.getElementById('imgBan1').style.zIndex = "500";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan3').style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  }
  else if(bannerStatus === 3) {
    document.getElementById('imgBan1').style.opacity = "0";
    setTimeout(function() {
      document.getElementById('imgBan3').style.right = "0px";
      document.getElementById('imgBan3').style.zIndex = "1000";
      document.getElementById('imgBan1').style.right = "-1200px";
      document.getElementById('imgBan1').style.zIndex = "1500";
      document.getElementById('imgBan2').style.right = "1200px";
      document.getElementById('imgBan2').style.zIndex = "500";
    }, 500);
    setTimeout(function() {
      document.getElementById('imgBan1').style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
  }
}
