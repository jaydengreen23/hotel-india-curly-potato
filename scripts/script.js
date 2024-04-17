
   //Stores checkbox values
    var checkedCheckboxes = [];
    var sportsBoxes = [];
    var attractionBoxes = [];

     // Gets the restraunts for the city
      function updateCheckboxes() {
      var selection = document.getElementById("city").value;
      var checkboxContainer = document.getElementById("checkboxContainer");
      checkboxContainer.innerHTML = ''; // Clear existing checkboxes
    
      if (selection) {
        var items = getItemsForSelection(selection); // Get items based on the selection
        items.forEach(function(item) {
          var checkbox = document.createElement('input');
          var label = document.createElement('label');
          var lineBreak = document.createElement('br');
    
          checkbox.type = 'checkbox';
          checkbox.value = item;
          checkbox.name = 'items[]';
          label.textContent = item;
          label.appendChild(checkbox);
          
          //Event listener to checkbox to update checkedCheckboxes array
          checkbox.addEventListener('change', function() {
            if (this.checked) {
              checkedCheckboxes.push(this.value);
            } else {
              var index = checkedCheckboxes.indexOf(this.value);
              if (index !== -1) {
                checkedCheckboxes.splice(index, 1);
              }
            }
          });
    
          checkboxContainer.appendChild(label);
          checkboxContainer.appendChild(lineBreak);
        });
      }
    }
    //Restraunts
    function getItemsForSelection(selection) {
      var items = {
        NYC: ["L'Amico ", "Benoit ", "Kahlo ", "IHOP","Shanghai 21"],
        Atlanta: ["Antico Pizza", "Ray's in the City", "Fox Bros Bar-B-Q","Umi","Gunshow"],
        LA: ["N/Naka Japanese", "Kato Taiwainese", "Bavel Mediterranean","Providence Seafood","Republique French"],
        Miami: ["Zuma Miami", "Toro Toro","Bubba Gump Shrimp Co.","Crust","Pollos & Jarras"]
      };
      return items[selection] || [];
    }
    
    //Get the attractions for the city
      function updateAttractions() {
      var selection = document.getElementById("city").value;
      var attractionContainer = document.getElementById("attractionContainer");
      attractionContainer.innerHTML = ''; // Clear existing checkboxes
    
      if (selection) {
        var items = getAttractions(selection); // Get items based on the selection
        items.forEach(function(item) {
          var checkbox = document.createElement('input');
          var label = document.createElement('label');
          var lineBreak = document.createElement('br');
    
          checkbox.type = 'checkbox';
          checkbox.value = item;
          checkbox.name = 'items[]';
          label.textContent = item;
          label.appendChild(checkbox);
          
          checkbox.addEventListener('change', function() {
            if (this.checked) {
              attractionBoxes.push(this.value);
            } else {
              var index = attractionBoxes.indexOf(this.value);
              if (index !== -1) {
                attractionBoxes.splice(index, 1);
              }
            }
          });
    
          attractionContainer.appendChild(label);
          attractionContainer.appendChild(lineBreak);
        });
      }
    }
    //Attractions
    function getAttractions(selection) {
      var items = {
        NYC: ["Central Park","Empire State Building","Bronx Zoo"],
        Atlanta: ["World Of Coca-Cola","Georgia Aquarium","Six Flags Over Georgia"],
        LA: ["CelebrityTour", "Cruise", "Hollywood Sign Hike"],
        Miami: ["Miami Moonlit ATV Adventure: Explore Redland's Hidden Trails", "Speedboat Sightseeing Tour of Miami","Nature & Island Exploration on SUP/Kayak"]
      };
      return items[selection] || [];
    }
    //Get the sports for the city
      function updateSports() {
      var selection = document.getElementById("city").value;
      var sportsContainer = document.getElementById("sportsContainer");
      sportsContainer.innerHTML = ''; // Clear existing checkboxes
    
      if (selection) {
        var items = getSports(selection); // Get items based on the selection
        items.forEach(function(item) {
          var checkbox = document.createElement('input');
          var label = document.createElement('label');
          var lineBreak = document.createElement('br');
    
          checkbox.type = 'checkbox';
          checkbox.value = item;
          checkbox.name = 'items[]';
          label.textContent = item;
          label.appendChild(checkbox);
          
          checkbox.addEventListener('change', function() {
            if (this.checked) {
              sportsBoxes.push(this.value);
            } else {
              var index = sportsBoxes.indexOf(this.value);
              if (index !== -1) {
                sportsBoxes.splice(index, 1);
              }
            }
          });
    
          sportsContainer.appendChild(label);
          sportsContainer.appendChild(lineBreak);
        });
      }
    }
    //Attractions
    function getSports(selection) {
      var items = {
        NYC: ["$83 Baseball: Yankees (Friday)","$329 Basketball: Knicks(Saturday)","$352 Hockey: Rangers(Saturday)"],
        Atlanta: ["$144 Soccer: Altana United FC(Saturday)","$163 Baseball: Atlanta Braves (Saturday)","$586 Football: Altanta Hawks(Saturday)"],
        LA: ["$50 Baseball: Dodger(Friday)", "$50 Soccer: Saturday LA Football Club", "$103 Racing: ToyotaGrandPrix(Friday)"],
        Miami: ["$51 Baseball: Miami Hurricanes(Friday)", "$60 Baseball: Miami Hurricanes(Saturday)","$140 Soccer: Inter Miami CF(Saturday)"]
      };
      return items[selection] || [];
    }
    function unhide() {
      var hiddenText = document.getElementById("hidden");
      hiddenText.style.display = "block";
    }
    // Output the values of checked checkboxes
    function displayCheckedCheckboxes() {
      var output = document.getElementById("output");
      var selection = document.getElementById("city").value;
      var fname = document.getElementById("fname").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;

      output.innerHTML = fname +", you are going to: " + selection 
      +"! <br>You will be eating at: "+ checkedCheckboxes.join(", ") 
      + "<br>You will be enjoying these popular attrations: " 
      + attractionBoxes.join(", ") +"<br>You will be enjoying watching these sports: "
      +sportsBoxes.join(", ") + "<br> Your phone number is: "+ phone
      +". <br>Your email is: " + email + ".";
    }
    document.getElementById('fname').addEventListener('input', function() {
      var inputField = this;
      var errorMessage = document.getElementById('errorMessage');
      var inputValue = inputField.value;
      if (/[^a-zA-Z]/.test(inputValue)) {
          errorMessage.textContent = 'Only letters are allowed.';
          inputField.value = inputValue.replace(/[^a-zA-Z]/g, '');
      } else {
          errorMessage.textContent = '';
      }
  });
  document.getElementById('phone').addEventListener('input', function() {
    var inputField = this;
    var errorMessage = document.getElementById('errorMessageNum');
    var inputValue = phone.value;
    if (/[^0-9]/.test(inputValue)) {
      errorMessage.textContent = 'Only numbers are allowed.';
      inputField.value = inputValue.replace(/[^0-9]/g, '');
  } else {
      errorMessage.textContent = '';
  }
});