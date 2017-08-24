$(document).ready(function() {
	var fullpage = $('#scroll-main').fullpage({
		sectionsColor: ['#42a5f5', '#4BBFC3', '#81c784', '#ff8a65', '#2196f3', '#4db6ac', '#f06292'],
		anchors: ['DataDiri', 'Pendidikan', 'Skill', 'Portofolio', 'Organisasi', 'Pelatihan', 'Kontak'],
		navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Data Diri', 'Pendidikan', 'Skill', 'Portofolio', 'Organisasi', 'Pelatihan', 'Kontak'],
    slidesNavigation: true,
	});

  // dataRoot : '/'
  var myMappedObject = [
        {
            "isSelected": "true",
            "taskTitle": "MI Condong",
            "taskSubTitle": "2000 - 2006",
            "assignDate": "01/01/2000",
            "taskShortDate": "2000",
            "taskDetails": "Tasikmalaya"
        },
        {
            "isSelected": "true",
            "taskTitle": "SMP Terpadu",
            "taskSubTitle": "2006 - 2009",
            "assignDate": "01/01/2006",
            "taskShortDate": "2006",
            "taskDetails": "Tasikmalaya"
        },
        {
            "isSelected": "true",
            "taskTitle": "SMA Terpadu",
            "taskSubTitle": "2009 - 2012",
            "assignDate": "01/01/2009",
            "taskShortDate": "2009",
            "taskDetails": "Tasikmalaya"
        },
        {
            "isSelected": "true",
            "taskTitle": "Universitas Komputer Indonesia",
            "taskSubTitle": "2012 - 2017",
            "assignDate": "01/01/2012",
            "taskShortDate": "2012",
            "taskDetails": "Bandung"
        },
        // {
        //     "isSelected": "true",
        //     "taskTitle": "",
        //     "taskSubTitle": "",
        //     "assignDate": "01/01/2017",
        //     "taskShortDate": "2009",
        //     "taskDetails": ""
        // },
  ];

  var jtLine = $('.myjtline').jTLine({
      callType: 'jsonObject',
      structureObj: myMappedObject,
      map: {
          "dataRoot": "/",
          "title": "taskTitle",
          "subTitle": "taskSubTitle",
          "dateValue": "assignDate",
          "pointCnt": "taskShortDate",
          "bodyCnt": "taskDetails"
      },
      onPointClick: function (e) {
          console.log(e);
      }
  });

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
  );

  // Progress Bar
  $('.pie_progress').asPieProgress({
    namespace: 'pie_progress'
  });
  // Example with grater loading time - loads longer
  $('.pie_progress--slow').asPieProgress({
    namespace: 'pie_progress',
    goal: 100,
    min: 0,
    max: 1000,
    speed: 200,
    easing: 'linear'
  });
  $('.pie_progress').asPieProgress('start');




  $("#portofolio-simdesa").animatedModal({
      modalTarget:'modal-portofolio-simdesa',
      animatedIn:'lightSpeedIn',
      animatedOut:'bounceOutDown',
      color:'#3498db',
      // Callbacks
      beforeOpen: function() {
          console.log("The animation was called");
      },           
      afterOpen: function() {
          console.log("The animation is completed");
      }, 
      beforeClose: function() {
          console.log("The animation was called");
      }, 
      afterClose: function() {
          console.log("The animation is completed");
      }
  });

  $("#portofolio-absensi").animatedModal({
    modalTarget:'modal-portofolio-absensi',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },           
    afterOpen: function() {
        
    }, 
    beforeClose: function() {
        console.log("The animation was called");
    }, 
    afterClose: function() {
        // $('#scroll-main').fullpage({'resetSliders'});
    }
  });

});
