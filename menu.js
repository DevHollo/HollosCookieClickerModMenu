alert("Created by @.hollo. on Discord");
(function() {
    var modMenu = document.createElement("div");
    modMenu.id = "HollosModMenu";
    var modMenuStyle = `
      position: fixed;
      top: 10px;
      left: 10px;
      background-color: #ff6f00;
      border: 1px solid #ccc;
      padding: 5px;
      z-index: 9999;
    `;
    modMenu.style.cssText = modMenuStyle;
  
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    var closeButtonStyle = `
      background-color: #ff0000;
      color: #fff;
      border: none;
      padding: 5px 10px;
      margin-right: 5px;
      cursor: pointer;
    `;
    closeButton.style.cssText = closeButtonStyle;
    closeButton.onclick = function() {
      modMenu.style.display = "none";
    };
  
    function createButton(text, onclickFunction) {
      var button = document.createElement("button");
      button.textContent = text;
      var buttonStyle = `
        background-color: #00cf16;
        color: #fff;
        border: none;
        padding: 5px 10px;
        margin-right: 5px;
        cursor: pointer;
      `;
      button.style.cssText = buttonStyle;
      button.onclick = onclickFunction;
      return button;
    }
  
    var add_cookies_button = createButton("Add Cookies", function() {
      let cookies_to_add = prompt("How many cookies do you want to add?", "0");
      Game.cookies = Game.cookies + parseInt(cookies_to_add);
    });
  
    var set_cookies_button = createButton("Set Cookies", function() {
      let set_cookies_to = prompt("What do you want to set your cookies to?", "0");
      Game.cookies = parseInt(set_cookies_to);
    });
  
    var dev_menu_button = createButton("Dev Menu", function() {
      Game.OpenSesame(1);
    });
  
    var give_achievement_button = createButton("Give Achievement", function() {
      let achievement_to_give = prompt("What achievement do you want", "Wake and bake");
      Game.Achievements[`${achievement_to_give}`].won=1;
    });
  
    var spawn_golden_cookie_button = createButton("Spawn Golden Cookie", function() {
      var newShimmer = new Game.shimmer("golden");
      newShimmer.spawnLead=1;
    });
  
    var unlock_all_achievements_button = createButton("Unlock All Achievements", function() {
      Game.SetAllAchievs(1);
    });
  
    var unlock_all_upgrades_button = createButton("Unlock All Upgrades", function() {
      Game.SetAllUpgrades=1;
    });
  
    var add_lumps_button = createButton("Add Lumps", function() {
      let lumps_to_add = prompt("How many lumps do you want to add?", "0");
      Game.gainLumps(parseInt(lumps_to_add));
    });
  
    modMenu.appendChild(closeButton);
    modMenu.appendChild(add_cookies_button);
    modMenu.appendChild(set_cookies_button);
    modMenu.appendChild(add_lumps_button);
    modMenu.appendChild(spawn_golden_cookie_button);
    modMenu.appendChild(give_achievement_button);
    modMenu.appendChild(dev_menu_button);
    modMenu.appendChild(unlock_all_achievements_button);
    modMenu.appendChild(unlock_all_upgrades_button);
  
    document.body.appendChild(modMenu);
})();