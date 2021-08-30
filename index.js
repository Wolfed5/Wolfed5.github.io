var tags =[{mounth:"Январь"},
{mounth:"Февраль"},
{mounth:"Март"},
{mounth:"Апрель"},
{mounth:"Май"},
{mounth:"Июнь"},
{mounth:"Июль"},
{mounth:"Август"},
{mounth:"Сентябрь"},
{mounth:"Октябрь"},
{mounth:"Ноябрь"},
{mounth:"Декабрь"}];

var Chart_1 = [

];


var grid_data = [


];
var grid_data_2 = [


];



	webix.ready(function(){
	webix.ui({
			type:"line",
			container:"app",
            height:800,
            rows:[
    		{rows:[
            { view:"tabbar", multiview:true, value:"set", options:[
            { id:"svod", value:"Сводная панель", width: 200},
            { id:"channel", value:"Передаваемые данные", width: 200},
            { id:"sms", value:"Журнал SMS", width: 200 }]
    	    }]},

{
      animate:false, cells:[
      {id:"svod",
      rows:[{view:"label", label:"Звонки и SMS",align:"center"},

      {cols:[{
    view:"chart",
    type:"bar",
    value:"#sales#",
    color:"#f6960a",
    border:true,
    width: 700,
    xAxis:{
        title: "Месяцы",
        template: "#mounth#",
        lines: true
    },data:"tags",
    yAxis:{
        start:0,
        end:1000,
        step:100
    }},

    {
    view:"chart",
    type:"bar",
    value:"#sales#",
    color:"#f6960a",
    border:true,
    width: 700,
    xAxis:{
        template:"'#year#"
    },
    yAxis:{
        start:0,
        end:100,
        step:10
    }},

    ]},
    {view:"label", label:"Передаваемые показания",align:"center"},
        {
    view:"chart",
    type:"bar",
    Header:"Звонки",
    value:"#sales#",
    color:"#f6960a",
    border:true,
    width: 700,
    xAxis:{
        template:"'#year#"
    },
    yAxis:{
        start:0,
        end:1000,
        step:100
    }}

      ]},
      {id:"sms",
      rows:[]},

    	    {id:"channel",
            rows:[
            { view:"toolbar", id:"bar", elements:[
            { view:"button", value:"Экспортировать в Excel", width: 200},
            { view:"button", value:"Экспортировать для импорта", width: 300},
            { view:"button", value:"Обновить", width: 200 }]},

            { view:"datatable", id:"table",
            datatype:"xml",
            url:"tab.xml",
      scrollX:true,
      columns:[
        { id:"dt", header:"Дата и время" ,width: 200},
        { id:"n1", header:"Номер" ,width: 200},
        { id:"kanal", header:"Канал" ,width: 200},
        { id:"id_loc", header:"Идентификатор" ,width: 200},
        { id:"n2", header:"Номер" ,width: 200},
        { id:"adress", header:"Адрес" ,width: 200},
        { id:"yk", header:"УК" ,width: 200}
      ],
      data:grid_data,
      pager:"pager",
    },
    {
      view:"pager",
      id:"pager",
      size:10,
      group:100,
      template:"{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
    },
    {view:"label", label:"Показания",align:"center"},
                  {
      view:"datatable", id:"table2",
      datatype:"xml",
      url:"tab2.xml",
      scrollX:true,
      columns:[
        { id:"dt", header:"Дата и время" ,width: 200},
        { id:"tn", header:"Название счетчика" ,width: 200},
        { id:"ns", header:"Номер счетчика" ,width: 200},
        { id:"cod", header:"Код квитанции" ,width: 200},
        { id:"value", header:"Показание" ,width: 200}
      ],
      data:grid_data_2,
      pager:"pager2",

    },
    {
      view:"pager",
      id:"pager2",
      size:10,
      group:100,
      template:"{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
    }
            ]}
    	    ]},]

	});
	
});


