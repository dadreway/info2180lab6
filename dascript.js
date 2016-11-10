"use strict";
        
        function GetDocument(fullSearch)
        {
            var lookup = document.getElementById("word").value.toLowerCase();
            var tochange = document.getElementById("result");
            var httprequest = new XMLHttpRequest();
            
            httprequest.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                       XML(this,fullSearch,lookup); 
                }
            };
            httprequest.open("GET", "request.php", true);
            httprequest.send();
        }
        
        function XML(doc, fullSearch ,lookup)
        {
            var tochange = document.getElementById("result");
            var file = doc.responseXML;
            var tags = file.getElementsByTagName("definition");
            var notlocated = true;
            var definitions = "<ol>";
            
            if (fullSearch)
            {
                for(var i = 0; i<tags.length; i++)
                {
                    definitions += "<li>" + "<h3>" + tags[i].getAttributeNode("name").value + "</h3>" +
                    "<p>" + tags[i].childNodes[0].nodeValue + "</p>" +      
                    "<p> - " + tags[i].getAttributeNode("author").value + "</p>" + "</li>"; 
                }
                definitions+="</ol>";
                tochange.innerHTML = definitions;
            }
        
        else
        {
            for( i = 0; i<tags.length; i++)
            {
                if (tags[i].getAttributeNode("name").value.toLowerCase() == lookup)
                {
                    tochange.innerHTML  = "<ol><li>" + "<h3>" + tags[i].getAttributeNode("name").value + "</h3>" + 
                "<p>" + tags[i].childNodes[0].nodeValue + "</p>" +                             
                "<p> - " + tags[i].getAttributeNode("author").value + "</p>" + 
                "</li></ol>";
                notlocated = false;
                break;
                }
            }
            if(notlocated)
            {
                tochange.innerHTML = "<h3>No Results for: '" + lookup + "'found </h3>";
            }
        }
        }
