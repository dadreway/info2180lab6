"use strict";
        
        function GetDocument()
        {
            var lookup = document.getElementById("word").value.toLowerCae();
            var httprequest = new XMLHttpRequest();
            var tochange = document.getElementById("result");
            
            httprequest.onreadystatechange = function()
            {
                if (httprequest.readyState === httprequest.DONE)
                {
                    if(httprequest.status === 200)
                    {
                        tochange.innerHTML = httprequest.responseText;
                        
                    }
                }
            };
            httprequest.open("GET", "request.php?q="+lookup, true);
            httprequest.send();
        }