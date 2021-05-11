const $verticalNav = $('<div class="vertical-nav" />');


// ****************************** Custom Hamburger Menu ************************************
function HamburgerObserver(mutations, observer){
  const $button = $('button[data-action="toggle-drawer"]')

  if ($button.length) {
    observer.disconnect();
    $button.empty()

    const isActive = $('body').hasClass('drawer-open-left') ? "is-active" : "";
    $button.addClass(`hamburger hamburger--elastic ${isActive}`)

    $button.append(
      $('<span/>', {class: 'hamburger-box'}).append(
        $('<span/>', {class: 'hamburger-inner'})
      )
    )

    $button.on('click', function(){
      $button.toggleClass('is-active')
    })

    $button.appendTo($verticalNav);
  }
}

new MutationObserver(HamburgerObserver)
  .observe(document.documentElement, {childList: true, subtree: true})

// ************************************* Move VIP list items to vertical nav *****************************

function removeTextAndShit(dataKey){
    $listItem = $(`.list-group-item[data-key="${dataKey}"]`);

    $icon = $listItem.find('.icon');
    $listItem.empty()

    // $a = $('<a/>', {href: $listItem.attr('href')});
    // $a.append($icon);

    $listItem.remove();
    $listItem.append($icon);
    $listItem.removeClass("list-group-item list-group-item-action")

    $el = $('<div/>', {class: "vertical-nav-element"}).append($listItem)
    return $el;
}

function navDrawerObserver(mutations, observer){
    $navDrawer = $('#nav-drawer');
    if ($navDrawer.length) {
        observer.disconnect();
        const dataKeysGlobal = ["myhome", "home", "calendar", "privatefiles"];
        const dataKeysCourse = ["coursehome","participants", "badgesview", "competencies", "grades"];

        $verticalNav.append('<div class="spacer" />')
        $verticalNav.append(dataKeysGlobal.map(removeTextAndShit))
        $verticalNav.append('<div class="spacer" />')
        $verticalNav.append(dataKeysCourse.map(removeTextAndShit));
        $navDrawer.append($verticalNav);
  }
}

new MutationObserver(navDrawerObserver)
    .observe(document.documentElement, {childList: true, subtree: true})