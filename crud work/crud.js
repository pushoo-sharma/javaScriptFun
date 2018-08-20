var app = new function ()
{
    this.el = document.getElementById("employee");
    this.employee = ['pushpak','nitin','jaydeep','smith','yash'];
    this.count = function(data)
    {
        var el = document.getElementById('counter');
        var name = "employ";
        if(data){
            if(data > 1){
                name = "employ";
            }
            el.innerHTML = data + ' ' + name;
        }    
        else{
           el.innerHTML = 'No '+ name;     
        }
    };

    this.FetchAll= function()
    {
        var data='';
        if(this.employee.length > 0)
        {
            for(var i = 0;i<this.employee.length;i++)
            {
                data += '<tr>';
                data += '<td>' + this.employee[i] + '</td>';
                data += '<td><button onclick=("app.Edit('+ i +')">Edit</button></td>';
                data += '<td><button onclick=("app.Delete('+ i +')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.employee.length);
        return this.el.innerHTML = data;

    };
    this.AddName = function(){
        el = document.getElementById('add-name');
        // Get the value
        var employ = el.value;
        if (employ) 
        {
            // Add the new value
            this.employee.push(employ.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };
    this.Edit = function (item) 
    {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.employee[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() 
        {
            // Get value
            var employ = el.value;
            if (employ) 
            {
                // Edit value
                self.employ.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                closeInput();
            }
        }
    };

    this.Delete = function (item) 
    {
        // Delete the current row
        this.employee.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
    
    app.FetchAll();
    function closeInput() 
    {
        document.getElementById('spoiler').style.display = 'none';
    }
}