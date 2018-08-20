var app = function ()
{
    var el = document.getElementById("employees");
    var employee = ['pushpak','nitin','jaydeep','smith','yash'];
    var count = function(data)
    {
        var el = document.getElementById("counter");
        var name = "employee";
        if(data)
        {
            if(data > 1)
            {
                name = "employees";
            }
            el.innerHTML = data +" "+name;
        }
        else
        {
            el.innerHTML = 'NO '+name;
        }
    };
    var fetchAll = function()
    {
        var data = "";
        if(this.employee.length > 0)
        {
            for(var i = 0;i<this.employee.length;i++)
            {
                data += "<tr>";
                data += "<td>"+this.employee[i]+"</td>";
                data += "<td><button onclick=('app.edit("+ i +")'>Edit</button></td>";
                data += "<td><button onclick=('app.deletet("+ i +")'>Delete</button></td>";
                data += "</tr>";
            }
        }
        this.count(this.employee.length);
        return this.el.innerHTML = data;

    };
    addName = function()
    {
        var get = document.getElementById("add-text");
        var get_big = get.value;
        if(get_big)
        {
            this.employee.push(get_big.trim());
            
            el.value = '';
            
            this.fetchAll();
        }
    };
    var edit = function(i)
    {
        var el = document.getElementById('edit-name');
        el.value = this.employee[i];
        //
        //
        document.getElementById("saveEdit").onsubmit = function()
        {
            var take_employee = el.value;
            if(take_employee)
            {
                self.take_employee.splice(i,1,employee.trim());
                self.fetchAll();
                this.closeInput();
            }
        }
    };
    var deletet  = function(i)
    {
        this.employee.splice(i,1);
        this.fetchAll();
    };
    fetchAll();

    function closeInput()
    {
        document.getElementById('spoiler').style.display = 'none';
    }

}
