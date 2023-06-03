(function () {
  var korei = 0;
  var player;
  var aryanni = 0;
  var ellalee = 0;
  var janiyla = "A";
  window.startVideo = (rupesh, melcina) => {
    rupesh = JSON.parse(rupesh);
    var miren = false;
    if (rupesh.indexOf("progress") >= 0) {
      miren = true;
    };
    $("#student_audio").css({ visibility: "hidden" });
    $("#course-content").fadeIn();
    CookiePos = getVideoPosCookie(VideoName);
    var niyani = $("#player");
    aryanni = 0;
    ellalee = 0;
    korei = 0;
    var laterrica = {fullscreen: {iosNative: true}, captions: {active: false}, autoplay: true, seekTime: 15, vimeo: {title: true}, controls: rupesh, speed: {selected: 1, options: [1, 1.25, 1.5]}, settings: ["captions", "quality", "speed"], keyboard: {focused: false, global: false}};
    if (is_playlist) {
      niyani = niyani.children[0];
      const lagina = decodeURIComponent(VideoName);
      checkAWSCount(lagina, "viewer_count");
      const calle = new Hls;
      calle.loadSource(lagina);
      calle.attachMedia(niyani);
    };
    player = new Plyr(niyani, laterrica);
    if (player.muted) player.muted = false;
    player.volume = 1;
    player.supposedCurrentTime = 0;
    player.setTime = 0;
    //player.playbackRate = 1;
    //player.speed = 1;
    player.on("ended", function () {
      $("#avplayer").hide();
      aryanni = player.duration;
      ellalee = player.currentTime;
      korei = player.currentTime;
      kadra = player.speed;
      player.destroy();
      if (melcina == "") reloadContent();
      else {
        if (FunctionType == "library_item") {
          LibraryVideoEnded();
        } else {
          endedVideo(player);
        }
      }
    });
    player.on("timeupdate", function (sherrelle) {
      if (player.currentTime < korei + 1 && player.currentTime > korei) {
        korei = player.currentTime;
        ellalee = korei;
        esekiel(VideoName, korei);
        SavePosition = korei;
      }
    });
    player.on("seeking", function (dianette) {
      if (player.currentTime > korei && !miren) {
        player.currentTime = korei;
      } else {
        korei = player.currentTime;
      }
    });
    player.on("ready", function () {
      if (document.getElementById("plyr-rewind")) {
        return;
      }
      ;
      $(".plyr__controls svg:first").replaceWith('<div id="plyr-rewind" role="presentation" focusable="false"><use xlink:href="#plyr-rewind"><img alt="" width="30" src="../videoPlayer/rewind.png"></use></div>');
      $(".plyr__menu svg:first").css({transform: "scale(1.39)", margin: "6px"});
    });
    if (isAndroid) {
      $("#player").on("timeupdate.oneTime", function () {
        if (player.duration > 0) {
          $("#player").off("timeupdate.oneTime");
          makenze();
          startVideoListeners();
        }
      });
    } else {
      player.once("playing", function () {
        makenze();
        startVideoListeners();
        aryanni = player.duration;
      });
    }
  };
  function makenze() {
    if (SaveVideoPosition && (CookiePos > korei || StoredVideoPosition > korei)) {
      SavePosition = Math.max(CookiePos, StoredVideoPosition);
      if (SavePosition > player.duration - 1) {
        return;
      }
      ;
      korei = SavePosition;
      player.currentTime = SavePosition;
    }
  }
  window.startVideoListeners = function () {
    if (SaveVideoPosition) {
      window.onbeforeunload = saveVideoPosToDatabase(false);
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState == "hidden") {
          saveVideoPosToDatabase(true);
          player.pause();
        } else {
          player.play();
        }
      });
      $("#backDoor").click(function () {
        saveVideoPosToDatabase(true);
        window.onbeforeunload = function () {};
      });
    }
  };
  window.clearVideoPosCookie = function (omayma) {
    esekiel(omayma, "0");
  };
  function esekiel(miguelangelo, haysley) {
    videoTimeCounter++;
    if (!SaveVideoPosition) {
      if (videoTimeCounter >= 720) {
        videoTimeCounter = 0;
        updateMonitorTime();
      }
      ;
      return;
    }
    ;
    var agusta = new Date;
    agusta.setTime(agusta.getTime() + 6048e5);
    var bryana = "expires=" + agusta.toUTCString();
    document.cookie = AcellusID + "_" + CourseID + "=" + JSON.stringify({v: miguelangelo, p: haysley}) + ";" + bryana;
    if (videoTimeCounter >= 720) {
      videoTimeCounter = 0;
      saveVideoPosToDatabase(false);
    }
  }
  window.androidUpdateCookie = function (izayah) {
    if (!isAndroid) {
      return;
    }
    ;
    if (SaveVideoPosition) {
      esekiel(VideoName, izayah);
      SavePosition = izayah;
    }
  };
  window.getVideoPosCookie = function (nakieya) {
    var tplayere = AcellusID + "_" + CourseID + "=";
    var kiaura = document.cookie.split(";");
    for (var jisele = 0; jisele < kiaura.length; jisele++) {
      var adalayah = kiaura[jisele];
      while (adalayah.charAt(0) == " ") {
        adalayah = adalayah.substring(1);
      }
      ;
      if (adalayah.indexOf(tplayere) === 0) {
        var kenndy = JSON.parse(adalayah.substring(tplayere.length, adalayah.length));
        if (kenndy && kenndy.v == nakieya) {
          return kenndy.p;
        }
      }
    }
    ;
    return 0;
  };
  window.pauseUntilClosed = function () {
    player.pause();
    return function () {
      player.play();
    };
  };
  window.loadAltVideo = function (rhuben) {
    if (rhuben != window.AltVideo && window.AltVideo) {
      location.href = "/StudentFunctions/selectclass.html";
    }
    ;
    player.source = {type: "video", sources: [{src: rhuben, type: "video/mp4"}]};
    mediaMissing(rhuben);
  };
  window.pauseVideo = function () {
    player.pause();
  };
  window.resetVideo = function (naim) {
    janiyla = "A";
    if (naim != "") {
      if (!isAndroid) {
        if (korei >= aryanni - 5 && ellalee >= aryanni - 5) {
          janiyla = "YES";
          return true;
        };
        return false;
      };
      janiyla = "YES";
      return true;
    }
    ;
    return true;
  };
  window.VidStatus = function (kamill) {
    if (kamill == "TRUE" && isAndroid) {
      return "XXX";
    }
    ;
    if (kamill == "TRUE" && janiyla == "YES" && resetVideo(kamill)) {
      return "XXX";
    }
    ;
    return "";
  };
}());
var audioPlayer;
var player1;
function startAudio(eline) {
  var rae = eline.split(",");
  rae[0] = rae[0].replace("&#44;", ",");
  rae[1] = rae[1].replace("&#44;", ",");
  AltAudio = rae[1];
  player1 = new Plyr("#player1", {autoplay: true, hideControls: false, keyboard: {focused: false, global: false}, controls: ["play-large", "play"]});
  player1.source = {type: "audio", sources: [{src: rae[0], type: "audio/mp3"}]};
  if (player1.muted) {
    player1.muted = false;
  }
  ;
  player1.volume = 1;
  player1.on("ready", function () {
    $(".plyr__controls").css({background: "none", width: "52px", color: "white"});
    $(".audioPlayer").css({width: "34px", height: "34px", "padding-left": "4px", "padding-top": "2px"});
    $("#student_audio").css({visibility: "visible"});
    player1.play();
  });
}
function loadAltAudio() {
  player1.source = {type: "audio", sources: [{src: AltAudio, type: "audio/mp3"}]};
  mediaMissing(AltAudio);
}
function androidContent(maurice, talos, nayalis, devinlee, aerion) {
  if (isAndroid) {
    content(maurice, talos, nayalis, devinlee, aerion);
  }
}
function submitAnswer(kyliam) {
  if (kyliam != "") {
    content(kyliam, "", "", "", "");
  }
}
const reloadContent = () => { content("", "", "", "", ""); };
const endedVideo = () => { content("", "TRUE", "", "", ""); };
function loadLibraryItem(nayloni) {
  FunctionType = "";
  if (nayloni != "") {
    FunctionType = "library_item";
    ItemID = nayloni;
  }
  ;
  content("", "", "", "", "");
}
