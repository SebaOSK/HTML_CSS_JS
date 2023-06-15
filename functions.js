 function saveFormData(event) {
      event.preventDefault(); // Spriječava slanje obrasca

      var id = document.getElementById("id").value;
      var title = document.getElementById("title").value;
      var author = document.getElementById("author").value;
      var published = document.getElementById("published").value;

      // Spremanje vrijednosti u localStorage
      localStorage.setItem("Id", id);
      localStorage.setItem("Title", title);
      localStorage.setItem("Author", author);
      localStorage.setItem("Published", published);

      // Resetiranje forme
      document.getElementById("inputForm").reset();

      //Prikaz poruke o uspješnom spremanju
      alert("Podaci su spremljeni u localStorage.");
    }
	
function clearFormData() {
  localStorage.removeItem("id");
  localStorage.removeItem("naziv");
  localStorage.removeItem("autor");
  localStorage.removeItem("godina");
  
  //Prikaz poruke o uspješnom brisanju
  alert("Podaci su uspješno obrisani iz localStorage-a.");
}

 






