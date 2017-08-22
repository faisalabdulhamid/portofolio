$(document).ready(function() {
	$('#scroll-main').fullpage({
		sectionsColor: ['#42a5f5', '#4BBFC3', '#81c784', '#ff8a65', '#2196f3', '#4db6ac', '#f06292'],
		anchors: ['DataDiri', 'Pendidikan', 'Skill', 'Portofolio', 'Organisasi', 'Pelatihan', 'Kontak'],
		menu: '#menu',
	});


           
            // dataRoot : '/'
            var myMappedObject = [
                  {
                      "isSelected": "true",
                      "taskTitle": "MI Condong",
                      "taskSubTitle": "2000 - 2006",
                      "assignDate": "01/01/2000",
                      "taskShortDate": "2000",
                      "taskDetails": ""
                  },
                  {
                      "isSelected": "true",
                      "taskTitle": "SMP Terpadu",
                      "taskSubTitle": "2006 - 2009",
                      "assignDate": "01/01/2006",
                      "taskShortDate": "2006",
                      "taskDetails": ""
                  },
                  {
                      "isSelected": "true",
                      "taskTitle": "SMA Terpadu",
                      "taskSubTitle": "2009 - 2012",
                      "assignDate": "01/01/2009",
                      "taskShortDate": "2009",
                      "taskDetails": ""
                  },
                  {
                      "isSelected": "true",
                      "taskTitle": "UNIKOM Bandung",
                      "taskSubTitle": "2012 - 2017",
                      "assignDate": "01/01/2012",
                      "taskShortDate": "2012",
                      "taskDetails": ""
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
});