var Mei = (function (name) {return name;}(Mei || {}));

Mei.Tabs = (function () {

    
    var tabLinks = new Array(); // to hold the tab link elements
    var contentDivs = new Array(); // to hold the content divs:
    
    var showTab = function (e) {
        // A 'selected element' is the element whose ID is in the URL (e.g. #lexus)
        // Extract the ID of the selected element from the clicked link's href="..." attribute and store it in selectedId.
        var selectedId = getHash( this.getAttribute('href') );

        console.log("selected part: " + selectedId);
        //console.log("key pressed: " + event.key);
        
        //var key = e.keyCode();
        //console.log("key: " + key);
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
// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37:
//             alert('left');
//             break;
//         case 38:
//             alert('up');
//             break;
//         case 39:
//             alert('right');
//             break;
//         case 40:
//             alert('down');
//             break;
//     }
// };