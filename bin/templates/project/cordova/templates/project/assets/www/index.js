(function() {
    window.addEventListener('load', function() {
        document.getElementById('api-intro').style.display = 'block';
        
        var showApi = function(e) {
            var apiId = this.id;
            var divs = document.getElementsByClassName('api-div');   
            for(var j=0; j<divs.length; j++) { 
                divs[j].style.display='none';
            }
            var apiEl = document.getElementById('api-' + apiId);
            apiEl.style.display = 'block';
            scroll(0,0);
        };
        // add click to each api name / div
        var apiList = document.getElementById('sidebar').getElementsByTagName('a');
        for(var i=0; i< apiList.length; i++) { 
            apiList[i].addEventListener('click', showApi, false);
        }

        var $select = document.getElementById('subheader').getElementsByTagName('select')[0];
        if ($select) {
            $select.addEventListener('change', function(e) {
                var api = this.options[this.selectedIndex].value;
                //alert("value: " + api);
                
                var divs = document.getElementsByClassName('api-div');   
                for(var j=0; j<divs.length; j++) { 
                    divs[j].style.display='none';
                }
                document.getElementById('api-' + api).style.display = 'block';
                
            }, false);
        } else { alert("no select here"); }
        
    }, false);
}());
