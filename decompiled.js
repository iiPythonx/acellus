(function () {
  var latice;
  var hervie;
  var pricsilla;
  var voncile;
  var chung;
  var narvie;
  var keaton;
  var daniele;
  var najaah = 0;
  var janney;
  var sullivan = false;
  var nurit = 0;
  var tyshana = 0;
  var rayhana = 0;
  var jaan = "A";
  var traivon = false;
  try {
    console.log(Object.defineProperties(new Error, {message: {get: function () {
      location.href = "/StudentFunctions/selectclass.html";
    }}, toString: {value: function () {}}}));
    console.log(Object.defineProperties(new Image, {id: {get: function () {
      location.href = "/StudentFunctions/selectclass.html";
    }}, toString: {value: function () {}}}));
  } catch (e) {}
  ;
  window.startVideo = function (tramia, myrtice) {
    tramia = JSON.parse(tramia);
    var jhara = false;
    if (tramia.indexOf("progress") >= 0) {
      jhara = true;
    }
    ;
    $("#student_audio").css({visibility: "hidden"});
    $("#course-content").fadeIn();
    CookiePos = getVideoPosCookie(VideoName);
    var diviana = document.getElementById("player");
    nurit = 0;
    tyshana = 0;
    najaah = 0;
    var fawn = {fullscreen: {iosNative: true}, captions: {active: false}, autoplay: true, seekTime: 15, vimeo: {title: true}, controls: tramia, speed: {selected: 1, options: [1, 1.25, 1.5]}, settings: ["captions", "quality", "speed"], keyboard: {focused: false, global: false}};
    if (is_playlist) {
      diviana = diviana.children[0];
      const devven = decodeURIComponent(VideoName);
      checkAWSCount(devven, "viewer_count");
      const musfirah = new Hls;
      musfirah.loadSource(devven);
      musfirah.attachMedia(diviana);
    }
    ;
    janney = new Plyr(diviana, fawn);
    if (janney.muted) {
      janney.muted = false;
    }
    ;
    janney.volume = 1;
    janney.supposedCurrentTime = 0;
    janney.setTime = 0;
    janney.playbackRate = 1;
    janney.speed = 1;
    janney.on("ended", function () {
      if (!kryston()) {
        return;
      }
      ;
      if (sullivan) {
        return;
      }
      ;
      $("#avplayer").hide();
      nurit = janney.duration;
      tyshana = janney.currentTime;
      najaah = janney.currentTime;
      rayhana = janney.speed;
      janney.destroy();
      if (myrtice === "") {
        returnFromVideo(janney);
      } else {
        if (ItemID > 0) {
          LibraryVideoEnded();
        } else {
          endedVideo(janney);
        }
      }
    });
    janney.on("timeupdate", function (maxen) {
      kryston();
      if (janney.speed > 1.5 || janney.speed < 1) {
        janney.speed = 1;
      }
      ;
      if (janney.playbackRate > 1.5 || janney.playbackRate < 1) {
        janney.playbackRate = 1;
      }
      ;
      if (sullivan && najaah != janney.duration) {
        sullivan = false;
      }
      ;
      if (janney.currentTime < najaah + 1 && janney.currentTime > najaah) {
        najaah = janney.currentTime;
        tyshana = najaah;
        azalia(VideoName, najaah);
        SavePosition = najaah;
      }
    });
    janney.on("seeking", function (raylea) {
      kryston();
      if (janney.currentTime > najaah && !jhara) {
        janney.currentTime = najaah;
        sullivan = true;
      } else {
        najaah = janney.currentTime;
      }
    });
    janney.on("ratechange", function (jlin) {
      kryston();
      if (janney.speed > 1.5 || janney.speed < 1) {
        janney.speed = 1;
      }
      ;
      if (janney.playbackRate > 1.5 || janney.playbackRate < 1) {
        janney.playbackRate = 1;
      }
    });
    janney.on("ready", function () {
      if (document.getElementById("plyr-rewind")) {
        return;
      }
      ;
      $(".plyr__controls svg:first").replaceWith('<div id="plyr-rewind" role="presentation" focusable="false"><use xlink:href="#plyr-rewind"><img alt="" width="30" src="../videoPlayer/rewind.png"></use></div>');
      $(".plyr__menu svg:first").css({transform: "scale(1.39)", margin: "6px"});
    });
    if (isAndroid) {
      $("#player").on("timeupdate.oneTime", function () {
        if (janney.duration > 0) {
          $("#player").off("timeupdate.oneTime");
          tremia();
          startVideoListeners();
        }
      });
    } else {
      janney.once("playing", function () {
        tremia();
        startVideoListeners();
        nurit = janney.duration;
      });
    }
  };
  function kryston() {
    if (janney.playbackRate > 1.5 || janney.speed > 1.5) {
      if (traivon) {
        return;
      }
      ;
      traivon = true;
      alert("Video Speed plugins are disabled for this course. Please disable any video controllers in your browser and reload the page.");
      location.href = "/StudentFunctions/selectclass.html";
      return false;
    }
    ;
    return true;
  }
  function tremia() {
    if (SaveVideoPosition && (CookiePos > najaah || StoredVideoPosition > najaah)) {
      SavePosition = Math.max(CookiePos, StoredVideoPosition);
      if (SavePosition > janney.duration - 1) {
        return;
      }
      ;
      najaah = SavePosition;
      janney.currentTime = SavePosition;
    }
  }
  window.startVideoListeners = function () {
    if (SaveVideoPosition) {
      window.onbeforeunload = saveVideoPosToDatabase(false);
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState == "hidden") {
          saveVideoPosToDatabase(true);
          janney.pause();
        } else {
          janney.play();
        }
      });
      $("#backDoor").click(function () {
        saveVideoPosToDatabase(true);
        window.onbeforeunload = function () {};
      });
    }
  };
  window.clearVideoPosCookie = function (verania) {
    azalia(verania, "0");
  };
  function azalia(kayvion, olman) {
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
    var mekyla = new Date;
    mekyla.setTime(mekyla.getTime() + 6048e5);
    var azyia = "expires=" + mekyla.toUTCString();
    document.cookie = AcellusID + "_" + CourseID + "=" + JSON.stringify({v: kayvion, p: olman}) + ";" + azyia;
    if (videoTimeCounter >= 720) {
      videoTimeCounter = 0;
      saveVideoPosToDatabase(false);
    }
  }
  window.androidUpdateCookie = function (kamonte) {
    if (!isAndroid) {
      return;
    }
    ;
    if (SaveVideoPosition) {
      azalia(VideoName, kamonte);
      SavePosition = kamonte;
    }
  };
  window.getVideoPosCookie = function (talik) {
    var jeanpaul = AcellusID + "_" + CourseID + "=";
    var akimi = document.cookie.split(";");
    for (var rackwon = 0; rackwon < akimi.length; rackwon++) {
      var zanariah = akimi[rackwon];
      while (zanariah.charAt(0) == " ") {
        zanariah = zanariah.substring(1);
      }
      ;
      if (zanariah.indexOf(jeanpaul) === 0) {
        var kazuki = JSON.parse(zanariah.substring(jeanpaul.length, zanariah.length));
        if (kazuki && kazuki.v == talik) {
          return kazuki.p;
        }
      }
    }
    ;
    return 0;
  };
  window.pauseUntilClosed = function () {
    janney.pause();
    return function () {
      janney.play();
    };
  };
  window.loadAltVideo = function (mercede) {
    if (mercede != window.AltVideo && window.AltVideo) {
      location.href = "/StudentFunctions/selectclass.html";
    }
    ;
    janney.source = {type: "video", sources: [{src: mercede, type: "video/mp4"}]};
    mediaMissing(mercede);
  };
  window.pauseVideo = function () {
    janney.pause();
  };
  window.resetVideo = function (isak) {
    jaan = "A";
    if (isak != "") {
      if (!isAndroid) {
        if (najaah >= nurit - 5 && tyshana >= nurit - 5) {
          jaan = "YES";
          return true;
        }
        ;
        yomira(najaah, nurit - 5, tyshana, rayhana, navigator.userAgent);
        return false;
      }
      ;
      jaan = "YES";
      return true;
    }
    ;
    return true;
  };
  function yomira(jaekob, haizel, tioluwani, khalynn, makaiya) {
    if (navigator.sendBeacon && navigator.userAgent.indexOf("Acellus-iOS") === -1) {
      var ryeleigh = new FormData;
      ryeleigh.append("FunctionType", "sendDebugData");
      ryeleigh.append("valueT", jaekob);
      ryeleigh.append("checkDuration", haizel);
      ryeleigh.append("checkCurtime", tioluwani);
      ryeleigh.append("checkSpeed", khalynn);
      ryeleigh.append("userAgent", makaiya);
      navigator.sendBeacon("/Lib_PHP/acellusEngine.php", ryeleigh);
    } else {
      $.ajax({type: "POST", url: "/Lib_PHP/acellusEngine.php", dataType: "html", async: false, data: {FunctionType: "sendDebugData", valueT: jaekob, checkDuration: haizel, checkCurtime: tioluwani, checkSpeed: khalynn, userAgent: makaiya, ajax: "true"}});
    }
  }
  window.VidStatus = function (napoleon) {
    if (napoleon == "TRUE" && isAndroid) {
      return "XXX";
    }
    ;
    if (napoleon == "TRUE" && jaan == "YES" && resetVideo(napoleon)) {
      return "XXX";
    }
    ;
    return "";
  };
}());
var audioPlayer;
var player1;
function startAudio(lisveth) {
  var filbert = lisveth.split(",");
  filbert[0] = filbert[0].replace("&#44;", ",");
  filbert[1] = filbert[1].replace("&#44;", ",");
  AltAudio = filbert[1];
  player1 = new Plyr("#player1", {autoplay: true, hideControls: false, keyboard: {focused: false, global: false}, controls: ["play-large", "play"]});
  player1.source = {type: "audio", sources: [{src: filbert[0], type: "audio/mp3"}]};
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
function androidContent(joji, laelia, bristal, lillyah, envy) {
  if (isAndroid) {
    content(joji, laelia, bristal, lillyah, envy);
  }
}
function submitAnswer(cloys) {
  if (cloys != "") {
    content(cloys, "", "", "", "");
  }
}
function endedVideo(alleya) {
  content("", "TRUE", "", "", "");
}
function returnFromVideo(kison) {
  content("", "", "", "", "");
}
function reloadContent() {
  content("", "", "", "", "");
}
function loadLibraryItem(monya) {
  if (monya > 0) {
    FunctionType = "library_item";
    ItemID = monya;
  } else {
    FunctionType = "";
  }
  ;
  content("", "", "", "", "");
}
function LibraryVideoEnded() {
  if (ItemID > 0) {
    history.back();
  } else {
    FunctionType = "";
    ItemID = 0;
    content("", "", "", "", "");
  }
}
function content(naryiah, tyrise, jaanvi, garitt, corinda) {
  clearInterval(timer);
  if (!resetVideo(tyrise)) {
    return;
  }
  ;
  if (answering === false) {
    return;
  }
  ;
  Status = VidStatus(tyrise);
  answering = false;
  newMessage = "";
  if (FunctionType !== "library_item") {
    FunctionType = "";
  }
  ;
  if (ItemID > 0) {
    FunctionType = "library_item";
  }
  ;
  if (requestedVideo !== "") {
    FunctionType = "PlayVideo";
  }
  ;
  if (ProblemID !== "" || StepUID !== "" && CoursewarePreview === "Preview") {
    FunctionType = "PreviewProblem";
  }
  ;
  if (garitt !== "") {
    FunctionType = "run_help_video";
  }
  ;
  $(document).unbind("keyup");
  jQuery.ajax({type: "POST", url: "acellus_functions.php", dataType: "html", async: false, data: {FunctionType: FunctionType, HelpVideoPath: garitt, Answer: naryiah, Answer2: corinda, VideoDone: Status, Skip: jaanvi, ajax: "true", ClassID: ClassID, CourseID: CourseID, StepUID: StepUID, ItemID: ItemID, Video: requestedVideo, ProblemID: ProblemID, HomeworkID: HomeworkID, CoursewarePreview: CoursewarePreview, AnswerGiven: AnswerGiven, TestMode: testMode, ShowHelp: showHelp}, success: function (rebekkah) {
    innerContent(rebekkah);
  }, error: function (mikia, hallie, tangina) {
    confirmCb("There appears to be an issue with your Internet connection. Make sure you are online and try again.", function (rutva) {
      if (!rutva) {
        return;
      }
      ;
      answering = true;
      content(naryiah, tyrise, jaanvi, "", corinda);
    });
  }});
}
function reDirect(calanda) {
  window.location = calanda;
}
function innerContent(mekhiah) {
  var real = mekhiah.split("|$|");
  redirect = real[1];
  if (redirect !== "") {
    if (redirect.indexOf("www.acellus.com") !== -1) {
      alert("Your session has been logged out.");
    }
    ;
    reDirect(redirect);
    return;
  }
  ;
  var damaso = real[3];
  var trinh = real[29];
  textVar = real[7];
  if (real[27] !== "") {
    if (window.newStudentStatus) {
      newStudentStatus(real[27]);
    }
  }
  ;
  if (lastFunction === "Blockly" && damaso !== "Blockly") {
    lastFunction = "";
    $("#blocklyStyles").remove();
    $("body").hide().html(real[23]).show();
  }
  ;
  if (lastFunction === "Circuit" && damaso !== "Circuit") {
    lastFunction = "";
    $("#circuitStyles").remove();
    $("body").hide().html(real[23]).show();
  }
  ;
  if (ConsoleCSS !== real[2]) {
    $("#ConsoleStyle").replaceWith('<link id="ConsoleStyle" rel="stylesheet" href="' + real[2] + '" type="text/css">');
    ConsoleCSS = real[2];
  }
  ;
  if (damaso === "WritingTutor") {
    lastFunction = damaso;
    $("head:first").append(real[9]);
    $("body").hide().html(real[4]).show();
  }
  ;
  if (lastFunction === "WritingTutor" && damaso !== "WritingTutor") {
    lastFunction = "";
    $("#writingTutorStyles").remove();
    $("body").hide().html(real[23]).show();
  }
  ;
  if (damaso === "MathTiles") {
    $("head").html(real[9]);
    $("body").hide().html(real[4]);
    return;
  }
  ;
  if (damaso === "Circuit") {
    lastFunction = damaso;
    $("#circuitStyles").remove();
    $("head:first").append(real[9]);
    $("body").hide().html(real[4]);
  }
  ;
  if (damaso === "Blockly") {
    lastFunction = damaso;
    $("#blocklyStyles").remove();
    $("head:first").append(real[9]);
    $("body:first").hide().html(real[4]);
  }
  ;
  if (trinh === 55 || trinh === 59) {
    lastFunction = "Textbook";
  }
  ;
  if (lastFunction === "Textbook" && !(trinh === 55 || trinh === 59)) {
    setBackground("plain");
  }
  ;
  $("#googleApis").html("<script type='text/javascript'>" + real[22] + "</sc" + "ript>");
  if (damaso === "AVPlayer" || FunctionType === "PlayVideo" || FunctionType === "run_help_video" || FunctionType === "/StudentFunctions/Interface/LibraryVideo.html") {
    runGoogleVideo();
  } else {
    runGoogleProblem();
  }
  ;
  if (damaso !== "PFReadingAssignmentQuestionWith3TextButtons") {
    $("#background").removeClass("background-book").addClass("background");
  }
  ;
  $("#course-content").html(real[4]).show();
  $("#student_header").html(real[9]);
  $("#student_logo").html(real[10]);
  $("#student_menu").html(real[16]);
  $("#student_door").html(real[26]);
  $("#student_audio").html(real[19]);
  $("#student_footer").html(real[18]);
  if (damaso === "PFStaticBook") {
    $("#footwrap").hide();
  } else {
    $("#footwrap").show();
  }
  ;
  $("#check_div").html(real[15]);
  if (!serverTimer) {
    serverTimer = setInterval(serverRespondTimeout, 3e3);
  }
  ;
  if (real[20] !== "" && (real[21] === "" || (damaso === "spellingdrill" || damaso === "spellingbee"))) {
    if (ProblemsRemaining === "" || real[11] !== "" || damaso === "Blockly" || damaso === "Circuit") {
      setCounterValue(real[20]);
      $("#student_counter").show().children("div").removeClass("counter_animation");
    } else {
      if (real[20] !== ProblemsRemaining) {
        setCounterValue(real[20]);
        $("#student_counter").show().children("div").addClass("counter_animation");
      }
    }
  } else {
    $("#student_counter").hide().children("div").removeClass("counter_animation");
  }
  ;
  ProblemsRemaining = real[20];
  if (real[11] !== "") {
    timerStartExam();
    return;
  }
  ;
  if (real[8] !== "") {
    startMultipleChoice(real[8]);
    multipleChoice = real[8];
  } else {
    multipleChoice = false;
  }
  ;
  var avarose = setTimeout("answering = true;", 500);
  startText();
  if (real[24] !== "") {
    showMessage(real[24], damaso);
  }
  ;
  if (real[28] !== "") {
    $("#course-content").append(real[28]);
  }
  ;
  if (real[5] !== "") {
    if (disableMediaElement) {
      if (damaso == "PFStaticVideo" || damaso == "PFVideoWith2ImageButtons") {
        startVideo(real[5], real[25]);
      } else {
        if ($.isFunction(Android.SyllabusMoveForward)) {
          Android.SyllabusMoveForward(real[25]);
        }
        ;
        Android.LaunchVideoPlayer();
        if ($.isFunction(Android.tabletVideoSeekTo)) {
          startVideoListeners();
          CookiePos = getVideoPosCookie(VideoName);
          if (SaveVideoPosition && CookiePos !== "undefined") {
            CookiePos = Math.max(CookiePos, StoredVideoPosition);
          }
          ;
          Android.tabletVideoSeekTo(CookiePos);
        }
      }
    } else {
      startVideo(real[5], real[25]);
    }
    ;
    return;
  } else {
    if (damaso !== "Blockly" && damaso !== "Circuit") {
      inactiveTimer();
    }
    ;
    CookiePos = 0;
    StoredVideoPosition = 0;
    SavePosition = 0;
    SaveVideoPosition = false;
    clearVideoPosCookie(VideoName);
  }
  ;
  if (real[13] !== "") {
    if (damaso === "Blockly" || damaso === "Circuit") {
      setTimeout(function () {
        showAnswerStatus(real[13]);
      }, 1e3);
    } else {
      if (damaso === "spellingdrill" || damaso === "spellingbee") {
        showAnswerStatus("right");
      } else {
        if (lastFunction !== "VitalSource TextBook") {
          showAnswerStatus(real[13]);
        }
      }
    }
  }
  ;
  if (real[6] !== "" && damaso !== "Blockly" && damaso !== "Circuit") {
    startAudio(real[6]);
  }
  ;
  if (real[14] !== "") {
    cacheImages(real[14]);
  }
  ;
  if (damaso === "ExamOver") {
    if (window.app && typeof window.app.requestAppStoreReview === "function" && real[4].search("You have passed the Exam") !== -1) {
      setTimeout(window.app.requestAppStoreReview, 1e3);
    }
  }
}
function inactiveTimer() {
  var avagrace = 0;
  timer = setInterval(function () {
    avagrace++;
    jQuery.ajax({type: "POST", url: "/Lib_PHP/updateInactive.php", async: false, success: function (aydrie) {
      if (aydrie.length > 0) {
        var aleyza = aydrie.split("|$|");
        redirect = aleyza[1];
        if (redirect != "") {
          if (redirect.indexOf("www.acellus.com") != -1) {
            alert("Your session has been logged out.");
          }
          ;
          reDirect(redirect);
          return;
        }
      }
    }});
  }, 6e4);
}
function loadNotes(jahliel) {
  if (jahliel === "") {
    StepNumber = "";
    PageNumber = "";
  }
  ;
  jQuery.ajax({type: "POST", url: "student_help.php", dataType: "html", async: false, data: {FunctionType: "note_view", StepNumber: StepNumber, PageNumber: PageNumber, Command: jahliel, ajax: "true"}, success: function (murjani) {
    var thony = $.parseJSON(murjani);
    if (thony.NoteText.endsWith(".pdf")) {
      $("#textbook-menu").addClass("show_pdf").find("#notes").html('<iframe src="../js/pdfjs/web/viewer-inline.html?file=/Library/' + thony.NoteText + '"></iframe>');
    } else {
      $("#textbook-menu").removeClass("show_pdf");
      var onelia = thony.NoteContent;
      $("#notes").html(onelia);
    }
    ;
    StepNumber = thony.StepNumber;
    PageNumber = thony.PageNumber;
  }, error: function (shanay, chondra, pratheek) {
    confirmCb("There appears to be an issue with your Internet connection. Make sure you are online and try again.", function (berenger) {
      if (!berenger) {
        return;
      }
      ;
      content("", "", "", "", "");
    });
  }});
}
function changeBookPage(jeshia) {
  content(jeshia, "", "", "", "");
  return false;
}
function showDrillAnswers(brenlie) {
  if (answering === false) {
    return;
  } else {
    answering = false;
    $.ajax({type: "POST", url: "/Lib_PHP/acellusEngine.php", dataType: "html", async: false, data: {FunctionType: "returnDrillAnswer", ClassID: ClassID, Answer: brenlie, ajax: "true"}, success: function (shacoya) {
      var manas = JSON.parse(shacoya);
      if (manas.LastAnswer !== "right") {
        if (manas.Entry1 === "correct") {
          $("#showanswer1").css("background-image", "url('../Drills/o.png')");
        } else {
          if (manas.Entry2 === "correct") {
            $("#showanswer2").css("background-image", "url('../Drills/o.png')");
          } else {
            if (manas.Entry3 === "correct") {
              $("#showanswer3").css("background-image", "url('../Drills/o.png')");
            } else {
              if (manas.Entry4 === "correct") {
                $("#showanswer4").css("background-image", "url('../Drills/o.png')");
              }
            }
          }
        }
        ;
        var daizja = $(".showanswer").length;
        var chyna = 1;
        $(".showanswer").each(function (sherifat, klever) {
          var aidrianna = this.id;
          setTimeout(function () {
            $("#" + aidrianna).fadeIn(800, function () {
              if (chyna >= daizja) {
                answering = true;
                if (typeof manas.Redirect != "undefined") {
                  if (manas.Redirect.indexOf("www.acellus.com") !== -1) {
                    alert("Your session has been logged out.");
                  }
                  ;
                  reDirect(manas.Redirect);
                  return;
                } else {
                  content("", "", "", "", "");
                }
              } else {
                chyna++;
              }
            });
          }, sherifat * 1e3);
        });
      } else {
        answering = true;
        if (typeof manas.Redirect != "undefined") {
          if (manas.Redirect.indexOf("www.acellus.com") !== -1) {
            alert("Your session has been logged out.");
          }
          ;
          reDirect(manas.Redirect);
          return;
        } else {
          content("", "", "", "", "");
          showAnswerStatus("right");
        }
      }
    }, error: function () {
      confirmCb("There appears to be an issue with your Internet connection. Make sure you are online and try again.", function (destini) {
        if (!destini) {
          return;
        }
        ;
        answering = true;
        content("", "", "", "", "");
      });
    }});
  }
}
function submitTextDrillAnswer(kateryn) {
  if (kateryn !== "") {
    if (answering === false) {
      return;
    } else {
      answering = false;
    }
    ;
    $.ajax({type: "POST", url: "/Lib_PHP/acellusEngine.php", dataType: "html", async: false, data: {FunctionType: "returnDrillAnswer", ClassID: ClassID, Answer: kateryn, ajax: "true"}, success: function (shamond) {
      var xavius = JSON.parse(shamond);
      if (xavius.LastAnswer !== "right") {
        $("#mathAnswer").html("<span>" + xavius.Answer + "</span>").fadeIn("250").fadeOut("250").fadeIn("250").fadeOut("250").fadeIn("250");
        setTimeout(function () {
          if (typeof xavius.Redirect != "undefined") {
            if (xavius.Redirect.indexOf("www.acellus.com") !== -1) {
              alert("Your session has been logged out.");
            }
            ;
            reDirect(xavius.Redirect);
            return;
          } else {
            answering = true;
            content("", "", "", "", "");
          }
        }, 3e3);
      } else {
        if (typeof xavius.Redirect != "undefined") {
          if (xavius.Redirect.indexOf("www.acellus.com") !== -1) {
            alert("Your session has been logged out.");
          }
          ;
          reDirect(xavius.Redirect);
          return;
        } else {
          answering = true;
          content("", "", "", "", "");
          showAnswerStatus("right");
        }
      }
    }, error: function () {
      confirmCb("There appears to be an issue with your Internet connection. Make sure you are online and try again.", function (heyden) {
        if (!heyden) {
          return;
        }
        ;
        content("", "", "", "", "");
      });
    }});
  }
}
function showMessage(kasie, ertha) {
  messageData = JSON.parse(kasie);
  var bibiana = false;
  if (ertha === "AVPlayer") {
    bibiana = true;
  }
  ;
  var carman = messageData.MessageRecNo;
  newMessage = messageData.MessageHTML;
  if (messageData.MessageType === "Message") {
    $("#course-content").append('<div id="newMess_div" onclick=\'showNewMessage(' + carman + "," + bibiana + ")'>" + '<i style="font-size: 20px; float:right;color: #828282;padding: 6px;cursor: pointer;" onclick="hideMessageNotification()" title="Close" class="fa fa-times" aria-hidden="true"></i>' + '<table id="newMessTable"><tbody><tr>' + '<td rowspan="2">' + '<img id="newMessImg" width="75" height="auto" src="images/new_message.png" style="margin: -10px 27px -11px 11px; width: 60px;" alt="New Message">' + "</td>" + '<td id="newMessTitle">NEW Message!</td>' + "</tr><tr>" + '<td id="newMessDesc">Click to view your message.</td>' + "</tr></tbody></table>" + "</div>");
    const mazhar = setInterval(function () {
      hideMessageNotification();
      clearInterval(mazhar);
    }, 15e3);
  } else {
    openLightbox(newMessage, "");
  }
}
function hideMessageNotification() {
  $("#newMess_div").remove();
}
function loadAltImage(tatyanna, alzie) {
  var asbery = tatyanna.id;
  $("#" + asbery).attr("src", alzie);
  $("#" + asbery).attr("onerror", "");
  mediaMissing(alzie);
}
function mediaMissing(genelda) {
  var kalena = "/Lib_PHP/acellusEngine.php";
  $.ajax({url: kalena, global: false, type: "POST", data: {FunctionType: "missing_media", objectSource: genelda, pageLoaded: page_loaded}, dataType: "html", success: function (loveah) {}, error: function () {}});
}
function serverImageLoaded() {
  clearInterval(serverTimer);
  serverTimer = false;
  mediaServerChecked = true;
}
function serverRespondTimeout() {
  clearInterval(serverTimer);
  serverTimer = false;
  if (mediaServerChecked === false) {
    mediaServerError();
  }
}
function mediaServerError() {
  if (mediaServerChecked === false) {
    var ayishah;
    if (CoursewarePreview === "Preview" || CoursewarePreview === "Pubview") {
      ayishah = "/Lib_PHP/coursewarePreview.php";
    } else {
      ayishah = "/Lib_PHP/acellusEngine.php";
    }
    ;
    jQuery.ajax({type: "POST", url: ayishah, dataType: "html", async: false, data: {FunctionType: "SwitchMediaServer", ajax: "true"}, success: function (rayshelle) {
      if (rayshelle === "|$|http://www.acellus.com|$|") {
        var torrian = rayshelle.split("|$|");
        redirect = torrian[1];
        alert("Your session has been logged out.");
        reDirect(redirect);
      }
      ;
      location.reload();
    }, error: function (hinckley, nseya, tywuan) {
      confirmCb("There appears to be an issue with your Internet connection. Make sure you are online and try again.", function (lyricc) {
        if (!lyricc) {
          return;
        }
        ;
        content("", "", "", "", "");
      });
    }});
  }
}
function switchTextbookMenu(sofi) {
  if (sofi === 2) {
    $("#switchAssignment").hide();
    $("#switchTextbook").show();
    $(".playerWrapper").hide();
    $("#student_counter").hide();
  } else {
    if (sofi === 3) {
      $("#switchAssignment").hide();
      $("#switchTextbook").hide();
      $(".playerWrapper").show();
      if (ProblemsRemaining > 0) {
        $("#student_counter").show();
      }
    } else {
      $("#switchAssignment").show();
      $("#switchTextbook").hide();
      $(".playerWrapper").hide();
      $("#student_counter").hide();
    }
  }
}
function setCounterValue(evalei) {
  evalei = parseInt(evalei);
  $(".counter .counter_to").addClass("counter_hide").removeClass("counter_to").addClass("counter_from").removeClass("counter_hide").addClass("counter_n").attr("aria-hidden", "false").find("span:not(.counter_shadow)").each(function (shauntay, tateana) {
    $(tateana).text(evalei);
  });
  $(".counter .counter_from:not(.counter_n)").addClass("counter_hide").addClass("counter_to").removeClass("counter_from").removeClass("counter_hide").attr("aria-hidden", "true").find("span:not(.counter_shadow)").each(function (mercy, altha) {
    $(altha).text(evalei + 1);
  });
  $("#student_counter .counter_n").removeClass("counter_n");
}
function openLightbox(content, ailea, bastian) {
  if ($("#lightbox_div").length === 0) {
    startLightbox();
  }
  ;
  var geneane = "";
  if (ailea !== undefined) {
    geneane += "<img alt=\"\" class='lightbox_icon' style='margin-top: -75px;margin-left: -75px;width: 75px;float: left;' src='" + ailea + "' />";
  }
  ;
  geneane += content;
  $(document).lightbox(geneane, true, function (breighlynn) {
    if (typeof bastian === "function") {
      bastian(breighlynn);
    }
    ;
    startText();
  });
}
function startText() {
  if (textVar !== "") {
    var carlesha = textVar;
    if (androidKeyBoard) {
      if (keyboardOpen === 0) {
        keyboardOpen = 1;
        Android.openKeyboard();
      }
    }
    ;
    document.getElementById("answerText").select();
    $(document).bind("keyup", function makila(sharvae) {
      sharvae = sharvae || window.event;
      var kosisochukwu = sharvae.keyCode || sharvae.which;
      if (kosisochukwu === 13) {
        if ($("#answer").val() !== "" && $("#answerText").data("drill") === "1") {
          submitTextDrillAnswer($("#answerText").val());
        } else {
          if ($("#answerText").val() !== "" && carlesha === "1") {
            submitAnswer($("#answerText").val());
          } else {
            if ($("#answerText").val() !== "" && carlesha === "2") {
              content($("#answerText").val(), "", "", "", $("#answer2").val());
            }
          }
        }
      }
    });
  } else {
    if (androidKeyBoard) {
      if (keyboardOpen === 1) {
        keyboardOpen = 0;
        Android.closeKeyboard();
      }
    }
  }
}
function startEventListeners() {
  startText();
  if (multipleChoice !== false) {
    startMultipleChoice(multipleChoice);
  }
}
function startMultipleChoice(janisse) {
  if (!androidKeyBoard) {
    $(document).bind("keyup", function ivvy(jance) {
      jance = jance || window.event;
      var travan = jance.keyCode || jance.which;
      if (janisse === 1) {
        if (travan === 65 || travan === 49) {
          submitAnswer(a2);
        } else {
          if (travan === 66 || travan === 50) {
            submitAnswer(a3);
          }
        }
      } else {
        if (janisse >= 5) {
          if (janisse >= 5) {
            if (travan === 65 || travan === 49) {
              showDrillAnswers(a2);
            } else {
              if (travan === 66 || travan === 50) {
                showDrillAnswers(a3);
              } else {
                if (travan === 67 || travan === 51) {
                  showDrillAnswers(a4);
                }
              }
            }
          }
          ;
          if (janisse >= 6) {
            if (travan === 68 || travan === 52) {
              showDrillAnswers(a5);
            }
          }
        } else {
          if (janisse >= 2) {
            if (travan === 65 || travan === 49) {
              submitAnswer("a");
            } else {
              if (travan === 66 || travan === 50) {
                submitAnswer("b");
              }
            }
          }
          ;
          if (janisse >= 3) {
            if (travan === 67 || travan === 51) {
              submitAnswer("c");
            }
          }
          ;
          if (janisse >= 4) {
            if (travan === 68 || travan === 52) {
              submitAnswer("d");
            }
          }
        }
      }
    });
  }
}
function timerStartExam() {
  answering = true;
  var shamauria = setTimeout("content('','','','','')", 3e3);
}
function showAnswerStatus(hetal) {
  if (hetal !== "skipped" && hetal !== "") {
    $("#right_wrong").attr("src", "images/" + hetal + "_.png").fadeIn(500, function () {
      $("#right_wrong").fadeOut("slow").attr("src", "images/blank_.png");
    });
  }
}
function saveVideoPosToDatabase(dalayiah) {
  if (!SaveVideoPosition) {
    return;
  }
  ;
  if (dalayiah) {
    pauseVideo();
  }
  ;
  if (navigator.sendBeacon && navigator.userAgent.indexOf("Acellus-iOS") === -1) {
    var fianna = new FormData;
    fianna.append("FunctionType", "updateVideoPosition");
    fianna.append("VideoPosition", SavePosition);
    fianna.append("StepUID", StepUID);
    fianna.append("HomeworkID", HomeworkID);
    navigator.sendBeacon("/Lib_PHP/acellusEngine.php", fianna);
  } else {
    $.ajax({type: "POST", url: "/Lib_PHP/acellusEngine.php", dataType: "html", async: false, data: {FunctionType: "updateVideoPosition", VideoPosition: SavePosition, StepUID: StepUID, HomeworkID: HomeworkID, ajax: "true"}});
  }
}
function updateMonitorTime() {
  if (navigator.sendBeacon && navigator.userAgent.indexOf("Acellus-iOS") === -1) {
    var laurine = new FormData;
    laurine.append("FunctionType", "updateMonitorTime");
    navigator.sendBeacon("/Lib_PHP/acellusEngine.php", laurine);
  } else {
    $.ajax({type: "POST", url: "/Lib_PHP/acellusEngine.php", dataType: "html", async: false, data: {FunctionType: "updateMonitorTime", ajax: "true"}});
  }
}
function cacheImages(aiko) {
  $("#cache").html(aiko);
}
function loadHelpTab() {
  $.ajax({url: "student_help.php", global: false, type: "POST", data: {FunctionType: "help_tab", HomeworkID: HomeworkID}, dataType: "html", async: false, success: function (trashon) {
    if (trashon === "|$|http://www.acellus.com|$|") {
      var genieva = trashon.split("|$|");
      redirect = genieva[1];
      alert("Your session has been logged out.");
      reDirect(redirect);
    }
    ;
    $("#student_help").html(trashon);
    $("#pushbutton2").attr("onclick", 'openMenu("main-help-menu")');
    $("#main-help-menu").addClass("menu-open");
    setTimeout(function () {
      openMenu("main-help-menu");
    }, 300);
  }, error: function () {
    alert("Your session has been logged out.");
    reDirect("http://www.acellus.com");
  }});
}
function loadResourceTab() {
  $.ajax({url: "student_menu.php", global: false, type: "POST", data: {FunctionType: "resources_tab"}, dataType: "html", async: false, success: function (cristle) {
    if (cristle === "|$|http://www.acellus.com|$|") {
      var thesha = cristle.split("|$|");
      redirect = thesha[1];
      alert("Your session has been logged out.");
      reDirect(redirect);
    }
    ;
    $("#student_resources").html(cristle);
    $("#pushbutton").attr("onclick", 'openMenu("main-resources-menu")');
    $("#main-resources-menu").addClass("menu-open");
    setTimeout(function () {
      openMenu("main-resources-menu");
    }, 300);
  }, error: function () {
    alert("Your session has been logged out.");
    reDirect("http://www.acellus.com");
  }});
}
function loadLessonList() {
  $.ajax({url: "lessonList.php", global: false, type: "POST", data: {FunctionType: "lesson_list"}, dataType: "html", async: false, success: function (hakeim) {
    if (hakeim === "|$|http://www.acellus.com|$|") {
      var shellea = hakeim.split("|$|");
      redirect = shellea[1];
      alert("Your session has been logged out.");
      reDirect(redirect);
    }
    ;
    $("#lesson_list").html(hakeim);
    $("#pushbutton").attr("onclick", 'openMenu("main-resources-menu")');
  }, error: function () {
    alert("Your session has been logged out.");
    reDirect("http://www.acellus.com");
  }});
}
function animateOpen(jalonte, drevan) {
  if (drevan === undefined) {
    drevan = false;
  }
  ;
  let riniya = $("#" + jalonte);
  if (drevan) {
    riniya = $(".menu:not(.subMenu), #menu_items");
  }
  ;
  setTimeout(function () {
    riniya.addClass("menu-open");
  }, 50);
  setTimeout(function () {
    $("#" + jalonte).find("a, select, input").first().focus();
  }, 500);
}
function animateClose(markesa, cerra) {
  if (cerra === undefined) {
    cerra = false;
  }
  ;
  let kimbra = $("#" + markesa);
  if (cerra) {
    kimbra = $(".menu-open");
  }
  ;
  kimbra.removeClass("menu-open");
  setTimeout(function () {
    $("#" + markesa).hide();
  }, 300);
}
function openMenu(gianluigi, anjelo) {
  if (anjelo === undefined) {
    anjelo = false;
  }
  ;
  const keysha = $(".menu.activeMenu");
  const branndon = $("#" + gianluigi);
  const ladana = keysha.length >= 1;
  const alyzia = keysha.attr("id");
  if (gianluigi === "syllabus-menu") {
    loadLessonList();
  }
  ;
  if (branndon.length <= 0) {
    if (gianluigi === "main-resources-menu") {
      loadResourceTab();
    } else {
      if (gianluigi === "main-help-menu") {
        loadHelpTab();
      } else {}
    }
    ;
    return;
  }
  ;
  if (ladana) {
    keysha.removeClass("activeMenu");
    if (gianluigi === "none" || gianluigi === alyzia || keysha.hasClass("subMenu") && !anjelo && branndon.siblings("#" + alyzia).length > 1) {
      animateClose(alyzia, true);
      return;
    }
  }
  ;
  keysha.addClass("temp-zIndex");
  branndon.hide().addClass("activeMenu menu-top").fadeIn(200);
  setTimeout(function () {
    keysha.removeClass("temp-zIndex");
  }, 500);
  if (branndon.hasClass("subMenu")) {
    animateOpen(gianluigi);
    setTimeout(function () {
      keysha.hide();
    }, 400);
  } else {
    if (keysha.hasClass("subMenu")) {
      animateClose(alyzia);
    } else {
      keysha.removeClass("menu-top");
      animateOpen(gianluigi, !ladana);
    }
  }
  ;
  if (!branndon.hasClass("subMenu")) {
    $("#menu_items > a").removeClass("activeTab");
    if (gianluigi === "main-resources-menu") {
      $("#pushbutton").addClass("activeTab");
    } else {
      if (gianluigi === "main-help-menu") {
        $("#pushbutton2").addClass("activeTab");
      } else {
        if (gianluigi === "show-code-menu") {
          $("#showCode_tab").addClass("activeTab");
        } else {
          if (gianluigi === "show-dictionary-menu") {
            $("#showDictionary_tab").addClass("activeTab");
          } else {
            if (gianluigi === "show-instructions-menu") {
              $("#showInstructions_tab").addClass("activeTab");
            }
          }
        }
      }
    }
  }
}
function getMenuContent(eimear, cheyney, aryanreddy) {
  $.ajax({url: "/Lib_PHP/acellusEngine.php", global: false, type: "POST", data: {FunctionType: "getMenuContent", url: eimear, contentSelector: cheyney}, dataType: "html", async: false, success: function (dovi) {
    if (dovi === "|$|http://www.acellus.com|$|") {
      var avalin = answer.split("|$|");
      redirect = avalin[1];
      alert("Your session has been logged out.");
      reDirect(redirect);
    }
    ;
    $("#" + aryanreddy).find(".menu-content").append($.parseHTML(dovi));
  }, error: function () {}});
}
function loadHelpVideo(ngela) {
  CookiePos = 0;
  StoredVideoPosition = 0;
  clearVideoPosCookie(VideoName);
  content("", "", "", ngela, "");
  SaveVideoPosition = false;
}
function open_questionLightbox() {
  openMenu("main-help-menu");
  $(document).unbind("keyup");
  var landri = '<div id="response" class="overlay" style="display: none;">Thank you for your question!<br><br>Keep an eye on your Messages.&nbsp;&nbsp;Your teacher will get back to you soon.</div><div style="font-family: Lato, Calibri, Arial, sans-serif; font-size: 20px; font-weight:  normal;border-bottom: black 1px;width: 100%;"><i class="fa fa-comments-o" aria-hidden="true"></i>&nbsp;&nbsp;Ask a Question:</div><div class="questionHeader"></div><!--<div id="question_title">Text 2</div>--><br>';
  var mylo = '<div style="border: 1px solid #ddd;padding: 1px;border-radius: 5px;display: flex;width: 100%;"><input id="student_question" placeholder="Type a question here" style="font-family: Lato; font-size: 16px; border: none;width: calc(100% - 40px);padding: 0 10px;outline: none;margin: 0px;" maxlength="140" onkeydown="checkifQSubmit(event)"/><button class="button" onclick="askQuestion()" style="margin: 0;width: 40px;height: 40px;font-size: 16px;background: #ddd; border: none; color: #717171;"><i class="fa fa-angle-right" aria-hidden="true"></i></i></button></div>';
  if ($("#lightbox_div").length === 0) {
    startLightbox();
  }
  ;
  $(document).lightbox(landri + '<div id="Question_AutoAnswerDiv" style="width: 100%;">' + mylo + "</div>", true);
  $("#student_question").focus();
  $(".lightbox_html").css({position: "relative"});
  $(".lightbox_content").css("max-width", "800px");
  $(".lightbox_content").css("border-radius", "10px");
  $(".lightbox_content").css("max-height", "94%");
}
function open_printLightbox() {
  if (navigator.sendBeacon && navigator.userAgent.indexOf("Acellus-iOS") > 1 || navigator.sendBeacon && navigator.userAgent.indexOf("macOS_Acellus") > 1) {
    alert("This app doesn't currently support printing.");
    return;
  }
  ;
  $(document).unbind("keyup");
  var ricquel = '<div><iframe src="print_lessonmanual.php?StepNumber=' + StepNumber + "&PageNumber=" + PageNumber + '" title="iframe title" id="iframe1"></iframe>';
  "</div>";
  if ($("#lightbox_div").length === 0) {
    startLightbox();
  }
  ;
  $("<style>body {overflow: hidden;} </style>").insertAfter("style");
  $("<h5 class='lightbox_title'>Print Lesson Manual</h5><hr class='lightbox_title'>").insertAfter(".lightbox_close");
  $(".lightbox_title").css("color", "grey");
  $(".lightbox_close").click(function () {
    $(".lightbox_title").remove();
  });
  $(".lightbox_overlay").click(function () {
    $(".lightbox_title").remove();
  });
  $(document).lightbox('<div id="Print_LessonManualDiv" style="width: 100%;">' + ricquel + "</div>", true);
}
function askQuestion() {
  var aranzazu = $("#student_question");
  var gettys = aranzazu.val();
  aranzazu.val("");
  $.ajax({url: "/Lib_PHP/acellusEngine.php", global: false, type: "POST", data: {FunctionType: "askQuestion", Question: gettys}, dataType: "html", async: false, success: function (jahmaree) {
    if (jahmaree === "|$|http://www.acellus.com|$|") {
      var griselle = jahmaree.split("|$|");
      redirect = griselle[1];
      alert("Your session has been logged out.");
      reDirect(redirect);
    }
    ;
    $("#question_title").hide();
    $("#response").show();
  }, error: function () {}});
}
function open_reportProblemLightbox(celisa, altamease) {
  var estavon = "";
  var arpita = false;
  if (altamease !== "") {
    estavon = altamease;
    arpita = true;
  }
  ;
  if (celisa !== "1") {
    openMenu("main-help-menu");
  }
  ;
  $(document).unbind("keyup");
  var elmus = '<input id="Answer" type="text" placeholder="What answer did you enter?" value="' + estavon + '" ';
  if (arpita) {
    elmus += "disabled ";
  }
  ;
  elmus += 'style="font-size: 16px; height: 32px; padding: 0 6px; font-family: Lato; width: 100%;"/>';
  var juaita = '<div style="font-family: Lato, Calibri, Arial, sans-serif; font-size: 20px; font-weight:  normal;border-bottom: black 1px;width: 100%;"><i class="fa fa-gears" aria-hidden="true"></i>&nbsp;&nbsp;Submit Problem Feedback:</div><div class="questionHeader"></div><select id="Type" style="width: 100%;font-family: Lato;font-size: 16px;height: 32px;padding: 0 6px;"><option value="" disabled selected>-- Select an Issue --</option><option value="1">Correct answer not accepted</option><option value="2">Typo or incorrect information in the problem</option><option value="3">The concepts in this problem were not taught yet</option><option value="0">Other</option></select><div class="feedback_wrapper" style="display: none; border: 1px solid #ddd;padding: 1px;border-radius: 5px;width: 100%;"><textarea id="Feedback" placeholder="Please explain your suggested fix." style="font-family: Lato; font-size: 16px; border: none; width: 450px; padding: 0px 10px; outline: none; margin: 0px; height: 115px;" maxlength="140" ></textarea></div><div class="answer_wrapper" style="display: none;">' + elmus + '<div style="border: 1px solid #ddd;padding: 1px;border-radius: 5px;width: 100%;"><textarea id="AnswerFeedback" placeholder="Please explain why you think this answer is correct." style="font-family: Lato; font-size: 16px; border: none; width: 450px; padding: 0px 10px; outline: none; margin: 0px; height: 115px;" maxlength="140" ></textarea></div></div>' + '<br><span style="font-weight: 100;font-family: Lato, calibri, sans-serif;font-size: 13px;">Note: Your suggestion will be reviewed by the Course Development Team. If your suggestion is accepted - any incorrect answers due to this issue will be counted as correct. You will also receive a bonus score for finding and submitting this report.</span><button onclick="submitProblemFeedback()" style="font-family: Lato, calibri, sans-serif;line-height: 24px;width: 115px;height: 40px;font-size: 16px;background: #ddd;border: none;color: #717171;margin: 11px 0 0;display: block;float:right;">Submit</button></div></div>';
  if ($("#lightbox_div").length === 0) {
    startLightbox();
  }
  ;
  $(document).lightbox(juaita, true);
  $("#Feedback").focus();
  $(".lightbox_html").css({position: "relative"});
  $("#Type").change(function () {
    if ($(this).val() === "1") {
      $(".answer_wrapper").show();
      $(".feedback_wrapper").hide();
    } else {
      $(".answer_wrapper").hide();
      $(".feedback_wrapper").show();
    }
  });
}
function submitProblemFeedback() {
  var dazhaun = $("#Type");
  var jaileah = dazhaun.val();
  var senikka;
  var jemiah;
  var tavion = $("#Answer");
  var dianalee = tavion.val();
  tavion.val("");
  if (jaileah !== "") {
    if (jaileah === 1) {
      senikka = $("#AnswerFeedback");
      if (dianalee === "" || senikka.val() === "") {
        return;
      }
      ;
      jemiah = "Suggested Answer: " + dianalee;
      if (senikka.val() !== "") {
        jemiah += "\nComments: " + senikka.val();
      }
    } else {
      senikka = $("#Feedback");
      jemiah = senikka.val();
      if (jemiah === "") {
        return;
      }
    }
    ;
    senikka.val("");
    dazhaun.val("");
    $.ajax({url: "/Lib_PHP/acellusEngine.php", global: false, type: "POST", data: {FunctionType: "submitProblemFeedback", Feedback: jemiah, CourseID: CourseID, StepUID: StepUID, ProblemID: ProblemID, Type: jaileah}, dataType: "html", async: false, success: function (phinizy) {
      if (phinizy === "|$|http://www.acellus.com|$|") {
        var elviria = phinizy.split("|$|");
        redirect = elviria[1];
        alert("Your session has been logged out.");
        reDirect(redirect);
      }
    }, error: function () {}});
    $.fn.closeLightbox();
  } else {
    if (jaileah == null) {
      alert("You forgot to select an Issue");
    }
  }
}
function checkifQSubmit(kanalu) {
  if (kanalu.keyCode === 13) {
    askQuestion();
  }
}
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (shemaka, tysa) {
    var coleston = this.toString();
    if (typeof tysa !== "number" || !isFinite(tysa) || Math.floor(tysa) !== tysa || tysa > coleston.length) {
      tysa = coleston.length;
    }
    ;
    tysa -= shemaka.length;
    var ilyes = coleston.lastIndexOf(shemaka, tysa);
    return ilyes !== -1 && ilyes === tysa;
  };
}
