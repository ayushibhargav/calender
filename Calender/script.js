var resources=[
    // {
    //   id: 'a',
    //   title: 'Doctor A'
    // },
    // {
    //   id: 'b',
    //   title: 'Doctor B'
    // },  
    // {
    //     id: 'c',
    //     title: 'Doctor C'
    // } 
  
  ]; 
  // var  events= [
    // { 
    //   title: 'Dr.Anil', 
    //   start: '2023-12-29T10:30:00',
    //   end: '2023-12-29T11:30:00', 
    //   description:'meeeting',   
    //   resourceId :'a'
    // }, 
    // { 
    //     title: 'Dr.akash', 
    //     start: '2023-12-29T12:30:00',
    //     end: '2023-12-29T13:30:00',
    //     description:'meeeting',  
    //     resourceId :'b'
    //   }, 
    //   { 
    //     title: 'Dr.shekhar', 
    //     start: '2023-12-29T14:30:00',
    //     end: '2023-12-29T16:30:00',
    //     description:'meeeting',  
    //     backgroundColor: '#378006', 
    //     resourceId :'c'
    //   }
  // ];
  
  
  var calendarEl = document.getElementById("calendar");
  
  var calendar = new FullCalendar.Calendar(calendarEl, { 
  initialView: 'resourceTimeGridDay', 
  resources:resources, 
  allDaySlot:false, 
  slotMinTime:'10:00:00',   
  slotMaxTime:'20:00:00',
  // events:events, 
  eventColor: 'red',  
  editable:true,
  nowIndicator:true
  
  
  });  
  
  calendar.render(); 
  
  $('.btn-danger').click(a=>{
  var drId=$("#drId").val(); 
  var drName=$('#drName').val(); 
  var DoctorObj={
  id:drId,  
  title:drName
  
  } 
  calendar.addResource(DoctorObj);  
  });  
   
  
  $('.btn-success').click(a => {
    
    var PatName = $("#nm").val();
    var StartTime = $("#St").val();
    var EndTime = $('#Et').val();
    var PatMoblie = $('#mobile').val();
    var drId = $("#drId").val(); 
    var PatientObj = {
        title: PatName,
        start: StartTime,
        end:EndTime,
        description: PatMoblie,
        resourceId: drId 
      
    };
    calendar.addEvent(PatientObj); 
    console.log(PatientObj);
  });