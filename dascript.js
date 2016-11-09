"use strict";
        
        function GetDocument()
        {
            var lookup = document.getElementById("word").value.toLowerCase();
            var tochange = document.getElementById("result");
            var httprequest = new XMLHttpRequest();
            
            httprequest.onreadystatechange = function()
            {
                if (this.readyState === 4 && this.status == 200)
                {
                        tochange.innerHTML = this.responseText;
                }
            };
            httprequest.open("GET", "request.php?q="+lookup, true);
            httprequest.send();
        }