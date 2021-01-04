
    var BallX = 0;
    var BallY = 0;
    var MouseX = 0;
    var MouseY = 0;
    var VelX = 0;
    var VelY = 0;

    const docStyle = document.documentElement.style;
    const strength = 0.15;
    const drag = 0.15;

    document.addEventListener("mousemove", (event) => {

      MouseX = event.clientX;
      MouseY = event.clientY;
    });

    function DelayMotion(){

      var DistanceX = MouseX - BallX;
      DistanceX *= strength;
      VelX *= drag;
      VelX += DistanceX;

      BallX += VelX
      // console.log("DistanceX: " , DistanceX);
      // console.log("MouseX: " , MouseX);
      // console.log("BallX" , BallX);

      var DistanceY = MouseY - BallY;
      DistanceY *= strength;
      VelY *= drag;
      VelY += DistanceY;

      BallY += VelY

      docStyle.setProperty("--MouseX", BallX);
      docStyle.setProperty("--MouseY", BallY);

      docStyle.setProperty("--scale" , (VelX + VelY) * strength);

      requestAnimationFrame(DelayMotion);
    }

    DelayMotion();
