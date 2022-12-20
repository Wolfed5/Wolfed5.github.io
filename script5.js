

                    function myFunction() {
                        var x = document.getElementById("Sol");
                        if (x.style.display === "block") {
                          x.style.display = "none";
                        } else {
                          x.style.display = "block";
                        }
                    }

  function addreg()
  {
    this._name = document.getElementById("name").value;
    this._phone = document.getElementById("phone").value;
    this._Email = document.getElementById("Email").value;
    this._Lesson = document.getElementById("Lesson").value;
    this._datarog = document.getElementById("datarog").value;
    this._Sol = document.getElementById("Sol").value;
      localStorage.setItem("flag",true);
      localStorage.setItem("sil1",this._name);
      localStorage.setItem("sil2",this._phone);
      localStorage.setItem("sil3",this._Email);
      localStorage.setItem("sil4",this._Lesson);
      localStorage.setItem("sil5",this._datarog);
      localStorage.setItem("sil6",this._Sol);
      window.location = "send_21.html";
  }
