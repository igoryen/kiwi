var Mei = (function (name) {return name;}(Mei || {}));

Mei.Tabs = (function () {

    
    var tabLinks = new Array(); // to hold the tab link elements
    var contentDivs = new Array(); // to hold the content divs:
    var curSongEngNav = new Array();
    var curSongRusNav = new Array();
    var selectedId = "";

    var activateSongParts = function (curSongLangNav) {
        console.log("13: " + curSongLangNav[0].children.length);
        // console.log("in activateSongParts(): curSongLangNav[0].className: " + curSongLangNav[0].className);
        // console.log("in activateSongParts(): curSongLangNav.length: " + curSongLangNav.length);

        var curSongLangNavParts = curSongLangNav[0].children;
        console.log("14: " + curSongLangNavParts.length);

        for (var n = 0; n < curSongLangNavParts.length; n++){
            //console.log("16: " + curSongLangNavParts[n].className);
            curSongLangNavParts[n].onclick = showSongPart(curSongLangNavParts[n]);
        }
        //console.log("18: " + curSongLangNavParts.length);

        // for (var i = 0; i < curSongLangNav.length; i++) {
        //     //curSongLangNav[i].onclick = showSongPart(curSongLangNav);
        // }
    }

    var showSongPart = function (part) {
        // var curSong = getHash( this.getAttribute('href') );
        console.log("curSong: " + selectedId);
        console.log("27: " + part.className + " showing");
        part.className = part.className + " showing";
        // console.log("31: " + this.className);

    }
    var hideSongParts = function (selectedId) {
        var selectedSong = document.getElementById(selectedId);
        //selectedSong.style.backgroundColor = "yellow";
        var curSongParts = selectedSong.getElementsByClassName('song-part-display');
        // console.log(curSongNav[0]);
        // curSongNav[0].style.backgroundColor = "green";
        curSongRusParts = curSongParts[0].getElementsByClassName('ru');
        console.log(curSongRusParts[0]);
        // curSongRusNav[0].style.backgroundColor = "blue";
        curSongEngParts = curSongParts[0].getElementsByClassName('en');
        // curSongEngNav[0].style.backgroundColor = "gray";
        for (var r = 0; r < curSongRusParts.length; r++) {
            console.log("49: " + r.className);
            r.className = r.className + " hidden";
        }
    }
    // showTab() is anonclick event handler
    // it will be attached to each of the tab links.
    // display a clicked tab's content and highlight the tab.
    // Call it whenever a tab link is clicked.
    // Highlight the selected tab and show the associated content div.
    // Dim all other tabs and hide all other content divs:
    // When a tab is clicked, display the current tab content,
    // hides all other tab content divs.
    // highlight the clicked tab and dim the other tabs.
    var showTab = function () {
        // A 'selected element' is the element whose ID is in the URL (e.g. #lexus)
        // Extract the ID of the selected element from the clicked link's href="..." attribute and store it in selectedId.
        selectedId = getHash( this.getAttribute('href') );

        

        // Highlight the selected tab, and dim all others.
        // Also show the selected content div, and hide all others.
        // loop through all the IDs
        for ( var id in contentDivs ) {
            // For the selected ID
            if ( id == selectedId ) {
                // highlight the corresponding tab, add the 'selected' class to the elt with the selected ID
                tabLinks[id].className = 'selected';
                // show the content <div>, i.e. do: class="tabContent"
                contentDivs[id].className = 'tabContent';
            } // for all other IDs it dims the tab and hides the content div.
            else {
                tabLinks[id].className = '';
                // i.e. do: i.e. do: class="tabContent hide"
                contentDivs[id].className = 'tabContent hide';
            }
        }

        // HIDING SONG PARTS
        var selectedSong = document.getElementById(selectedId);

        //selectedSong.style.backgroundColor = "yellow";
        var curSongParts = selectedSong.getElementsByClassName('song-part-display');
        console.log("89: " + curSongParts[0].className);
        // curSongNav[0].style.backgroundColor = "green";

        // SELECT THE CURRENT SONG'S RUSSIAN PARTS
        var curSongRusSection = curSongParts[0].getElementsByClassName('ru');
        // console.log("95: " + (curSongRusSection[0].children).length);
        var curSongRusSectionParts = curSongRusSection[0].children;
        console.log("99: " + curSongRusSectionParts.length);
        //curSongRusNav[0].style.backgroundColor = "purple";

        // SELECT THE CURRENT SONG'S ENGLISH PARTS
        var curSongEngSection = curSongParts[0].getElementsByClassName('en');
        var curSongEngSectionParts = curSongEngSection[0].children;
        console.log("91: " + curSongEngSectionParts.length);


        // ACTIVATE THE CURRENT SONG'S RUSSIAN SECTION'S PARTS
        // curSongEngNav[0].style.backgroundColor = "gray";
        for (var r = 0; r < curSongRusSectionParts.length; r++) {
            console.log("49: " + curSongRusSectionParts[r].nodeName + " " + curSongRusSectionParts[r].className);
            curSongRusSectionParts[r].className = curSongRusSectionParts[r].className + " hidden";
            // console.log("113: " + )
        }

        // ACTIVATE THE CURRENT SONG'S ENGLISH SECTION'S PARTS
        for (var e = 0; e < curSongEngSectionParts.length; e++) {
            console.log("49: " + curSongEngSectionParts[e].nodeName + " " + curSongEngSectionParts[e].className);
            curSongEngSectionParts[e].className = curSongEngSectionParts[e].className + " hidden";
            // console.log("113: " + )
        }


        // assign onclick event handlers to song parts within this selectedId
        console.log("selected song: " + selectedId);
        var selectedSong = document.getElementById(selectedId);
        selectedSong.style.backgroundColor = "yellow";
        var curSongNav = selectedSong.getElementsByClassName('song-part-nav');
        // console.log(curSongNav[0]);
        curSongNav[0].style.backgroundColor = "green";
        curSongRusNav = curSongNav[0].getElementsByClassName('ru');
        console.log("132: " + curSongRusNav[0].className);
        curSongRusNav[0].style.backgroundColor = "blue";
        curSongEngNav = curSongNav[0].getElementsByClassName('en');
        curSongEngNav[0].style.backgroundColor = "gray";
        // console.log("L74: " + (curSongEngNav[0].children).length);
        // for (var j=0; j < (curSongEngNav[0].children).length; j++) {
        //     console.log("L75: " + curSongEngNav[0].childNodes[j].nodeName);
        // }

        activateSongParts(curSongRusNav);
        activateSongParts(curSongEngNav);



        // Stop the browser following the link
        // to prevent the browser from following the clicked link and adding the link to the browser history.
        return false;
    };

    // a helper function
    // retrieves the first child of a given element that has a given tag name.
    // returns the first child of a specified element that matches a specified tag name
    // retrieve the a (link) element inside each list item in the tabs list.
    var getFirstChildWithTagName = function ( element, tagName ) {
        // loop through the child nodes of element
        for ( var i = 0; i < element.childNodes.length; i++ ) {
            // until/when you find a node that matches tagName.
            if ( element.childNodes[i].nodeName == tagName )
                // return the node.
                return element.childNodes[i];
        }
    };

    // a helper function
    // takes a URL and returns the part of the URL that appears after the hash (#) symbol.
    // returns the portion of a URL after any hash symbol
    var getHash = function ( url ) {
        var hashPos = url.lastIndexOf ( '#' );
        return url.substring( hashPos + 1 );
    };

    // to sets up the tabs
    var init = function () {
        // IG.Log.debug("in tabs.js init()");

        // Grab the tab links and content divs from the page
        var tabListItems = document.getElementById('tabs').childNodes;
        // loop through all the <li> elements in the tab`s unordered list.
        
        for ( var i = 0; i < tabListItems.length; i++ ) {
            
            //The link element is then stored by ID in the tabLinks array, and the content div is stored by ID in the contentDivs array.

            // For each li element,
            if ( tabListItems[i].nodeName == "LI" ) {
                // retrieve the <a> link element inside (calling the getFirstChildWithTagName() helper function to )
                var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
                // extract the part of the link's URL after the hash; this is the ID of the corresponding content <div>
                var id = getHash( tabLink.getAttribute('href') );
                // store the <a> by ID in the 'tabLinks' array
                tabLinks[id] = tabLink;
                // store the content <div> by ID in the 'contentDivs' array.
                contentDivs[id] = document.getElementById( id );
            }
        };

        // Assign onclick events to the tab links, and
        // highlight the first tab
        var i = 0;

        for ( var id in tabLinks ) {
            // assign showTab() to each tab link (an onclick event handler function)
            tabLinks[id].onclick = showTab;
            
            tabLinks[id].onfocus = function() {
                this.blur()
            };
            // set tab 1 CSS class to 'selected' (highlight it)
            if ( i == 0 ){
                tabLinks[id].className = 'selected';
            }
                
            i++;
        };

        
        var i = 0;
        // set each div's CSS class (the first) to 'tabContent hide'.
        // i.e. hide all content divs except
        for ( var id in contentDivs ) {
            if ( i != 0 ) {
                // console.log(contentDivs[id]);
                contentDivs[id].className = 'tabContent hide';
                // console.log(contentDivs[id]);
            } 
                
            i++;
        };
    };

    return {
        init : init
    }

})();

window.onload = function() {
    //IG.Log.debug("document is ready!");
    Mei.Tabs.init();
};