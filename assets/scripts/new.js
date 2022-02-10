  setInterval(myTime, 1000);

  function myTime() {
      let d = new Date();
      let hour = d.getHours();
      let min = d.getMinutes();
      let sec = d.getSeconds();
      let am_pm = "AM";

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      let day = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();


      if (hour > 12) {
          hour -= 12;
          am_pm = " PM"
      }
      let currentTime = hour + " : " + min + " " + am_pm;
      document.getElementById("time")
          .innerHTML = currentTime;
      let currentDay = month + "  " + day + " , " + year;
      document.getElementById("date")
          .innerHTML = currentDay;

  }