// 當網頁向下滑動 300px時才顯示 "返回頂部" 按鈕
   window.onscroll = function() {
       scrollFunction()
   };
    
   function scrollFunction() {
       console.log(121);
       if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
           document.getElementById("btnTop").style.display = "block";
      } else {
          document.getElementById("btnTop").style.display = "none";
      }
  }
   
  // 點擊按鈕，返回頂部
  function returnTop() {
      document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
  }